"""Quantum Sentinel: a reproducible benchmark of spacetime Pauli checks as an
accuracy-versus-throughput trade-off, with an observable-level fair test.

Run: python -m src.experiment --shots 4096 --ns 4 6 8 --depths 4 8 12 \
         --t-counts 0 1 2 3 4 --seeds $(python -c "print(*range(19,39))") \
         --p2 0.005 0.01 0.02 0.04 0.08

Design decisions that the manuscript depends on:

* One noise specification (``noise_models``) drives both the check-selection
  engine (qiskit-paulice) and the sampling engine (qiskit-aer). Both model
  2-qubit depolarising noise at rate ``p2`` on entangling gates and symmetric
  readout bit-flips at rate ``readout``. Single-qubit gates are ideal in both
  engines (documented simplification).

* ``yield_fraction = conditional_fidelity * retention`` is a defined game
  utility, NOT a count of correct shots or an estimator sampling rate. Its
  optimization objective is separate from observable estimation efficiency.

* The primary uncertainty is quantified across *circuit instances* (seeds) in
  ``analysis.py``. Per-shot uncertainty is reported as a Wilson interval for the
  retention only. No per-row shot-level bootstrap is used.

* The observable fair test (``shot_cost_ratio``) answers a different question
  from throughput: for a fixed target precision eps on a Z-type Pauli observable,
  how many attempted shots are needed for the post-selected estimator relative to
  the unprotected one, accounting for estimator bias? See ``shot_cost``.
"""
from __future__ import annotations

import argparse
import csv
import functools
import itertools
import json
import math
import pathlib
import platform
from collections import defaultdict

from src.search import candidate_orders

import numpy as np

from qiskit import ClassicalRegister, QuantumCircuit, transpile
from qiskit.quantum_info import Statevector
from qiskit_aer import AerSimulator
from qiskit_aer.noise import NoiseModel as AerNoiseModel
from qiskit_aer.noise import ReadoutError, depolarizing_error
from qiskit_paulice import add_pauli_checks
from qiskit_paulice.noise_models import NoiseModel as CheckNoiseModel

ROOT = pathlib.Path(__file__).resolve().parents[1]
RESULTS = ROOT / "results"

BASIS = ["h", "s", "sdg", "sx", "sxdg", "x", "z", "t", "cz", "cx", "measure", "reset"]
PAYLOAD_REG = "payload"
Z975 = 1.959963984540054
T_MAX = 4
OBS_EPS = 0.01  # target precision on an observable for the shot-cost fair test


def _brickwork(rng, qc, n, depth):
    for d in range(depth):
        for q in range(d % 2, n - 1, 2):
            qc.cz(q, q + 1)
        for q in range(n):
            if rng.integers(0, 2):
                qc.s(q)
            if rng.integers(0, 2):
                qc.sx(q)


def _slot_gate(n, i):
    """Deterministic non-diagonal gate in the T-gadget layer: H on slots 0..n-1,
    SX on slots n..2n-1 (two rotation axes break stabilizer symmetries)."""
    return "h" if i < n else "sx"


def _slot_qubit(n, i):
    return i % n


def _payload_with_T(n, depth, seed, t_slots):
    """Brickwork circuit followed by a fixed 2n-slot non-diagonal gadget layer; a T
    is inserted immediately before the slot gate for every index in ``t_slots``."""
    rng = np.random.default_rng(seed)
    qc = QuantumCircuit(n)
    qc.h(list(range(n)))
    _brickwork(rng, qc, n, depth)
    for i in range(2 * n):
        if i in t_slots:
            qc.t(_slot_qubit(n, i))
        getattr(qc, _slot_gate(n, i))(_slot_qubit(n, i))
    return qc


