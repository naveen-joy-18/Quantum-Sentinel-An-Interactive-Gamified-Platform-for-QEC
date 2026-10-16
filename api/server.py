"""FastAPI backend for React Quantum Sentinel.

/cache endpoint: exact keyed lookup of *real* Qiskit-generated measurements.
/live endpoint: Qiskit Aer simulation on request, never substituted scores.
Missing dependencies or data cause explicit errors, not fabricated results.
"""
from __future__ import annotations
import importlib.util
import math
import json
import os
import threading
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, model_validator
from api.core import (parse_data, records, exact_match, scene, mission_result,
                      mission_brief, scenario_recommendations)
from api.circuits import generate_circuit

ROOT = Path(__file__).resolve().parents[1]
DATASET = Path(os.environ.get('SENTINEL_RESULTS', str(ROOT/'results'/'runs.csv')))
app = FastAPI(title='Quantum Sentinel Research API', version='1.0')
LIVE_SLOT = threading.BoundedSemaphore(value=1)  # one CPU-heavy live job per process
app.add_middleware(CORSMiddleware, allow_origins=['http://localhost:5173','http://127.0.0.1:5173'],
                   allow_methods=['GET','POST'], allow_headers=['*'])


class Spec(BaseModel):
    n: int = Field(ge=2, le=10)
    depth_parameter: int = Field(ge=1, le=120)
    seed: int = Field(ge=0, le=9999999)
    noise_2q: float = Field(ge=0, le=.25)
    readout: float = Field(default=.01, ge=0, lt=.5)
    t_count: int = Field(default=0, ge=0, le=4)
    target_order: str = 'none'
    checks: int = Field(default=0, ge=0, le=6)
    shots: int = Field(default=2048, ge=128, le=8192)
    hand: bool = Field(default=False,
                       description='Insert hand-made I/Z-aligned parity checks across T-doped payloads (live Qiskit only)')

    @model_validator(mode='after')
    def physical_constraints(self):
        parts = self.targets()
        if any(q < 0 or q >= self.n for q in parts) or len(set(parts)) != len(parts):
            raise ValueError('target_order must contain unique existing qubit indices')
        if self.checks > len(parts):
            raise ValueError('number of checks cannot exceed selected targets')
        if self.t_count and self.checks and not self.hand:
            raise ValueError('Automatic qiskit-paulice checks cannot be inserted across a T-doped payload; '
                             'use hand=True for a hand-made I/Z-aligned parity check.')
        if self.hand and not self.t_count:
            raise ValueError('hand checks are only meaningful for T-doped payloads')
        if self.checks == 0 and self.target_order != 'none':
            raise ValueError('zero checks must use target_order=none for unambiguous reference')
        return self

    def targets(self):
        if self.target_order == 'none':
            return ()
        try:
            return tuple(int(x) for x in self.target_order.split('-'))
        except (ValueError, TypeError):
            raise ValueError('target_order must be hyphen-separated integers')


class Budget(BaseModel):
    ancillas: int = Field(default=2, ge=0, le=10)
    gates: int = Field(default=30, ge=0, le=500)
    depth: int = Field(default=60, ge=0, le=500)
    retention: float = Field(default=.7, ge=0, le=1)


class Attempt(BaseModel):
    mission: int = Field(ge=1, le=4)
    mode: str = Field(pattern='^(cached|live)$')
    spec: Spec
    budget: Budget = Field(default_factory=Budget)
    interpretation: str | None = Field(default=None, pattern='^(different_ideals_not_causal|t_gates_improve_hardware|checks_work_across_t)$')


class BriefRequest(BaseModel):
    mission: int = Field(ge=1, le=4)
    spec: Spec
    budget: Budget = Field(default_factory=Budget)


class SuggestRequest(BaseModel):
    mission: int = Field(ge=1, le=4)
    budget: Budget = Field(default_factory=Budget)


def clean(value):
    """Ensure scientific missing/infinite values remain JSON null, not invalid NaN."""
    if hasattr(value, "item") and callable(value.item):
        return clean(value.item())
    if isinstance(value, float) and not math.isfinite(value):
        return None
    if isinstance(value, dict):
        return {str(k):clean(v) for k,v in value.items()}
    if isinstance(value, (tuple,list)):
        return [clean(v) for v in value]
    return value


def get_data():
    try:
        return parse_data(DATASET)
    except Exception as exc:
        raise HTTPException(status_code=422, detail=f'Invalid Qiskit results dataset: {exc}')


def _has_qiskit():
    return all(importlib.util.find_spec(package) is not None
               for package in ('qiskit', 'qiskit_aer', 'qiskit_paulice'))


