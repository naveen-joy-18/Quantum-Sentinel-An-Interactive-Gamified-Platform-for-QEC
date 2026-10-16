from api.core import mission_result,parse_data
from tests.test_api_core import row,BUDGET
import pandas as pd

def test_zero_accepted_shots_are_non_scoring_not_perfect_fidelity(tmp_path):
    b=row()
    checked=row(1,.9,0)
    checked['conditional_fidelity']=float('nan')
    checked['accepted']=0; checked['yield_ratio']=0
    b['accepted']=8192
    path=tmp_path/'data.csv'
    pd.DataFrame([b,checked]).to_csv(path,index=False)
    rows=parse_data(path).to_dict(orient='records')
    verdict=mission_result(1,rows[1],rows,BUDGET)
    assert not verdict['passed'] and verdict['score']==0
    assert 'undefined' in verdict['reasons'][0]
