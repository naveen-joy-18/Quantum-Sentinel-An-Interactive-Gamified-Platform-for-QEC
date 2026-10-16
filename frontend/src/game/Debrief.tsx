import React, { useEffect, useState } from 'react';
import {
  CheckCircle2, XCircle, Star, RotateCcw, ChevronRight, Map, Zap,
  CircleHelp, Activity, ShieldCheck, ArrowRight, BookOpen, Layers,
  TrendingUp, Award, Play
} from 'lucide-react';
import type { AttemptResult } from './api';
import type { Sector } from './story';
import ExecutionVisualizer from './ExecutionVisualizer';

function useCountUp(target: number, ms = 950): number {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / ms);
      setV(target * (0.5 - 0.5 * Math.cos(Math.PI * p)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return v;
}

export default function Debrief({
  result,
  sector,
  stars,
  xpGained,
  rankedUp,
  onRetry,
  onNext,
  onMap,
  hasNext,
  onHelp,
}: {
  result: AttemptResult;
  sector: Sector;
  stars: number;
  xpGained: number;
  rankedUp: boolean;
  onRetry: () => void;
  onNext: () => void | null;
  onMap: () => void;
  hasNext: boolean;
  onHelp: () => void;
}) {
  const { row, verdict } = result;
  const [syndrome, setSyndrome] = useState<Record<string, number>>({});
  const [activeTab, setActiveTab] = useState<'plain' | 'quantum'>('plain');
  const [showWalkthrough, setShowWalkthrough] = useState(false);

  useEffect(() => {
    try {
      setSyndrome(row.syndrome_histogram ? JSON.parse(row.syndrome_histogram) : {});
    } catch {
      setSyndrome({});
    }
  }, [row.syndrome_histogram]);

  const passed = verdict.passed;
  const shots = Number(row.shots) || 2048;
  const kept = (100 * Number(row.retention)).toFixed(1);
  const fid = (100 * Number(row.conditional_fidelity)).toFixed(1);
  const baseFid = (100 * Number(row.baseline_fidelity)).toFixed(1);
  const gain = ((Number(row.conditional_fidelity) - Number(row.baseline_fidelity)) * 100).toFixed(1);
  const shownScore = useCountUp(verdict.score);

  const accepted = row.accepted ?? Math.round(shots * (Number(row.retention) || 1));
  const rejected = shots - accepted;

  return (
    <>
      {showWalkthrough && (
        <ExecutionVisualizer
          mission={sector}
          spec={{
            n: row.n,
            seed: row.seed,
            depth_parameter: row.depth_parameter,
            noise_2q: row.noise_2q,
            shots: row.shots,
            t_count: row.t_count,
            target_order: row.target_order,
            checks: row.checks,
            readout: Number(row.readout_noise) || 0.01,
          }}
          result={result}
          onComplete={() => setShowWalkthrough(false)}
        />
      )}

      <div className={`debrief-container ${passed ? 'pass' : 'fail'}`} style={{ ['--accent' as string]: sector.accent }}>
        {/* Banner */}
        <div className={`debrief-hero ${passed ? 'hero-pass' : 'hero-fail'}`}>
          <div className="hero-status-icon">
            {passed ? <CheckCircle2 size={36} color="#14b8a6" /> : <XCircle size={36} color="#ff6b5a" />}
          </div>
          <div className="hero-text">
            <span className="hero-subtitle">
              EPISODE {sector.id} · {sector.label} · {sector.codename}
            </span>
            <h2>{passed ? 'MISSION SUCCESS: SECTOR SECURED!' : 'OBJECTIVE MISSED: THREAT ESCAPED'}</h2>
            <p className="hero-summary">
              {passed ? (
                <>
                  Your spacetime check caught <b>{rejected.toLocaleString()} corrupted runs</b>, boosting accuracy
                  from <b>{baseFid}%</b> to <b>{fid}%</b> (<b>+{gain}% gain</b>) while keeping <b>{kept}% of shots</b>!
                </>
              ) : (
                <>
                  {verdict.reasons[0] || 'The chosen strategy did not satisfy the target accuracy gain or shot retention budget.'}
                </>
              )}
            </p>
          </div>
          <div className="hero-rewards">
            <div className="star-row">
              {Array.from({ length: 3 }, (_, i) => (
                <Star key={i} size={22} className={i < stars ? 'star-filled on star-pop' : 'star-empty'} />
              ))}
            </div>
          </div>
        </div>

        {/* Big Score & Impact Cards */}
        <div className="debrief-metrics-grid">
          {/* Main Score Card */}
          <div className="metric-card score-card">
            <div className="metric-header">
              <Award size={16} color="#14b8a6" />
              <span>FINAL MISSION SCORE</span>
            </div>
            <div className="score-display">
              <strong style={{ color: '#14b8a6' }}>
                {passed ? shownScore.toFixed(1) : verdict.score.toFixed(1)}
              </strong>
              <span className="score-sub">POINTS</span>
            </div>
            <p className="metric-desc">
              Formula: <b>Accuracy ({fid}%) × Retention ({kept}%) × 100</b>
            </p>
          </div>

          {/* Before & After Comparison */}
          <div className="metric-card compare-card">
            <div className="metric-header">
              <TrendingUp size={16} color="#14b8a6" />
              <span>BEFORE VS AFTER PROTECTION</span>
            </div>
            <div className="compare-grid">
              <div className="compare-col before">
                <small>WITHOUT CHECKS (RAW)</small>
                <strong>{baseFid}%</strong>
                <span>100% shots kept (full noise)</span>
              </div>
              <div className="compare-arrow">
                <ArrowRight size={18} />
              </div>
              <div className="compare-col after">
                <small>WITH CHECKS (POST-SELECTED)</small>
                <strong style={{ color: '#14b8a6' }}>{fid}%</strong>
                <span>{kept}% clean shots kept</span>
              </div>
            </div>
            <div className="compare-footer">
              <span className="gain-chip" style={{ color: Number(gain) >= 0 ? '#14b8a6' : '#ff6b5a' }}>
                {Number(gain) >= 0 ? `+${gain}%` : `${gain}%`} Net Accuracy Boost
              </span>
              <span className="filtered-chip">
                {rejected.toLocaleString()} corrupted runs discarded
              </span>
            </div>
          </div>

          {/* Resources Card */}
          <div className="metric-card resource-card">
            <div className="metric-header">
              <Layers size={16} color="#14b8a6" />
              <span>HARDWARE OVERHEAD</span>
            </div>
            <div className="resource-pills">
              <div className="res-pill">
                <strong>+{row.added_ancillas || 0}</strong>
                <span>Helper Qubits</span>
              </div>
              <div className="res-pill">
                <strong>+{row.added_two_qubit || 0}</strong>
                <span>Extra 2Q Gates</span>
              </div>
              <div className="res-pill">
                <strong>+{row.added_depth || 0}</strong>
                <span>Added Depth</span>
              </div>
            </div>
            <p className="metric-desc">
              Checks add minimal hardware: only +{row.added_ancillas || 0} extra wire(s).
            </p>
          </div>
        </div>

        {/* Tab Switcher: Plain English Story vs Deep Quantum Details */}
        <div className="debrief-tabs">
          <button
            className={`debrief-tab ${activeTab === 'plain' ? 'active' : ''}`}
            onClick={() => setActiveTab('plain')}
          >
            <BookOpen size={15} /> Plain English Explanation
          </button>
          <button
            className={`debrief-tab ${activeTab === 'quantum' ? 'active' : ''}`}
            onClick={() => setActiveTab('quantum')}
          >
            <Activity size={15} /> Quantum Science & Qiskit Data
          </button>
          <button
            className="walkthrough-btn"
            onClick={() => setShowWalkthrough(true)}
            title="Replay step-by-step visualizer"
          >
            <Play size={14} fill="currentColor" /> Replay Execution Steps
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'plain' ? (
          <div className="tab-pane plain-pane">
            <div className="plain-grid">
              {/* Mission Objectives Checklist */}
              <div className="intel-card">
                <h3>MISSION REQUIREMENTS CHECKLIST</h3>
                <div className="checklist">
                  {verdict.reasons.map((r, i) => (
                    <div key={i} className="check-item">
                      <span className="bullet">●</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Concept Explained Simply */}
              <div className="intel-card concept-card">
                <h3>HOW SPACETIME ERROR DETECTION WORKED</h3>
                <p>
                  Think of sending fragile porcelain cups through the mail. Rather than wrapping them in heavy steel
                  armor (which is quantum error correction), we place a delicate seal on each box (the <b>watcher check</b>).
                </p>
                <ul>
                  <li>
                    <b>The Noise:</b> While traveling through quantum gates, noise jostles the boxes, cracking some seals.
                  </li>
                  <li>
                    <b>The Detection:</b> When the packages arrive, helper qubits check the seals. Boxes with broken seals
                    (<b>syndrome = 1</b>) are thrown away!
                  </li>
                  <li>
                    <b>The Result:</b> The surviving unsealed boxes (<b>syndrome = 0</b>) have near-perfect cups inside!
                    Accuracy went from {baseFid}% to {fid}%.
                  </li>
                  <li>
                    <b>The Trade-off:</b> You threw away {rejected.toLocaleString()} boxes. If you throw away too many,
                    you have no shipment left. Your high score comes from balancing accuracy and kept shipments.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="tab-pane quantum-pane">
            <div className="quantum-grid">
              {/* Syndromes Breakdown */}
              <div className="intel-card">
                <h3>MEASURED SYNDROME PARITIES (ALARM DISTRIBUTION)</h3>
                <p className="micro-text">
                  Qiskit Aer measured these classical bitstring outcomes from the helper ancilla registers:
                </p>
                <div className="syndrome-list">
                  {Object.entries(syndrome).map(([key, val]) => {
                    const isClean = key === '0' || key === '00' || key === 'unprotected';
                    const pct = ((val / shots) * 100).toFixed(1);
                    return (
                      <div key={key} className={`syn-item ${isClean ? 'clean' : 'corrupted'}`}>
                        <div className="syn-code">
                          <code>{key}</code>
                          <span>{isClean ? 'Clean (Kept)' : 'Error Alarm (Discarded)'}</span>
                        </div>
                        <div className="syn-bar-wrap">
                          <div className="syn-bar" style={{ width: `${pct}%`, backgroundColor: isClean ? '#14b8a6' : '#ff6b5a' }} />
                        </div>
                        <div className="syn-count">
                          <b>{val.toLocaleString()}</b> shots ({pct}%)
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Exact Formula & References */}
              <div className="intel-card">
                <h3>SCIENTIFIC PROVENANCE & FORMULAS</h3>
                <div className="formula-box">
                  <div className="formula-line">
                    <code>Fidelity F = (∑ √(P_ideal(x) · P_measured(x)))²</code>
                    <small>Squared Bhattacharyya overlap between measured classical distribution and ideal statevector.</small>
                  </div>
                  <div className="formula-line">
                    <code>Game Score = 100 × F × r</code>
                    <small>Where r is the retained-shot fraction (kept shots / attempted shots).</small>
                  </div>
                  <div className="formula-line">
                    <code>Source: {result.source}</code>
                    <small>Generated using real Qiskit Aer simulations; zero fabricated scores.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="debrief-nav-bar">
          <button className="nav-btn ghost" onClick={onMap}>
            <Map size={16} /> Return to Mission Map
          </button>
          <button className="nav-btn ghost" onClick={onRetry}>
            <RotateCcw size={16} /> Re-tune Strategy
          </button>
          {hasNext && passed && (
            <button className="nav-btn primary" onClick={() => onNext()}>
              Deploy Next Episode <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </>
  );
}