"""Scientific game rules, kept separate from web transport and Qiskit imports."""
from __future__ import annotations
import math
from pathlib import Path
import pandas as pd

REQUIRED = {"n", "seed", "depth_parameter", "t_count", "noise_2q", "target_order",
            "checks", "retention", "conditional_fidelity", "added_two_qubit",
            "added_depth", "added_ancillas", "yield_ratio", "shots", "baseline_fidelity"}


def parse_data(csv_path):
    path = Path(csv_path)
    if not path.is_file():
        return None
    df = pd.read_csv(path)
    missing = REQUIRED - set(df.columns)
    if missing:
        raise ValueError(f"Dataset missing required columns: {sorted(missing)}")
    ids = ["n", "seed", "depth_parameter", "t_count", "noise_2q", "target_order", "checks", "shots"]
    if "readout_noise" in df:
        ids.append("readout_noise")
    if df.duplicated(ids).any():
        raise ValueError("Dataset has duplicate strategy identities; regenerate benchmark")
    if not df.retention.between(0, 1).all():
        raise ValueError("Dataset violates retention probability bounds")
    # With zero accepted shots, conditional fidelity is mathematically undefined.
    # The utility score remains exactly zero, not a fictitious fidelity value.
    bad_f = ~df.conditional_fidelity.between(0, 1)
    zero_accepted = ((df['accepted'] == 0) if 'accepted' in df else pd.Series(False,index=df.index))
    if (bad_f & ~(zero_accepted & df.conditional_fidelity.isna())).any():
        raise ValueError("Dataset contains invalid conditional fidelity")
    return df


def records(df):
    if df is None:
        return []
    import json
    # Pandas emits JSON null for NaN/Inf rather than non-standard float values.
    return json.loads(df.to_json(orient="records"))


def exact_match(df, spec):
    if df is None:
        return None
    subset = df.copy()
    for key in ["n", "seed", "depth_parameter", "t_count", "noise_2q", "target_order", "checks", "shots"]:
        subset = subset[subset[key] == spec[key]]
    if "readout_noise" in subset:
        subset = subset[subset["readout_noise"] == spec["readout"]]
    if len(subset) != 1:
        return None
    return records(subset)[0]


def scene(df, spec):
    if df is None:
        return []
    subset = df.copy()
    for key in ["n", "seed", "depth_parameter", "noise_2q", "shots"]:
        subset = subset[subset[key] == spec[key]]
    if "readout_noise" in subset:
        subset = subset[subset["readout_noise"] == spec["readout"]]
    return records(subset.sort_values(["t_count", "checks", "target_order"]))


def eligible(row, budget):
    if row is None:
        return False
    return (row["added_ancillas"] <= budget["ancillas"]
            and row["added_two_qubit"] <= budget["gates"]
            and row["added_depth"] <= budget["depth"]
            and row["retention"] >= budget["retention"])


def baseline_for(rows, t=0):
    matches = [r for r in rows if int(r["checks"]) == 0 and int(r["t_count"]) == t]
    return matches[0] if len(matches) == 1 else None


# These are pre-registered gameplay rules, not inferred from winning strategies.
MISSION_GAIN = {1: 0.005, 2: 0.003}


def mission_brief(mission, rows, budget):
    """Preflight a fixed objective BEFORE play; never clip a target to 1.

    Feasibility is certified only relative to the supplied measured candidate set.
    A live run of one strategy cannot establish search-space infeasibility.
    """
    if mission not in (1, 2, 3, 4):
        raise ValueError('Unsupported mission')
    base = baseline_for(rows)
    if base is None:
        return dict(status='unverified', reason='Matching Clifford baseline is missing',
                    target_fidelity=None, required_gain=MISSION_GAIN.get(mission),
                    baseline_fidelity=None, tested_candidates=0, feasible_candidates=0,
                    best_tested=None)
    f0 = float(base['conditional_fidelity'])
    gain = MISSION_GAIN.get(mission)
    target = f0 + gain if gain is not None else None  # deliberately NOT capped
    valid = [r for r in rows if int(r['t_count']) == 0 and int(r['checks']) > 0
             and eligible(r, budget) and pd.notna(r.get('conditional_fidelity'))
             and (mission != 2 or r['added_ancillas'] <= 1)]
    if mission in (1, 2):
        reached = [r for r in valid if float(r['conditional_fidelity']) >= target - 1e-12]
        if target > 1 + 1e-12:
            status = 'mathematically_unattainable'
            reason = (f'Required F={target:.4f} exceeds the fidelity ceiling 1. '
                      'Choose another measured scenario; the gain rule will not be lowered.')
        elif reached:
            status, reason = 'feasible_tested', 'At least one measured candidate meets the fixed objective and budgets.'
        else:
            status, reason = 'infeasible_tested', ('No measured candidate satisfies the fixed target and budgets. '
                                                  'This does not prove physical impossibility.')
    elif mission == 3:
        reached = valid
        status = 'feasible_tested' if valid else 'infeasible_tested'
        reason = 'Best among evaluated feasible candidates only; not a global optimality certificate.'
    else:
        reached = [r for r in rows if int(r['t_count']) > 0 and int(r['checks']) == 0]
        status = 'feasible_tested' if reached else 'infeasible_tested'
        reason = 'Compare an unprotected T-doped circuit with the matching unprotected Clifford circuit.'
    best = max(valid, key=lambda r: (float(r['conditional_fidelity']), float(r['retention'])), default=None)
    return dict(status=status, reason=reason, baseline_fidelity=f0,
                required_gain=gain, target_fidelity=target,
                tested_candidates=len(valid), feasible_candidates=len(reached),
                best_tested=best)


