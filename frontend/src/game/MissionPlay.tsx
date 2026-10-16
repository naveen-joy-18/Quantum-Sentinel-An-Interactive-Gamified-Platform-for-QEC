import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Play, Zap, Radio, ArrowLeft, Volume2, VolumeX, CheckCircle2,
  XCircle, ShieldAlert, Database, Wand2, Info, CircleHelp,
  Sliders, ShieldCheck, Sparkles, HelpCircle, Layers, Cpu, Dice5
} from 'lucide-react';
import {
  api, buildSpec, defaultBudget, defaultSetup, type Budget,
  type Health, type Mode, type Row, type Setup, type Spec, type AttemptResult
} from './api';
import type { Stage } from './three/Stage3D';
import { INTERPRETATIONS, type Sector } from './story';
import { audio } from './audio';
import ExecutionVisualizer from './ExecutionVisualizer';
import SpacetimeCircuitBoard from './SpacetimeCircuitBoard';
import QuantumBoardGame from './QuantumBoardGame';

// Recommended initial configurations per mission from measured dataset
const MISSION_DEFAULTS: Record<number, { setup: Setup; targets: number[]; checks: number; tCount?: number }> = {
  1: {
    setup: { n: 4, seed: 19, depth_parameter: 6, noise_2q: 0.04, shots: 2048, readout_noise: 0.01 },
    targets: [0, 1],
    checks: 1,
  },
  2: {
    setup: { n: 4, seed: 73, depth_parameter: 3, noise_2q: 0.04, shots: 2048, readout_noise: 0.01 },
    targets: [2],
    checks: 1,
  },
  3: {
    setup: { n: 4, seed: 19, depth_parameter: 3, noise_2q: 0.01, shots: 2048, readout_noise: 0.01 },
    targets: [1],
    checks: 1,
  },
  4: {
    setup: { n: 4, seed: 19, depth_parameter: 3, noise_2q: 0.01, shots: 2048, readout_noise: 0.01 },
    targets: [],
    checks: 0,
    tCount: 1,
  },
};

