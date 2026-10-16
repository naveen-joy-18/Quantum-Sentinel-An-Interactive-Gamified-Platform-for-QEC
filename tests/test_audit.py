import pandas as pd
from src.audit import audit

def example():
    return pd.DataFrame([dict(n=4,seed=19,depth_parameter=3,t_count=0,actual_t_count=0,
               noise_2q=.01,target_order='none',checks=0,shots=100,
               accepted=100,rejected=0,retention=1.,conditional_fidelity=.8,
               baseline_fidelity=.8,yield_ratio=1.,syndrome_histogram='{"unprotected":100}')])

def test_audits_exact_arithmetic():
    meta=dict(parameters=dict(ns=[4],depths=[3],t_counts=[0],seeds=[19],p2=[.01]))
    assert audit(example(),meta)['passed']

def test_audit_fails_wrong_retention_and_t_count():
    df=example();df.loc[0,'retention']=.5;df.loc[0,'actual_t_count']=1
    problems=audit(df)['problems']
    assert any('T count' in p for p in problems)
    assert any('Retention' in p for p in problems)

def test_declared_sweep_must_be_backed_by_rows():
    meta=dict(parameters=dict(ns=[4],depths=[3],t_counts=[0],seeds=[19],p2=[.01,.02]))
    assert not audit(example(),meta)['passed']
