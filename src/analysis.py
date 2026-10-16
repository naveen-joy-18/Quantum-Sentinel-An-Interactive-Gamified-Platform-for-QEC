"""Aggregate ``results/runs.csv`` into paper-ready tables, findings and figures.

Run: python -m src.analysis
Writes: results/summary.csv, results/FINDINGS.md, figures/fig2_breakeven.png,
        figures/fig3_yield_ratio.png, figures/fig4_phase.png
"""
from __future__ import annotations

import json
import math
import pathlib

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from scipy import stats
from src.inference import paired_comparisons

ROOT = pathlib.Path(__file__).resolve().parents[1]
RESULTS = ROOT / "results"
FIGURES = ROOT / "figures"

GROUP = ["n", "depth_parameter", "t_count", "target_order", "checks", "noise_2q"]
METRICS = ["retention", "conditional_fidelity", "baseline_fidelity",
           "yield_fraction", "yield_ratio", "error_suppression",
           "added_two_qubit", "added_depth", "added_ancillas"]


def load(path=None):
    return pd.read_csv(path or RESULTS / "runs.csv")


def mean_ci(values):
    x = np.asarray(values, float)
    x = x[np.isfinite(x)]
    if x.size == 0:
        return math.nan, math.nan, math.nan
    m = float(x.mean())
    if x.size < 2:
        return m, m, m
    se = x.std(ddof=1) / math.sqrt(x.size)
    h = stats.t.ppf(0.975, x.size - 1) * se
    return m, m - h, m + h


def aggregate(df):
    out = []
    group_fields = GROUP + [k for k in ["readout_noise", "shots"] if k in df.columns]
    for key, g in df.groupby(group_fields):
        rec = dict(zip(group_fields, key))
        for col in METRICS:
            m, lo, hi = mean_ci(g[col])
            rec[col] = m
            rec[f"{col}_lo"] = lo
            rec[f"{col}_hi"] = hi
        rec["n_seeds"] = int(g["seed"].nunique())
        out.append(rec)
    return pd.DataFrame(out)


def _fmt(x, nd=3):
    return "n/a" if x is None or (isinstance(x, float) and not math.isfinite(x)) else f"{x:.{nd}f}"


def findings(summary, df):
    lines = ["# Quantum Sentinel - automated findings", ""]
    lines.append(f"Rows analysed: {len(df)}. Groups: {len(summary)}. "
                 f"Circuit-instance seeds per group: at most {int(summary.n_seeds.max())}.")
    lines.append("")

    cliff = summary[(summary.t_count == 0) & (summary.checks > 0)]
    base = summary[(summary.t_count == 0) & (summary.checks == 0)]
    lines.append("## Result 1 - throughput (yield) trade-off for Clifford payloads")
    if len(cliff):
        worst = cliff.loc[cliff.yield_ratio.idxmax()]
        lines.append(
            f"Best protection strategy on throughput: **yield_ratio = "
            f"{_fmt(worst.yield_ratio)}** "
            f"(95% CI {_fmt(worst.get('yield_ratio_lo'))} to {_fmt(worst.get('yield_ratio_hi'))}) "
            f"at n={int(worst.n)}, depth={int(worst.depth_parameter)}, p2={worst.noise_2q}, "
            f"checks={int(worst.checks)}."
        )
        wins = int((cliff.yield_ratio_lo > 1).sum())
        lines.append(
            f"Strategies with lower 95% CI above composite-utility break-even (1): "
            f"**{wins} of {len(cliff)}**. "
        )
        if wins == 0:
            lines.append(
                "No statistically resolved utility improvements at the 95% level were found "
                "among the tested configurations; this does not establish that gains are impossible."
            )
    lines.append("")

    lines.append("## Result 2 - per-accepted-shot accuracy does improve")
    if len(cliff):
        best_acc = cliff.loc[cliff.conditional_fidelity.idxmax()]
        f0, f1 = best_acc.baseline_fidelity, best_acc.conditional_fidelity
        supp = (1 - f0) / (1 - f1) if f1 < 1 else float("nan")
        lines.append(
            f"Highest postselected accuracy: **{_fmt(f1)}** vs a baseline of {_fmt(f0)} "
            f"(error suppression x{_fmt(supp, 2)}), "
            f"at the cost of keeping {_fmt(100 * best_acc.retention, 1)}% of shots."
        )
    lines.append("")

    lines.append("## Result 3 - non-Clifford (T) family")
    trows = summary[summary.t_count > 0]
    if len(trows):
        piv = df[df.checks == 0].pivot_table(index=[k for k in ["n", "seed", "depth_parameter", "noise_2q", "readout_noise", "shots"] if k in df.columns],
                             columns="t_count", values="baseline_fidelity")
        for t in sorted(int(x) for x in df.t_count.unique()):
            g = df[(df.t_count == t) & (df.checks == 0)].baseline_fidelity
            delta = ""
            if t != 0 and 0 in piv.columns and t in piv.columns:
                delta = f", matched delta vs T=0 = {_fmt((piv[t] - piv[0]).mean(), 4)}"
            lines.append(f"- t_count={t}: baseline fidelity {_fmt(g.mean())} "
                         f"+/- {_fmt(g.std(ddof=1) if len(g) > 1 else 0)}{delta}.")
        lines.append(
            "T gates are inserted before non-diagonal gadget gates, so they may change the ideal "
            "distribution: the T axis is not inert. Note that adding deterministic, un-noised "
            "T gates tends to *concentrate* the ideal computational-basis distribution, which "
            "can raise the squared-Bhattacharyya score. This is a property of the metric, not "
            "evidence that T gates improve hardware fidelity; it is reported here as a "
            "metric-sensitivity caveat."
        )
    else:
        lines.append("No T-doped rows present.")
    lines.append("")

    lines.append("## Result 4 - regime dependence (exploratory, selection-optimistic)")
    c = summary[summary.t_count == 0].copy()
    if len(c):
        piv = c.pivot_table(index=["noise_2q", "depth_parameter"],
                            values="conditional_fidelity", aggfunc="max")
        lines.append("Maximum conditional fidelity by (p2, depth):")
        lines.append("")
        lines.append("| p2 | depth | max conditional fidelity |")
        lines.append("|---|---|---|")
        for (p2, depth), row in piv.iterrows():
            lines.append(f"| {p2} | {depth} | {_fmt(row.conditional_fidelity)} |")
    lines.append("")
    lines.append("## Interpretation and limitations")
    lines.append("This analysis reports *classical output-distribution fidelity*, not state fidelity. "
                 "The fidelity × retention utility is a game score, not a literal count of "
                 "correct shots or a universal sampling-cost metric. Confidence intervals "
                 "are across circuit-instance seeds, not proof of transfer to hardware. "
                 "Results apply only to the tested search space and noise assumptions. "
                 "`paired_comparisons.csv` reports per-circuit paired contrasts with Holm-adjusted "
                 "p-values; winner selection on the same data remains exploratory and "
                 "requires held-out confirmation.")
    return "\n".join(lines) + "\n"


