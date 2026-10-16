# Quantum Sentinel — Game Design and Physics Mapping

## Fiction

You are a **Sentinel** protecting a quantum computation ("the payload") as it runs on a noisy
device. Errors are invisible until measured. You deploy **coherent spacetime checks** — small
ancilla-assisted parity checks — that raise a syndrome alarm when they can see an error. Shots
whose syndrome is non-trivial are discarded. Checks cost hardware (ancillas, gates, depth) and
discard shots, so protection is a resource trade-off, not a free win.

## The one rule that matters

> The score is never chosen by the designer. It is `100 × F × r`, where `F` is the classical
> output-distribution fidelity of the post-selected shots and `r` is the fraction of shots kept —
> both computed by Qiskit Aer from the actual circuit the player built.

## Rule → physics mapping

| Game element | Physics / required step in the brief |
|---|---|
| Selecting target qubits on the board | *Which target qubits the checks attach to* (check placement) |
| Check-count slider | *How many checks are added* (`add_pauli_checks` returns one circuit per check count) |
| Ancilla budget | **Added ancilla qubits** (`added_ancillas`) |
| Gate budget | **Added two-qubit gates** (`added_two_qubit`) |
| Depth budget | **Added circuit depth** (`added_depth`) |
| Kept-shot floor | **Post-selected fraction retained** (`retention`) |
| Engage / scan | Real Qiskit Aer run + syndrome measurement + post-selection |
| Fidelity ring | Post-selected **output-distribution fidelity** `F` |
| Kept-shots ring | **Retained fraction** `r` |
| Composite score | Game utility `100 × F × r` (not a literal correct-shot count) |
| Utility ratio | `U / F0` vs the unprotected baseline (`yield_ratio`) |
| Syndrome bars | Measured syndrome histogram; all-zero kept, otherwise discarded |
| T-gate sector | Matched unprotected Clifford vs T-doped comparison; T is diagonal so checks only survive if their Pauli acts as `I` or `Z` there |

## Sectors

1. **Signal Rescue** — fixed gain `+0.005` with any valid checks; broad budget. Teaches that checks
   detect but also discard.
2. **Resource Siege** — fixed gain `+0.003`, at most **one ancilla**, tight gates/depth, higher
   kept-shot floor. Teaches that the most accurate choice can be too expensive.
3. **Benchmark Duel** — match the best *tested, feasible* protected candidate. Teaches that a
   measured "best" is not a proven global optimum.
4. **T-Gate Frontier** — run a matched T comparison and choose the scientifically valid
   interpretation. Teaches the limit of automatic Pauli checks across non-diagonal gates.

## Stars, XP and ranks

- ★ mission passed.
- ★★ passed **and** utility ratio ≥ 0.90.
- ★★★ passed **and** kept-shot fraction ≥ 0.80 (≥ 0.85 in Resource Siege).
- XP = `round(score) + 25·stars + 10·sector`; ranks run Cadet → Operator → Sentinel → Warden →
  Archon → Quantum Legend. Progress persists in `localStorage`.

## Integrity guarantees

- No win is granted on a configuration that has not actually been measured (cached) or executed
  (live). Missing cached configurations produce an explicit message, never a substituted score.
- The preflight marks a target *mathematically unattainable* before play rather than clipping it.
- T-doped payloads are never given invented non-Clifford check results.
- Animated artwork is decorative; all scientific claims come from the gate serializer and Aer.

## Controls & Gameplay Suite

- **Non-quantum onboarding** — persistent **GUIDE** button in the floating bottom utility dock opening `HelpModal`: goal → controls → what execution does → how to read results, plus a glossary.
- **Topless Minimalist Canvas & Floating Bottom Dock** — eliminates cluttered top headers in favor of a clean, responsive light theme with a floating utility dock (`.bottom-floating-tools`) for Audio FX and Guide.
- **Surface-Code Tabletop Board Game (Litinski 2019 Principles)** — an interactive tabletop board inspired by Daniel Litinski's *A Game of Surface Codes* (Quantum, 2019):
  - **Physical Qubit Tiles:** 2D grid of computational qubit blocks ($q_0$ to $q_3$).
  - **X & Z Boundary Edges:** Purple $X$-edges detect phase-flips, while Teal $Z$-edges detect bit-flips.
  - **Spacetime Time Costs:** Initialization is instantaneous ($\Delta t = 0$), while entangling couplers and measurements cost $\Delta t = 1$, letting players feel execution bottlenecks.
  - **Multi-Qubit Pauli Products:** Auxiliary ancilla regions measure $Z \otimes Z$ parity checks through the space between adjacent tiles.
- **Dual-View Switcher** — toggle between the **Surface-Code Tabletop Board** and the **Spacetime Quantum Circuit Timeline** (`SpacetimeCircuitBoard.tsx`), which draws live Qiskit Aer gates gate-by-gate on SVG wires directly from `QuantumCircuit.data`.
- **4-Phase Gamified Arcade Simulation Visualizer** (`ExecutionVisualizer.tsx`) — an arcade execution simulation modal:
  - **Phase 1 (Noise Injection):** Silicon quantum processor bus animating wavepacket particles through depolarizing noise hazard gates.
  - **Phase 2 (Tripwire Matrix):** Coherent laser parity tripwires arming watcher ancilla registers ($a_0$).
  - **Phase 3 (Syndrome Sifter):** Dual-chute arcade sorter with animated odometer roll-ups; clean runs flow into the glowing emerald chute ($s_0 = 0$), while corrupted alarm runs ($s_0 = 1$) are purged into the coral chute.
  - **Phase 4 (Purified Accuracy & Score):** Star-slam victory animation, score counter ($100 \times U$), and fidelity comparison gauge.
  - **Responsive Design:** Fixed header and footer with a scrollable middle chamber (`.exec-modal-body`) guaranteed to fit on standard laptop displays ($1366\times 768$, $1536\times 730$, $1920\times 1080$).
- **Debrief** — animated score count-up, star pop-in, verdict breakdown, plain-language and quantum telemetry tabs, and full replay capability.

All gameplay actions directly invoke real Qiskit Aer simulation or audited benchmark lookups; no numbers are mock or synthetic.