def scenario_recommendations(df, mission, budget, limit=6):
    """Find genuinely test-feasible scenarios from the executed results only.

    Does not invent data, vary thresholds, or interpolate any configuration.
    """
    if df is None or df.empty:
        return []
    cols = ['n', 'seed', 'depth_parameter', 'noise_2q', 'shots']
    if 'readout_noise' in df.columns:
        cols.append('readout_noise')
    recommendations = []
    for values, group in df.groupby(cols, dropna=False):
        setup = dict(zip(cols, values if isinstance(values, tuple) else (values,)))
        brief = mission_brief(mission, records(group), budget)
        if brief['status'] == 'feasible_tested':
            recommendations.append({'setup': setup, 'brief': brief})
    recommendations.sort(key=lambda o:(-o['brief']['feasible_candidates'],
                                        o['setup']['n'], o['setup']['depth_parameter'], o['setup']['seed']))
    return recommendations[:limit]


def mission_result(mission, row, rows, budget, observed_t_count=None, interpretation=None):
    """Evaluate player outcome against an immutable, preflightable rule."""
    if row is None:
        raise ValueError('A measured strategy is required')
    base = baseline_for(rows)
    if base is None:
        raise ValueError('Unprotected Clifford baseline unavailable for this circuit')
    brief = mission_brief(mission, rows, budget)
    f0 = float(base['conditional_fidelity'])
    f1_value = row.get('conditional_fidelity')
    if f1_value is None or not math.isfinite(float(f1_value)):
        return {'passed':False,'budget_ok':eligible(row,budget),'score':0.0,
                'utility_ratio':float(row.get('yield_ratio') or 0),
                'gain_vs_unprotected':None,
                'reasons':['No shots passed the syndrome filter, so post-selected fidelity is undefined. The game utility is zero; this cannot win a protection mission.'],
                'reference':None, 'preflight':brief,
                'tested_target_feasible':False,
                'coverage_claim':'only measured target-order candidates',
                'source_metric':'squared_Bhattacharyya_output_distribution_fidelity'}
    f1 = float(f1_value)
    passed_budget = eligible(row, budget)
    checks, t = int(row['checks']), int(row['t_count'])
    improvement = f1 - f0
    reasons = []
    ref = None
    if mission in (1, 2):
        target = brief['target_fidelity']
        success = (checks >= 1 and t == 0 and passed_budget
                   and f1 >= target - 1e-12
                   and (mission != 2 or int(row['added_ancillas']) <= 1))
        reasons.append(f'Fixed mission rule: fidelity gain >= {brief["required_gain"]:.4f}; '
                       f'baseline F0={f0:.4f}, required F={target:.4f}.')
        if mission == 2:
            reasons.append('At most one ancilla; all other resource budgets also apply.')
    elif mission == 3:
        ref = brief['best_tested']
        success = bool(ref is not None and checks > 0 and t == 0 and passed_budget
                       and f1 >= float(ref['conditional_fidelity']) - 1e-10)
        reasons.append('Match the best measured feasible protected fidelity in the scanned set, '
                       'not an asserted global optimum.')
    elif mission == 4:
        comparator = baseline_for(rows, t=observed_t_count)
        accurate_conclusion = interpretation == 'different_ideals_not_causal'
        success = bool(t > 0 and checks == 0 and observed_t_count == t and comparator is not None
                       and accurate_conclusion)
        reasons.append('Scientific diagnosis: compare matched *unprotected* Clifford and T-doped payloads.')
        if not accurate_conclusion:
            reasons.append('Choose the conclusion recognizing that the ideal circuits differ; '
                           'the comparison does not prove T gates improve reliability.')
        else:
            reasons.append('Correct: different ideal output distributions prevent a causal '
                           'claim about intrinsic T-gate reliability.')
    else:
        raise ValueError('Unsupported mission')
    if not passed_budget and mission != 4:
        reasons.append('Resource or kept-shot constraint violated.')
    if mission in (1, 2) and brief['status'] != 'feasible_tested':
        reasons.append(brief['reason'])
    score = 100 * f1 * float(row['retention'])
    return {'passed':bool(success), 'budget_ok':bool(passed_budget),
            'score':score, 'utility_ratio':float(row['yield_ratio']),
            'gain_vs_unprotected':improvement, 'reasons':reasons,
            'reference':ref, 'preflight':brief,
            'tested_target_feasible':brief['status']=='feasible_tested' if mission in (1, 2) else None,
            'coverage_claim':'best evaluated target-order candidate; not a global optimum of physical Pauli checks',
            'source_metric':'squared_Bhattacharyya_output_distribution_fidelity'}
