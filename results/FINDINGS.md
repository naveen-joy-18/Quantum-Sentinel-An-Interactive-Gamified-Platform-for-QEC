# Quantum Sentinel - automated findings

Rows analysed: 4944. Groups: 618. Circuit-instance seeds per group: at most 8.

## Result 1 - throughput (yield) trade-off for Clifford payloads
Best protection strategy on throughput: **yield_ratio = 0.967** (95% CI 0.960 to 0.973) at n=4, depth=3, p2=0.01, checks=1.
Strategies with lower 95% CI above composite-utility break-even (1): **0 of 510**. 
No statistically resolved utility improvements at the 95% level were found among the tested configurations; this does not establish that gains are impossible.

## Result 2 - per-accepted-shot accuracy does improve
Highest postselected accuracy: **0.990** vs a baseline of 0.964 (error suppression x3.71), at the cost of keeping 78.5% of shots.

## Result 3 - non-Clifford (T) family
- t_count=0: baseline fidelity 0.901 +/- 0.138.
- t_count=1: baseline fidelity 0.924 +/- 0.097, matched delta vs T=0 = 0.0235.
- t_count=2: baseline fidelity 0.930 +/- 0.072, matched delta vs T=0 = 0.0291.
- t_count=4: baseline fidelity 0.938 +/- 0.067, matched delta vs T=0 = 0.0375.
T gates are inserted before non-diagonal gadget gates, so they may change the ideal distribution: the T axis is not inert. Note that adding deterministic, un-noised T gates tends to *concentrate* the ideal computational-basis distribution, which can raise the squared-Bhattacharyya score. This is a property of the metric, not evidence that T gates improve hardware fidelity; it is reported here as a metric-sensitivity caveat.

## Result 4 - regime dependence (exploratory, selection-optimistic)
Maximum conditional fidelity by (p2, depth):

| p2 | depth | max conditional fidelity |
|---|---|---|
| 0.01 | 3 | 0.987 |
| 0.01 | 6 | 0.982 |
| 0.01 | 10 | 0.990 |
| 0.04 | 3 | 0.965 |
| 0.04 | 6 | 0.943 |
| 0.04 | 10 | 0.955 |
| 0.08 | 3 | 0.930 |
| 0.08 | 6 | 0.889 |
| 0.08 | 10 | 0.902 |

## Interpretation and limitations
This analysis reports *classical output-distribution fidelity*, not state fidelity. The fidelity × retention utility is a game score, not a literal count of correct shots or a universal sampling-cost metric. Confidence intervals are across circuit-instance seeds, not proof of transfer to hardware. Results apply only to the tested search space and noise assumptions. `paired_comparisons.csv` reports per-circuit paired contrasts with Holm-adjusted p-values; winner selection on the same data remains exploratory and requires held-out confirmation.
