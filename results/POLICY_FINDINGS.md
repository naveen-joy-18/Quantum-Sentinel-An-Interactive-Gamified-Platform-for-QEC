# Held-out strategy policy comparison

Data source: real Qiskit Aer rows in `runs.csv` only.
Unit of replication: independently generated circuit instance (seed).
Fixed train/test split by seed; same shot and noise conditions within a group.
Risk-aware selector = training mean utility minus one training standard error.
Policies are tested only on actually measured configurations; missing candidates are never imputed.
No AI superiority, Nature-level novelty or global optimum is presumed.

| Policy | Held-out groups | Mean Δ utility ratio (descriptive) |
|---|---:|---:|
| first_check | 26 | -0.1391 |
| max_training_fidelity | 26 | -0.2104 |
| max_training_utility | 26 | -0.1437 |
| risk_aware_utility | 26 | -0.1428 |
| unprotected | 27 | +0.0000 |

These grouped summaries are descriptive, not statistical evidence of dominance.
