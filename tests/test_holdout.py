import pandas as pd
from src.holdout import heldout_evaluation

def test_selection_and_testing_on_disjoint_seeds():
    rows=[]
    for seed in (10,11,12,13,14,15):
        for target,checks,f,p in [('none',0,.80,1),('0',1,.84,.9),('1',1,.89 if seed<13 else .82,.9)]:
            rows.append(dict(n=4,depth_parameter=3,noise_2q=.01,readout_noise=.01,shots=1024,
                             seed=seed,t_count=0,target_order=target,checks=checks,
                             conditional_fidelity=f,retention=p,yield_ratio=p*f/.8))
    res=heldout_evaluation(pd.DataFrame(rows))
    assert len(res)==1
    r=res.iloc[0]
    assert r.heldout_pairs==3 and r.complete_holdout
    assert r.selected_target_order=='1'
    assert '10' in r.train_seeds and '13' in r.holdout_seeds
    assert r.mean_heldout_delta_utility < 0
