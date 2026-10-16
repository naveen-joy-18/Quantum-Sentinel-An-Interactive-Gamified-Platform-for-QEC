"""Audit Qiskit CSV and declared provenance without silently correcting rows.

Usage: python -m src.audit --strict
The audit performs arithmetic consistency and required-baseline coverage checks.
It is NOT a substitute for actual quantum-physics integration testing.
"""
from __future__ import annotations
import argparse
import itertools
import json
import pathlib
import pandas as pd
import numpy as np
ROOT=pathlib.Path(__file__).resolve().parents[1]


def audit(df, provenance=None):
    problems=[]; warnings=[]
    required=['n','seed','depth_parameter','t_count','noise_2q','target_order',
              'checks','shots','retention','conditional_fidelity','baseline_fidelity','yield_ratio']
    missing=sorted(set(required)-set(df.columns))
    if missing:
        return {'passed':False,'problems':['Missing columns: '+', '.join(missing)],'warnings':warnings}
    keys=['n','seed','depth_parameter','t_count','noise_2q','target_order','checks','shots']
    if 'readout_noise' in df: keys.append('readout_noise')
    if df.duplicated(keys).any(): problems.append('Duplicate per-strategy identities')
    for field in ('retention','conditional_fidelity','baseline_fidelity'):
        if (~df[field].between(0,1) & df[field].notna()).any():
            problems.append('Out-of-bounds '+field)
    check=(df['retention']*df['conditional_fidelity']/df['baseline_fidelity'])
    good=np.isfinite(check)&np.isfinite(df['yield_ratio'])
    if good.any() and not np.allclose(check[good],df.loc[good,'yield_ratio'],rtol=1e-4,atol=2e-5):
        problems.append('Composite utility ratio inconsistent with retention and output fidelity')
    if 'actual_t_count' in df and (df['t_count']!=df['actual_t_count']).any():
        problems.append('Recorded T count differs from actual T gates')
    if {'accepted','rejected'}.issubset(df.columns):
        if (df.accepted+df.rejected!=df.shots).any(): problems.append('Accepted + rejected != shots')
        if not np.allclose(df.accepted/df.shots,df.retention,atol=1e-5):
            problems.append('Retention differs from accepted / shots')
    else: warnings.append('Accepted/rejected count columns absent')
    if 'syndrome_histogram' in df:
        for idx,r in df.iterrows():
            try:
                histogram=json.loads(r['syndrome_histogram'])
                if sum(map(int,histogram.values()))!=int(r['shots']):
                    problems.append(f'Syndrome histogram shot count mismatch at row {idx}');break
                if int(r['checks']) and sum(v for k,v in histogram.items() if set(k)<= {'0'})!=int(r['accepted']):
                    problems.append(f'Syndrome acceptance mismatch at row {idx}');break
            except (ValueError, TypeError, KeyError):
                problems.append(f'Invalid syndrome histogram at row {idx}');break
    else: warnings.append('No syndrome histogram: cannot audit check acceptance')
    base_keys=['n','seed','depth_parameter','t_count','noise_2q','shots']
    if 'readout_noise' in df:base_keys.append('readout_noise')
    base=df[df.checks==0]
    if base.duplicated(base_keys).any(): problems.append('Duplicate unprotected baselines')
    unique=df[base_keys].drop_duplicates()
    absent=unique.merge(base[base_keys].drop_duplicates(),on=base_keys,how='left',indicator=True)
    missing_baselines=absent[absent['_merge']=='left_only']
    if len(missing_baselines):problems.append(f'Missing {len(missing_baselines)} unprotected baselines')
    if provenance is not None:
        params=provenance.get('parameters',{})
        index_names=['ns','depths','t_counts','seeds','p2']
        if all(x in params for x in index_names):
            present=set(tuple(row) for row in base[['n','depth_parameter','t_count','seed','noise_2q']].itertuples(index=False,name=None))
            required_combo=set(itertools.product(params['ns'],params['depths'],params['t_counts'],params['seeds'],params['p2']))
            missing_combo=len(required_combo-present)
            if missing_combo: problems.append(f'Missing {missing_combo}/{len(required_combo)} declared baseline grid combinations')
            if len(present-required_combo):warnings.append('Dataset contains scenarios not listed in provenance parameters')
        else: warnings.append('Provenance lacks complete declared parameter grid')
    else: warnings.append('No provenance metadata to verify declared noise sweep')
    return {'passed':not problems,'rows':len(df),'problems':problems,'warnings':warnings,
            'noise_rates':sorted(map(float,df.noise_2q.unique())),
            'circuit_seeds':int(df.seed.nunique()),
            'protected_rows':int((df.checks>0).sum())}


def main():
    ap=argparse.ArgumentParser();ap.add_argument('--strict',action='store_true');args=ap.parse_args()
    data=ROOT/'results'/'runs.csv'; meta=ROOT/'results'/'provenance.json'
    if not data.is_file():raise FileNotFoundError('No actual experiment CSV; run Qiskit first')
    check=audit(pd.read_csv(data),json.loads(meta.read_text()) if meta.exists() else None)
    path=ROOT/'results'/'AUDIT.json';path.write_text(json.dumps(check,indent=2))
    print(json.dumps(check,indent=2))
    if args.strict and not check['passed']:raise SystemExit(1)

if __name__=='__main__':main()
