import numpy as np
from src.learned_policy import evaluate_learned,feature
from tests.test_policy_benchmark import fixture

def test_known_features_do_not_use_seed_or_observed_fidelity():
    row=fixture().iloc[2].copy()
    a=feature(row)
    row['seed']=99999;row['conditional_fidelity']=0.0001;row['yield_ratio']=.0001
    assert feature(row)==a

def test_learned_selector_uses_disjoint_seeds_and_real_test_rows():
    # Test fixture only: these are not scientific experiment results.
    df=fixture()
    r=evaluate_learned(df,min_training_seeds=3)
    assert len(r)==1 and bool(r.complete_holdout.iloc[0])
    import json
    assert not(set(json.loads(r.train_seeds.iloc[0]))&set(json.loads(r.heldout_seeds.iloc[0])))
    assert np.isfinite(r.delta_utility_mean.iloc[0])
