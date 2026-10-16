"""Hand-made spacetime checks for payloads qiskit-paulice cannot ingest.

qiskit-paulice accepts only Clifford payloads terminated by measurement, so a
T-doped circuit cannot receive an automatic check. The brief allows two
responses for T-doped circuits: (a) report fidelity without checks, or (b)
design our own checks by hand. This module implements (b).

Validity criterion (Step 3 of the brief): a hand-made check is valid across a
T gate only if its Pauli acts as I or Z on that qubit at that point, because T
is diagonal and commutes with Z. Concretely we back-propagate the measured Z
to the start of the payload on the candidate wire and reject any target whose
wire is acted on by a non-diagonal gate (H, SX, SXDG) or is the target of a CX
(which would spread the Pauli onto the control). CZ, X, S, SDG, T and
CX-as-control preserve a Z-parity on the wire, so those wires stay admissible
even when a T gate lies inside the diagonal segment the check spans.

Detection, same as qiskit-paulice: the ancilla is prepared in |0>, one CX per
target XORS its computational bit into the ancilla, and the ancilla is measured
in the computational basis. Shots with a non-trivial (|1>) syndrome are
discarded. Scores come from Aer on the real circuit; nothing is substituted.
"""
from __future__ import annotations

import json
import math
from collections import defaultdict

from qiskit import QuantumCircuit, QuantumRegister, transpile
from qiskit_aer import AerSimulator

from src.experiment import (
    BASIS,
    count_2q,
    distribution_fidelity,
    ideal_distribution,
    measure_payload,
    noise_models,
    payload,
    payload_clbits,
    wilson_ci,
)

# Gates that preserve a Z-parity on a wire (in addition to any diagonal gates).
# H, SX, SXDG map Z off the wire; CX with this wire as *target* spreads it.
PRESERVING = {"z", "x", "s", "sdg", "t", "cz", "cx", "id"}


def hand_check_valid(qc_unmeasured: QuantumCircuit, qubit: int) -> bool:
    """True if a Z-parity check on ``qubit`` is I-or-Z at every cross-section.

    The measured Z is back-propagated through the *unmeasured* payload. A gate
    is invalid only when it transports the Pauli off the wire (H, SX, SXDG) or
    expands its support onto another qubit (CX with this wire as target).
    """
    for inst in reversed(qc_unmeasured.data):
        if qubit not in {qc_unmeasured.find_bit(b).index for b in inst.qubits}:
            continue
        name = inst.operation.name
        if name not in PRESERVING:
            return False
        if name == "cx" and qubit == qc_unmeasured.find_bit(inst.qubits[1]).index:
            return False
    return True


def hand_check_targets(qc_unmeasured: QuantumCircuit, n_data: int) -> list[int]:
    """Data-qubit indices on which a hand-made Z check is admissible."""
    return [q for q in range(n_data) if hand_check_valid(qc_unmeasured, q)]


def add_hand_check(qc_unmeasured: QuantumCircuit, targets) -> tuple[QuantumCircuit, int]:
    """Append one syndrome ancilla performing a parity check on ``targets``.

    Returns ``(protected_circuit_without_measurements, ancilla_index)``.
    Every target is validated; an invalid target raises ``ValueError`` so a
    hand-made check is never silently placed where the brief forbids it.
    """
    targets = list(dict.fromkeys(int(t) for t in targets))
    if not targets:
        raise ValueError("A hand-made check needs at least one target qubit")
    for t in targets:
        if t < 0 or t >= qc_unmeasured.num_qubits:
            raise ValueError(f"target qubit {t} is out of range")
        if not hand_check_valid(qc_unmeasured, t):
            raise ValueError(
                f"target qubit {t} has a non-diagonal gate (H/SX/SXDG or CX-target) on its wire: "
                "a Z check would not be valid across every T at that point"
            )
    qc = qc_unmeasured.copy()
    ancilla = qc.num_qubits
    qc.add_register(QuantumRegister(1, "syndrome"))
    for t in targets:
        qc.cx(t, ancilla)
    return qc, ancilla


