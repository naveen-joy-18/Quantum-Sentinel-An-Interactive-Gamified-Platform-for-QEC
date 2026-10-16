# Learned policy: research evaluation

Random-forest ranking predicts the utility ratio of checked circuits from circuit and check features.
Training and test circuit seeds are globally disjoint. No test fidelity is used for policy selection.
The comparator module (`src.policy_benchmark`) evaluates non-AI policies.
Statistical superiority and novelty are **not** established by code alone.
Complete held-out scenario groups: 26.

Scoring uses classical output-distribution fidelity, not quantum-state fidelity.
The selected check must be measured in every held-out circuit; otherwise the comparison abstains.