@app.get('/api/campaign')
def campaign():
    """Campaign briefing drawn from actual measured candidates; no fictional progress."""
    df = get_data()
    cards=[]
    for number, name in [(1,'First Contact'),(2,'Resource Siege'),(3,'Benchmark Duel'),(4,'T-Gate Frontier')]:
        budget = ({'ancillas':1,'gates':12,'depth':25,'retention':.75} if number==2 else
                  {'ancillas':2,'gates':30,'depth':60,'retention':.7})
        matches = scenario_recommendations(df, number, budget, limit=50)
        cards.append({'id':number, 'title':name,
                      'verified_feasible_scenarios':len(matches),
                      'recommended_setup':matches[0]['setup'] if matches else None,
                      'status':'tested_feasible' if matches else 'not_yet_verified'})
    meta=ROOT/'results'/'provenance.json'
    provenance={}
    if meta.is_file():
        try: provenance=json.loads(meta.read_text())
        except (ValueError,OSError): provenance={'warning':'provenance unreadable'}
    return clean({'missions':cards,'measurement_rows':len(df) if df is not None else 0,
                  'qiskit_available':_has_qiskit(),
                  'provenance':{'organizer_noise_verified':provenance.get('organizer_noise_verified'),
                      'search_coverage_by_width':provenance.get('search_coverage_by_width'),
                      'versions':provenance.get('versions')},
                  'caveat':'Feasibility refers only to measured candidate set; unverified does not mean physically impossible.'})


@app.get('/api/health')
def health():
    return {'status': 'ok', 'qiskit_available': _has_qiskit(),
            'cached_data_available': DATASET.is_file(),
            'rules': 'No fabricated scores. Classical output-distribution fidelity, not quantum-state fidelity.'}


@app.get('/api/configurations')
def configurations():
    df = get_data()
    if df is None:
        return {'ready': False, 'setups': [],
                'message': 'No executed Qiskit results found. Run the experiment or use live mode with Qiskit installed.'}
    setup_cols=['n','seed','depth_parameter','noise_2q','shots']
    if 'readout_noise' in df:
        setup_cols.append('readout_noise')
    setups=(df[setup_cols].drop_duplicates().sort_values(setup_cols))
    return {'ready': True, 'setups': records(setups),
            'count': len(df), 'qiskit_available': _has_qiskit()}


@app.post('/api/scene')
def get_scene(spec: Spec):
    return {'rows': scene(get_data(), spec.model_dump()),
            'source': 'Qiskit experiment CSV (exact configuration lookup only)'}


@app.post('/api/preflight')
def preflight(request: BriefRequest):
    df = get_data()
    rows = scene(df, request.spec.model_dump())
    brief = mission_brief(request.mission, rows, request.budget.model_dump())
    if not rows:
        brief['reason'] = ('This exact scenario has no cached measurements. '
                           'Feasibility cannot be certified before a live benchmark search.')
    return clean({'brief': brief, 'rows_evaluated': len(rows),
                  'basis': 'executed Qiskit CSV only; no target relaxation'})


@app.post('/api/recommendations')
def recommendations(request: SuggestRequest):
    df = get_data()
    matches = scenario_recommendations(df, request.mission, request.budget.model_dump())
    return clean({'matches': matches, 'count': len(matches),
                  'basis': 'test-feasible executed scenarios; unchanged mission target'})


@app.post('/api/circuit')
def circuit(spec: Spec):
    if not _has_qiskit():
        raise HTTPException(status_code=503, detail='Actual circuit rendering needs installed Qiskit and qiskit-paulice. No schematic substituted.')
    if spec.n > 6 or spec.depth_parameter > 20:
        raise HTTPException(status_code=400, detail='Interactive preview limit: n<=6 and depth<=20; use offline experiment for larger circuits.')
    try:
        return generate_circuit(spec.n, spec.depth_parameter, spec.seed, spec.t_count,
                                spec.targets(), spec.checks, spec.noise_2q, spec.readout,
                                hand=spec.hand)
    except Exception as exc:
        raise HTTPException(status_code=422, detail=f'Unable to generate requested valid check circuit: {exc}')


