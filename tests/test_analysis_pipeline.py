"""End-to-end *synthetic test fixture* for file generation; not research results."""
import pandas as pd
from src import analysis


def test_analysis_pipeline_outputs_from_controlled_fixture(tmp_path, monkeypatch):
    results=tmp_path/'results'; figures=tmp_path/'figures'
    results.mkdir()
    monkeypatch.setattr(analysis,'RESULTS',results)
    monkeypatch.setattr(analysis,'FIGURES',figures)
    data=[]
    for seed in (11,12,13,14):
        for depth in (3,6):
            for checks in (0,1):
                f=.70 + (.1 if depth==3 else .0) + (.02 if checks else 0)
                p=.88 if checks else 1.
                data.append(dict(n=4,seed=seed,depth_parameter=depth,noise_2q=.01,readout_noise=.01,
                                 t_count=0,target_order='0' if checks else 'none',checks=checks,shots=512,
                                 retention=p,conditional_fidelity=f,baseline_fidelity=f-(.02 if checks else 0),
                                 yield_fraction=p*f,yield_ratio=p*f/(f-(.02 if checks else 0)),
                                 error_suppression=1.5,added_two_qubit=2*checks,added_depth=checks,
                                 added_ancillas=checks))
    pd.DataFrame(data).to_csv(results/'runs.csv',index=False)
    analysis.main()
    assert (results/'summary.csv').exists()
    assert (results/'paired_comparisons.csv').exists()
    assert 'not state fidelity' in (results/'FINDINGS.md').read_text()
    for name in ('fig2_breakeven.png','fig3_yield_ratio.png','fig4_phase.png'):
        assert (figures/name).stat().st_size>1000
