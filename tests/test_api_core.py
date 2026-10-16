import pandas as pd
import pytest
from api.core import parse_data, exact_match, mission_result
from api.server import app
from fastapi.testclient import TestClient

BASE = dict(n=4,seed=19,depth_parameter=3,t_count=0,noise_2q=.01,
            target_order='none',checks=0,retention=1.,conditional_fidelity=.80,
            baseline_fidelity=.80,added_two_qubit=0,added_depth=0,added_ancillas=0,
            yield_ratio=1.,shots=8192)

def row(checks=0, fidelity=.80,retention=1.,ancillas=None,order=None):
    rec={**BASE,'checks':checks,'target_order':order if order is not None else ('0' if checks else 'none'),
         'conditional_fidelity':fidelity,'retention':retention,
         'added_ancillas':checks if ancillas is None else ancillas,
         'added_two_qubit':2*checks,'added_depth':checks,
         'yield_ratio':fidelity*retention/.80}
    return rec

BUDGET={'ancillas':2,'gates':20,'depth':20,'retention':.7}

def test_mission1_cannot_win_with_no_checks():
    b=row(); assert not mission_result(1,b,[b],BUDGET)['passed']

def test_mission1_requires_accuracy_improvement_not_only_feasibility():
    b=row(); not_enough=row(1,.802,.85)
    assert not mission_result(1,not_enough,[b,not_enough],BUDGET)['passed']
    success=row(1,.81,.85)
    assert mission_result(1,success,[b,success],BUDGET)['passed']

def test_mission2_enforces_one_ancilla():
    b=row(); two=row(2,.88,.81,ancillas=2,order='0-1')
    assert not mission_result(2,two,[b,two],BUDGET)['passed']

def test_mission3_best_scanned_not_global_optimum():
    b=row(); r1=row(1,.81,.87,order='0'); r2=row(1,.84,.76,order='1')
    verdict=mission_result(3,r2,[b,r1,r2],BUDGET)
    assert verdict['passed'] and verdict['reference']['conditional_fidelity']==.84
    assert not mission_result(3,r1,[b,r1,r2],BUDGET)['passed']
    assert 'not a global optimum' in verdict['coverage_claim']

def test_mission4_is_diagnostic_not_protected_t():
    b=row(); doped={**b,'t_count':2,'target_order':'none','checks':0,'conditional_fidelity':.83}
    assert mission_result(4,doped,[b,doped],BUDGET,observed_t_count=2,
                          interpretation='different_ideals_not_causal')['passed']
    assert not mission_result(4,b,[b,doped],BUDGET,observed_t_count=2)['passed']

def test_missing_dataset_returns_explicit_unavailable(monkeypatch,tmp_path):
    monkeypatch.setattr('api.server.DATASET',tmp_path/'not_present.csv')
    c=TestClient(app)
    assert c.get('/api/configurations').json()['ready'] is False
    assert c.post('/api/execute',json={'mission':1,'mode':'cached','spec':{'n':4,'seed':19,'depth_parameter':3,'noise_2q':.01,'target_order':'none','checks':0}}).status_code==404

def test_exact_cache_match_and_no_substitution(monkeypatch,tmp_path):
    csv=tmp_path/'runs.csv';pd.DataFrame([row(),row(1,.81,.8)]).to_csv(csv,index=False)
    monkeypatch.setattr('api.server.DATASET',csv)
    c=TestClient(app)
    body={'mission':1,'mode':'cached','spec':{'n':4,'seed':19,'depth_parameter':3,'noise_2q':.01,'target_order':'0','checks':1,'shots':8192}}
    r=c.post('/api/execute',json=body)
    assert r.status_code==200, r.text
    assert r.json()['verdict']['passed']
    body['spec']['target_order']='2'
    assert c.post('/api/execute',json=body).status_code==404

def test_t_circuit_rejects_unverified_checked_strategy():
    c=TestClient(app)
    result=c.post('/api/circuit',json={'n':4,'seed':19,'depth_parameter':3,'noise_2q':.01,'t_count':2,'target_order':'0','checks':1})
    assert result.status_code==422
