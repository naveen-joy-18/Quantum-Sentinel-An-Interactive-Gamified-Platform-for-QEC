"""Held-out, resource-matched strategy-selection policy comparisons.

All outcomes come from a real Qiskit-generated runs.csv. Training circuit seeds
choose policies; disjoint held-out seeds evaluate them. Fixed baselines and
risk-aware selector are predeclared; no test outcome enters policy selection.
This is a classical statistical policy, NOT an RL/AI breakthrough.
"""
from __future__ import annotations
import json
from pathlib import Path
import numpy as np
import pandas as pd
from scipy import stats

ROOT = Path(__file__).resolve().parents[1]
SCENE = ['n','depth_parameter','noise_2q','shots']
STRATEGY = ['target_order','checks']
POLICIES = ('unprotected','first_check','max_training_fidelity','max_training_utility','risk_aware_utility')


def _mean_ci(values):
    a=np.asarray(values,dtype=float)
    a=a[np.isfinite(a)]
    if len(a)==0: return (np.nan,np.nan,np.nan)
    m=float(a.mean())
    if len(a)<2: return (m,np.nan,np.nan)
    delta=float(stats.t.ppf(.975,len(a)-1)*stats.sem(a))
    return (m,m-delta,m+delta)


def compare_policies(df: pd.DataFrame, *, min_retention=.65, max_ancillas=3,
                     max_extra_gates=36, max_extra_depth=70, risk_penalty=1.0):
    """Return paired held-out outcomes; best means best only in measured order set.

    A candidate must be evaluated for every training seed. A chosen candidate
    must also be present on every held-out seed; otherwise its policy is recorded
    as incomplete (not imputed or silently replaced).
    """
    if df.empty: return pd.DataFrame()
    needed=set(SCENE+STRATEGY+['seed','t_count','conditional_fidelity','retention','yield_ratio',
                  'added_ancillas','added_depth','added_two_qubit'])
    if needed-set(df): raise ValueError(f'Missing columns: {sorted(needed-set(df))}')
    data=df[df.t_count==0].copy()
    keys=SCENE+(['readout_noise'] if 'readout_noise' in data else [])
    output=[]
    for name, group in data.groupby(keys, dropna=False):
        params=dict(zip(keys,name if isinstance(name,tuple) else (name,)))
        seeds=sorted(map(int,group.seed.unique()))
        if len(seeds)<4: continue
        cut=len(seeds)//2
        train_ids,test_ids=seeds[:cut],seeds[cut:]
        training=group[group.seed.isin(train_ids)]
        testing=group[group.seed.isin(test_ids)]
        base=training[training.checks==0]
        if base.seed.nunique()!=len(train_ids): continue
        trained=training[(training.checks>0)&(training.retention>=min_retention)&
             (training.added_ancillas<=max_ancillas)&(training.added_two_qubit<=max_extra_gates)&
             (training.added_depth<=max_extra_depth)]
        cover=(trained.groupby(STRATEGY).seed.nunique().rename('coverage').reset_index())
        valid=cover[cover.coverage==len(train_ids)][STRATEGY]
        trained=trained.merge(valid,on=STRATEGY,how='inner')
        summary=trained.groupby(STRATEGY,as_index=False).agg(
            mean_f=('conditional_fidelity','mean'),mean_u=('yield_ratio','mean'),
            std_u=('yield_ratio','std'),mean_retention=('retention','mean'),
            mean_gates=('added_two_qubit','mean'))
        summary['std_u']=summary.std_u.fillna(0)
        summary['sem_u']=summary.std_u/np.sqrt(len(train_ids))
        summary['risk_score']=summary.mean_u-risk_penalty*summary.sem_u
        summary['identity']=summary.target_order+'#'+summary.checks.astype(str)
        selection={'unprotected':('none',0)}
        if not summary.empty:
            first=summary.sort_values(['checks','target_order']).iloc[0]
            selection['first_check']=(str(first.target_order),int(first.checks))
            for method,col in [('max_training_fidelity','mean_f'),('max_training_utility','mean_u'),
                               ('risk_aware_utility','risk_score')]:
                chosen=summary.sort_values([col,'identity'],ascending=[False,True]).iloc[0]
                selection[method]=(str(chosen.target_order),int(chosen.checks))
        else:
            for policy in POLICIES[1:]: selection[policy]=None
        reference=testing[testing.checks==0][['seed','yield_ratio','conditional_fidelity']].drop_duplicates('seed')
        if reference.seed.nunique()!=len(test_ids): continue
        for policy,chosen in selection.items():
            if chosen is None:
                output.append({**params,'policy':policy,'complete_holdout':False,'reason':'No training-feasible measured check'});continue
            target,k=chosen
            selected=testing[(testing.target_order==target)&(testing.checks==k)]
            merged=reference.merge(selected[['seed','yield_ratio','conditional_fidelity','retention',
                                    'added_ancillas','added_two_qubit','added_depth']],
                                    on='seed',suffixes=('_baseline','_policy'),validate='one_to_one')
            complete=len(merged)==len(test_ids)
            budget_pass=bool(complete and (merged.retention>=min_retention).all()
                            and (merged.added_ancillas<=max_ancillas).all()
                            and (merged.added_two_qubit<=max_extra_gates).all()
                            and (merged.added_depth<=max_extra_depth).all())
            if complete:
                utility=np.asarray(merged.yield_ratio_policy-merged.yield_ratio_baseline)
                gain=np.asarray(merged.conditional_fidelity_policy-merged.conditional_fidelity_baseline)
                utility_mean,lo,hi=_mean_ci(utility)
                fidelity_mean,_,_=_mean_ci(gain)
                retention_mean=float(merged.retention.mean())
                sample_count=len(merged)
            else:
                utility_mean=lo=hi=fidelity_mean=retention_mean=np.nan
                sample_count=len(merged)
            output.append({**params,'policy':policy,'target_order':target,'checks':k,
                'train_seeds':json.dumps(train_ids),'heldout_seeds':json.dumps(test_ids),
                'complete_holdout':complete,'heldout_budget_compliant':budget_pass,'pairs':sample_count,'expected_pairs':len(test_ids),
                'delta_utility_mean':utility_mean,'delta_utility_ci_lo':lo,'delta_utility_ci_hi':hi,
                'delta_fidelity_mean':fidelity_mean,'mean_retention':retention_mean,
                'reason':'held-out evaluation' if complete else 'Chosen strategy not measured on all held-out seeds',
                'objective':'composite utility ratio difference vs matched unprotected baseline',
                'selection_scope':'measured ordered-target candidates only'})
    return pd.DataFrame(output)