def fig_breakeven(df, path):
    """EXACT break-even for U = p * F: Fchecked/F0 = 1/p.

    All plotted points come from paired configuration-level estimates; the
    reference is not an error-suppression heuristic.
    """
    # Work at the *individual simulated circuit* level: E[p]E[F] is not E[pF].
    s = df[(df.t_count == 0) & (df.checks > 0)].copy()
    s = s[(s.retention > 0) & (s.baseline_fidelity > 0)].copy()
    if s.empty:
        return
    x = 1 / s.retention
    y = s.conditional_fidelity / s.baseline_fidelity
    fig, ax = plt.subplots(figsize=(7, 5))
    sc = ax.scatter(x, y, c=s.checks, cmap="viridis", s=45, alpha=0.8)
    end = max(float(x.max()), float(y.max()), 1.03) * 1.04
    ax.plot([1, end], [1, end], color="black", ls="--", lw=1,
            label="Exact utility break-even: Fchecked/F0 = 1/retention")
    ax.set(xlabel="Inverse kept-shot fraction (1/p)",
           ylabel="Conditional distribution-fidelity ratio (Fchecked/F0)",
           title="Composite-utility break-even: retention × fidelity")
    ax.set_xlim(.99, end); ax.set_ylim(.90, end)
    ax.grid(alpha=.25); ax.legend(fontsize=8)
    fig.colorbar(sc, ax=ax, label="Number of checks")
    fig.tight_layout(); fig.savefig(path, dpi=170); plt.close(fig)


def fig_yield(summary, path):
    """Show exploratory ranges across configurations, not inferential intervals."""
    s = summary[(summary.t_count == 0) & (summary.checks > 0)].copy()
    if s.empty:
        return
    fig, ax = plt.subplots(figsize=(7, 5))
    for j, (p2, g) in enumerate(s.groupby("noise_2q")):
        ax.scatter(g.checks + j * .065, g.yield_ratio, alpha=.50, s=18,
                   label=f"p2={p2}")
    ax.axhline(1.0, color="black", ls="--", label="Utility break-even")
    ax.set(xlabel="Number of checks (slight x-offset for visibility)",
           ylabel="Composite utility ratio versus unprotected",
           title="Measured configurations: descriptive spread, not CI")
    ax.legend(fontsize=8); ax.grid(alpha=.25)
    fig.tight_layout(); fig.savefig(path, dpi=170); plt.close(fig)