@functools.lru_cache(maxsize=None)
def t_gadget_qubits(n, depth, seed):
    """Ordered gadget slots for the T gates, chosen so every insertion is *provably*
    non-inert: a T is added only if an exact-statevector check confirms the ideal
    output distribution changes. A T is diagonal, so it only affects the measured
    distribution through a following non-diagonal gate; because stabilizer states
    have quantised Pauli expectations, single T rotations are sometimes invisible,
    which is why placement is chosen by verification rather than assumed.
    """
    seen = [ideal_distribution(_payload_with_T(n, depth, seed, frozenset()))]
    chosen, available = [], list(range(2 * n))
    for _ in range(T_MAX):
        for i in available:
            trial = frozenset(chosen + [i])
            dist = ideal_distribution(_payload_with_T(n, depth, seed, trial))
            # Require the cumulative set to differ from *every* earlier setting, not
            # just the previous one, so all T-count levels are mutually distinct.
            if all(not np.allclose(dist, prev) for prev in seen):
                chosen.append(i)
                available.remove(i)
                seen.append(dist)
                break
        else:
            break
    return tuple(chosen)


def payload(n=4, depth=4, t_count=0, seed=19):
    """Clifford brickwork base circuit with ``t_count`` non-inert T insertions.

    The base (``t_count=0``) is Clifford and carries the full deterministic gadget
    layer; the first ``t_count`` verified locations (``t_gadget_qubits``) receive a T
    immediately before their gadget gate. Adjacent settings therefore differ by
    exactly one T gate, and ``tests/test_metrics.py`` re-checks that the exact ideal
    distribution changes for every configuration used.
    """
    if t_count < 0 or t_count > T_MAX:
        raise ValueError(f"t_count must be between 0 and {T_MAX}")
    slots = t_gadget_qubits(n, depth, seed)
    if len(slots) < t_count:
        raise ValueError(f"Only {len(slots)} non-inert T slots for this circuit; requested {t_count}")
    chosen = slots[:t_count]
    return _payload_with_T(n, depth, seed, frozenset(chosen))


def ideal_distribution(unitary):
    """Exact Born distribution of the payload, from an exact statevector."""
    return np.abs(Statevector.from_instruction(unitary).data) ** 2


def noise_models(p2=0.01, readout=0.01):
    """One noise specification, two engines (selection + sampling)."""
    check_noise = CheckNoiseModel(gate_noise=p2, readout_noise=readout)
    aer_noise = AerNoiseModel()
    aer_noise.add_all_qubit_quantum_error(depolarizing_error(p2, 2), ["cz", "cx"])
    aer_noise.add_all_qubit_readout_error(
        ReadoutError([[1 - readout, readout], [readout, 1 - readout]])
    )
    return check_noise, aer_noise


def measure_payload(circuit, n):
    """Measure the payload qubits into a named register so payload bits are locatable."""
    qc = circuit.copy()
    creg = ClassicalRegister(n, PAYLOAD_REG)
    qc.add_register(creg)
    for q in range(n):
        qc.measure(q, creg[q])
    return qc


def payload_clbits(isa_circuit, n):
    """Classical-bit index carrying each payload qubit's measurement, read from the circuit."""
    q_to_cb: dict[int, int] = {}
    for inst in isa_circuit.data:
        if inst.operation.name == "measure":
            q = isa_circuit.find_bit(inst.qubits[0]).index
            cb = isa_circuit.find_bit(inst.clbits[0]).index
            q_to_cb[q] = cb
    return [q_to_cb[q] for q in range(n)]


def decode_payload(bitstring, cb_indices):
    """Decode payload bits from a (possibly spaced) Qiskit counts key. Qiskit prints the
    highest clbit index on the left, so clbit ``cb`` is ``s[-(cb+1)]``."""
    s = "".join(ch for ch in bitstring if ch in "01")
    value = 0
    for i, cb in enumerate(cb_indices):
        if s[-(cb + 1)] == "1":
            value |= 1 << i
    return value


def bhattacharyya_overlap(counts, cb_indices, ideal, normalise=True):
    """Squared Bhattacharyya overlap of the measured distribution with the ideal.

    ``counts`` may be accepted counts; ``normalise=True`` divides by the accepted
    total (a true probability-distribution overlap). ``normalise=False`` divides by
    the number of *attempted* shots, giving a sub-normalised histogram.
    """
    total = sum(counts.values())
    if total == 0:
        return float("nan")
    observed = np.zeros(len(ideal))
    for string, freq in counts.items():
        observed[decode_payload(string, cb_indices)] += freq
    observed = observed / (total if normalise else 1.0)
    scale = 1.0 if normalise else 1.0
    return float(np.square(np.sqrt(observed * ideal).sum())) * scale


