# Product deployment and operating model

## What this product does

A research arcade for learning quantum error detection by controlling **real**, physically valid checks. Its story map is artwork, not experimental data. The mission lab is a scientific workbench that builds and renders Qiskit circuits. The result screen never invents fidelity, retention, or cost.

## Local developer setup

Install Python 3.11+ and Node 22+.

```bash
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\\Scripts\\activate
python -m pip install -r requirements.txt
python -m pytest -q tests

# Before gameplay, create real Qiskit evidence (small smoke benchmark):
python -m src.experiment --ns 4 --depths 3 6 --t-counts 0 1 2 4 --seeds 19 23 41 53 71 73 --p2 0.01 0.04 0.08 --shots 2048 --max-checks 3 --max-orders 8
python -m src.audit --strict
python -m src.analysis
python -m src.policy_benchmark
python -m src.learned_policy

# Terminal 1
uvicorn api.server:app --port 8000 --reload
# Terminal 2
cd frontend && npm install && npm run dev
```

Access Vite dev server at http://localhost:5173; FastAPI at http://localhost:8000/api/health.

## Docker deployment (single application)

```bash
docker compose build
docker compose up -d
# health
curl http://localhost:8000/api/health
```

Access http://localhost:8000. The app serves React and the Python API on a single origin. Docker Compose bind-mounts `./results/` and `./figures/`. A freshly created container has no benchmark scores; generate results first with the command above on host, or via `docker compose run --rm quantum-sentinel python -m src.experiment ...`, then run audit/analysis.

**Safety:** Public unrestricted live simulation is not production-hardened. The backend limits qubits/depth/shots and admits only one concurrent Qiskit job per worker, but internet-facing deployment additionally requires authentication, reverse-proxy rate limits, compute quotas, TLS, logs/metrics, CSRF review and a proper job queue. Set one Uvicorn worker for the in-memory job semaphore to apply process-wide. These security controls are **not** fully implemented here.

## Product roadmap

- **MVP:** Four scenario missions; verified Qiskit scoring; responsive circuit and syndrome viewer; local educational deployment.
- **Research edition:** Reproducible grid, holdout experiments, publication-quality comparative reports, explicit provenance.
- **Pilot:** Classroom/quantum lab usability study, measured pre/post conceptual-learning gains, accessibility keyboard testing, external deployment audit.
- **Scale:** Account-backed campaigns, bounded asynchronous Qiskit job queue, signed result sets, classroom analytics and scenario marketplace.

## Product success measures

Activation to first verified mission, mission completion rate among *feasible* scenarios, objective-learning improvement (pre/post quiz), reproducibility failure rate, median live simulation latency, and infrastructure cost per run. Do not conflate user achievements with quantum fidelity.
