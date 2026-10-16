"""Review regression tests: fixed targets, preflight and actual scenario selection."""
import pandas as pd
from fastapi.testclient import TestClient
from api.core import mission_brief, mission_result, scenario_recommendations
from api.server import app

B={'ancillas':2,'gates':20,'depth':20,'retention':.7}

def sample(seed=19, f0=.8, protected=.81, ancillas=1, p2=.01):
    common=dict(n=4,seed=seed,depth_parameter=3,t_count=0,noise_2q=p2,
                shots=2048,readout_noise=.01,baseline_fidelity=f0,added_depth=0,
                added_ancillas=0,added_two_qubit=0,retention=1.,yield_ratio=1.)
    return [dict(**common, target_order='none',checks=0,conditional_fidelity=f0),
            dict(**{**common, 'target_order':'0','checks':1,'conditional_fidelity':protected,
                    'retention':.85,'added_ancillas':ancillas,'added_two_qubit':2,
                    'added_depth':3,'yield_ratio':.85*protected/f0})]

def test_high_fidelity_target_never_clipped_to_one():
    rows=sample(f0=.9984,protected=.9999)
    b=mission_brief(1,rows,B)
    assert abs(b['target_fidelity'] - 1.0034)<1e-12
    assert b['status']=='mathematically_unattainable'
    assert b['feasible_candidates']==0
    assert not mission_result(1,rows[1],rows,B)['passed']

def test_mission2_fixed_gain_and_strict_ancilla():
    rows=sample(f0=.8, protected=.812, ancillas=2)
    b=mission_brief(2,rows,B)
    assert b['target_fidelity']==.803
    assert b['status']=='infeasible_tested'
    assert not mission_result(2,rows[1],rows,B)['passed']

def test_suggest_a_tested_feasible_scenario_without_lowering_target():
    df=pd.DataFrame(sample(seed=19,f0=.9984,protected=.9999) + sample(seed=23,f0=.75,protected=.78))
    rec=scenario_recommendations(df,1,B)
    assert len(rec)==1 and rec[0]['setup']['seed']==23
    assert abs(rec[0]['brief']['target_fidelity']-.755)<1e-12

def test_mission4_requires_correct_interpretation():
    rows=sample()
    t={**rows[0],'t_count':2,'conditional_fidelity':.83}
    assert not mission_result(4,t,[*rows,t],B,observed_t_count=2)['passed']
    assert mission_result(4,t,[*rows,t],B,observed_t_count=2,
                          interpretation='different_ideals_not_causal')['passed']
    assert not mission_result(4,t,[*rows,t],B,observed_t_count=2,
                              interpretation='t_gates_improve_hardware')['passed']

def test_preflight_api_and_recommendations_use_real_csv(monkeypatch,tmp_path):
    from api import server
    file=tmp_path/'runs.csv'
    pd.DataFrame(sample(f0=.9984,protected=.9999)+sample(seed=23,f0=.75,protected=.78)).to_csv(file,index=False)
    monkeypatch.setattr(server,'DATASET',file)
    c=TestClient(app)
    spec=dict(n=4,seed=19,depth_parameter=3,t_count=0,noise_2q=.01,shots=2048,
              target_order='none',checks=0)
    resp=c.post('/api/preflight',json=dict(mission=1,spec=spec,budget=B))
    assert resp.status_code==200 and resp.json()['brief']['status']=='mathematically_unattainable'
    rec=c.post('/api/recommendations',json=dict(mission=1,budget=B))
    assert rec.status_code==200 and rec.json()['matches'][0]['setup']['seed']==23