def distribution_fidelity(counts, cb_indices, ideal):
    """Squared Bhattacharyya overlap (normalised). Classical output-distribution fidelity."""
    return bhattacharyya_overlap(counts, cb_indices, ideal, normalise=True)


def wilson_ci(k, n, z=Z975):
    """Wilson score interval for the retention (a binomial proportion)."""
    if n == 0:
        return float("nan"), float("nan")
    p = k / n
    denom = 1 + z * z / n
    center = (p + z * z / (2 * n)) / denom
    half = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / denom
    return max(0.0, center - half), min(1.0, center + half)


def z_observables(n):
    """A-priori Z-type Pauli observables (support = payload qubit indices)."""
    obs = {"parity": tuple(range(n))}
    if n >= 2:
        obs["zz01"] = (0, 1)
    return obs


def observable_from_distribution(dist, support):
    """Mean and single-shot variance of a Z-string on ``support`` under ``dist``."""
    idx = np.arange(len(dist))
    parity = np.zeros(len(dist), dtype=np.int64)
    for q in support:
        parity ^= (idx >> q) & 1
    eigen = 1 - 2 * parity
    mean = float((dist * eigen).sum())
    var = float(max(0.0, 1.0 - mean * mean))  # Z-string eigenvalues are +/-1
    return mean, var


def observable_from_counts(counts, cb_indices, ideal_len, support):
    dist = np.zeros(ideal_len)
    total = sum(counts.values())
    if total == 0:
        return float("nan"), float("nan")
    for string, freq in counts.items():
        dist[decode_payload(string, cb_indices)] += freq
    return observable_from_distribution(dist / total, support)


def shot_cost(bias, var, retention, eps=OBS_EPS):
    """Attempted-shot cost for the estimator mean to reach MSE eps^2.

    MSE(N) = bias^2 + var / (retention * N); solving MSE = eps^2 gives
    N = var / (retention * (eps^2 - bias^2)). Infinite if bias >= eps.
    """
    denom = eps * eps - bias * bias
    if denom <= 0 or retention <= 0:
        return float("inf")
    return var / (retention * denom)


def count_2q(circuit):
    return sum(1 for op in circuit.data if len(op.qubits) == 2)