def matched_phase_gains(df):
    """Within-instance best checked F minus within-instance unprotected F.

    The maximum checked F is chosen *on the same samples*, so this chart is
    exploratory and selection-optimistic; held-out validation is required.
    """
    c = df[df.t_count == 0].copy()
    keys = ["n", "seed", "depth_parameter", "noise_2q"]
    if "readout_noise" in c:
        keys.append("readout_noise")
    if "shots" in c:
        keys.append("shots")
    base = c[c.checks == 0].groupby(keys, as_index=False)["conditional_fidelity"].mean()
    checked = c[c.checks > 0].groupby(keys, as_index=False)["conditional_fidelity"].max()
    paired = checked.merge(base, on=keys, suffixes=("_checked", "_baseline"), validate="one_to_one")
    if paired.empty:
        return pd.DataFrame(columns=["noise_2q", "depth_parameter", "fidelity_gain"])
    paired["fidelity_gain"] = paired.conditional_fidelity_checked - paired.conditional_fidelity_baseline
    return (paired.groupby(["noise_2q", "depth_parameter"], as_index=False)
            .agg(fidelity_gain=("fidelity_gain", "mean"), n_instances=("fidelity_gain", "size")))


def fig_phase(df, path):
    grid = matched_phase_gains(df)
    if grid.empty:
        return
    p2s = sorted(grid.noise_2q.unique())
    depths = sorted(grid.depth_parameter.unique())
    mat = np.full((len(p2s), len(depths)), np.nan)
    for _, row in grid.iterrows():
        mat[p2s.index(row["noise_2q"]), depths.index(row["depth_parameter"])] = row["fidelity_gain"]
    fig, ax = plt.subplots(figsize=(1.6*len(depths)+2, 1.0*len(p2s)+2))
    im = ax.imshow(mat, origin="lower", aspect="auto", cmap="coolwarm")
    ax.set_xticks(range(len(depths)), labels=depths)
    ax.set_yticks(range(len(p2s)), labels=p2s)
    ax.set(xlabel="Payload depth setting", ylabel="Two-qubit depolarizing parameter",
           title="Within-instance best-tested fidelity gain (exploratory)")
    for i in range(len(p2s)):
        for j in range(len(depths)):
            if np.isfinite(mat[i, j]):
                ax.text(j, i, f"{mat[i,j]:+.3f}", ha="center", va="center", fontsize=8)
    fig.colorbar(im, ax=ax, label="Mean (best tested protected F − baseline F)")
    fig.tight_layout(); fig.savefig(path, dpi=170); plt.close(fig)

def main():
    df = load()
    if df.empty:
        raise ValueError("runs.csv has no rows")
    keys = ["n", "depth_parameter", "t_count", "seed", "noise_2q", "target_order", "checks"]
    for extra in ("readout_noise", "shots"):
        if extra in df: keys.append(extra)
    if df.duplicated(keys).any():
        raise ValueError("Duplicate strategy identity rows in runs.csv; regenerate experiment")
    if not ((df.retention >= 0) & (df.retention <= 1)).all():
        raise ValueError("Invalid retention values")
    if "retention" in df and "conditional_fidelity" in df:
        known = df[["retention", "conditional_fidelity", "baseline_fidelity", "yield_ratio"]].replace([np.inf, -np.inf], np.nan).dropna()
        expected = known.retention * known.conditional_fidelity / known.baseline_fidelity
        if not np.allclose(expected, known.yield_ratio, rtol=1e-4, atol=1e-6):
            raise ValueError("Recorded utility ratio is inconsistent with retention and fidelity")
    summary = aggregate(df)
    RESULTS.mkdir(exist_ok=True)
    FIGURES.mkdir(exist_ok=True)
    summary.to_csv(RESULTS / "summary.csv", index=False)
    paired_comparisons(df).to_csv(RESULTS / "paired_comparisons.csv", index=False)
    (RESULTS / "FINDINGS.md").write_text(findings(summary, df))
    fig_breakeven(df, FIGURES / "fig2_breakeven.png")
    fig_yield(summary, FIGURES / "fig3_yield_ratio.png")
    fig_phase(df, FIGURES / "fig4_phase.png")
    print(f"Aggregated {len(df)} rows into {len(summary)} groups -> results/summary.csv")
    print("Wrote results/FINDINGS.md and figures/fig2_breakeven.png, fig3_yield_ratio.png, fig4_phase.png")


if __name__ == "__main__":
    main()
