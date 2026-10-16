import numpy as np
import pandas as pd
from src.analysis import matched_phase_gains, fig_breakeven, fig_phase


def _row(depth,f,checks,p2=.01,seed=1):
    return dict(n=4,seed=seed,depth_parameter=depth,noise_2q=p2,readout_noise=.01,t_count=0,
                target_order=('0' if checks else 'none'),checks=checks,conditional_fidelity=f)

def test_phase_gain_matches_by_depth_and_seed(tmp_path):
    df=pd.DataFrame([_row(3,.8,0),_row(3,.9,1),_row(6,.70,0),_row(6,.71,1)])
    res=matched_phase_gains(df).sort_values('depth_parameter')
    assert list(np.round(res.fidelity_gain,2))==[.10,.01]
    fig_phase(df,tmp_path/'phase.png')
    assert (tmp_path/'phase.png').stat().st_size > 1000

def test_breakeven_uses_fidelity_ratio_not_error_suppression(tmp_path):
    df=pd.DataFrame([{'t_count':0,'checks':1,'retention':.80,'conditional_fidelity':.99,
                      'baseline_fidelity':.95,'error_suppression':5,'yield_ratio':.99*.8/.95}])
    fig_breakeven(df,tmp_path/'boundary.png')
    assert (tmp_path/'boundary.png').stat().st_size>1000
