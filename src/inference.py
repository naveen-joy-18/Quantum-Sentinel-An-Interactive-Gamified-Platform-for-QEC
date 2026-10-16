"""Paired *circuit-instance* comparisons and multiple-comparison adjustment.

Seed is the replicate unit. These intervals do not solve winner's curse when the
best strategy is selected and assessed on the same instances. Follow up with a
held-out circuit set for scientific claims about generalization.
"""
from __future__ import annotations
import numpy as np
import pandas as pd
from scipy import stats


def holm_adjust(p_values):
    p=np.asarray(p_values, dtype=float)
    out=np.full(len(p),np.nan)
    inds=np.flatnonzero(np.isfinite(p))
    order=inds[np.argsort(p[inds])]
    previous=0.0
    for rank,i in enumerate(order):
        previous=max(previous, min(1.0,(len(order)-rank)*p[i]))
        out[i]=previous
    return out


def paired_comparisons(runs):
    keys=['n','depth_parameter','noise_2q']
    if 'readout_noise' in runs:
        keys.append('readout_noise')
    if 'shots' in runs:
        keys.append('shots')
    identities=keys+['seed']
    cliff=runs[runs.t_count==0].copy()
    base=(cliff[cliff.checks==0]
          .groupby(identities,as_index=False)[['conditional_fidelity','yield_ratio']].mean())
    matched=cliff[cliff.checks>0].merge(base,on=identities,
               suffixes=('_checked','_baseline'),validate='many_to_one')
    if matched.empty:
        return pd.DataFrame()
    matched['delta_fidelity']=matched.conditional_fidelity_checked-matched.conditional_fidelity_baseline
    matched['delta_utility_ratio']=matched.yield_ratio_checked-1.0
    group_by=keys+['target_order','checks']
    output=[]
    for group,g in matched.groupby(group_by):
        n=g.seed.nunique()
        rec=dict(zip(group_by,group))
        rec['n_independent_circuits']=int(n)
        for field in ['delta_fidelity','delta_utility_ratio']:
            v=g[field].to_numpy(dtype=float)
            v=v[np.isfinite(v)]
            rec[field+'_mean']=float(v.mean()) if v.size else float('nan')
            if v.size>=3:
                sem=float(stats.sem(v))
                h=float(stats.t.ppf(.975, v.size-1)*sem)
                rec[field+'_ci_lo']=rec[field+'_mean']-h
                rec[field+'_ci_hi']=rec[field+'_mean']+h
                rec[field+'_p_two_sided']=float(stats.ttest_1samp(v,0).pvalue) if sem>0 else (0.0 if rec[field+'_mean']!=0 else 1.0)
            else:
                rec[field+'_ci_lo']=float('nan')
                rec[field+'_ci_hi']=float('nan')
                rec[field+'_p_two_sided']=float('nan')
        output.append(rec)
    result=pd.DataFrame(output)
    for field in ['delta_fidelity','delta_utility_ratio']:
        # Familywise adjustment across each endpoint's tested hypothesis family.
        result[field+'_p_holm']=holm_adjust(result[field+'_p_two_sided'].to_numpy())
    return result