def _run_live_sim(s):
    from src.experiment import experiment_one
    if s.t_count and s.checks:
        from src.checks import hand_experiment
        res = hand_experiment(s.n, s.depth_parameter, s.t_count, s.targets(),
                              s.shots, s.seed, s.noise_2q, s.readout)
        cbase = experiment_one(s.n, s.depth_parameter, 0, (),
                               s.shots, s.seed, s.noise_2q, s.readout, 1)
        rows = res['rows'] + [r for r in cbase if r['checks'] == 0 and r['t_count'] == 0]
        record = res['protected']
    else:
        checked = experiment_one(s.n, s.depth_parameter, s.t_count, s.targets(),
                                 s.shots, s.seed, s.noise_2q, s.readout, s.checks or 1)
        if s.t_count:
            cbase = experiment_one(s.n, s.depth_parameter, 0, (),
                                   s.shots, s.seed, s.noise_2q, s.readout, 1)
        else:
            cbase = checked
        rows = checked + [r for r in cbase if r['checks'] == 0 and r['t_count'] == 0
                          and not (r['t_count'] == s.t_count and r['checks'] == 0)]
        candidates = [r for r in checked if r['checks'] == s.checks]
        if s.checks > 0:
            candidates = [r for r in candidates if r['target_order'] == s.target_order]
        record = candidates[0] if len(candidates) == 1 else None
        if record is None:
            raise ValueError('qiskit-paulice did not produce this number of checks')
    return record, rows


@app.post('/api/execute')
def execute(attempt: Attempt):
    s = attempt.spec
    budget = attempt.budget.model_dump()
    
    record = None
    rows = []
    source = 'existing Qiskit Aer CSV (exact keyed match)'

    if attempt.mode == 'cached':
        df = get_data()
        record = exact_match(df, s.model_dump())
        if record is None:
            raise HTTPException(status_code=404, detail='This exact protection configuration has not been simulated. Use live Qiskit, or run the benchmark.')
        rows = scene(df, s.model_dump())
    else:
        if not _has_qiskit():
            raise HTTPException(status_code=503, detail='Live Qiskit execution unavailable: install qiskit, qiskit-aer and qiskit-paulice.')
        if s.n > 6 or s.depth_parameter > 20 or s.checks > 4:
            raise HTTPException(status_code=400, detail='Live safety limit: at most 6 data qubits, 20 layers and 4 checks.')
        if not LIVE_SLOT.acquire(blocking=False):
            raise HTTPException(status_code=429, detail='A live quantum simulation is already running; retry when it finishes.')
        try:
            record, live_rows = _run_live_sim(s)
            source = 'live Qiskit Aer execution'
            # Merge benchmark rows if available so mission comparison against reference works
            df = get_data()
            benchmark_rows = scene(df, s.model_dump()) if df is not None else []
            seen = {(r.get('target_order'), r.get('checks'), r.get('t_count')) for r in live_rows}
            rows = live_rows + [r for r in benchmark_rows if (r.get('target_order'), r.get('checks'), r.get('t_count')) not in seen]
        except HTTPException:
            raise
        except Exception as exc:
            raise HTTPException(status_code=422, detail=f'Live Qiskit experiment failed: {exc}')
        finally:
            LIVE_SLOT.release()
    
    verdict = mission_result(attempt.mission, record, rows, budget,
                             observed_t_count=s.t_count if s.t_count else None,
                             interpretation=attempt.interpretation)
    return clean({'row': record, 'verdict': verdict,
            'source': source,
            'physical_notes': [
                'The score is 100 × kept-shot fraction × classical output-distribution fidelity.',
                'Accepted outcomes are selected using real qiskit-paulice syndrome parities for checked Clifford circuits.',
                'Automatic checks cannot be inserted across T gates (qiskit-paulice is Clifford-only); '
                'T-doped payloads are reported without checks, or with hand-made I/Z-aligned parity checks (hand=true), '
                'valid only where the check Pauli is I or Z at every cross-section.',
                'Syndrome post-selection is detection, not correction or a proof of quantum-state fidelity.',
            ]})


# Serve the compiled React product on the same origin in container deployments.
# Development uses Vite on port 5173 (and this mount is absent).
WEB_DIST=ROOT/'frontend'/'dist'
if WEB_DIST.is_dir():
    from fastapi.staticfiles import StaticFiles
    from fastapi.responses import FileResponse
    @app.get('/')
    def index():
        return FileResponse(WEB_DIST/'index.html')
    app.mount('/assets',StaticFiles(directory=WEB_DIST/'assets'),name='assets')
    @app.get('/{full_path:path}',include_in_schema=False)
    def frontend_route(full_path: str):
        if full_path.startswith('api/'):
            raise HTTPException(status_code=404,detail='Unknown API route')
        if '.' in Path(full_path).name:
            raise HTTPException(status_code=404,detail='Asset not found')
        return FileResponse(WEB_DIST/'index.html')
