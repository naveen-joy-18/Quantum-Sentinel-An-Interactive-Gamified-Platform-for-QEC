"""Prospective-style train/held-out-seed policy audit for Quantum Sentinel.

Uses only genuinely executed data. Deterministic separation prevents selecting a
winner on exactly the same circuits used to evaluate it. Not evidence of hardware
transfer or a learned AI method; `optimizer` is a classical best-mean selector.

Usage: python -m src.holdout
"""
from __future__ import annotations
import json
from pathlib import Path
import numpy as np
import pandas as pd
from scipy import stats

ROOT = Path(__file__).resolve().parents[1]
GROUP = ['n', 'depth_parameter', 'noise_2q', 'shots']


def heldout_evaluation(df: pd.DataFrame, seed_fraction=0.5, objective='yield_ratio'):
    """Choose strategy on training seeds, evaluate matched baselines on separate seeds.

    Candidate identity is check-count plus ordered target subset. For each group,
    only strategies present in *all* test seeds are eligible for evaluation.
    Missing data are reported rather than imputed. An unprotected baseline is
    required for all seeds. The group-level CI treats held-out circuit seeds,
    not shots, as independent replicates.
    """
    if objective not in ('yield_ratio', 'conditional_fidelity'):
        raise ValueError('Unsupported objective')
    work = df[df['t_count'] == 0].copy()
    if 'readout_noise' in work:
        group_cols = GROUP + ['readout_noise']
    else:
        group_cols = GROUP
    records=[]
    for key, subset in work.groupby(group_cols):
        setup = dict(zip(group_cols, key if isinstance(key, tuple) else (key,)))
        seeds = sorted(set(map(int, subset.seed.unique())))
        if len(seeds) < 4:
            continue
        cut = max(2, min(len(seeds)-2, int(round(len(seeds)*seed_fraction))))
        train_seeds = seeds[:cut]
        test_seeds = seeds[cut:]
        train = subset[subset.seed.isin(train_seeds)]
        test = subset[subset.seed.isin(test_seeds)]
        candidates = train[train.checks > 0]
        if candidates.empty:
            continue
        # Require a candidate in every training instance to avoid selection bias
        # from a strategy evaluated on only the easiest subset of circuits.
        available = (candidates.groupby(['target_order','checks']).seed.nunique()
                     .reset_index(name='coverage'))
        valid = available[available.coverage == len(train_seeds)]
        if valid.empty:
            continue
        candidates = candidates.merge(valid[['target_order','checks']], on=['target_order','checks'])
        ranked = candidates.groupby(['target_order','checks'])[objective].mean().sort_values(ascending=False)
        target, checks = ranked.index[0]
        chosen = test[(test.target_order == target) & (test.checks == checks)]
        baseline = test[test.checks == 0]
        paired = (chosen[['seed','conditional_fidelity','retention','yield_ratio']]
                  .merge(baseline[['seed','conditional_fidelity','yield_ratio']],
                         on='seed', suffixes=('_checked','_baseline'), validate='one_to_one'))
        paired['delta_utility'] = paired.yield_ratio_checked - 1.0
        paired['delta_fidelity'] = paired.conditional_fidelity_checked-paired.conditional_fidelity_baseline
        vals = paired.delta_utility.to_numpy(dtype=float)
        mean = float(np.mean(vals)) if len(vals) else float('nan')
        half = (float(stats.t.ppf(.975,len(vals)-1)*stats.sem(vals)) if len(vals)>1 else float('nan'))
        records.append({**setup, 'selected_target_order': target, 'selected_checks':int(checks),
                        'train_seeds': json.dumps(train_seeds),'holdout_seeds': json.dumps(test_seeds),
                        'heldout_pairs':len(paired),'expected_pairs':len(test_seeds),
                        'complete_holdout':len(paired)==len(test_seeds),
                        'mean_heldout_delta_utility':mean,
                        'heldout_delta_utility_ci_lo':mean-half,
                        'heldout_delta_utility_ci_hi':mean+half,
                        'mean_heldout_delta_fidelity':float(paired.delta_fidelity.mean()) if len(paired) else float('nan'),
                        'selector':'best mean training '+objective+'; not learned AI',
                        'selection_coverage':len(valid)})
    return pd.DataFrame(records)


def main():
    source = ROOT/'results'/'runs.csv'
    if not source.exists():
        raise FileNotFoundError('No Qiskit runs.csv; run the experiment first.')
    df = pd.read_csv(source)
    result = heldout_evaluation(df)
    dest=ROOT/'results'/'heldout_strategy_audit.csv'
    dest.parent.mkdir(exist_ok=True)
    result.to_csv(dest,index=False)
    print(f'Wrote {len(result)} held-out groups to {dest}; no numerical results generated without Qiskit CSV')

if __name__=='__main__': main()