def hand_experiment(n, depth, t_count, targets, shots, seed, p2, readout, circuit=None):
    """One measured baseline (unprotected) row + one hand-checked protected row.

    Mirrors the row schema of ``src.experiment.experiment_one`` so the audit and
    mission rules can consume it. The syndrome is the ancilla's measured bit.
    Pass ``circuit`` to measure a hand-built unmeasured circuit (tests); the
    default builds the family payload for ``n``/``depth``/``t_count``/``seed``.
    """
    if circuit is None:
        un = payload(n, depth, t_count, seed)
    else:
        un = circuit
        n = un.num_qubits
        depth = un.depth()
    ideal = ideal_distribution(un)
    cc = measure_payload(un, n)
    _, aer_noise = noise_models(p2, readout)
    sim = AerSimulator(method="automatic", noise_model=aer_noise)
    label = "-".join(map(str, targets)) if targets else "none"

    base_isa = transpile(cc, sim, basis_gates=BASIS, optimization_level=0)
    base_cb = payload_clbits(base_isa, n)
    base_counts = sim.run(base_isa, shots=shots, seed_simulator=seed).result().get_counts()
    base_f = distribution_fidelity(base_counts, base_cb, ideal)

    base_row = dict(
        n=n, depth_parameter=depth, actual_depth=cc.depth(), t_count=t_count,
        actual_t_count=int(un.count_ops().get("t", 0)),
        seed=seed, target_order="none", checks=0, shots=shots,
        accepted=shots, rejected=0, syndrome_histogram=json.dumps({"unprotected": shots}),
        check_support=json.dumps([]), check_qubits=json.dumps([]),
        retention=1.0, retention_ci_lo=1.0, retention_ci_hi=1.0,
        baseline_fidelity=base_f, conditional_fidelity=base_f,
        yield_fraction=base_f, yield_ratio=1.0, error_suppression=float("nan"),
        added_depth=0, original_depth=cc.depth(), protected_depth=cc.depth(),
        original_two_qubit=count_2q(cc), added_two_qubit=0,
        added_ancillas=0, noise_2q=p2, readout_noise=readout,
        metric="classical_output_Bhattacharyya_fidelity; utility=retention_times_fidelity",
    )

    prot_un, ancilla = add_hand_check(un, targets)
    prot_all = measure_payload(prot_un, prot_un.num_qubits)
    isa = transpile(prot_all, sim, basis_gates=BASIS, optimization_level=0)
    cb_map = {}
    for inst in isa.data:
        if inst.operation.name == "measure":
            cb_map[isa.find_bit(inst.qubits[0]).index] = isa.find_bit(inst.clbits[0]).index
    prot_cb = [cb_map[q] for q in range(n)]
    anc_cb = cb_map[ancilla]
    counts = sim.run(isa, shots=shots, seed_simulator=seed).result().get_counts()

    syndrome_hist = defaultdict(int)
    accepted = {}
    for bs, freq in counts.items():
        syndrome = "0" if bs[-(anc_cb + 1)] == "0" else "1"
        syndrome_hist[syndrome] += int(freq)
        if syndrome == "0":
            accepted[bs] = freq
    kept = sum(accepted.values())
    retention = kept / shots if shots else float("nan")
    r_lo, r_hi = wilson_ci(kept, shots)
    f = distribution_fidelity(accepted, prot_cb, ideal)
    yf = f * retention if math.isfinite(f) else 0.0
    yield_ratio = yf / base_f if base_f else float("nan")
    err_supp = (1 - base_f) / (1 - f) if (math.isfinite(f) and f < 1) else float("nan")

    prot_row = dict(
        n=n, depth_parameter=depth, actual_depth=prot_all.depth(), t_count=t_count,
        actual_t_count=int(un.count_ops().get("t", 0)),
        seed=seed, target_order=label, checks=len(targets), shots=shots,
        accepted=kept, rejected=shots - kept,
        syndrome_histogram=json.dumps(dict(syndrome_hist)),
        check_support=json.dumps(["I" if False else f"Z on q{t}" for t in targets]),
        check_qubits=json.dumps([ancilla]),
        retention=retention, retention_ci_lo=r_lo, retention_ci_hi=r_hi,
        baseline_fidelity=base_f, conditional_fidelity=f,
        yield_fraction=yf, yield_ratio=yield_ratio,
        error_suppression=err_supp,
        added_depth=prot_all.depth() - cc.depth(),
        original_depth=cc.depth(), protected_depth=prot_all.depth(),
        original_two_qubit=count_2q(cc),
        added_two_qubit=count_2q(prot_all) - count_2q(cc),
        added_ancillas=prot_all.num_qubits - n,
        noise_2q=p2, readout_noise=readout,
        metric="classical_output_Bhattacharyya_fidelity; utility=retention_times_fidelity",
    )
    return {"rows": [base_row, prot_row], "baseline": base_row, "protected": prot_row}