import numpy as np
import pandas as pd
from src.analysis import aggregate, mean_ci

def test_mean_ci_single_and_multiple():
    assert mean_ci([1])[0] == 1
    assert mean_ci([1, 2, 3])[1] < 2 < mean_ci([1, 2, 3])[2]

def test_phase_difference_inputs():
    x = pd.DataFrame([dict(n=4,depth_parameter=3,t_count=0,target_order='none',checks=0,noise_2q=.01,seed=1,retention=1,conditional_fidelity=.8,baseline_fidelity=.8,yield_fraction=.8,yield_ratio=1,error_suppression=1,added_two_qubit=0,added_depth=0,added_ancillas=0),dict(n=4,depth_parameter=3,t_count=0,target_order='0-1',checks=1,noise_2q=.01,seed=1,retention=.7,conditional_fidelity=.9,baseline_fidelity=.8,yield_fraction=.63,yield_ratio=.7875,error_suppression=2,added_two_qubit=2,added_depth=2,added_ancillas=1)])
    a = aggregate(x)
    base = a[a.checks == 0].conditional_fidelity.mean()
    gain = a[a.checks > 0].conditional_fidelity.max() - base
    assert np.isclose(gain, .1)
