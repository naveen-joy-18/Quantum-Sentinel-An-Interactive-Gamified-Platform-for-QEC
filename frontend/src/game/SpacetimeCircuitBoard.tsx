import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Play, RotateCcw, Activity, Shield, ShieldAlert,
  ShieldCheck, HelpCircle, Sparkles, Layers, Cpu,
  Clock, Zap, CheckCircle2, AlertTriangle, Info, Eye
} from 'lucide-react';
import type { Circuit, Gate, Row, Budget } from './api';
import { audio } from './audio';

interface SpacetimeCircuitBoardProps {
  circuit: Circuit | null;
  loading: boolean;
  dataQubits: number;
  selected: number[];
  checks: number;
  maxChecks: number;
  isT: boolean;
  tCount?: number;
  missionId: number;
  accent: string;
  budget: Budget;
  exact: Row | null;
  shots: number;
  onToggleQubit: (q: number) => void;
  onSetChecks: (k: number) => void;
}

export default function SpacetimeCircuitBoard({
  circuit,
  loading,
  dataQubits,
  selected,
  checks,
  maxChecks,
  isT,
  tCount = 1,
  missionId,
  accent,
  budget,
  exact,
  shots,
  onToggleQubit,
  onSetChecks,
}: SpacetimeCircuitBoardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Wavefront probe simulation state
  const [probing, setProbing] = useState(false);
  const [wavefrontStep, setWavefrontStep] = useState<number | null>(null);
  const [inspectedGate, setInspectedGate] = useState<{
    name: string;
    qubits: number[];
    layer: number;
    role?: string;
  } | null>(null);
  const [errorSparkle, setErrorSparkle] = useState<{ x: number; y: number } | null>(null);
  const [syndromeAlarm, setSyndromeAlarm] = useState<boolean | null>(null);

  const numQubits = circuit?.n_qubits || (dataQubits + (isT ? 0 : checks));
  const dataQubitsCount = circuit?.data_qubits || dataQubits;
  const ancillaIndices = useMemo(() => {
    if (circuit?.ancilla_indices?.length) return circuit.ancilla_indices;
    if (checks > 0 && !isT) {
      return Array.from({ length: checks }, (_, i) => dataQubitsCount + i);
    }
    return [];
  }, [circuit, checks, isT, dataQubitsCount]);

  // Topological layer computation for operations
  const { positionedOps, maxLayer } = useMemo(() => {
    const timePerQubit = new Array(numQubits).fill(0);
    const ops = circuit?.operations || [];
    const positioned = ops.map((op) => {
      const qs = op.qubits.length ? op.qubits : [0];
      const validQs = qs.filter((q) => q < numQubits);
      const t = validQs.length ? Math.max(...validQs.map((q) => timePerQubit[q] || 0)) : 0;
      validQs.forEach((q) => {
        timePerQubit[q] = t + 1;
      });
      return { ...op, layer: t };
    });
    const maxL = Math.max(1, ...timePerQubit);
    return { positionedOps: positioned, maxLayer: maxL };
  }, [circuit, numQubits]);

  // SVG Geometry Constants
  const colWidth = 54;
  const rowHeight = 62;
  const topPadding = 50;
  const leftPadding = 140;
  const rightPadding = 110;
  const svgWidth = Math.max(880, leftPadding + (maxLayer + 2) * colWidth + rightPadding);
  const svgHeight = topPadding + numQubits * rowHeight + 40;

  const getY = (q: number) => topPadding + q * rowHeight + rowHeight / 2;
  const getX = (layer: number) => leftPadding + layer * colWidth + colWidth / 2;

  // Run the animated Spacetime Wavefront Probe
  const startProbe = () => {
    if (probing) return;
    setProbing(true);
    setWavefrontStep(0);
    setSyndromeAlarm(null);
    setErrorSparkle(null);
    audio.play('scan');

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setWavefrontStep(current);

      // Random noise spark simulation halfway through
      if (current === Math.floor(maxLayer * 0.45)) {
        const noisyQ = selected.length ? selected[0] : 0;
        setErrorSparkle({
          x: getX(current),
          y: getY(noisyQ),
        });
      }

      // Check detection point
      if (current === Math.floor(maxLayer * 0.85)) {
        if (checks > 0) {
          setSyndromeAlarm(true);
          audio.play('hit');
        } else {
          setSyndromeAlarm(false);
        }
      }

      if (current > maxLayer + 1) {
        clearInterval(interval);
        setTimeout(() => {
          setProbing(false);
          setWavefrontStep(null);
          setErrorSparkle(null);
        }, 1200);
      }
    }, 70);
  };

  const resetProbe = () => {
    setProbing(false);
    setWavefrontStep(null);
    setErrorSparkle(null);
    setSyndromeAlarm(null);
  };

  // Litinski Space-Time Metrics
  const spaceUsed = numQubits;
  const spaceMax = budget.ancillas + dataQubits;
  const depthUsed = circuit?.depth || maxLayer;
  const depthMax = budget.depth;
  const addedCouplers = exact?.added_two_qubit ?? (checks * 4);
  const baselineFid = exact?.baseline_fidelity ? (Number(exact.baseline_fidelity) * 100).toFixed(1) : '72.0';
  const condFid = exact?.conditional_fidelity ? (Number(exact.conditional_fidelity) * 100).toFixed(1) : (checks > 0 ? '88.5' : baselineFid);
  const retention = exact?.retention ? (Number(exact.retention) * 100).toFixed(1) : (checks > 0 ? '82.4' : '100.0');
  const isBudgetOk = (!ancillaIndices.length || ancillaIndices.length <= budget.ancillas) && depthUsed <= depthMax;

  return (
    <div className="spacetime-board-container">
      {/* Top Telemetry Strip: Litinski Space-Time Trade-off HUD */}
      <div className="litinski-telemetry-hud">
        {/* Metric 1: Space Footprint */}
        <div className={`hud-metric-card ${ancillaIndices.length > budget.ancillas ? 'alert' : ''}`}>
          <div className="hud-metric-top">
            <span className="hud-icon-label">
              <Cpu size={14} color="#0d9488" />
              <span>SPACE FOOTPRINT (QUBITS)</span>
            </span>
            <strong className="hud-val">
              {spaceUsed} / {spaceMax} Q
            </strong>
          </div>
          <div className="hud-progress-bar">
            <div
              className="hud-fill space-fill"
              style={{
                width: `${Math.min(100, (spaceUsed / spaceMax) * 100)}%`,
                backgroundColor: ancillaIndices.length > budget.ancillas ? '#ef4444' : '#0d9488',
              }}
            />
          </div>
          <small className="hud-sub">
            {dataQubitsCount} Data + {ancillaIndices.length} Ancilla Watcher{ancillaIndices.length === 1 ? '' : 's'}
            {missionId === 2 && ' (Strict 1-Ancilla Budget)'}
          </small>
        </div>

        {/* Metric 2: Time Overhead (Depth) */}
        <div className="hud-metric-card">
          <div className="hud-metric-top">
            <span className="hud-icon-label">
              <Clock size={14} color="#3b82f6" />
              <span>TIME OVERHEAD (DEPTH)</span>
            </span>
            <strong className="hud-val">
              {depthUsed} / {depthMax} t
            </strong>
          </div>
          <div className="hud-progress-bar">
            <div
              className="hud-fill depth-fill"
              style={{
                width: `${Math.min(100, (depthUsed / depthMax) * 100)}%`,
                backgroundColor: depthUsed > depthMax ? '#f97316' : '#3b82f6',
              }}
            />
          </div>
          <small className="hud-sub">
            {maxLayer} Circuit Timesteps (2Q Gate Layers)
          </small>
        </div>

        {/* Metric 3: The Protection Paradox (Coupler Noise vs Parity) */}
        <div className="hud-metric-card">
          <div className="hud-metric-top">
            <span className="hud-icon-label">
              <Zap size={14} color="#f59e0b" />
              <span>PROTECTION PARADOX GAUGE</span>
            </span>
            <strong className="hud-val" style={{ color: checks > 0 ? '#0d9488' : '#64748b' }}>
              {checks > 0 ? `+${addedCouplers} 2Q Couplers` : '0 Added Gates'}
            </strong>
          </div>
          <div className="hud-progress-bar">
            <div
              className="hud-fill noise-fill"
              style={{
                width: checks === 0 ? '10%' : checks === 1 ? '45%' : '80%',
                backgroundColor: '#f59e0b',
              }}
            />
          </div>
          <small className="hud-sub">
            {checks > 0
              ? `Adds physical gate noise, but post-selection purifies +${(Number(condFid) - Number(baselineFid)).toFixed(1)}%`
              : 'Unchecked raw hardware noise degrades transmission'}
          </small>
        </div>

        {/* Metric 4: Purified Yield & Accuracy */}
        <div className="hud-metric-card highlight">
          <div className="hud-metric-top">
            <span className="hud-icon-label">
              <Sparkles size={14} color="#0d9488" />
              <span>PURIFIED ACCURACY & YIELD</span>
            </span>
            <strong className="hud-val" style={{ color: '#0d9488' }}>
              {condFid}% Acc
            </strong>
          </div>
          <div className="hud-dual-tags">
            <span className="hud-tag gain-tag">
              Gain: {Number(condFid) >= Number(baselineFid) ? '+' : ''}
              {(Number(condFid) - Number(baselineFid)).toFixed(1)}%
            </span>
            <span className="hud-tag yield-tag">
              Yield: {retention}%
            </span>
          </div>
          <small className="hud-sub">
            {Math.round(shots * (Number(retention) / 100)).toLocaleString()} clean surviving shots
          </small>
        </div>
      </div>

      {/* Main Board Card */}
      <div className="spacetime-board-viewport">
        {/* Board Top Toolbar */}
        <div className="board-toolbar">
          <div className="toolbar-left">
            <div className="board-badge">
              <Layers size={14} />
              <span>SPACETIME QUANTUM CIRCUIT BOARD</span>
            </div>
            <span className="board-info-pill">
              X = Time (Timesteps t₀ … t{maxLayer}) · Y = Space (Data & Ancilla Wires)
            </span>
          </div>

          <div className="toolbar-right">
            <button
              className={`probe-action-btn ${probing ? 'active' : ''}`}
              onClick={startProbe}
              disabled={probing || loading}
              title="Sweep a laser wavefront through spacetime to inspect gate execution, noise injection, and syndrome alarm flags"
            >
              <Play size={13} fill="currentColor" />
              {probing ? 'PROBING SPACETIME…' : '▶ SWEEP SPACETIME WAVEFRONT'}
            </button>
            {probing && (
              <button className="probe-reset-btn" onClick={resetProbe} title="Reset probe">
                <RotateCcw size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Wavefront Simulation Status Callout */}
        {probing && wavefrontStep !== null && (
          <div className="probe-status-banner">
            <Activity size={14} className="pulse-icon" color="#0d9488" />
            <span>
              <b>TIMESTEP t = {Math.min(wavefrontStep, maxLayer)}:</b>{' '}
              {wavefrontStep < maxLayer * 0.4
                ? 'Quantum state evolving through single-qubit rotations and entangling gates.'
                : wavefrontStep < maxLayer * 0.75
                ? 'Depolarizing hardware noise active. Watcher ancilla tripwires measuring Pauli parity products.'
                : syndromeAlarm
                ? 'ALARM FLAGGED on Watcher Ancilla (Syndrome bit = 1)! Corrupted shot isolated for rejection.'
                : 'PARITY CLEAN (Syndrome bit = 0). Pure quantum state preserved for transmission.'}
            </span>
          </div>
        )}

        {/* The Quantum Circuit Board SVG */}
        <div className="circuit-scroll-frame" ref={containerRef}>
          {loading ? (
            <div className="board-loading-cover">
              <div className="spinner-glow" />
              <span>SYNTHESIZING SPACETIME CIRCUIT FROM QISKIT AER…</span>
            </div>
          ) : (
            <svg
              className="spacetime-svg"
              width={svgWidth}
              height={svgHeight}
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            >
              <defs>
                {/* Glow Filter for Active Checks */}
                <filter id="teal-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="coral-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                {/* Wavefront Laser Gradient */}
                <linearGradient id="wavefront-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0d9488" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#0d9488" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Background Grid Lines (Subtle) */}
              <g className="grid-layer">
                {Array.from({ length: maxLayer + 2 }, (_, l) => {
                  const x = getX(l);
                  return (
                    <line
                      key={`grid-${l}`}
                      x1={x}
                      y1={topPadding}
                      x2={x}
                      y2={svgHeight - 20}
                      stroke="#f1f5f9"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                  );
                })}
              </g>

              {/* Time Column Headers (t0, t1, t2...) */}
              <g className="time-headers">
                {Array.from({ length: maxLayer + 1 }, (_, l) => {
                  const x = getX(l);
                  return (
                    <text
                      key={`th-${l}`}
                      x={x}
                      y={topPadding - 14}
                      textAnchor="middle"
                      fill="#94a3b8"
                      fontSize="10"
                      fontFamily="var(--font-mono)"
                      fontWeight="600"
                    >
                      t{l}
                    </text>
                  );
                })}
              </g>

              {/* Dividing Area for Ancillas */}
              {ancillaIndices.length > 0 && (
                <g className="ancilla-region-backdrop">
                  <rect
                    x={leftPadding - 30}
                    y={getY(dataQubitsCount) - rowHeight / 2}
                    width={svgWidth - leftPadding + 20}
                    height={ancillaIndices.length * rowHeight + 10}
                    fill="#f0fdfa"
                    stroke="#ccfbf1"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    rx="8"
                  />
                  <text
                    x={leftPadding - 20}
                    y={getY(dataQubitsCount) - rowHeight / 2 + 16}
                    fill="#0d9488"
                    fontSize="9.5"
                    fontFamily="var(--font-display)"
                    fontWeight="700"
                    letterSpacing="1px"
                  >
                    AUXILIARY WATCHER REGION (PARITY DETECTION)
                  </text>
                </g>
              )}

              {/* Qubit Wire Tracks & Interactive Header Pins */}
              {Array.from({ length: numQubits }, (_, q) => {
                const isAncilla = q >= dataQubitsCount;
                const isMonitored = selected.includes(q);
                const y = getY(q);

                return (
                  <g key={`wire-${q}`} className={`wire-group ${isAncilla ? 'ancilla-wire' : 'data-wire'}`}>
                    {/* The Horizontal Quantum Wire */}
                    <line
                      x1={leftPadding - 15}
                      y1={y}
                      x2={svgWidth - rightPadding + 40}
                      y2={y}
                      stroke={isAncilla ? '#0d9488' : '#cbd5e1'}
                      strokeWidth={isAncilla ? '2' : '1.5'}
                      strokeDasharray={isAncilla ? '5 3' : 'none'}
                    />

                    {/* Interactive Qubit Rail Header Tag */}
                    <g
                      className={`qubit-pin ${!isAncilla && !isT ? 'clickable' : ''}`}
                      onClick={() => {
                        if (!isAncilla && !isT) {
                          onToggleQubit(q);
                        }
                      }}
                      style={{ cursor: !isAncilla && !isT ? 'pointer' : 'default' }}
                    >
                      <rect
                        x={12}
                        y={y - 18}
                        width={leftPadding - 32}
                        height={36}
                        rx="6"
                        fill={isAncilla ? '#f0fdfa' : isMonitored ? '#f0fdf4' : '#ffffff'}
                        stroke={isAncilla ? '#0d9488' : isMonitored ? '#16a34a' : '#e2e8f0'}
                        strokeWidth={isMonitored || isAncilla ? '1.5' : '1'}
                      />
                      <text
                        x={22}
                        y={y - 2}
                        fill={isAncilla ? '#0d9488' : isMonitored ? '#15803d' : '#0f172a'}
                        fontSize="12"
                        fontWeight="700"
                        fontFamily="var(--font-mono)"
                      >
                        {isAncilla ? `a${q - dataQubitsCount}` : `q${q}`}
                      </text>
                      <text
                        x={22}
                        y={y + 11}
                        fill={isAncilla ? '#14b8a6' : isMonitored ? '#16a34a' : '#64748b'}
                        fontSize="8.5"
                        fontWeight="600"
                        fontFamily="var(--font-display)"
                      >
                        {isAncilla
                          ? 'Watcher Ancilla'
                          : isMonitored
                          ? '✓ Watching [Click]'
                          : !isT
                          ? '+ Protect [Click]'
                          : 'Data Wire'}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* Two-Qubit Entangling Coupler Gates */}
              <g className="two-qubit-couplers">
                {positionedOps
                  .filter((op) => op.qubits.length >= 2)
                  .map((op, idx) => {
                    const [q1, q2] = op.qubits;
                    if (q1 >= numQubits || q2 >= numQubits) return null;
                    const x = getX(op.layer);
                    const y1 = getY(q1);
                    const y2 = getY(q2);
                    const minY = Math.min(y1, y2);
                    const maxY = Math.max(y1, y2);
                    const isCheckCoupler = op.role === 'check_related';

                    return (
                      <g
                        key={`2q-${idx}`}
                        className={`coupler-group ${isCheckCoupler ? 'check-coupler' : 'payload-coupler'}`}
                        onMouseEnter={() =>
                          setInspectedGate({
                            name: op.name.toUpperCase(),
                            qubits: op.qubits,
                            layer: op.layer,
                            role: op.role,
                          })
                        }
                        onMouseLeave={() => setInspectedGate(null)}
                      >
                        {/* Vertical Coupler Line */}
                        <line
                          x1={x}
                          y1={minY}
                          x2={x}
                          y2={maxY}
                          stroke={isCheckCoupler ? '#0d9488' : '#64748b'}
                          strokeWidth={isCheckCoupler ? '3' : '2'}
                          strokeDasharray={isCheckCoupler ? '4 2' : 'none'}
                          filter={isCheckCoupler ? 'url(#teal-glow)' : undefined}
                        />

                        {/* Control Node Circle */}
                        <circle
                          cx={x}
                          cy={y1}
                          r={isCheckCoupler ? 5.5 : 4.5}
                          fill={isCheckCoupler ? '#0d9488' : '#334155'}
                        />

                        {/* Target Node: Cross circle for CX or dot for CZ */}
                        {op.name.toLowerCase() === 'cx' ? (
                          <g>
                            <circle
                              cx={x}
                              cy={y2}
                              r={8}
                              fill="#ffffff"
                              stroke={isCheckCoupler ? '#0d9488' : '#334155'}
                              strokeWidth="2"
                            />
                            <line
                              x1={x - 5}
                              y1={y2}
                              x2={x + 5}
                              y2={y2}
                              stroke={isCheckCoupler ? '#0d9488' : '#334155'}
                              strokeWidth="2"
                            />
                            <line
                              x1={x}
                              y1={y2 - 5}
                              x2={x}
                              y2={y2 + 5}
                              stroke={isCheckCoupler ? '#0d9488' : '#334155'}
                              strokeWidth="2"
                            />
                          </g>
                        ) : (
                          <circle
                            cx={x}
                            cy={y2}
                            r={isCheckCoupler ? 5.5 : 4.5}
                            fill={isCheckCoupler ? '#0d9488' : '#334155'}
                          />
                        )}

                        {/* Check Coupler Badge */}
                        {isCheckCoupler && (
                          <rect
                            x={x - 16}
                            y={(minY + maxY) / 2 - 8}
                            width={32}
                            height={16}
                            rx="4"
                            fill="#0d9488"
                          />
                        )}
                        {isCheckCoupler && (
                          <text
                            x={x}
                            y={(minY + maxY) / 2 + 4}
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="8"
                            fontFamily="var(--font-mono)"
                            fontWeight="700"
                          >
                            Z⊗Z
                          </text>
                        )}
                      </g>
                    );
                  })}
              </g>

              {/* Single-Qubit Gates (H, S, T, Measure) */}
              <g className="single-qubit-gates">
                {positionedOps
                  .filter((op) => op.qubits.length === 1)
                  .map((op, idx) => {
                    const q = op.qubits[0];
                    if (q >= numQubits) return null;
                    const x = getX(op.layer);
                    const y = getY(q);
                    const name = op.name.toLowerCase();
                    const isCheckRelated = op.role === 'check_related';
                    const isTGate = name === 't';
                    const isMeasure = name === 'measure';

                    // Gate dimensions
                    const gw = isMeasure ? 28 : isTGate ? 32 : 26;
                    const gh = 26;

                    // Color theme
                    let fill = '#3b82f6';
                    let stroke = '#2563eb';
                    let label = name.toUpperCase();

                    if (isTGate) {
                      fill = '#f59e0b';
                      stroke = '#d97706';
                      label = 'T';
                    } else if (name === 's' || name === 'sx') {
                      fill = '#8b5cf6';
                      stroke = '#7c3aed';
                    } else if (isCheckRelated) {
                      fill = '#0d9488';
                      stroke = '#0f766e';
                    } else if (isMeasure) {
                      fill = '#475569';
                      stroke = '#334155';
                      label = 'M';
                    }

                    return (
                      <g
                        key={`1q-${idx}`}
                        className={`gate-tile-node ${isTGate ? 't-gate-node' : ''}`}
                        onMouseEnter={() =>
                          setInspectedGate({
                            name: label,
                            qubits: op.qubits,
                            layer: op.layer,
                            role: op.role,
                          })
                        }
                        onMouseLeave={() => setInspectedGate(null)}
                      >
                        {/* Glow for T-gate */}
                        {isTGate && (
                          <rect
                            x={x - gw / 2 - 2}
                            y={y - gh / 2 - 2}
                            width={gw + 4}
                            height={gh + 4}
                            rx="6"
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="2"
                            filter="url(#coral-glow)"
                          />
                        )}

                        {/* Gate Box */}
                        <rect
                          x={x - gw / 2}
                          y={y - gh / 2}
                          width={gw}
                          height={gh}
                          rx="4"
                          fill={fill}
                          stroke={stroke}
                          strokeWidth="1.5"
                        />

                        {/* Gate Text */}
                        <text
                          x={x}
                          y={y + 4}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize={isTGate ? '11' : '10'}
                          fontWeight="700"
                          fontFamily="var(--font-display)"
                        >
                          {label}
                        </text>

                        {/* T-Gate π/4 badge */}
                        {isTGate && (
                          <text
                            x={x + 10}
                            y={y - 5}
                            fill="#fef08a"
                            fontSize="7.5"
                            fontWeight="800"
                            fontFamily="var(--font-mono)"
                          >
                            π/4
                          </text>
                        )}

                        {/* Measurement Dial Icon */}
                        {isMeasure && (
                          <path
                            d={`M ${x - 5} ${y + 5} A 6 6 0 0 1 ${x + 5} ${y + 5}`}
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="1.2"
                          />
                        )}
                      </g>
                    );
                  })}
              </g>

              {/* Terminal Readout Flags */}
              <g className="terminal-readout-flags">
                {Array.from({ length: numQubits }, (_, q) => {
                  const isAncilla = q >= dataQubitsCount;
                  const y = getY(q);
                  const x = svgWidth - rightPadding + 20;

                  return (
                    <g key={`readout-${q}`} className="readout-flag">
                      <rect
                        x={x}
                        y={y - 12}
                        width={70}
                        height={24}
                        rx="4"
                        fill={isAncilla ? (syndromeAlarm ? '#fef2f2' : '#f0fdfa') : '#f8fafc'}
                        stroke={isAncilla ? (syndromeAlarm ? '#ef4444' : '#0d9488') : '#cbd5e1'}
                        strokeWidth="1.2"
                      />
                      <text
                        x={x + 35}
                        y={y + 4}
                        textAnchor="middle"
                        fill={isAncilla ? (syndromeAlarm ? '#dc2626' : '#0d9488') : '#475569'}
                        fontSize="9.5"
                        fontWeight="700"
                        fontFamily="var(--font-mono)"
                      >
                        {isAncilla
                          ? syndromeAlarm
                            ? 'ALARM (1)'
                            : 'CLEAN (0)'
                          : `OUT c[${q}]`}
                      </text>
                    </g>
                  );
                })}
              </g>

              {/* Simulated Noise Sparkle during Wavefront Probe */}
              {errorSparkle && (
                <g className="noise-sparkle-marker" filter="url(#coral-glow)">
                  <circle cx={errorSparkle.x} cy={errorSparkle.y} r={12} fill="#ef4444" fillOpacity="0.3" />
                  <circle cx={errorSparkle.x} cy={errorSparkle.y} r={6} fill="#ef4444" />
                  <text
                    x={errorSparkle.x}
                    y={errorSparkle.y - 14}
                    textAnchor="middle"
                    fill="#ef4444"
                    fontSize="9"
                    fontWeight="800"
                    fontFamily="var(--font-mono)"
                  >
                    ⚡ NOISE FLIP!
                  </text>
                </g>
              )}

              {/* Animated Wavefront Sweep Laser Line */}
              {probing && wavefrontStep !== null && (
                <g className="wavefront-laser-line">
                  <rect
                    x={getX(wavefrontStep) - 2}
                    y={topPadding - 10}
                    width={4}
                    height={svgHeight - topPadding - 10}
                    fill="url(#wavefront-grad)"
                  />
                  <line
                    x1={getX(wavefrontStep)}
                    y1={topPadding - 10}
                    x2={getX(wavefrontStep)}
                    y2={svgHeight - 20}
                    stroke="#0d9488"
                    strokeWidth="2"
                    filter="url(#teal-glow)"
                  />
                  <polygon
                    points={`${getX(wavefrontStep) - 5},${topPadding - 10} ${getX(wavefrontStep) + 5},${topPadding - 10} ${getX(wavefrontStep)},${topPadding - 3}`}
                    fill="#0d9488"
                  />
                </g>
              )}
            </svg>
          )}
        </div>

        {/* Board Bottom Context / Commutation Guide */}
        <div className="board-footer-guide">
          <div className="guide-left">
            <Info size={14} color="#0d9488" />
            {isT ? (
              <span>
                <b>Non-Clifford T Commutation:</b> T gates introduce non-Clifford rotations by π/4.
                Automatic Clifford checks fail across T wires; only hand-made checks aligned as I or Z commute (TZ = ZT).
              </span>
            ) : (
              <span>
                <b>Litinski Space-Time Principle:</b> Click any data qubit pin (q0–q{dataQubitsCount - 1}) to route helper ancilla checks.
                Every check measures multi-qubit Pauli products (Z ⊗ Z), intercepting errors before terminal readout.
              </span>
            )}
          </div>

          {inspectedGate && (
            <div className="inspected-gate-tooltip">
              <strong>{inspectedGate.name} GATE</strong>
              <span>
                Layer t{inspectedGate.layer} · Qubit(s): [{inspectedGate.qubits.map((q) => (q >= dataQubitsCount ? `a${q - dataQubitsCount}` : `q${q}`)).join(', ')}]
                {inspectedGate.role === 'check_related' && ' · Watcher Coupler (Tripwire)'}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
