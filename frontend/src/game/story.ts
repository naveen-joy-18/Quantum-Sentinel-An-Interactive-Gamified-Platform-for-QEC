import type { Budget } from './api';

export type CoreMode = 'idle' | 'build' | 'scan' | 'success' | 'fail';

export type Objective = { label: string; text: string; tone: 'primary' | 'secondary' | 'lesson' };

export type Sector = {
  id: number;
  codename: string;
  label: string;
  title: string;
  headline: string;
  brief: string;
  threat: string;
  objectives: Objective[];
  /** deterministic rule text shown as the "win condition" */
  winRule: string;
  /** how stars are earned for this sector */
  starRules: { two: string; three: string };
  accent: string;
  accentSoft: string;
  budget: Budget;
  incentivise: string;
  method: string;
};

export const SECTORS: Sector[] = [
  {
    id: 1,
    codename: 'QS-01',
    label: 'THE FIRST DEFENSE',
    title: 'SIGNAL RESCUE',
    headline: 'Protect a fragile quantum signal',
    brief:
      'Payload telemetry is under heavy thermal decoherence. Rig spacetime tripwires across active data channels to intercept bit-flip corruptions before the terminal state collapses.',
    threat: 'Depolarising noise on entangling gates; readout bit-flips on measurement.',
    objectives: [
      { label: 'PRIMARY', text: 'Deploy at least one real spacetime check and raise accepted-shot fidelity by 0.005.', tone: 'primary' },
      { label: 'SECONDARY', text: 'Keep at least 70% of shots and stay inside the ancilla, gate and depth budgets.', tone: 'secondary' },
      { label: 'TACTICAL', text: 'Checks detect some errors the syndrome can see, but every check also discards useful shots.', tone: 'lesson' },
    ],
    winRule: 'WIN: >=1 check, fixed +0.005 output-distribution fidelity, all resource budgets satisfied.',
    starRules: { two: 'utility ratio vs baseline >= 0.90', three: 'retained-shot fraction >= 80%' },
    accent: '#0d9488',
    accentSoft: 'rgba(13, 148, 136, 0.12)',
    budget: { ancillas: 2, gates: 30, depth: 60, retention: 0.7 },
    incentivise: 'Best trade-off between fidelity and kept shots wins the highest score.',
    method: 'qiskit-paulice coherent Pauli checks + Aer syndrome post-selection.',
  },
  {
    id: 2,
    codename: 'QS-02',
    label: 'THE HARD TRADE-OFF',
    title: 'RESOURCE SIEGE',
    headline: 'Defend the core with one ancilla',
    brief:
      'Power grid critical. System restricted to a single watcher ancilla. Every auxiliary gate burns precious coherence. Intercept the noise without suffocating data throughput.',
    threat: 'Same noise floor, but the hardware budget is slashed to a single ancilla.',
    objectives: [
      { label: 'PRIMARY', text: 'Achieve a 0.003 fidelity gain with at most one ancilla qubit.', tone: 'primary' },
      { label: 'SECONDARY', text: 'Respect tighter gate (<=12) and depth (<=25) limits and keep >=75% of shots.', tone: 'secondary' },
      { label: 'TACTICAL', text: 'The most accurate measured choice can still be too expensive to deploy.', tone: 'lesson' },
    ],
    winRule: 'WIN: fixed +0.003 fidelity, <=1 ancilla, every budget satisfied.',
    starRules: { two: 'utility ratio vs baseline >= 0.90', three: 'retained-shot fraction >= 85%' },
    accent: '#e11d48',
    accentSoft: 'rgba(225, 29, 72, 0.12)',
    budget: { ancillas: 1, gates: 12, depth: 25, retention: 0.75 },
    incentivise: 'Prove a single ancilla can pay for itself.',
    method: 'Resource-matched check placement under a one-ancilla cap.',
  },
  {
    id: 3,
    codename: 'QS-03',
    label: 'THE SEARCH FRONTIER',
    title: 'BENCHMARK DUEL',
    headline: 'Challenge the best tested strategy',
    brief:
      'Engage the automated defense matrix. Scan the combinatorial frontier of target qubits to match and beat the highest recorded empirical baseline under matched constraints.',
    threat: 'Selection-optimistic rankings; the measured best is not a proven global optimum.',
    objectives: [
      { label: 'PRIMARY', text: 'Match the highest conditional fidelity among feasible scanned candidates.', tone: 'primary' },
      { label: 'SECONDARY', text: 'Beat or equal the recorded benchmark without breaking budgets.', tone: 'secondary' },
      { label: 'TACTICAL', text: 'Scientific rankings require matched comparisons, not cherry-picking.', tone: 'lesson' },
    ],
    winRule: 'WIN: match the best feasible protected measured candidate in the scanned set.',
    starRules: { two: 'matched the benchmark with utility ratio >= 0.90', three: 'retained-shot fraction >= 80%' },
    accent: '#0d9488',
    accentSoft: 'rgba(13, 148, 136, 0.12)',
    budget: { ancillas: 2, gates: 30, depth: 60, retention: 0.7 },
    incentivise: 'Read the frontier, then beat it.',
    method: 'Ordered target-subset search scored by real Aer fidelity.',
  },
  {
    id: 4,
    codename: 'QS-04',
    label: 'THE UNKNOWN TERRITORY',
    title: 'T-GATE FRONTIER',
    headline: 'Explore beyond Clifford circuits',
    brief:
      'Breaching stabilizer limits. Non-Clifford T-gates inject raw magic states that break standard Pauli commute rules. Navigate coherent phase rotation without false confidence.',
    threat: 'T-doped circuits alter the ideal statevector; standard stabilizer checks do not automatically apply.',
    objectives: [
      { label: 'PRIMARY', text: 'Run a matched unprotected Clifford vs T-doped comparison.', tone: 'primary' },
      { label: 'SECONDARY', text: 'Select the scientifically correct conclusion.', tone: 'secondary' },
      { label: 'TACTICAL', text: 'A T is diagonal, so a check only survives it if its Pauli acts as I or Z there.', tone: 'lesson' },
    ],
    winRule: 'WIN: run a matched T comparison AND choose the valid scientific interpretation.',
    starRules: { two: 'chose the correct interpretation', three: 'diagnostic mission completed' },
    accent: '#e11d48',
    accentSoft: 'rgba(225, 29, 72, 0.12)',
    budget: { ancillas: 0, gates: 0, depth: 0, retention: 0 },
    incentivise: 'Know the limits of detection.',
    method: 'Matched ideal-distribution comparison; no invented non-Clifford checks.',
  },
];

export const INTERPRETATIONS: { value: string; text: string; correct: boolean }[] = [
  { value: 't_gates_improve_hardware', text: 'Higher output fidelity proves T gates improve physical reliability', correct: false },
  { value: 'checks_work_across_t', text: 'Clifford Pauli checks automatically remain valid across T gates', correct: false },
  { value: 'different_ideals_not_causal', text: 'Different ideal outputs: cannot infer T gates improve reliability', correct: true },
];

export const RANKS = [
  { name: 'CADET', xp: 0 },
  { name: 'OPERATOR', xp: 180 },
  { name: 'SENTINEL', xp: 420 },
  { name: 'WARDEN', xp: 720 },
  { name: 'ARCHON', xp: 1100 },
  { name: 'QUANTUM LEGEND', xp: 1600 },
];

export function rankFor(xp: number) {
  let current = RANKS[0];
  for (const r of RANKS) if (xp >= r.xp) current = r;
  const next = RANKS.find((r) => r.xp > xp) ?? null;
  return { current, next };
}