def main():
    source=ROOT/'results'/'runs.csv'
    if not source.exists():
        raise FileNotFoundError('No Qiskit measured runs.csv available. No benchmark is fabricated.')
    df=pd.read_csv(source)
    out=compare_policies(df)
    outpath=ROOT/'results'/'policy_holdout.csv'
    out.to_csv(outpath,index=False)
    lines=['# Held-out strategy policy comparison','',
        'Data source: real Qiskit Aer rows in `runs.csv` only.',
        'Unit of replication: independently generated circuit instance (seed).',
        'Fixed train/test split by seed; same shot and noise conditions within a group.',
        'Risk-aware selector = training mean utility minus one training standard error.',
        'Policies are tested only on actually measured configurations; missing candidates are never imputed.',
        'No AI superiority, Nature-level novelty or global optimum is presumed.','']
    valid=out[out.complete_holdout==True] if len(out) else pd.DataFrame()
    if len(valid):
        lines.append('| Policy | Held-out groups | Mean Δ utility ratio (descriptive) |')
        lines.append('|---|---:|---:|')
        for name,g in valid.groupby('policy'):
            lines.append(f'| {name} | {len(g)} | {g.delta_utility_mean.mean():+.4f} |')
        lines.append('')
        lines.append('These grouped summaries are descriptive, not statistical evidence of dominance.')
    else: lines.append('Insufficient complete held-out groups for comparisons.')
    (ROOT/'results'/'POLICY_FINDINGS.md').write_text('\n'.join(lines)+'\n', encoding='utf-8')
    print(f'Wrote {len(out)} policy comparisons; complete={len(valid)}')

if __name__=='__main__':main()
