export type Mode = 'cached' | 'live';

export type Row = {
  n: number; seed: number; depth_parameter: number; t_count: number; noise_2q: number;
  target_order: string; checks: number; conditional_fidelity: number; baseline_fidelity: number;
  retention: number; yield_ratio: number; shots: number; accepted?: number; rejected?: number;
  added_ancillas: number; added_two_qubit: number; added_depth: number;
  syndrome_histogram?: string; check_support?: string; actual_depth?: number;
  [key: string]: unknown;
};

export type Setup = { n: number; seed: number; depth_parameter: number; noise_2q: number; shots?: number; readout_noise?: number };

export type Spec = Setup & { t_count: number; target_order: string; checks: number; readout: number };

export type Gate = { index: number; name: string; qubits: number[]; clbits: number[]; params: unknown[]; role?: string };

export type Circuit = {
  actual_circuit: boolean; n_qubits: number; n_clbits?: number; data_qubits: number; depth: number;
  operations: Gate[]; ancilla_indices: number[];
  check_support: string[][];
  syndrome_readouts?: { operation_index: number; ancilla: number; classical_bit: number | null }[];
  note: string;
};

export type Brief = {
  status: string; reason: string; target_fidelity: number | null; required_gain: number | null;
  baseline_fidelity: number | null; tested_candidates: number; feasible_candidates: number; best_tested: Row | null;
};

export type Verdict = {
  passed: boolean; budget_ok: boolean; score: number; utility_ratio: number;
  gain_vs_unprotected: number | null; reasons: string[]; reference: Row | null;
  tested_target_feasible: boolean | null; coverage_claim: string; preflight: Brief;
  source_metric: string;
};

export type AttemptResult = { row: Row; verdict: Verdict; source: string; physical_notes: string[] };

export type Budget = { ancillas: number; gates: number; depth: number; retention: number };

export type CampaignMission = {
  id: number; title: string; verified_feasible_scenarios: number;
  recommended_setup: Setup | null; status: string;
};

export type Campaign = {
  missions: CampaignMission[]; measurement_rows: number; qiskit_available: boolean;
  provenance: { organizer_noise_verified?: boolean | null; search_coverage_by_width?: unknown; versions?: unknown };
  caveat: string;
};

export type Health = { status: string; qiskit_available: boolean; cached_data_available: boolean; rules: string };

export type Configurations = { ready: boolean; setups: Setup[]; count?: number; message?: string; qiskit_available?: boolean };

async function request<T>(url: string, body?: unknown): Promise<T> {
  const r = await fetch(url, body === undefined
    ? undefined
    : { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  let data: unknown = null;
  try { data = await r.json(); } catch { /* non-JSON */ }
  if (!r.ok) {
    const detail = (data as { detail?: unknown } | null)?.detail;
    throw new Error(typeof detail === 'string' ? detail : detail ? JSON.stringify(detail) : `API ${r.status}`);
  }
  return data as T;
}

export const api = {
  campaign: () => request<Campaign>('/api/campaign'),
  health: () => request<Health>('/api/health'),
  configurations: () => request<Configurations>('/api/configurations'),
  scene: (spec: Spec) => request<{ rows: Row[] }>('/api/scene', spec),
  preflight: (mission: number, spec: Spec, budget: Budget) =>
    request<{ brief: Brief; rows_evaluated: number }>('/api/preflight', { mission, spec, budget }),
  recommendations: (mission: number, budget: Budget) =>
    request<{ matches: { setup: Setup; brief: Brief }[]; count: number }>('/api/recommendations', { mission, budget }),
  circuit: (spec: Spec) => request<Circuit>('/api/circuit', spec),
  execute: (mission: number, mode: Mode, spec: Spec, budget: Budget, interpretation: string | null) =>
    request<AttemptResult>('/api/execute', { mission, mode, spec, budget, interpretation }),
};

export function defaultBudget(mission: number): Budget {
  return mission === 2
    ? { ancillas: 1, gates: 12, depth: 25, retention: 0.75 }
    : { ancillas: 2, gates: 30, depth: 60, retention: 0.7 };
}

export function defaultSetup(): Setup {
  return { n: 4, seed: 19, depth_parameter: 3, noise_2q: 0.01, shots: 2048, readout_noise: 0.01 };
}

export function buildSpec(setup: Setup, opts: { t_count: number; targetOrder: number[]; checks: number; shots: number }): Spec {
  const order = opts.targetOrder.length ? opts.targetOrder.join('-') : 'none';
  return {
    ...setup,
    shots: opts.shots,
    readout: setup.readout_noise ?? 0.01,
    t_count: opts.t_count,
    target_order: opts.checks === 0 ? 'none' : order,
    checks: opts.checks,
  };
}
