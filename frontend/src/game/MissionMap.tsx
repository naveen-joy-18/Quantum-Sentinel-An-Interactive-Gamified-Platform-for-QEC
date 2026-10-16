import React, { useEffect, useRef } from 'react';
import {
  CircleHelp, Database, Play, Shield, Star, Volume2, VolumeX,
  Radio, ArrowDown, Activity, Layers, Cpu, CheckCircle2, ChevronRight
} from 'lucide-react';
import type { Campaign } from './api';
import type { Stage } from './three/Stage3D';
import { SECTORS, rankFor, type Sector } from './story';
import type { Progress } from './progress';
import { audio } from './audio';
import CelestialPlanet3D from './CelestialPlanet3D';

interface MissionMapProps {
  campaign: Campaign | null;
  progress: Progress;
  active: number;
  onSetActive: (i: number) => void;
  onDeploy: (id: number) => void;
  muted: boolean;
  onToggleMute: () => void;
  registerPick: (fn: (a: string) => void) => void;
  setStage: (s: Stage) => void;
  onHelp: () => void;
}

export default function MissionMap({
  campaign,
  progress,
  active,
  onSetActive,
  onDeploy,
  muted,
  onToggleMute,
  registerPick,
  setStage,
  onHelp,
}: MissionMapProps) {
  const sector: Sector = SECTORS[active] || SECTORS[0];
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    registerPick((a: string) => {
      if (a.startsWith('sector:')) {
        const id = Number(a.slice(7));
        if (id >= 1 && id <= SECTORS.length && id - 1 !== active) {
          audio.play('select');
          onSetActive(id - 1);
        }
      }
    });
    return () => registerPick(() => {});
  }, [registerPick, onSetActive, active]);

  useEffect(() => {
    const passed: Record<number, boolean> = {};
    for (const s of SECTORS) passed[s.id] = !!progress.missions[s.id]?.passed;
    setStage({ kind: 'map', sectors: SECTORS, active, passed });
  }, [active, progress, setStage]);

  // Keyboard navigation (SPACE/ENTER to deploy, 1-4 for sectors)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        audio.play('launch');
        onDeploy(sector.id);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = Number(e.key) - 1;
        if (idx < SECTORS.length) {
          audio.play('select');
          onSetActive(idx);
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active, sector.id, onDeploy, onSetActive]);

  const scrollToSectors = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scrollable-home-container">
      {/* ========================================================
          HERO VIEWPORT (FOCUSED 3D PLANET HERO - CLEAN & ELEGANT)
         ======================================================== */}
      <section className="home-planet-hero-section">
        <div className="hero-editorial-center">
          <span className="hero-kicker-tag">SPACETIME DEFENSE SYSTEM</span>
          <h1 className="hero-garamond-title">Quantum Sentinel</h1>
          <div className="hero-subtitle-bar">
            <span className="sub-dash" />
            <span className="sub-tag">THE PROTECTION PARADOX</span>
            <span className="sub-dash" />
          </div>
          <p className="hero-tagline-text gaming-punchline">
            Catch Errors. Protect Qubits.
          </p>
        </div>

        {/* Centered 3D Planet (Scaled Refined Proportion) */}
        <div className="home-planet-orb-wrap">
          <CelestialPlanet3D sectorTitle={sector.title} codename={sector.codename} />
        </div>

        {/* Center CTA Bar */}
        <div className="home-hero-cta-deck">
          <button
            id="home-start-mission-btn"
            type="button"
            className="home-primary-deploy-btn"
            style={{ cursor: 'pointer', pointerEvents: 'auto' }}
            onClick={() => {
              audio.play('launch');
              onDeploy(sector.id);
            }}
          >
            <span>START MISSION · SECTOR 0{sector.id} ({sector.title})</span>
          </button>

          <button className="scroll-indicator-btn" onClick={scrollToSectors}>
            <span>Explore campaign sectors & system intel</span>
            <ArrowDown size={14} className="bounce-arrow" />
          </button>
        </div>
      </section>

      {/* ========================================================
          SCROLLABLE CONTENT SECTION 1: CAMPAIGN SECTORS (GLASSMORPHISM)
         ======================================================== */}
      <section className="home-scroll-section" ref={scrollRef}>
        <div className="section-header-row">
          <div className="sec-title-wrap">
            <span className="section-kicker">OPERATIONAL CAMPAIGN</span>
            <h2 className="section-title">Deployment Sectors</h2>
          </div>
          <div className="sec-header-line" />
        </div>

        <div className="home-sectors-grid">
          {SECTORS.map((s, idx) => {
            const isCurrent = idx === active;
            const isPassed = !!progress.missions[s.id]?.passed;
            return (
              <div
                key={s.id}
                className={`sector-mission-card ${isCurrent ? 'active' : ''} ${isPassed ? 'cleared' : ''}`}
                onClick={() => {
                  audio.play('select');
                  onSetActive(idx);
                }}
              >
                <div className="card-top-status">
                  <span className="card-sec-badge">SEC-0{s.id}</span>
                  <span className={`card-verdict-pill ${isPassed ? 'cleared' : 'ready'}`}>
                    {isPassed ? '✓ SECURED' : isCurrent ? 'TARGETED' : 'STANDBY'}
                  </span>
                </div>

                <h3 className="card-sector-name">{s.title}</h3>
                <span className="card-sector-subtitle">{s.label}</span>
                <p className="card-brief-excerpt">{s.brief}</p>

                <div className="card-spec-strip">
                  <div className="spec-pill">
                    <small>NOISE</small>
                    <strong>{(s.id === 1 ? 0.04 : s.id === 2 ? 0.04 : 0.01) * 100}%</strong>
                  </div>
                  <div className="spec-pill">
                    <small>METHOD</small>
                    <strong>{s.id === 4 ? 'T-Gate Magic' : 'Spacetime Checks'}</strong>
                  </div>
                </div>

                <button
                  className="card-deploy-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    audio.play('launch');
                    onSetActive(idx);
                    onDeploy(s.id);
                  }}
                >
                  <span>Deploy Sector 0{s.id}</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          SCROLLABLE CONTENT SECTION 2: QUANTUM ARCHITECTURE INTEL
         ======================================================== */}
      <section className="home-scroll-section">
        <div className="section-header-row">
          <div className="sec-title-wrap">
            <span className="section-kicker">SCIENTIFIC PRINCIPLES</span>
            <h2 className="section-title">Spacetime Quantum Architecture</h2>
          </div>
          <div className="sec-header-line" />
        </div>

        <div className="home-intel-grid">
          <div className="intel-glass-card">
            <div className="intel-card-icon" style={{ color: '#0d9488' }}>
              <Layers size={22} />
            </div>
            <h4>Spacetime Parity Checks</h4>
            <p className="gaming-intel-text">
              Helper ancilla tripwires weave through the circuit's timeline, latching onto data qubits with two-qubit couplers. If noise corrupts a wire, the ancilla fires a syndrome alarm before terminal readout.
            </p>
          </div>

          <div className="intel-glass-card">
            <div className="intel-card-icon" style={{ color: '#e11d48' }}>
              <Activity size={22} />
            </div>
            <h4>Syndrome Post-Selection</h4>
            <p className="gaming-intel-text">
              Instead of burning thousands of physical qubits on active fault-tolerant correction, the system purges any run flagging an alarm. Surviving clean runs yield dramatically purer quantum states.
            </p>
          </div>

          <div className="intel-glass-card">
            <div className="intel-card-icon" style={{ color: '#0d9488' }}>
              <Cpu size={22} />
            </div>
            <h4>The Protection Paradox</h4>
            <p className="gaming-intel-text">
              The core dilemma: helper check gates are physical circuits that inject their own hardware noise. Over-checking destroys throughput faster than postselection can purify it. Calibration is everything.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SCROLLABLE FOOTER TELEMETRY
         ======================================================== */}
      <footer className="home-scroll-footer">
        <div className="footer-telemetry-strip">
          <span>QISKIT 2.5 AER ENGINE</span>
          <span className="dot-sep">·</span>
          <span>2,048 SHOTS / RUN</span>
          <span className="dot-sep">·</span>
          <span>SPACETIME CODES (qiskit-paulice)</span>
          <span className="dot-sep">·</span>
          <span>ZERO SYNTHETIC SCORES</span>
        </div>
      </footer>

      {/* Floating Bottom Utility Dock (Audio FX & Guide) */}
      <div className="bottom-floating-tools">
        <button
          className="floating-tool-btn"
          onClick={onToggleMute}
          title={muted ? 'Unmute Audio FX' : 'Mute Audio FX'}
          aria-label="Toggle Audio FX"
        >
          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          <span>{muted ? 'MUTED' : 'AUDIO'}</span>
        </button>
        <button
          className="floating-tool-btn"
          onClick={onHelp}
          title="Game Guide & Rules"
          aria-label="Game Guide"
        >
          <CircleHelp size={15} />
          <span>GUIDE</span>
        </button>
      </div>
    </div>
  );
}