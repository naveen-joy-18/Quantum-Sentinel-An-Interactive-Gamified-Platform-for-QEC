from fastapi.testclient import TestClient
from api.server import app
from tests.test_api_core import row
import pandas as pd

def test_campaign_missing_measurements_no_fake_progress(monkeypatch,tmp_path):
    monkeypatch.setattr('api.server.DATASET',tmp_path/'absent.csv')
    j=TestClient(app).get('/api/campaign').json()
    assert j['measurement_rows']==0 and len(j['missions'])==4
    assert all(m['status']=='not_yet_verified' and m['recommended_setup'] is None for m in j['missions'])

def test_campaign_uses_strict_mission_two_budget(monkeypatch,tmp_path):
    base=row(); protected=row(1,.83,.9,ancillas=1)
    protected['added_two_qubit']=20  # mission 1 feasible, mission 2 gate cap 12 fails
    csv=tmp_path/'runs.csv';pd.DataFrame([base,protected]).to_csv(csv,index=False)
    monkeypatch.setattr('api.server.DATASET',csv)
    j=TestClient(app).get('/api/campaign').json()
    assert j['missions'][0]['status']=='tested_feasible'
    assert j['missions'][1]['status']=='not_yet_verified'
