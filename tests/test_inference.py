import math
import numpy as np
import pandas as pd
from src.inference import holm_adjust,paired_comparisons

def test_holm_monotonic_and_no_anti_conservative_p():
    raw=[.01,.02,.03]
    adj=holm_adjust(raw)
    assert list(np.round(adj,2))==[.03,.04,.04]
    assert np.all(adj>=raw)

def test_paired_statistics_match_same_seed():
    rows=[]
    for seed in range(10,15):
        for checks in (0,1):
            rows.append(dict(n=4,depth_parameter=3,noise_2q=.01,readout_noise=.01,seed=seed,t_count=0,
                             target_order='none' if checks==0 else '0',checks=checks,
                             conditional_fidelity=.8+seed*.001+(checks*.02),yield_ratio=1 if checks==0 else .99))
    out=paired_comparisons(pd.DataFrame(rows)).iloc[0]
    assert out.n_independent_circuits==5
    assert np.isclose(out.delta_fidelity_mean,.02)
    assert np.isclose(out.delta_utility_ratio_mean,-.01)
