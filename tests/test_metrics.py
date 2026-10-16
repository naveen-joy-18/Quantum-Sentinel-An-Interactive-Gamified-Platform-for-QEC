import numpy as np
import pytest
pytest.importorskip("qiskit")
pytest.importorskip("qiskit_aer")
pytest.importorskip("qiskit_paulice")

from src.experiment import (
    decode_payload,
    distribution_fidelity,
    ideal_distribution,
    noise_models,
    observable_from_distribution,
    observable_from_counts,
    payload,
    measure_payload,
    payload_clbits,
    shot_cost,
    t_gadget_qubits,
    wilson_ci,
    experiment_one,
)
from qiskit import transpile
from qiskit_aer import AerSimulator
from qiskit_paulice import add_pauli_checks


def test_bit_order_named_register():
    # "1 010" -> s = "1010"; cb index k reads s[-(k+1)].
    assert decode_payload("1 010", [3]) == 1   # s[-4] = 1 -> low bit
    assert decode_payload("1 010", [2]) == 0   # s[-3] = 0
    assert decode_payload("1 010", [1, 3]) == 3  # lower of the two -> weight 1, higher -> weight 2
    assert decode_payload("11 111", [2, 1, 0]) == 7


def test_identical_distribution_fidelity_is_one():
    counts = {"00": 50, "11": 50}
    ideal = np.array([0.5, 0, 0, 0.5])
    # clbit 1 = high payload bit, clbit 0 = low payload bit
    assert abs(distribution_fidelity(counts, [1, 0], ideal) - 1) < 1e-12


def test_fidelity_scale_invariant():
    ideal = np.array([0.25, 0.25, 0.25, 0.25])
    a = distribution_fidelity({"0 0": 16, "0 1": 16, "1 0": 16, "1 1": 16}, [1, 0], ideal)
    assert abs(a - 1) < 1e-12


def test_known_payload_normalised():
    c = payload(3, 2, 0, 19)
    assert c.num_qubits == 3
    assert abs(ideal_distribution(c).sum() - 1) < 1e-12


def test_t_gate_family_is_not_inert():
    """Interleaved T gates must change the measured distribution (regression guard)."""
    base = ideal_distribution(payload(4, 3, 0, 19))
    for t in (1, 2, 4):
        assert not np.allclose(base, ideal_distribution(payload(4, 3, t, 19)))


def test_payload_bits_located_from_circuit():
    n = 4
    cc = measure_payload(payload(n, 2, 0, 19), n)
    sim = AerSimulator()
    isa = transpile(cc, sim, basis_gates=["h", "s", "sdg", "sx", "sxdg", "x", "z", "cz", "cx", "measure"],
                    optimization_level=0)
    cb = payload_clbits(isa, n)
    assert sorted(cb) == list(range(n))


def test_postselection_accepts_noiseless_checked_outcomes():
    n = 4
    cc = measure_payload(payload(n, 3, 0, 19), n)
    chooser, _ = noise_models(0.01, 0.01)
    checked = list(add_pauli_checks(cc, [0, 1, 2], chooser, cost="gamma",
                                    method="windowed", seed=19))
    checked_circuit = checked[-1]
    sim = AerSimulator()  # noiseless sampling: syndrome must be trivially zero
    isa = transpile(checked_circuit.circuit, sim, basis_gates=["h", "s", "sdg", "sx", "sxdg",
                                                               "x", "z", "t", "cz", "cx", "measure"],
                    optimization_level=0)
    counts = sim.run(isa, shots=512, seed_simulator=1).result().get_counts()
    ps = checked_circuit.get_postselection_method()
    assert all(not ps(s).any() for s in counts)


def test_wilson_ci_brackets_point_estimate():
    lo, hi = wilson_ci(85, 100)
    assert lo < 0.85 < hi and 0 <= lo and hi <= 1


def test_experiment_one_end_to_end():
    rows = experiment_one(4, 3, 0, (0, 1), shots=1024, seed=19, p2=0.01, readout=0.01,
                          max_checks=2)
    baseline = [r for r in rows if r["checks"] == 0][0]
    protected = [r for r in rows if r["checks"] > 0]
    assert baseline["retention"] == 1.0
    assert baseline["yield_ratio"] == pytest.approx(1.0)
    assert protected and all(r["added_two_qubit"] >= 2 for r in protected)
    assert all(0 <= r["retention"] <= 1 for r in rows)
