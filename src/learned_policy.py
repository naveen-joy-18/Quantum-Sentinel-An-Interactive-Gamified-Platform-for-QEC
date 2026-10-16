"""Prospective learned check-target policy with independent circuit-seed holdout.

TRAIN: predict outcome utility using Qiskit-derived circuit/noise/check features.
TEST: rank only strategies enumerated in training for the same scenario family;
score selected configurations using independent held-out circuit instances.
Missing test measurements => abstain (no invented or interpolated outcome).
No hyperparameter tuning using heldout results. No AI superiority is asserted.
"""
from __future__ import annotations
import json
from pathlib import Path
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from src.policy_benchmark import compare_policies, _mean_ci

ROOT=Path(__file__).resolve().parents[1]
SCENE=['n','depth_parameter','noise_2q','shots']

def feature(row):
    """Circuit and strategy descriptors known before running a candidate."""
    n=int(row['n']);order=[] if row['target_order']=='none' else [int(x) for x in str(row['target_order']).split('-')]
    padded=(order+[-1]*6)[:6]
    return [n,int(row['depth_parameter']),float(row['noise_2q']),float(row.get('readout_noise',.01)),
            int(row['shots']),int(row['checks']),len(order),
            *[(q+1)/(n+1) if q>=0 else 0 for q in padded],
            len(set(order))/max(n,1),
            float(row.get('original_two_qubit',0)),float(row.get('original_depth',0))]


def evaluate_learned(df:pd.DataFrame, *, min_retention=.65,max_ancillas=3,
                     max_extra_gates=36,max_extra_depth=70,min_training_seeds=3):
    d=df[df.t_count==0].copy()
    all_seeds=sorted(map(int,d.seed.unique()))
    if len(all_seeds)<6:return pd.DataFrame()
    cut=len(all_seeds)//2
    training_seeds=all_seeds[:cut];test_seeds=all_seeds[cut:]
    if len(training_seeds)<min_training_seeds:return pd.DataFrame()
    tr=d[d.seed.isin(training_seeds)&(d.checks>0)]
    if len(tr)<5:return pd.DataFrame()
    model=RandomForestRegressor(n_estimators=160,min_samples_leaf=2,max_features=.8,
                                random_state=2036,n_jobs=1)
    model.fit(np.asarray([feature(row) for _,row in tr.iterrows()]),tr.yield_ratio.to_numpy())
    keys=SCENE+(['readout_noise'] if 'readout_noise' in d else [])
    result=[]
    for values,scene in d.groupby(keys,dropna=False):
        config=dict(zip(keys,values if isinstance(values,tuple) else (values,)))
        local_train=scene[scene.seed.isin(training_seeds)]
        local_test=scene[scene.seed.isin(test_seeds)]
        if local_train.seed.nunique()!=len(training_seeds) or local_test.seed.nunique()!=len(test_seeds):continue
        protected=local_train[(local_train.checks>0)&(local_train.retention>=min_retention)&
            (local_train.added_ancillas<=max_ancillas)&(local_train.added_two_qubit<=max_extra_gates)&
            (local_train.added_depth<=max_extra_depth)]
        grouped=protected.groupby(['target_order','checks']).seed.nunique().reset_index(name='coverage')
        eligible=grouped[grouped.coverage==len(training_seeds)]
        if eligible.empty:
            result.append({**config,'complete_holdout':False,'reason':'No training-feasible candidate'});continue
        # Feature templates only from training rows. The test labels are never used.
        candidates=protected.merge(eligible[['target_order','checks']],on=['target_order','checks'])
        templates=candidates.drop_duplicates(['target_order','checks'])
        predictions=model.predict(np.asarray([feature(row) for _,row in templates.iterrows()]))
        chosen=templates.iloc[int(np.argmax(predictions))]
        order,count=str(chosen.target_order),int(chosen.checks)
        predicted=float(np.max(predictions))
        got=local_test[(local_test.target_order==order)&(local_test.checks==count)]
        base=local_test[local_test.checks==0]
        paired=base[['seed','yield_ratio','conditional_fidelity']].merge(
            got[['seed','yield_ratio','conditional_fidelity','retention','added_ancillas','added_two_qubit','added_depth']],on='seed',
            suffixes=('_baseline','_learned'),validate='one_to_one')
        complete=len(paired)==len(test_seeds)
        budget_pass=bool(complete and (paired.retention>=min_retention).all()
                         and (paired.added_ancillas<=max_ancillas).all()
                         and (paired.added_two_qubit<=max_extra_gates).all()
                         and (paired.added_depth<=max_extra_depth).all())
        delta=(paired.yield_ratio_learned-paired.yield_ratio_baseline).to_numpy() if complete else []
        mean,lo,hi=_mean_ci(delta)
        result.append({**config,'policy':'random_forest_utility','target_order':order,
            'checks':count,'predicted_utility_ratio':predicted,
            'complete_holdout':complete,'heldout_budget_compliant':budget_pass,'pairs':len(paired),'expected_pairs':len(test_seeds),
            'delta_utility_mean':mean,'delta_utility_ci_lo':lo,'delta_utility_ci_hi':hi,
            'delta_fidelity_mean':float((paired.conditional_fidelity_learned-paired.conditional_fidelity_baseline).mean()) if complete else np.nan,
            'mean_retention':float(paired.retention.mean()) if complete else np.nan,
            'train_seeds':json.dumps(training_seeds),'heldout_seeds':json.dumps(test_seeds),
            'reason':'heldout evidence' if complete else 'Chosen target not evaluated for all held-out seeds'})
    return pd.DataFrame(result)


def main():
    runs=ROOT/'results'/'runs.csv'
    if not runs.is_file():raise FileNotFoundError('No actual Qiskit dataset; learned selector cannot be evaluated.')
    df=pd.read_csv(runs)
    scores=evaluate_learned(df)
    scores.to_csv(ROOT/'results'/'learned_policy_holdout.csv',index=False)
    explanation=['# Learned policy: research evaluation','',
        'Random-forest ranking predicts the utility ratio of checked circuits from circuit and check features.',
        'Training and test circuit seeds are globally disjoint. No test fidelity is used for policy selection.',
        'The comparator module (`src.policy_benchmark`) evaluates non-AI policies.',
        'Statistical superiority and novelty are **not** established by code alone.',
        f'Complete held-out scenario groups: {int(scores.complete_holdout.sum()) if len(scores) else 0}.',
        '', 'Scoring uses classical output-distribution fidelity, not quantum-state fidelity.',
        'The selected check must be measured in every held-out circuit; otherwise the comparison abstains.']
    (ROOT/'results'/'LEARNED_POLICY_NOTES.md').write_text('\n'.join(explanation)+'\n')
    print('Wrote learned_policy_holdout.csv from real Qiskit outcomes')
if __name__=='__main__':main()
