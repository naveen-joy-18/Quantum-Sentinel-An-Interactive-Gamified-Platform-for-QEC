"""Hand-made I/Z-aligned parity checks across T-doped payloads (brief Step 3, option b).

A hand-made check is valid across a T gate only if its Pauli acts as I or Z on
that qubit at that point, because T is diagonal and commutes with Z. These tests
prove the validity engine and the post-selection pipeline on circuits where a
diagonal run exists, and prove the honesty of the (default) "report fidelity
without checks" arm on payloads whose gadget layer ends every wire in H/SX.
"""
from qiskit import QuantumCircuit

from src.checks import add_hand_check, hand_check_targets, hand_check_valid, hand_experiment


def test_z_check_is_valid_across_diagonal_run():
    qc = QuantumCircuit(1)
    qc.t(0)
    qc.s(0)
    assert hand_check_valid(qc, 0) is True


def test_non_diagonal_gate_invalidates_the_wire():
    qc = QuantumCircuit(1)
    qc.t(0)
    qc.sx(0)
    assert hand_check_valid(qc, 0) is False


def test_cx_target_spreads_the_pauli_and_is_invalid():
    qc = QuantumCircuit(2)
    qc.t(0)
    qc.cx(0, 1)
    assert hand_check_valid(qc, 0) is True  # CX control keeps Z
    assert hand_check_valid(qc, 1) is False  # CX target would gain the control


def test_add_hand_check_rejects_invalid_target():
    qc = QuantumCircuit(1)
    qc.sx(0)
    try:
        add_hand_check(qc, [0])
    except ValueError:
        return
    raise AssertionError('expected ValueError for a non-diagonal target wire')


def test_add_hand_check_counts_costs():
    qc = QuantumCircuit(2)
    qc.t(0)
    qc.s(0)
    protected, ancilla = add_hand_check(qc, [0])
    assert protected.num_qubits == 3
    assert ancilla == 2
    assert sum(1 for op in protected.data if op.operation.name == "cx") == 1


def test_noiseless_hand_check_keeps_everything_and_scores_one():
    un = QuantumCircuit(2)
    un.t(0)
    un.s(0)
    un.s(1)
    out = hand_experiment(n=2, depth=un.depth(), t_count=1, targets=[0],
                          shots=2048, seed=19, p2=0.0, readout=0.0, circuit=un)
    prot = out["protected"]
    base = out["baseline"]
    assert prot["checks"] == 1
    assert prot["added_ancillas"] == 1
    assert abs(prot["retention"] - 1.0) < 1e-9
    assert abs(prot["conditional_fidelity"] - 1.0) < 1e-9
    assert base["checks"] == 0


def test_default_payload_family_has_no_diagonal_wires():
    """Every wire ends in H + SX (gadget layer), so arm (b) is honestly empty here."""
    from src.experiment import payload
    un = payload(n=4, depth=3, t_count=1, seed=19)
    assert hand_check_targets(un, 4) == []