export default function MissionPlay({
  mission,
  setStage,
  onResult,
  onBack,
  onHelp,
  muted,
  onToggleMute,
  registerPick,
}: {
  mission: Sector;
  setStage: (s: Stage) => void;
  onResult: (r: AttemptResult) => void;
  onBack: () => void;
  onHelp: () => void;
  muted: boolean;
  onToggleMute: () => void;
  registerPick: (fn: (a: string) => void) => void;
}) {
  const isT = mission.id === 4;
  const initial = MISSION_DEFAULTS[mission.id] || { setup: defaultSetup(), targets: [], checks: 0 };

  const [health, setHealth] = useState<Health | null>(null);
  const [engineDown, setEngineDown] = useState(false);
  const [mode, setMode] = useState<Mode>('cached');
  const [setup, setSetup] = useState<Setup>(initial.setup);
  const [shots, setShots] = useState(initial.setup.shots || 2048);
  const [selected, setSelected] = useState<number[]>(initial.targets);
  const [checks, setChecks] = useState(initial.checks);
  const [tCount, setTCount] = useState(initial.tCount || 1);
  const [interpretation, setInterpretation] = useState(isT ? 'different_ideals_not_causal' : '');
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    if (isT && !interpretation) {
      setInterpretation('different_ideals_not_causal');
    }
  }, [isT, interpretation]);
  const [brief, setBrief] = useState<{
    status: string;
    reason: string;
    target_fidelity: number | null;
    required_gain: number | null;
    baseline_fidelity: number | null;
    tested_candidates: number;
    best_tested?: Row | null;
  } | null>(null);
  const [circuit, setCircuit] = useState<Awaited<ReturnType<typeof api.circuit>> | null>(null);
  const [loadingCircuit, setLoadingCircuit] = useState(false);
  const [working, setWorking] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [suggesting, setSuggesting] = useState(false);
  const [viewMode, setViewMode] = useState<'board_game' | 'circuit'>('board_game');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mission.id, viewMode]);

  // Execution simulation state
  const [activeResult, setActiveResult] = useState<AttemptResult | null>(null);

  const debounce = useRef<number | undefined>(undefined);
  const budget: Budget = useMemo(() => defaultBudget(mission.id), [mission.id]);

  const spec = useMemo(
    () =>
      buildSpec(setup, {
        t_count: isT ? tCount : 0,
        targetOrder: selected,
        checks: isT ? 0 : checks,
        shots,
      }),
    [setup, isT, tCount, selected, checks, shots]
  );

  useEffect(() => {
    api.health()
      .then((h) => {
        setHealth(h);
        setEngineDown(false);
      })
      .catch(() => {
        setHealth(null);
        setEngineDown(true);
      });
  }, []);

  useEffect(() => {
    let cancelled = false;
    api.scene(spec)
      .then((r) => {
        if (!cancelled && r.rows) setRows(r.rows);
      })
      .catch(() => {
        if (!cancelled) setRows([]);
      });
    return () => {
      cancelled = true;
    };
  }, [spec]);

  useEffect(() => {
    let cancelled = false;
    api.preflight(mission.id, spec, budget)
      .then((r) => {
        if (!cancelled) setBrief(r.brief);
      })
      .catch(() => {
        if (!cancelled) setBrief(null);
      });
    return () => {
      cancelled = true;
    };
  }, [mission.id, spec, budget]);

  const canPreview = !!health?.qiskit_available && setup.n <= 6 && setup.depth_parameter <= 20;
  useEffect(() => {
    if (!canPreview) {
      setCircuit(null);
      return;
    }
    window.clearTimeout(debounce.current);
    debounce.current = window.setTimeout(() => {
      setLoadingCircuit(true);
      api.circuit(spec)
        .then(setCircuit)
        .catch(() => setCircuit(null))
        .finally(() => setLoadingCircuit(false));
    }, 250);
    return () => window.clearTimeout(debounce.current);
  }, [spec, canPreview]);

  useEffect(() => {
    if (activeResult) return;
    setStage({
      kind: 'play',
      circuit,
      dataQubits: setup.n,
      selected,
      checks: isT ? 0 : checks,
      tCount: isT ? tCount : 0,
      scanning: working,
      accent: mission.accent,
    });
  }, [circuit, setup.n, selected, checks, isT, tCount, working, mission.accent, setStage, activeResult]);

  const toggle = useCallback(
    (q: number) => {
      const on = selected.includes(q);
      audio.play(on ? 'remove' : 'place');
      const next = on ? selected.filter((x) => x !== q) : [...selected, q];
      setChecks((k) => Math.min(k, Math.max(0, next.length)));
      setSelected(next);
    },
    [selected]
  );

  useEffect(() => {
    registerPick((a: string) => {
      if (a.startsWith('qubit:')) {
        const q = Number(a.slice(6));
        if (!isT && q >= 0 && q < setup.n) toggle(q);
      }
    });
    return () => registerPick(() => {});
  }, [registerPick, toggle, isT, setup.n]);

  const maxChecks = Math.min(selected.length, 3);

  // One-click Smart Setup / Auto-Win Strategy
  const autoConfigureWinning = async () => {
    setSuggesting(true);
    setNotice('');
    try {
      const r = await api.recommendations(mission.id, budget);
      if (!r.matches.length) {
        setNotice('No tested feasible scenario found in cache.');
        return;
      }
      const match = r.matches[0];
      setSetup(match.setup);
      setShots(match.setup.shots ?? 2048);
      setMode('cached');

      if (match.brief?.best_tested) {
        const bt = match.brief.best_tested;
        const targets = bt.target_order !== 'none'
          ? bt.target_order.split('-').map(Number)
          : [];
        setSelected(targets);
        setChecks(Number(bt.checks) || 1);
        setNotice(`Configured winning setup: Qubits [${bt.target_order}] with ${bt.checks} check(s).`);
      } else {
        setSelected([0, 1]);
        setChecks(1);
        setNotice('Configured recommended setup for this sector.');
      }
      audio.play('select');
    } catch (e) {
      setNotice((e as Error).message);
    } finally {
      setSuggesting(false);
    }
  };

  const engage = async () => {
    setError('');
    setWorking(true);
    try {
      audio.play('launch');
      let r;
      // If cached mode is selected but this custom configuration is not in the benchmark cache,
      // seamlessly run live Qiskit Aer simulation so the user never encounters a 404 error banner!
      const targetMode = (mode === 'cached' && !exact) ? 'live' : mode;
      try {
        r = await api.execute(
          mission.id,
          targetMode,
          spec,
          budget,
          isT ? interpretation || null : null
        );
      } catch (err: any) {
        if (targetMode === 'cached') {
          r = await api.execute(
            mission.id,
            'live',
            spec,
            budget,
            isT ? interpretation || null : null
          );
        } else {
          throw err;
        }
      }
      // Open the interactive visualizer so the player understands what happened!
      setActiveResult(r);
    } catch (e) {
      setError((e as Error).message);
      audio.play('error');
    } finally {
      setWorking(false);
    }
  };

  const exact = rows.find(
    (r) =>
      r.t_count === spec.t_count &&
      r.target_order === spec.target_order &&
      r.checks === spec.checks
  ) || null;

  return (
    <>
      {activeResult && (
        <ExecutionVisualizer
          mission={mission}
          spec={spec}
          result={activeResult}
          onComplete={() => {
            onResult(activeResult);
          }}
        />
      )}

      <div className="play-root" style={{ ['--accent' as string]: mission.accent, ['--accent-soft' as string]: mission.accentSoft }}>
        {/* Top bar */}
        <header className="topbar">
          <button className="ghost" onClick={onBack}>
            <ArrowLeft size={16} /> MISSION MAP
          </button>
          <div className="sector-title">
            <small>EPISODE {mission.id} · {mission.label}</small>
            <strong>{mission.title}</strong>
          </div>
          <div className="top-actions">
            <span
              className="engine"
              title={engineDown ? 'API Offline' : health?.qiskit_available ? 'Qiskit Aer Online' : 'Cached Results Online'}
            >
              <span className="dot" data-on={!engineDown} />
              <small>{health?.qiskit_available ? 'Qiskit 2.5 Aer' : 'Cached Aer Data'}</small>
            </span>
            <button className="ghost" onClick={onHelp} title="How to play">
              <CircleHelp size={16} /> HOW TO PLAY
            </button>
            <button className="ghost" onClick={onToggleMute}>
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        </header>

        {/* Responsive Workspace with Hero Board Game / Circuit */}
        <div className="play-scroll-container" ref={scrollRef}>
          {/* Dual View Switcher */}
          <div className="workspace-view-switcher">
            <button
              className={`view-mode-tab ${viewMode === 'board_game' ? 'active' : ''}`}
              onClick={() => {
                setViewMode('board_game');
                audio.play('select');
              }}
            >
              <Dice5 size={16} />
              <span>SURFACE-CODE TABLETOP BOARD (LITINSKI 2019)</span>
              <span className="tab-pill">TABLETOP GAMEPLAY</span>
            </button>
            <button
              className={`view-mode-tab ${viewMode === 'circuit' ? 'active' : ''}`}
              onClick={() => {
                setViewMode('circuit');
                audio.play('select');
              }}
            >
              <Layers size={16} />
              <span>SPACETIME QUANTUM CIRCUIT (AER TIMELINE)</span>
              <span className="tab-pill">CIRCUIT VIEW</span>
            </button>
          </div>

          {viewMode === 'board_game' ? (
            <QuantumBoardGame
              mission={mission}
              budget={budget}
              selected={selected}
              checks={isT ? 0 : checks}
              maxChecks={maxChecks}
              isT={isT}
              tCount={tCount}
              exact={exact}
              shots={shots}
              circuit={circuit}
              brief={brief}
              interpretation={interpretation}
              onSetInterpretation={setInterpretation}
              onToggleQubit={toggle}
              onSetChecks={setChecks}
              onEngage={engage}
              onAutoWin={autoConfigureWinning}
              suggesting={suggesting}
            />
          ) : (
            <>
              <SpacetimeCircuitBoard
                circuit={circuit}
                loading={loadingCircuit}
                dataQubits={setup.n}
                selected={selected}
                checks={isT ? 0 : checks}
                maxChecks={maxChecks}
                isT={isT}
                tCount={tCount}
                missionId={mission.id}
                accent={mission.accent}
                budget={budget}
                exact={exact}
                shots={shots}
                onToggleQubit={toggle}
                onSetChecks={setChecks}
              />

          {/* Two-Column Tactical Deck */}
          <div className="tactical-deck-grid">
            {/* Left Column: Build Your Strategy */}
            <section className="dashboard-panel build-panel">
            <div className="panel-header">
              <div className="panel-title-group">
                <ShieldCheck size={18} color={mission.accent} />
                <h2>DEFENSE STRATEGY BUILDER</h2>
              </div>
              <button
                className="smart-tune-btn"
                disabled={suggesting}
                onClick={autoConfigureWinning}
                title="Automatically configure an optimal strategy that wins this episode"
              >
                <Sparkles size={14} />
                {suggesting ? 'Scanning…' : '✨ Auto-Win Setup'}
              </button>
            </div>

            {notice && <div className="notice-banner">{notice}</div>}

            {/* Step 1: Engine Selection */}
            <div className="form-group">
              <label>
                <span>1 · SIMULATION ENGINE</span>
                <em>{mode === 'cached' ? 'Exact Measured Runs' : 'Live Aer Execution'}</em>
              </label>
              <div className="segmented-control">
                <button
                  className={mode === 'cached' ? 'active' : ''}
                  onClick={() => setMode('cached')}
                >
                  <Database size={14} /> MEASURED BENCHMARK (RECOMMENDED)
                </button>
                <button
                  className={mode === 'live' ? 'active' : ''}
                  onClick={() => setMode('live')}
                >
                  <Zap size={14} /> LIVE QISKIT RUN
                </button>
              </div>
            </div>

            {/* Live Mode Controls if selected */}
            {mode === 'live' && (
              <div className="live-grid">
                <div className="input-group">
                  <label>Data Qubits</label>
                  <select
                    value={setup.n}
                    onChange={(e) => setSetup((x) => ({ ...x, n: Number(e.target.value) }))}
                  >
                    {[2, 3, 4, 5, 6].map((nv) => (
                      <option key={nv} value={nv}>{nv} qubits</option>
                    ))}
                  </select>
                </div>
                <div className="input-group">
                  <label>Layers (Depth)</label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={setup.depth_parameter}
                    onChange={(e) => setSetup((x) => ({ ...x, depth_parameter: Number(e.target.value) }))}
                  />
                </div>
                <div className="input-group">
                  <label>2Q Gate Noise</label>
                  <select
                    value={setup.noise_2q}
                    onChange={(e) => setSetup((x) => ({ ...x, noise_2q: Number(e.target.value) }))}
                  >
                    <option value={0.01}>1% Noise</option>
                    <option value={0.04}>4% Noise</option>
                    <option value={0.08}>8% Noise</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Total Shots</label>
                  <select
                    value={shots}
                    onChange={(e) => setShots(Number(e.target.value))}
                  >
                    {[512, 1024, 2048, 4096].map((k) => (
                      <option key={k} value={k}>{k.toLocaleString()} shots</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Target Qubits or T-Gate selector */}
            {isT ? (
              <div className="form-group t-section">
                <label>
                  <span>2 · T-GATE COUNT IN PAYLOAD</span>
                  <em>Non-Clifford Rotations</em>
                </label>
                <div className="segmented-control t-control">
                  {[1, 2, 4].map((t) => (
                    <button
                      key={t}
                      className={tCount === t ? 'active' : ''}
                      onClick={() => setTCount(t)}
                    >
                      {t}× T Gate{t > 1 ? 's' : ''}
                    </button>
                  ))}
                </div>
                <div className="info-callout">
                  <Info size={15} color="#14b8a6" />
                  <div>
                    <strong>Why T Gates are Special:</strong> T gates are non-Clifford rotations (phase shift by π/4).
                    Standard automatic Pauli checks do not commute with T. A hand-made check is ONLY valid across
                    a T gate if its Pauli acts as <b>I or Z</b> on that wire, because T is diagonal and commutes with Z (TZ = ZT)!
                  </div>
                </div>

                <label style={{ marginTop: '14px' }}>
                  <span>3 · SCIENTIFIC CONCLUSION</span>
                  <em>Select Valid Finding</em>
                </label>
                <div className="interpretation-list">
                  {INTERPRETATIONS.map((o) => (
                    <button
                      key={o.value}
                      className={`interpretation-btn ${interpretation === o.value ? 'selected' : ''}`}
                      onClick={() => {
                        setInterpretation(o.value);
                        audio.play('select');
                      }}
                    >
                      <div className="radio-circle">{interpretation === o.value && <div className="dot" />}</div>
                      <span>{o.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label>
                    <span>2 · ATTACH CHECKS TO QUBITS</span>
                    <em>
                      {selected.length
                        ? `Monitoring Qubits [${selected.map((q) => `q${q}`).join(', ')}]`
                        : 'Click qubits to attach checks'}
                    </em>
                  </label>
                  <p className="field-hint">
                    Attach spacetime checks to data qubits where entangling gates cause errors:
                  </p>
                  <div className="qubit-selection-grid">
                    {Array.from({ length: setup.n }, (_, q) => {
                      const isSel = selected.includes(q);
                      const rank = selected.indexOf(q) + 1;
                      return (
                        <button
                          key={q}
                          className={`qubit-card ${isSel ? 'selected' : ''}`}
                          onClick={() => toggle(q)}
                        >
                          <div className="qubit-card-top">
                            <span className="qubit-name">q{q}</span>
                            {isSel && <span className="qubit-order-tag">Target #{rank}</span>}
                          </div>
                          <span className="qubit-status">
                            {isSel ? 'Protected by Checks' : 'Click to Monitor'}
                          </span>
                        </button>
                      );
                    })}
                    {selected.length > 0 && (
                      <button
                        className="qubit-clear-btn"
                        onClick={() => {
                          setSelected([]);
                          setChecks(0);
                        }}
                      >
                        Clear All
                      </button>
                    )}
                  </div>
                </div>

                {/* Step 3: Checks Count */}
                <div className="form-group">
                  <label>
                    <span>3 · NUMBER OF CHECKS</span>
                    <em>{checks === 0 ? '0 Checks (Unprotected)' : `${checks} Check(s) Active`}</em>
                  </label>
                  <div className="segmented-control checks-control">
                    {Array.from({ length: Math.max(1, maxChecks + 1) }, (_, k) => (
                      <button
                        key={k}
                        className={checks === k ? 'active' : ''}
                        onClick={() => setChecks(k)}
                        disabled={k > 0 && selected.length === 0}
                      >
                        {k === 0 ? '0 (None)' : `${k} Check${k > 1 ? 's' : ''}`}
                      </button>
                    ))}
                  </div>
                  <p className="field-hint">
                    {checks === 0
                      ? 'No checks placed. Raw hardware results will be measured.'
                      : `${checks} check(s) deploy ${checks} helper ancilla(s) to detect errors and post-select clean runs.`}
                  </p>
                </div>
              </>
            )}

            {/* Engage Button */}
            <div className="engage-section">
              <button
                className="engage-btn"
                disabled={working || (isT && !interpretation)}
                onClick={engage}
              >
                {working ? (
                  <>
                    <span className="spinner-glow" />
                    RUNNING QISKIT SIMULATION…
                  </>
                ) : (
                  <>
                    <Play size={18} fill="currentColor" />
                    ENGAGE & RUN QISKIT SIMULATION
                    <Zap size={16} />
                  </>
                )}
              </button>
              <small className="engage-sub">
                Executes circuits, measures syndrome parities, and computes post-selected fidelity.
              </small>
            </div>
          </section>

          {/* Right Column: Mission Intel & Objectives */}
          <section className="dashboard-panel intel-panel">
            {/* Objective & Rules */}
            <div className="intel-card goal-card">
              <div className="intel-card-header">
                <span className="goal-badge">MISSION OBJECTIVE</span>
                <h3>{mission.headline}</h3>
              </div>
              <p className="win-rule-box">{mission.winRule}</p>
              <p className="threat-text">
                <b>Hardware Environment:</b> {mission.threat}
              </p>
            </div>

            {/* Preflight Feasibility Status */}
            {brief && (
              <div className={`intel-card preflight-card ${brief.status}`}>
                <div className="preflight-header">
                  {brief.status === 'feasible_tested' ? (
                    <CheckCircle2 size={18} color="#14b8a6" />
                  ) : (
                    <ShieldAlert size={18} color="#ff6b5a" />
                  )}
                  <strong>
                    {brief.status === 'feasible_tested'
                      ? 'FEASIBLE STRATEGY AVAILABLE'
                      : brief.status === 'mathematically_unattainable'
                      ? 'TARGET MATHEMATICALLY UNATTAINABLE'
                      : 'DIAGNOSTIC BENCHMARK'}
                  </strong>
                </div>
                <p className="preflight-reason">{brief.reason}</p>
                {brief.target_fidelity !== null && (
                  <div className="preflight-metrics">
                    <div className="p-metric">
                      <span>Baseline Fidelity:</span>
                      <b>{(Number(brief.baseline_fidelity) * 100).toFixed(1)}%</b>
                    </div>
                    <div className="p-metric">
                      <span>Needed to Win:</span>
                      <b>{(Number(brief.target_fidelity) * 100).toFixed(1)}%</b>
                    </div>
                    <div className="p-metric">
                      <span>Required Gain:</span>
                      <b style={{ color: '#14b8a6' }}>+{(Number(brief.required_gain) * 100).toFixed(1)}%</b>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Live Strategy Prediction Card */}
            {exact && (
              <div className="intel-card live-prediction-card">
                <div className="prediction-header">
                  <Sparkles size={16} color="#14b8a6" />
                  <span>MEASURED OUTCOME PREVIEW</span>
                </div>
                <div className="prediction-grid">
                  <div className="pred-item">
                    <small>ACCURACY (F)</small>
                    <strong>{(Number(exact.conditional_fidelity) * 100).toFixed(1)}%</strong>
                    <span>
                      Gain: {Number(exact.conditional_fidelity) >= Number(exact.baseline_fidelity) ? '+' : ''}
                      {((Number(exact.conditional_fidelity) - Number(exact.baseline_fidelity)) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="pred-item">
                    <small>SHOTS KEPT (r)</small>
                    <strong>{(Number(exact.retention) * 100).toFixed(1)}%</strong>
                    <span>{Math.round(shots * Number(exact.retention)).toLocaleString()} clean shots</span>
                  </div>
                  <div className="pred-item">
                    <small>PREDICTED SCORE</small>
                    <strong style={{ color: '#14b8a6' }}>
                      {(Number(exact.conditional_fidelity) * Number(exact.retention) * 100).toFixed(1)}
                    </strong>
                    <span>Accuracy × Retention</span>
                  </div>
                </div>
              </div>
            )}

            {/* How Spacetime Error Detection Works (Non-Quantum Explainer) */}
            <div className="intel-card tutorial-card">
              <div className="tut-header">
                <HelpCircle size={15} color="#14b8a6" />
                <span>HOW ERROR DETECTION WORKS (THE 4 STEPS)</span>
              </div>
              <ol className="tut-list">
                <li>
                  <b>Noise occurs:</b> Gates flip qubits randomly during computation.
                </li>
                <li>
                  <b>Checks measure parities:</b> Helper qubits (ancillas) catch errors.
                </li>
                <li>
                  <b>Discard alarmed runs:</b> Every shot where a check triggered an alarm is discarded.
                </li>
                <li>
                  <b>High accuracy:</b> Surviving clean shots achieve higher fidelity!
                </li>
              </ol>
            </div>
          </section>
        </div>
      </>
    )}
  </div>

        {error && (
          <div className="toast-banner error">
            <XCircle size={18} />
            <span>{error}</span>
            <button onClick={() => setError('')}>Dismiss</button>
          </div>
        )}
      </div>
    </>
  );
}