def experiment_one(n, depth, t_count, target_order, shots, seed, p2, readout, max_checks=4):
    """One circuit instance: baseline plus every check count the library returns."""
    unitary = payload(n, depth, t_count, seed)
    ideal = ideal_distribution(unitary)
    cc = measure_payload(unitary, n)
    chooser_noise, aer_noise = noise_models(p2, readout)
    sim = AerSimulator(method="automatic", noise_model=aer_noise)

    base_isa = transpile(cc, sim, basis_gates=BASIS, optimization_level=0)
    base_cb = payload_clbits(base_isa, n)
    base_counts = sim.run(base_isa, shots=shots, seed_simulator=seed).result().get_counts()
    base_f = distribution_fidelity(base_counts, base_cb, ideal)

    obs = z_observables(n)
    obs_ideal = {name: observable_from_distribution(ideal, sup)[0] for name, sup in obs.items()}
    obs_base = {name: observable_from_counts(base_counts, base_cb, len(ideal), sup)
                for name, sup in obs.items()}

    candidates = [(0, None, cc)]
    if t_count == 0 and target_order:
        # qiskit-paulice accepts only Clifford payloads terminated by measurement.
        for k, checked in enumerate(
            add_pauli_checks(cc, list(target_order), chooser_noise, cost="gamma",
                             method="windowed", seed=seed)
        ):
            if k == 0:
                continue  # baseline is generated and measured independently above
            if k > max_checks:
                break
            candidates.append((k, checked, checked.circuit))

    label = "-".join(map(str, target_order)) if target_order else "none"
    rows = []
    for k, checked, qc in candidates:
        isa = transpile(qc, sim, basis_gates=BASIS, optimization_level=0)
        cb = payload_clbits(isa, n)
        counts = (
            base_counts
            if k == 0
            else sim.run(isa, shots=shots, seed_simulator=seed).result().get_counts()
        )
        syndrome_hist = defaultdict(int)
        if checked is not None:
            ps_fn = checked.get_postselection_method()
            accepted = {}
            for bs, freq in counts.items():
                syndrome = ''.join(str(int(x)) for x in ps_fn(bs))
                syndrome_hist[syndrome] += int(freq)
                if not any(int(x) for x in syndrome):
                    accepted[bs] = freq
        else:
            accepted = counts
            syndrome_hist['unprotected'] = int(sum(counts.values()))
        kept = sum(accepted.values())
        retention = kept / shots if shots else float("nan")
        r_lo, r_hi = wilson_ci(kept, shots)
        f = distribution_fidelity(accepted, cb, ideal)
        yield_fraction = f * retention if math.isfinite(f) else (0.0 if kept == 0 else float("nan"))
        yield_ratio = yield_fraction / base_f if base_f else float("nan")
        err_supp = (1 - base_f) / (1 - f) if (math.isfinite(f) and f < 1) else float("nan")

        row = dict(
            n=n, depth_parameter=depth, actual_depth=cc.depth(), t_count=t_count,
            actual_t_count=int(unitary.count_ops().get("t", 0)),
            seed=seed, target_order=(label if k else "none"), checks=k, shots=shots,
            accepted=kept, rejected=shots-kept,
            syndrome_histogram=json.dumps(dict(syndrome_hist)),
            check_support=json.dumps(list(checked.check_support) if checked else []),
            check_qubits=json.dumps(list(checked.check_qubits) if checked else []),
            retention=retention, retention_ci_lo=r_lo, retention_ci_hi=r_hi,
            baseline_fidelity=base_f, conditional_fidelity=f,
            yield_fraction=yield_fraction, yield_ratio=yield_ratio,
            error_suppression=err_supp,
            added_depth=qc.depth() - cc.depth(), original_depth=cc.depth(), protected_depth=qc.depth(),
            original_two_qubit=count_2q(cc), added_two_qubit=count_2q(qc) - count_2q(cc),
            added_ancillas=qc.num_qubits - n,
            noise_2q=p2, readout_noise=readout,
            metric="classical_output_Bhattacharyya_fidelity; utility=retention_times_fidelity",
        )
        # observable-level fair test
        for name, sup in obs.items():
            ideal_m = obs_ideal[name]
            b_mean, b_var = obs_base[name]
            p_mean, p_var = observable_from_counts(accepted, cb, len(ideal), sup)
            b_bias = abs(b_mean - ideal_m)
            p_bias = abs(p_mean - ideal_m)
            cost_b = shot_cost(b_bias, b_var, 1.0)
            cost_p = shot_cost(p_bias, p_var, retention)
            row[f"{name}_ideal"] = ideal_m
            row[f"{name}_bias_base"] = b_bias
            row[f"{name}_bias_prot"] = p_bias
            row[f"{name}_shotcost_ratio"] = (cost_p / cost_b) if cost_b > 0 and math.isfinite(cost_b) else float("nan")
        rows.append(row)
    return rows


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--shots", type=int, default=4096)
    ap.add_argument("--ns", type=int, nargs="+", default=[4, 6, 8])
    ap.add_argument("--depths", type=int, nargs="+", default=[4, 8, 12])
    ap.add_argument("--t-counts", type=int, nargs="+", default=[0, 1, 2, 3, 4])
    ap.add_argument("--seeds", type=int, nargs="+", default=list(range(19, 39)))
    ap.add_argument("--p2", type=float, nargs="+", default=[0.005, 0.01, 0.02, 0.04, 0.08],
                    help="two-qubit depolarising rates (phase-diagram axis)")
    ap.add_argument("--readout", type=float, default=0.01, help="symmetric readout bit-flip rate r")
    ap.add_argument("--max-checks", type=int, default=4)
    ap.add_argument("--max-orders", type=int, default=24,
                    help="deterministic balanced sampling of ordered target permutations")
    ap.add_argument("--exhaustive", action="store_true",
                    help="enumerate every ordered target subset in the defined target space")
    args = ap.parse_args()
    if any(n < 2 or n > 10 for n in args.ns):
        ap.error("each n must satisfy 2 <= n <= 10 for exact references")
    if args.shots <= 0:
        ap.error("shots must be positive")
    if args.max_checks < 1 or args.max_orders < 1:
        ap.error("max-checks and max-orders must be >= 1")
    if any(t < 0 or t > T_MAX for t in args.t_counts):
        ap.error(f"T count must be between 0 and {T_MAX}")
    if not (0 <= args.readout < 0.5):
        ap.error("readout rate must be in [0, 0.5)")

    RESULTS.mkdir(exist_ok=True)
    rows = []
    search_details = {}
    skipped = []
    for n, p2, seed, depth, t_count in itertools.product(
        args.ns, args.p2, args.seeds, args.depths, args.t_counts
    ):
        if t_count:
            orders = [()]
        else:
            orders, coverage = candidate_orders(n, args.max_checks, args.max_orders, args.exhaustive)
            search_details[str(n)] = coverage
        for order in orders:
            print(f"n={n} p2={p2} seed={seed} depth={depth} T={t_count} "
                  f"targets={order or 'none'} r={args.readout}", flush=True)
            # A circuit instance may not offer enough *provably non-inert* T slots
            # for the requested T count; such a combination is skipped and recorded
            # rather than silently substituted, so the dataset stays honest.
            try:
                rows.extend(experiment_one(n, depth, t_count, order, args.shots,
                                           seed, p2, args.readout, args.max_checks))
            except ValueError as exc:
                skipped.append({"n": n, "depth": depth, "t_count": t_count,
                                "seed": seed, "noise_2q": p2, "reason": str(exc)})
                print(f"SKIP n={n} depth={depth} T={t_count} seed={seed}: {exc}", flush=True)
    if not rows:
        raise RuntimeError("No experiments generated")
    # The unprotected reference is independent of target order. Keep it once per
    # circuit instance to avoid pseudoreplication and duplicate game strategies.
    seen = set()
    unique = []
    for row in rows:
        identity = (row["n"], row["depth_parameter"], row["t_count"],
                    row["seed"], row["noise_2q"], row["target_order"], row["checks"])
        if identity not in seen:
            seen.add(identity)
            unique.append(row)
    rows = unique

    output = RESULTS / "runs.csv"
    with output.open("w", newline="") as out:
        writer = csv.DictWriter(out, fieldnames=rows[0].keys())
        writer.writeheader()
        writer.writerows(rows)

    import importlib.metadata as md
    meta = {
        "parameters": vars(args),
        "versions": {name: md.version(name) for name in ["qiskit", "qiskit-aer", "qiskit-paulice"]},
        "python": platform.python_version(),
        "noise_spec": "2-qubit depolarising p2 on cz/cx + symmetric readout bit-flip r; "
                      "single-qubit gates ideal (both selection and sampling engines)",
        "search_scope": "ordered target subsets of the defined payload/algorithm, with transparent coverage; no claim of global check-placement optimum",
        "search_coverage_by_width": search_details,
        "skipped_combinations": skipped,
        "organizer_noise_verified": False,
        "metrics": {
            "conditional_fidelity": "normalised squared Bhattacharyya overlap of postselected distribution with ideal",
            "yield_fraction": "retention * conditional_fidelity: defined composite utility, not probability of correct shots",
            "yield_ratio": "composite utility relative to unprotected baseline; >1 means utility improvement, not literal throughput",
            "error_suppression": "(1-baseline_fidelity)/(1-conditional_fidelity)",
            "shot_cost_ratio": "attempted-shot cost of postselected estimator / baseline estimator for "
                               f"MSE eps^2={OBS_EPS**2} on a Z-type observable, including bias",
        },
        "uncertainty": "primary intervals are computed across circuit instances (seeds) in src.analysis; "
                       "retention carries a per-shot Wilson interval",
    }
    (RESULTS / "provenance.json").write_text(json.dumps(meta, indent=2))
    print(f"Wrote {len(rows)} rows to {output}")


if __name__ == "__main__":
    main()
