import pandas as pd
from src.policy_benchmark import compare_policies

def fixture():
    rows=[]
    for seed in (19,23,41,53,71,73):
        for target,checks,gain,keep in [('none',0,0,1),('0',1,.02,.9),('1',1,.08,.7)]:
            f=.8+gain+(seed%7)*.0001
            rows.append({'n':4,'depth_parameter':3,'noise_2q':.02,'shots':2048,
                 'seed':seed,'t_count':0,'target_order':target,'checks':checks,
                 'conditional_fidelity':f,'retention':keep,'yield_ratio':keep*f/(.8+(seed%7)*.0001),
                 'added_ancillas':checks,'added_two_qubit':2*checks,'added_depth':checks})
    return pd.DataFrame(rows)

def test_predeclared_policies_run_on_disjoint_heldout_seeds():
    result=compare_policies(fixture())
    assert len(result)==5
    assert result.complete_holdout.all()
    for _,r in result.iterrows():
        assert not(set(__import__('json').loads(r.train_seeds))&set(__import__('json').loads(r.heldout_seeds)))
    assert result[result.policy=='unprotected'].delta_utility_mean.iloc[0]==0

def test_strict_budget_can_make_all_protection_policies_abstain():
    result=compare_policies(fixture(),max_ancillas=0)
    assert result[result.policy=='unprotected'].complete_holdout.iloc[0]
    assert not result[result.policy=='risk_aware_utility'].complete_holdout.iloc[0]
