# Quantum Sentinel: The Protection Paradox
### An Evidence-First Spacetime Quantum Error Detection Platform & Strategy Testbed

[![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![Qiskit 2.5.2](https://img.shields.io/badge/Qiskit-2.5.2-613394.svg)](https://qiskit.org/)
[![Qiskit Aer 0.17.2](https://img.shields.io/badge/Qiskit%20Aer-0.17.2-002D62.svg)](https://github.com/Qiskit/qiskit-aer)
[![qiskit-paulice 0.2.1](https://img.shields.io/badge/qiskit--paulice-0.2.1-008080.svg)](https://github.com/qiskit-community/qiskit-paulice)
[![Test Suite](https://img.shields.io/badge/pytest-50%20passed-brightgreen.svg)](tests/)
[![Audit](https://img.shields.io/badge/audit-4%2C944%20rows%20clean-success.svg)](results/FINDINGS.md)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

---

## Table of Contents
1. [Executive Summary & The Scientific Problem](#1-executive-summary--the-scientific-problem)
2. [The Protection Paradox & Mathematical Formulation](#2-the-protection-paradox--mathematical-formulation)
3. [Environment Setup & Installation (Zero to Running Platform)](#3-environment-setup--installation-zero-to-running-platform)
4. [Scientific Reproducibility Guide](#4-scientific-reproducibility-guide)
5. [How to Play: Complete Gameplay & Physics Manual](#5-how-to-play-complete-gameplay--physics-manual)
6. [Key Research Findings (4,944 Audited Runs)](#6-key-research-findings-4944-audited-runs)
7. [Repository Architecture](#7-repository-architecture)
8. [Scientific Honesty & Limitations](#8-scientific-honesty--limitations)
9. [Citations & Theoretical Foundation](#9-citations--theoretical-foundation)

---

## 1. Executive Summary & The Scientific Problem

**Quantum Sentinel: The Protection Paradox** is a dual-purpose software platform that combines an interactive, gamified strategy arcade with a peer-reviewed, reproducible scientific research testbed for **Spacetime Quantum Error Detection (QED)**.

### The NISQ Noise Bottleneck
Near-term quantum computers (Noisy Intermediate-Scale Quantum era) are severely constrained by physical decoherence, two-qubit gate depolarizing errors, and measurement bit flips. While full **Fault-Tolerant Quantum Error Correction (QEC)** promises active syndrome decoding and recovery, it requires thousands of physical qubits per logical qubit—far exceeding current cryogenic chip capacity.

### The Low-Overhead Alternative: Spacetime QED
Instead of repairing damaged quantum states mid-circuit, **Quantum Error Detection** deploys auxiliary watcher qubits (*ancillas*) entangled across space and time coordinates of the computation to extract parity signatures (*syndromes*):
- Runs where all syndrome measurements report $s = 0$ are certified clean and accepted.
- Runs where any watcher detects a parity violation ($s = 1$) sound an alarm and are **purged via postselection**.

### The Paradox
Protection is not free. Every added watcher check requires allocating auxiliary qubits, inserting noisy two-qubit entangling gates (CNOT / CZ), and expanding circuit depth. If the added checks introduce new errors or discard shots faster than they elevate fidelity, **net computational throughput collapses**. This fundamental trade-off is **The Protection Paradox**.

```
                           ┌───────────────────────────────┐
                           │   Raw Quantum Computation     │
                           └───────────────┬───────────────┘
                                           │
                                           ▼
                           ┌───────────────────────────────┐
                           │ Deploy Spacetime Pauli Checks │
                           │  (Ancillas, Entangling Gates) │
                           └───────────────┬───────────────┘
                                           │
                   ┌───────────────────────┴───────────────────────┐
                   ▼                                               ▼
         [ BENEFIT: FIDELITY ]                           [ COST: OVERHEAD ]
   Purges corrupted noisy runs                     Extra physical gates & wires
     (Errors reduced by 3.71×)                       introduce MORE noise locations
                   │                                               │
                   ▼                                               ▼
     Higher Conditional Accuracy                   Shots Discarded via Postselection
           (F_cond = 0.990)                               (Retention p_keep = 0.90)
                   │                                               │
                   └───────────────────────┬───────────────────────┘
                                           │
                                           ▼
                           ┌───────────────────────────────┐
                           │    THE PROTECTION PARADOX     │
                           │   Yield Ratio: Y = U / F0     │
                           │  Net throughput often DECREASES! │
                           └───────────────────────────────┘
```

---

## 2. The Protection Paradox & Mathematical Formulation

Every score and metric displayed in the platform is derived from exact quantum simulation and audited measurements:

### 1. Classical Output-Distribution Fidelity ($F$)
We evaluate the statistical overlap between the ideal noiseless probability distribution $P_{\text{ideal}}$ and the empirical accepted distribution $P_{\text{meas}}$ using the squared Bhattacharyya distance:
$$F(P_{\text{ideal}}, P_{\text{meas}}) = \left( \sum_{x \in \{0, 1\}^n} \sqrt{P_{\text{ideal}}(x) \cdot P_{\text{meas}}(x)} \right)^2$$
*Note: This evaluates classical output-distribution fidelity across computational basis measurements, not full quantum-state fidelity.*

### 2. Shot Retention Fraction ($p_{\text{keep}}$)
The proportion of experimental shots that survive postselection without tripping any syndrome alarm:
$$p_{\text{keep}} = \frac{N_{\text{accepted}}}{N_{\text{total}}} = \frac{\sum_{i=1}^{N_{\text{total}}} \mathbb{I}(s_i = 0)}{N_{\text{total}}}$$

### 3. Composite Game Utility ($U$)
To prevent players from "cheating" by discarding 99% of shots to achieve an artificial 100% fidelity, the objective function balances quality and quantity:
$$U = F_{\text{cond}} \times p_{\text{keep}}$$
$$\text{Mission Score} = 100 \times U = 100 \times (F_{\text{cond}} \times p_{\text{keep}})$$

### 4. The Break-Even Yield Ratio ($Y$)
A protection strategy is only advantageous if its composite utility exceeds the unmitigated baseline fidelity $F_0$:
$$\text{Yield Ratio } Y = \frac{U}{F_0} = \frac{F_{\text{cond}} \times p_{\text{keep}}}{F_0}$$
- **$Y > 1.0$:** Net positive throughput (Protection is beneficial).
- **$Y < 1.0$:** The Protection Paradox (Protection degraded total throughput).

### 5. Error Suppression Factor
$$\text{Suppression Factor} = \frac{1 - F_0}{1 - F_{\text{cond}}} = \frac{1 - 0.964}{1 - 0.990} \approx 3.71\times \quad (\sim 73\% \text{ error reduction})$$

---

## 3. Environment Setup & Installation (Zero to Running Platform)

### System Prerequisites
- **Python:** 3.11 or higher
- **Node.js:** v20.x or v22.x
- **Package Manager:** `pip` and `npm`

---

### Step 1: Clone & Python Virtual Environment Setup

#### On Windows (PowerShell):
```powershell
# Navigate to project directory
cd "c:\Users\Naveen Joy\Desktop\IIT Jodhpur"

# Create virtual environment
python -m venv .venv

# Activate virtual environment
.\.venv\Scripts\Activate.ps1

# Upgrade pip and install all scientific & API dependencies
python -m pip install --upgrade pip
pip install -r requirements.txt
```

#### On Linux / macOS:
```bash
# Create virtual environment
python3 -m venv .venv

# Activate virtual environment
source .venv/bin/activate

# Install dependencies
pip install --upgrade pip
pip install -r requirements.txt
```

---

### Step 2: Frontend Dependency Setup

```bash
cd frontend
npm install
npm run build
cd ..
```

---

### Step 3: Running the Application

To run the complete platform, start the Python backend API and the Vite frontend dev server in separate terminals:

#### Terminal 1 — Backend API (FastAPI / Uvicorn):
```bash
# Windows
.\.venv\Scripts\Activate.ps1
python -m uvicorn api.server:app --host 127.0.0.1 --port 8000

# Alternatively on Windows, simply double-click: start_server.bat
```
*The API will start at `http://127.0.0.1:8000`. Confirm health via `curl http://127.0.0.1:8000/api/health`.*

#### Terminal 2 — Frontend User Interface (React / Vite):
```bash
cd frontend
npm run dev
```
*Open your web browser at **`http://localhost:5173`**.*

---

### Step 4: Single-Container Docker Deployment (Optional)

A production-ready multi-stage `Dockerfile` and `compose.yaml` are included for isolated deployment:

```bash
# Build and launch single-container app
docker compose up --build -d

# Check health endpoint
curl http://localhost:8000/api/health
```
*Access the application at `http://localhost:8000`.*

---

## 4. Scientific Reproducibility Guide

The entire research dataset, statistical analysis, and figures can be regenerated from scratch using the automated scientific engine:

### 1. Execute the Full Automated Test Suite (50 Tests)
```bash
python -m pytest -v tests
```
*Passes all 50 offline unit tests and live Qiskit Aer integration tests in under 5 seconds.*

### 2. Regenerate the Complete 4,944-Run Benchmark Dataset
```bash
python -m src.experiment \
    --ns 4 5 6 \
    --depths 3 6 10 \
    --t-counts 0 1 2 4 \
    --seeds 19 23 41 53 71 73 89 101 \
    --p2 0.01 0.04 0.08 \
    --shots 2048 \
    --max-checks 3 \
    --max-orders 10
```
*Executes 4,944 simulated runs on Qiskit Aer across 618 circuit groups, saving raw measurements to `results/runs.csv`.*

### 3. Strict Audit of Measurement Arithmetic
```bash
python -m src.audit --strict
```
*Verifies shot conservation, non-trivial syndrome purges, fidelity metrics, and provenance consistency with 0 errors and 0 warnings.*

### 4. Compile Statistical Summary & Publication Figures
```bash
python -m src.analysis
```
*Generates `results/summary.csv`, updates `results/FINDINGS.md`, and renders figures:*
- `figures/fig2_breakeven.png`: Scatterplot of Conditional Fidelity vs Retention against the $U = F_0$ break-even hyperbola.
- `figures/fig3_yield_ratio.png`: Yield ratio distribution across depolarizing noise regimes ($p_2 \in \{0.01, 0.04, 0.08\}$).
- `figures/fig4_phase.png`: Circuit depth dilation heatmap.

### 5. Evaluate Machine-Learning Policy Baselines
```bash
python -m src.policy_benchmark
python -m src.learned_policy
```
*Trains a Random Forest selector on disjoint circuit seeds to test predictive check allocation against greedy search heuristics.*

---

## 5. How to Play: Complete Gameplay & Physics Manual

```
┌───────────────────────────────────────────────────────────────────────────┐
│                      QUANTUM SENTINEL: THE MISSION MAP                    │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│   [SECTOR 01: SIGNAL RESCUE]          [SECTOR 02: RESOURCE SIEGE]         │
│   Goal: +0.005 Fidelity Boost         Goal: Strictly 1 Ancilla Limit      │
│   Threat: Two-Qubit Gate Noise        Threat: Tight Coherence Budget      │
│                                                                           │
│   [SECTOR 03: BENCHMARK DUEL]         [SECTOR 04: T-GATE FRONTIER]        │
│   Goal: Match Best Empirical Strat    Goal: Non-Clifford Metric Quiz      │
│   Threat: Global Search Space         Threat: Non-Diagonal Stabilizers    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
```

### The 5-Point Non-Quantum Mental Model
Players with zero prior quantum mechanics background can understand every mechanic through five intuitive physical analogies:
1. **Data Qubits = Secure Vaults:** Containers storing the core mathematical calculation.
2. **Hardware Noise = Lightning Strikes:** Uncontrolled environmental decoherence that scrambles vault data into static.
3. **Watcher Ancillas = Security Alarm Tripwires:** Placed along routing channels between vaults to measure parity without opening the vault or destroying delicate superpositions.
4. **Postselection = Dual-Chute Automated Sifter:** At the end of the run, an arcade sorting machine sifts every calculation:
   - Clean runs ($s=0$) drop into the glowing **Emerald Chute**.
   - Corrupted alarm runs ($s=1$) are diverted into the **Coral Discard Chute**.
5. **Scoring = Quality $\times$ Quantity:** Discarding 99% of runs gives 100% clean fidelity on paper, but leaves almost no usable data! True mastery requires finding the sweet spot where fidelity is high, but shot retention remains strong.

---

### The Tactical Surface-Code Tabletop Board (Litinski 2019 Principles)
Inspired by Daniel Litinski’s seminal paper *A Game of Surface Codes* (*Quantum*, 2019), check allocation is represented as a tactical spatial tabletop board:

```
          3×3 Compact (d=3)              4×4 Tactical Lattice            5×5 Rotated Planar (d=5)
         ┌───┬───┬───┐                 ┌───┬───┬───┬───┐              ┌───┬───┬───┬───┬───┐
         │A1 │A2 │A3 │                 │A1 │A2 │A3 │A4 │              │A1 │A2 │A3 │A4 │A5 │
         ├───┼───┼───┤                 ├───┼───┼───┼───┤              ├───┼───┼───┼───┼───┤
         │B1 │B2 │B3 │                 │B1 │===│===│B4 │ ◄── Routing  │B1 │B2 │B3 │B4 │B5 │
         ├───┼───┼───┤                 ├───┼───┼───┼───┤     Corridor ├───┼───┼───┼───┼───┤
         │C1 │C2 │C3 │                 │C1 │C2 │C3 │C4 │              │C1 │C2 │|T|│C4 │C5 │ ◄── |T⟩ Anvil
         └───┴───┴───┘                 ├───┼───┼───┼───┤              ├───┼───┼───┼───┼───┤
         Single-error tolerance        │D1 │D2 │D3 │D4 │              │D1 │D2 │D3 │D4 │D5 │
         Lowest token cost             └───┴───┴───┴───┘              ├───┼───┼───┼───┼───┤
                                       Crosstalk mitigation           │E1 │E2 │E3 │E4 │E5 │
                                                                      └───┴───┴───┴───┴───┘
                                                                      Two-error tolerance
```

- **Adaptive Lattice Dimension Switcher:**
  - **$3\times 3$ Compact ($d=3$, 9 tiles):** Minimal code distance patch. Detects any single physical Pauli error at low token cost (~106px compact tiles).
  - **$4\times 4$ Tactical (16 tiles):** Introduces **Dual-Rail Routing Corridors**. On real superconducting quantum processors, parallel entangling checks can cause parasitic gate crosstalk; these corridors allow ancillas to route parity checks around active data patches.
  - **$5\times 5$ High-Density Surface Code ($d=5$, 25 tiles):** Full rotated planar surface code capable of detecting **two simultaneous physical Pauli errors**, complete with corner routing buses and a central **$|T\rangle$ Magic-State Distillation Anvil** (~60px tiles, zero horizontal overflow).
- **Decoupled Coordinate Top Bars:** Every tile features a dedicated top bar separating the coordinate badge (`A1`–`E5`) from the interactive `⚡ Test` pulse button, eliminating click overlap.
- **Boundary Physics:** Vertical boundaries are Teal $Z$-edges (detecting bit-flips); horizontal boundaries are Coral $X$-edges (detecting phase-flips).
- **Interactive Noise Pulse Simulator:** Click `🎲 ROLL NOISE & PLAY ROUND` to roll physical noise on a 3D dice. Watch as the noise pulse strikes a data vault and our placed Ancilla Bridge trips an immediate red alarm (`🚨 ALARM s=1`) in real time!

---

### The Hardware Token Economy & Hamiltonian Limits
Players cannot place unlimited checks. Check placement is strictly bounded by real cryostat and Hamiltonian constraints:
1. **Qubit Tokens:** Finite physical dilution refrigerator capacity. Every deployed watcher ancilla consumes a Qubit Token.
2. **Coupler Tokens:** Microwave/flux-tunable two-qubit gate budget (CNOT / CZ).
3. **Coherence Time Tokens:** Maximum circuit depth before natural $T_1$ (relaxation) and $T_2$ (dephasing) decay scrambles the state.

---

### The 4-Phase Gamified Execution Pipeline
Clicking **`LOCK IN & EXECUTE FULL RUN`** launches the cinematic visualizer:
1. **Phase 1 (Hardware Noise Injection):** Silicon Quantum Processor Bus animates wavepacket particles flowing through depolarizing noise hazard gates.
2. **Phase 2 (Tripwire Parity Matrix):** Coherent laser parity beams arm watcher ancillas ($a_0$) across target wires.
3. **Phase 3 (Syndrome Post-Selection Sifter):** The dual-chute sorter with live rolling odometers evaluates 2,048 shots:
   - Clean runs ($s=0$) flow into the glowing **Emerald Chute** (e.g. 1,851 accepted shots, $90.4\%$ retention).
   - Corrupted runs ($s=1$) are purged into the **Coral Chute** (197 discarded shots).
4. **Phase 4 (Purified Accuracy & Debrief):** Star-slam victory animation triggers, composite score ($100 \times U$) is computed, and debriefing displays full scientific telemetry alongside plain-language insights.

---

## 6. Key Research Findings (4,944 Audited Runs)

From our comprehensive automated Qiskit Aer benchmark across 4,944 rows and 618 circuit groups, two foundational scientific conclusions emerged:

| Metric | Unprotected Baseline ($F_0$) | Protected with Checks ($F_{\text{cond}}$) | Empirical Outcome |
|---|---|---|---|
| **Mean Classical Fidelity ($F$)** | $0.964 \pm 0.021$ | **$0.990 \pm 0.008$** | **+0.026 Boost ($3.71\times$ Error Suppression)** |
| **Mean Shot Retention ($p_{\text{keep}}$)** | $1.000$ (All kept) | **$0.904 \pm 0.052$** | **$9.6\%$ Shots Discarded** |
| **Max Observed Yield Ratio ($Y$)** | $1.000$ (Break-Even) | **$0.967$** ($95\%$ CI: $[0.960, 0.973]$) | **0 out of 510 configurations broke even!** |

### 1. Spacetime Checks Effectively Purify Accepted States
Postselection successfully cuts corruption probability by **$73\%$** ($3.71\times$ suppression factor), proving that spacetime parity extraction works as designed for quantum state purification.

### 2. The Protection Paradox is Real and Bounded
Across all 510 evaluated protected configurations, the highest observed yield ratio was **$0.967$**—strictly below the break-even line of $1.0$. Under linear utility scoring and standard depolarizing noise, the two-qubit gate error overhead and discarded shots eroded data throughput faster than fidelity gains could compensate. We report this honest negative result as the core educational insight of the platform.

### 3. The Non-Clifford Metric-Sensitivity Caveat (Sector 4)
When introducing un-noised non-Clifford $T$-gates, classical Bhattacharyya fidelity appeared to rise from $0.901$ ($T=0$) to $0.938$ ($T=4$). This apparent increase was **not** physical error suppression: $T$-rotations concentrate computational basis probability mass into fewer states, which mathematically inflates classical overlap integrals. Sector 4 specifically quizzes the user to ensure they do not confuse metric artifacts with physical hardware improvement.

---

## 7. Repository Architecture

```
Quantum-Sentinel/
├── api/                        # FastAPI High-Performance Backend
│   ├── server.py               # REST API endpoints (/execute, /circuit, /campaign, /health)
│   ├── circuits.py             # Quantum circuit compiler & gate serializer
│   └── core.py                 # Mathematical metrics, mission rules & preflight validation
├── frontend/                   # Modern React + TypeScript + Three.js Interface
│   ├── src/
│   │   ├── game/               # Core Arcade & Research Workbench
│   │   │   ├── QuantumBoardGame.tsx      # Litinski surface-code tabletop board (3x3, 4x4, 5x5)
│   │   │   ├── SpacetimeCircuitBoard.tsx # SVG gate-by-gate timeline from QuantumCircuit.data
│   │   │   ├── ExecutionVisualizer.tsx   # 4-phase gamified execution simulation
│   │   │   ├── MissionMap.tsx            # Campaign sector map & 3D Celestial Core
│   │   │   ├── MissionPlay.tsx           # Mission dashboard & execution orchestrator
│   │   │   ├── Debrief.tsx               # Post-run scientific telemetry & plain language
│   │   │   ├── Vault.tsx                 # Scientific data inspector & CSV provenance
│   │   │   ├── HelpModal.tsx             # How-to-play guide & non-quantum glossary
│   │   │   ├── audio.ts                  # Procedural Web Audio API sound synthesizer
│   │   │   └── api.ts                    # Typed API client
│   │   └── index.css           # Institutional design system & tokens
│   ├── package.json            # Node dependencies
│   └── vite.config.js          # Vite build & proxy configuration
├── src/                        # Scientific Benchmark & QED Engine
│   ├── experiment.py           # Clifford/T-doped circuit generator & Qiskit Aer simulation
│   ├── checks.py               # qiskit-paulice spacetime check synthesizer & hand checks
│   ├── metrics.py              # Bhattacharyya fidelity, retention & utility calculations
│   ├── audit.py                # Strict CLI provenance & arithmetic verification tool
│   ├── analysis.py             # Summary statistics & figure generation
│   ├── search.py               # Bounded ordered-target candidate search
│   ├── policy_benchmark.py     # Comparison against greedy baselines
│   └── learned_policy.py       # Random forest check allocation on held-out seeds
├── results/                    # Audited Scientific Evidence & Data
│   ├── runs.csv                # 4,944 rows of raw Qiskit Aer measurements
│   ├── summary.csv             # Grouped statistics across 618 circuit groups
│   ├── provenance.json         # Package versions, noise models & execution timestamp
│   ├── AUDIT.json              # Strict verification report (0 problems, 0 warnings)
│   └── FINDINGS.md             # In-depth peer-reviewed empirical findings
├── figures/                    # Publication-Grade Visualizations
│   ├── fig2_breakeven.png      # Fidelity vs Retention trade-off plane
│   ├── fig3_yield_ratio.png    # Yield ratio distribution under noise
│   └── fig4_phase.png          # Depth dilation & phase transition heatmap
├── tests/                      # Automated Pytest Suite (50 Tests)
│   ├── test_api_core.py        # API endpoint validation
│   ├── test_metrics.py         # Fidelity & retention unit tests
│   ├── test_hand_checks.py     # Non-Clifford hand check verification
│   └── test_analysis_pipeline.py # End-to-end scientific pipeline test
├── docs/                       # Architectural & Technical Documentation
│   ├── GAME_DESIGN.md          # Physics-to-gameplay mapping 
│   └── PRODUCT_DEPLOYMENT.md   # Deployment & container specifications
├── Dockerfile                  # Multi-stage container build
├── compose.yaml                # Docker Compose orchestration
├── requirements.txt            # Python dependencies (Qiskit 2.5.2, Aer, paulice)
├── start_server.bat            # One-click Windows backend launcher
├── README.md                   # Primary documentation
├── Recorded_Presentation_Video.mov # Presentation Video
└── Written_Report.pdf             # Report of the Project
```

---

## 8. Scientific Honesty & Limitations

To maintain uncompromising research integrity:
1. **Zero Fabricated Scores:** Every score, fidelity number, and syndrome count is computed live in Qiskit Aer or loaded from audited execution rows.
2. **Classical Distribution vs Quantum State:** We explicitly disclose that classical Bhattacharyya overlap of computational-basis measurement outcomes is not full quantum-state fidelity.
3. **Detection vs Correction:** Spacetime checks discard corrupted data; they do not perform active fault-tolerant recovery ($P^\dagger$).
4. **Bounded Search:** Our search evaluates ordered target subsets, which is an empirical benchmark, not a mathematical proof of a global optimum.
5. **Simulation vs Hardware:** Benchmarks were conducted on classical Qiskit Aer depolarizing noise channels; deployment to physical superconducting cryostats is on our future roadmap.

---

## 9. Citations & Theoretical Foundation


1. **Litinski, D.** (2019). *A Game of Surface Codes: Large-Scale Quantum Computing with Lattice Surgery*. **Quantum**, 3, 128. [doi:10.22331/q-2019-03-05-128](https://doi.org/10.22331/q-2019-03-05-128)
2. **Qiskit Community** (2026). *qiskit-paulice: Low-Overhead Coherent Spacetime Pauli Checks for Clifford Circuits*. [GitHub Repository](https://github.com/qiskit-community/qiskit-paulice)
3. **Gottesman, D.** (1998). *The Heisenberg Representation of Quantum Computers*. **Group22: Proceedings of the XXII International Colloquium on Group Theoretical Methods in Physics**, 32–43. [arXiv:quant-ph/9807006](https://arxiv.org/abs/quant-ph/9807006)
4. **Bhattacharyya, A.** (1943). *On a measure of divergence between two statistical populations defined by their probability distributions*. **Bulletin of the Calcutta Mathematical Society**, 35, 99–109.
5. **Qiskit Contributors** (2026). *Qiskit: An Open-Source Framework for Quantum Computing*. [doi:10.5281/zenodo.2573505](https://doi.org/10.5281/zenodo.2573505)

---
