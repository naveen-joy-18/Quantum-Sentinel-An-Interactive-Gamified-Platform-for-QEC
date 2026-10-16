"""Cross-check the Qiskit gate serializer independently from a real Qiskit install.

This is an interface contract test, NOT a physical check-validity experiment.
"""
from types import SimpleNamespace
from api.circuits import serialize_circuit

class StubCircuit:
    num_qubits=3
    num_clbits=3
    def depth(self):return 6
    def find_bit(self,bit):return SimpleNamespace(index=bit.index)
    data=[SimpleNamespace(operation=SimpleNamespace(name='h',params=[]),
                          qubits=[SimpleNamespace(index=0)],clbits=[]),
          SimpleNamespace(operation=SimpleNamespace(name='cx',params=[]),
                          qubits=[SimpleNamespace(index=1),SimpleNamespace(index=2)],clbits=[]),
          SimpleNamespace(operation=SimpleNamespace(name='measure',params=[]),
                          qubits=[SimpleNamespace(index=2)],clbits=[SimpleNamespace(index=2)]),
          SimpleNamespace(operation=SimpleNamespace(name='measure',params=[]),
                          qubits=[SimpleNamespace(index=0)],clbits=[SimpleNamespace(index=0)])]

def test_ancilla_gates_and_syndrome_readout_mapped_from_real_instruction_contract():
    checked=SimpleNamespace(check_qubits=(2,),check_support=((0,2),))
    data=serialize_circuit(StubCircuit(), checked=checked, n_data=2)
    assert data['ancilla_indices']==[2]
    assert [op['role'] for op in data['operations']] == ['payload','check_related',
                                                           'syndrome_measurement','payload_measurement']
    assert data['syndrome_readouts']==[{'operation_index':2,'ancilla':2,'classical_bit':2}]
    assert data['check_support']==[['0','2']]
