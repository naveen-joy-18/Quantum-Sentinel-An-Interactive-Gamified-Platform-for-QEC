import React, { useEffect, useState, useRef } from 'react';
import {
  Play, Pause, SkipForward, CheckCircle2, ShieldAlert, ShieldCheck,
  Activity, ArrowRight, Filter, Gauge, Info, Trophy, Sparkles,
  Layers, Radio, AlertTriangle, Zap, Check, Flame, Star
} from 'lucide-react';
import type { AttemptResult, Spec } from './api';
import type { Sector } from './story';
import { audio } from './audio';

interface ExecutionVisualizerProps {
  mission: Sector;
  spec: Spec;
  result: AttemptResult;
  onComplete: () => void;
}

export default function ExecutionVisualizer({
  mission,
  spec,
  result,
  onComplete,
}: ExecutionVisualizerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Animated Roll-up Numbers for Phase 3 and Phase 4
  const [animatedAccepted, setAnimatedAccepted] = useState(0);
  const [animatedRejected, setAnimatedRejected] = useState(0);
  const [animatedFidelity, setAnimatedFidelity] = useState(0);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [starsRevealed, setStarsRevealed] = useState(0);

  const { row } = result;
  const shots = spec.shots || 2048;
  const accepted = row.accepted ?? Math.round(shots * (Number(row.retention) || 1));
  const rejected = shots - accepted;
  const retentionPct = ((Number(row.retention) || 1) * 100).toFixed(1);
  const baselineFidPct = ((Number(row.baseline_fidelity) || 0) * 100).toFixed(1);
  const condFidPct = ((Number(row.conditional_fidelity) || 0) * 100).toFixed(1);
  const gain = ((Number(row.conditional_fidelity) - Number(row.baseline_fidelity)) * 100).toFixed(1);
  const checksCount = spec.checks;
  const isT = mission.id === 4;

  const steps = [
    {
      id: 0,
      phaseTitle: 'PHASE 1 · HARDWARE NOISE INJECTION',
      shortTitle: '1. Noise Injection',
      badge: 'DEPENG-01: NOISE ACTIVE',
      badgeColor: '#ff6b5a',
      summary: `Simulating ${shots.toLocaleString()} shots on ${spec.n} qubits with hardware depolarizing noise.`,
      description:
        `In physical quantum processors, entangling 2-qubit CZ gates suffer ${(spec.noise_2q * 100).toFixed(1)}% depolarizing error rates. Random bit-flips and phase-flips corrupt quantum states mid-circuit.`,
    },
    {
      id: 1,
      phaseTitle: 'PHASE 2 · SPACETIME CHECK DEPLOYMENT',
      shortTitle: '2. Spacetime Checks',
      badge: 'CHECK-02: WATCHERS ARMED',
      badgeColor: '#14b8a6',
      summary: checksCount > 0
        ? `Deploying ${checksCount} spacetime check(s) across target qubits [${spec.target_order}].`
        : isT
        ? 'Non-Clifford T-gate computation (diagonal Z-checks commute: TZ = ZT).'
        : 'Running unprotected baseline configuration (0 checks).',
      description: checksCount > 0
        ? `Helper ancilla qubits act as real-time parity tripwires. They entangle with data qubits to measure parity across circuit depth. When noise flips a qubit, the ancilla sounds an alarm (syndrome bit = 1).`
        : isT
        ? 'T-gates are non-Clifford rotations by π/4. They only commute with diagonal Z-checks. Standard Clifford checks do not commute with T rotations!'
        : 'Zero checks deployed. No tripwires are watching for errors, so noise corrupts the final measurement unchecked.',
    },
    {
      id: 2,
      phaseTitle: 'PHASE 3 · SYNDROME POST-SELECTION SIFTER',
      shortTitle: '3. Dual-Chute Sorter',
      badge: 'FILTER-03: SIFTER ACTIVE',
      badgeColor: '#14b8a6',
      summary: checksCount > 0
        ? `Sorting ${shots.toLocaleString()} shots: ${accepted.toLocaleString()} clean preserved, ${rejected.toLocaleString()} corrupted purged.`
        : `All ${shots.toLocaleString()} shots kept (no checks deployed).`,
      description: checksCount > 0
        ? `Quantum error detection isolates pure states without active logical overhead: every run where the watcher ancilla alarmed (syndrome = 1) is discarded. Only clean-syndrome runs (0) are passed to the final output.`
        : `Without checks, no syndrome alarms are measured. Corrupted shots remain mixed with clean shots.`,
    },
    {
      id: 3,
      phaseTitle: 'PHASE 4 · PURIFIED FIDELITY & MISSION SCORE',
      shortTitle: '4. Accuracy & Score',
      badge: 'METRIC-04: SCORE VERIFIED',
      badgeColor: '#14b8a6',
      summary: Number(gain) > 0
        ? `Fidelity elevated by +${gain}% (from ${baselineFidPct}% baseline to ${condFidPct}%)!`
        : `Output fidelity evaluated at ${condFidPct}%.`,
      description:
        `Purging corrupted runs purifies the final quantum distribution, achieving higher fidelity to the ideal state. Mission score balances fidelity with shot retention: Score = Fidelity × Retention × 100.`,
    },
  ];

  // Auto-advance through the 4 steps unless paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentStep < steps.length - 1) {
            setCurrentStep((s) => s + 1);
            return 0;
          } else {
            clearInterval(timer);
            return 100;
          }
        }
        return prev + 2.5; // Smooth 4-second pace per phase
      });
    }, 100);

    return () => clearInterval(timer);
  }, [currentStep, isPaused, steps.length]);

  // Phase-specific sound and animated counter triggers
  useEffect(() => {
    if (currentStep === 0) {
      audio.play('zap');
    } else if (currentStep === 1) {
      audio.play('place');
    } else if (currentStep === 2) {
      audio.play('scan');
      // Roll-up animation for sifter chutes
      setAnimatedAccepted(0);
      setAnimatedRejected(0);
      const startTime = performance.now();
      const dur = 1200;
      const animateCounts = (now: number) => {
        const elapsed = now - startTime;
        const p = Math.min(1, elapsed / dur);
        setAnimatedAccepted(Math.round(accepted * p));
        setAnimatedRejected(Math.round(rejected * p));
        if (p < 1) requestAnimationFrame(animateCounts);
        else audio.play('chime');
      };
      requestAnimationFrame(animateCounts);
    } else if (currentStep === 3) {
      audio.play('success');
      // Roll-up animation for final score & fidelity
      setAnimatedFidelity(Number(baselineFidPct));
      setAnimatedScore(0);
      setStarsRevealed(0);
      const targetFid = Number(condFidPct);
      const targetScore = result.verdict.score;
      const startTime = performance.now();
      const dur = 1400;
      const animateScore = (now: number) => {
        const elapsed = now - startTime;
        const p = Math.min(1, elapsed / dur);
        setAnimatedFidelity(Number((Number(baselineFidPct) + (targetFid - Number(baselineFidPct)) * p).toFixed(1)));
        setAnimatedScore(Number((targetScore * p).toFixed(1)));
        if (p < 1) {
          requestAnimationFrame(animateScore);
        } else {
          setStarsRevealed(result.verdict.passed ? 3 : 1);
        }
      };
      requestAnimationFrame(animateScore);
    }
  }, [currentStep, accepted, rejected, baselineFidPct, condFidPct, result.verdict.score, result.verdict.passed]);

  const step = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
      setProgress(0);
      audio.play('select');
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      setProgress(0);
      audio.play('select');
    }
  };

  return (
    <div className="exec-gamified-overlay">
      <div className="exec-gamified-modal">
        {/* Header Bar */}
        <div className="exec-modal-header">
          <div className="exec-header-info">
            <span
              className="phase-pill-badge"
              style={{
                backgroundColor: `${step.badgeColor}18`,
                color: step.badgeColor,
                borderColor: `${step.badgeColor}40`,
              }}
            >
              <Activity size={13} /> {step.badge}
            </span>
            <h2 className="exec-modal-title">{step.phaseTitle}</h2>
          </div>
          <button className="skip-action-btn" onClick={onComplete}>
            <span>Skip to Debrief</span>
            <SkipForward size={14} />
          </button>
        </div>

        {/* Scrollable Modal Body Container */}
        <div className="exec-modal-body">
          {/* 4 Gamified Step Tabs */}
          <div className="exec-stepper-row">
          {steps.map((s, idx) => {
            const isCompleted = idx < currentStep;
            const isCurrent = idx === currentStep;
            return (
              <button
                key={s.id}
                className={`stepper-tab ${isCurrent ? 'active' : ''} ${isCompleted ? 'done' : ''}`}
                onClick={() => {
                  setCurrentStep(idx);
                  setProgress(0);
                }}
              >
                <div className="tab-number-circle">
                  {isCompleted ? <CheckCircle2 size={13} /> : idx + 1}
                </div>
                <span className="tab-title-text">{s.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Phase Context Overview Banner */}
        <div className="exec-phase-briefing">
          <div className="briefing-header">
            <Info size={13} color="#0d9488" />
            <span className="briefing-tag">MISSION TELEMETRY · {step.badge}</span>
          </div>
          <p className="phase-summary-text">{step.summary}</p>
          <p className="phase-desc-text">{step.description}</p>
        </div>

        {/* ========================================================
            PHASE 1: LIVE QUANTUM HARDWARE NOISE SIMULATOR
           ======================================================== */}
        {currentStep === 0 && (
          <div className="phase-chamber noise-chamber">
            <div className="chamber-game-stage">
              <div className="stage-header-tag">
                <Zap size={14} color="#ff6b5a" />
                <span>SILICON QUANTUM PROCESSOR BUS · LIVE DEPOLARIZING NOISE INJECTION</span>
              </div>

              {/* Animated Qubit Wires with Live Noise Sparks */}
              <div className="silicon-bus-canvas">
                {Array.from({ length: spec.n }, (_, q) => (
                  <div key={q} className="bus-wire-row">
                    <span className="bus-wire-label">q{q}</span>
                    <div className="bus-wire-track">
                      {/* Traveling Particle Wavepackets */}
                      <div className="particle-stream">
                        <span className="quantum-orb orb-clean o1" />
                        <span className="quantum-orb orb-glitch o2">⚡</span>
                        <span className="quantum-orb orb-clean o3" />
                        <span className="quantum-orb orb-glitch o4">⚡</span>
                        <span className="quantum-orb orb-clean o5" />
                      </div>

                      {/* Noise Hazard Zone in Center */}
                      <div className="noise-hazard-gate">
                        <span className="hazard-pulse" />
                        <span className="hazard-label">CZ GATE NOISE ({(spec.noise_2q * 100).toFixed(0)}%)</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="noise-live-legend">
                <span className="legend-item"><i className="dot-clean" /> Clean State |ψ⟩</span>
                <span className="legend-item"><i className="dot-glitch" /> Depolarized State |ψ'⟩ (Bit/Phase Corrupted)</span>
              </div>
            </div>

            <div className="chamber-telemetry-grid">
              <div className="telemetry-card">
                <small>TOTAL PHYSICAL SHOTS</small>
                <strong style={{ color: '#0d9488' }}>{shots.toLocaleString()}</strong>
                <span>Executed in Qiskit Aer</span>
              </div>
              <div className="telemetry-card">
                <small>2Q HARDWARE NOISE</small>
                <strong style={{ color: '#ff6b5a' }}>{(spec.noise_2q * 100).toFixed(1)}%</strong>
                <span>Depolarizing error rate</span>
              </div>
              <div className="telemetry-card">
                <small>RAW UNPROTECTED ACCURACY</small>
                <strong style={{ color: '#64748b' }}>{baselineFidPct}%</strong>
                <span>Fidelity without QED checks</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            PHASE 2: SPACETIME CHECK TRIPWIRE GRID ACTIVATION
           ======================================================== */}
        {currentStep === 1 && (
          <div className="phase-chamber check-chamber">
            <div className="chamber-game-stage">
              <div className="stage-header-tag">
                <Radio size={14} color="#0d9488" />
                <span>SPACETIME PARITY TRIPWIRE GRID · COHERENT ERROR INTERCEPTION</span>
              </div>

              {/* Visualized Tripwire Beam Matrix */}
              <div className="tripwire-matrix-view">
                <div className="matrix-data-layer">
                  {Array.from({ length: spec.n }, (_, q) => {
                    const isMonitored =
                      spec.target_order !== 'none' &&
                      spec.target_order.split('-').map(Number).includes(q);
                    return (
                      <div key={q} className={`matrix-data-rail ${isMonitored ? 'monitored' : ''}`}>
                        <span className="rail-badge">q{q}</span>
                        <div className="rail-wire">
                          {isMonitored && (
                            <div className="tripwire-laser-beam">
                              <span className="laser-pulse" />
                              <span className="tripwire-tag">Z⊗Z COUPLER ARMED</span>
                            </div>
                          )}
                        </div>
                        <span className={`status-pill ${isMonitored ? 'on' : 'off'}`}>
                          {isMonitored ? '✓ PROTECTED' : 'UNMONITORED'}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Watcher Ancilla Core at Bottom */}
                <div className="matrix-ancilla-core">
                  <div className="core-badge">
                    <ShieldCheck size={16} color="#0d9488" />
                    <span>WATCHER ANCILLA a0 REGISTER:</span>
                  </div>
                  <div className="core-readout-pill">
                    {checksCount > 0 ? (
                      <span className="armed-indicator">
                        ● ARMED: Parity Tripwire Listening (Syndrome s0 = 0 default / 1 on Alarm)
                      </span>
                    ) : (
                      <span className="idle-indicator">○ 0 Checks Deployed (Raw Hardware Pass-Through)</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="chamber-telemetry-grid">
              <div className="telemetry-card">
                <small>WATCHER ANCILLAS</small>
                <strong style={{ color: '#0d9488' }}>+{row.added_ancillas || 0} Qubits</strong>
                <span>Helper parity registers</span>
              </div>
              <div className="telemetry-card">
                <small>ADDED GATE OVERHEAD</small>
                <strong style={{ color: '#f59e0b' }}>+{row.added_two_qubit || 0} Couplers</strong>
                <span>Entangling parity gates</span>
              </div>
              <div className="telemetry-card">
                <small>PARITY TRIPWIRE COMMUTATION</small>
                <strong style={{ color: '#0d9488' }}>{isT ? 'TZ = ZT Valid' : 'Pauli Preserved'}</strong>
                <span>Commutes across spacetime</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            PHASE 3: SYNDROME POST-SELECTION SIFTER (Dual-Chute Arcade Sorter)
           ======================================================== */}
        {currentStep === 2 && (
          <div className="phase-chamber filter-chamber">
            <div className="chamber-game-stage sifter-stage">
              <div className="stage-header-tag">
                <Filter size={14} color="#0d9488" />
                <span>AUTOMATED SYNDROME SIFTER · POST-SELECTION ERROR PURGE</span>
              </div>

              {/* The Arcade Dual-Chute Sorter Animation */}
              <div className="arcade-sifter-grid">
                {/* Left Reservoir: Clean Accepted Shots (Emerald) */}
                <div className="sifter-chute chute-preserved">
                  <div className="chute-header">
                    <CheckCircle2 size={16} color="#0d9488" />
                    <span>PRESERVED CLEAN RUNS</span>
                  </div>
                  <div className="chute-odometer" style={{ color: '#0d9488' }}>
                    {animatedAccepted.toLocaleString()}
                  </div>
                  <div className="chute-bar-container">
                    <div className="chute-bar-fill clean-fill" style={{ width: `${retentionPct}%` }} />
                  </div>
                  <div className="chute-sub-text">
                    <b>{retentionPct}% Retention:</b> Syndrome s0 = 0 (No Alarms)
                  </div>
                  <div className="chute-particles-animation clean-stream">
                    <span className="cp p1" />
                    <span className="cp p2" />
                    <span className="cp p3" />
                  </div>
                </div>

                {/* Sifter Decision Scanner Gate (Center) */}
                <div className="sifter-scanner-core">
                  <div className="scanner-beam-icon">
                    <Activity size={22} color="#0d9488" />
                  </div>
                  <span className="scanner-label">SYNDROME SIFTER</span>
                  <small>s0 = 0 ➔ Keep<br />s0 = 1 ➔ Purge</small>
                </div>

                {/* Right Reservoir: Alarmed Discarded Shots (Coral) */}
                <div className="sifter-chute chute-purged">
                  <div className="chute-header">
                    <AlertTriangle size={16} color="#ff6b5a" />
                    <span>PURGED CORRUPTED RUNS</span>
                  </div>
                  <div className="chute-odometer" style={{ color: '#ff6b5a' }}>
                    {animatedRejected.toLocaleString()}
                  </div>
                  <div className="chute-bar-container">
                    <div
                      className="chute-bar-fill purge-fill"
                      style={{ width: `${(100 - Number(retentionPct)).toFixed(1)}%` }}
                    />
                  </div>
                  <div className="chute-sub-text">
                    <b>{(100 - Number(retentionPct)).toFixed(1)}% Purged:</b> Syndrome s0 = 1 (Alarm Flashed)
                  </div>
                  <div className="chute-particles-animation purge-stream">
                    <span className="pp p1" />
                    <span className="pp p2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="chamber-telemetry-grid">
              <div className="telemetry-card">
                <small>SHOT RETENTION RATE (r)</small>
                <strong style={{ color: '#0d9488' }}>{retentionPct}%</strong>
                <span>Preserved clean throughput</span>
              </div>
              <div className="telemetry-card">
                <small>CORRUPTED RUNS ELIMINATED</small>
                <strong style={{ color: '#ff6b5a' }}>{rejected.toLocaleString()}</strong>
                <span>Discarded by syndrome filter</span>
              </div>
              <div className="telemetry-card">
                <small>POST-SELECTION PURITY</small>
                <strong style={{ color: '#0d9488' }}>Zero-Alarm Filter</strong>
                <span>Pure quantum subspace</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            PHASE 4: PURIFIED FIDELITY BOOST & ARCADE SCORE
           ======================================================== */}
        {currentStep === 3 && (
          <div className="phase-chamber victory-chamber">
            <div className="chamber-game-stage victory-hero-stage">
              <div className="victory-badge-banner">
                <Trophy size={18} color="#0d9488" />
                <span>QUANTUM PURIFICATION VERIFIED · MISSION OUTCOME</span>
              </div>

              {/* Big Arcade Score Display with Stars */}
              <div className="victory-arcade-board">
                <div className="victory-stars-row">
                  {[1, 2, 3].map((starIdx) => (
                    <Star
                      key={starIdx}
                      size={28}
                      className={`victory-star ${starsRevealed >= starIdx ? 'active' : ''}`}
                      fill={starsRevealed >= starIdx ? '#f59e0b' : 'none'}
                      color={starsRevealed >= starIdx ? '#f59e0b' : '#cbd5e1'}
                    />
                  ))}
                </div>

                <div className="victory-score-counter">
                  <span className="score-number">{animatedScore.toFixed(1)}</span>
                  <span className="score-label">POINTS</span>
                </div>

                {/* Fidelity Comparison Gauge */}
                <div className="fidelity-comparison-strip">
                  <div className="fid-item baseline">
                    <small>RAW BASELINE FIDELITY</small>
                    <strong>{baselineFidPct}%</strong>
                  </div>
                  <div className="fid-arrow">➔</div>
                  <div className="fid-item protected">
                    <small>PURIFIED ACCURACY (F)</small>
                    <strong style={{ color: '#0d9488' }}>{animatedFidelity.toFixed(1)}%</strong>
                  </div>
                  <div className="fid-boost-badge">
                    <Sparkles size={14} />
                    <span>
                      {Number(gain) >= 0 ? '+' : ''}
                      {gain}% BOOST
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="chamber-telemetry-grid">
              <div className="telemetry-card">
                <small>FINAL PURIFIED FIDELITY</small>
                <strong style={{ color: '#0d9488' }}>{condFidPct}%</strong>
                <span>Clean distribution accuracy</span>
              </div>
              <div className="telemetry-card">
                <small>CLEAN THROUGHPUT YIELD</small>
                <strong style={{ color: '#0d9488' }}>{retentionPct}%</strong>
                <span>{accepted.toLocaleString()} surviving shots</span>
              </div>
              <div className="telemetry-card">
                <small>MISSION VERDICT</small>
                <strong style={{ color: result.verdict.passed ? '#0d9488' : '#f59e0b' }}>
                  {result.verdict.passed ? '✓ THRESHOLD MET' : 'BUDGET REVIEW'}
                </strong>
                <span>{result.verdict.passed ? 'All parameters satisfied' : 'Check constraints'}</span>
              </div>
            </div>
          </div>
        )}
        </div>

        {/* Modal Footer Controls */}
        <div className="exec-modal-footer">
          <button
            className="exec-ctrl-btn"
            onClick={() => setIsPaused((p) => !p)}
            title="Pause auto-advancing"
          >
            {isPaused ? <Play size={14} /> : <Pause size={14} />}
            <span>{isPaused ? 'Resume' : 'Pause'}</span>
          </button>

          <div className="exec-progress-bar-track">
            <div className="exec-progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>

          <div className="exec-nav-actions">
            <button
              className="exec-nav-btn prev"
              onClick={handlePrev}
              disabled={currentStep === 0}
            >
              Previous Phase
            </button>
            <button className="exec-nav-btn next" onClick={handleNext}>
              {currentStep === steps.length - 1 ? 'Go to Debrief' : 'Next Phase ▶'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
