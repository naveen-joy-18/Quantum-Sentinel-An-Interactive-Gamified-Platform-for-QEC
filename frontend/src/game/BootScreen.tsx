import React from 'react';
import {
  Shield, Play, Volume2, VolumeX, CircleHelp,
  Database, ArrowRight, Radio, Cpu
} from 'lucide-react';
import { SECTORS } from './story';
import type { Progress } from './progress';
import { audio } from './audio';

interface BootScreenProps {
  onEnter: () => void;
  onDeploySector: (sectorId: number) => void;
  onHelp: () => void;
  muted: boolean;
  onToggleMute: () => void;
  progress: Progress;
}

export default function BootScreen({
  onEnter,
  onDeploySector,
  onHelp,
  muted,
  onToggleMute,
  progress,
}: BootScreenProps) {
  return (
    <div className="classy-boot-terminal">
      {/* Hero Editorial Display (Garamond + Plum & Peach) */}
      <main className="boot-editorial-hero">
        <div className="boot-hero-frame">
          <span className="boot-pre-tag">SPACETIME DEFENSE SYSTEM</span>

          <h1 className="boot-garamond-title">
            Quantum Sentinel
          </h1>

          <div className="boot-subtitle-row">
            <span className="sub-dash" />
            <span className="sub-tag">THE PROTECTION PARADOX</span>
            <span className="sub-dash" />
          </div>

          <p className="boot-editorial-desc gaming-punchline">
            Catch Errors. Protect Qubits.
          </p>

          {/* Primary Peach Rectangular Button (Classy, Zero Neon) */}
          <div className="boot-cta-deck">
            <button
              className="tactical-start-mission-btn"
              onClick={() => {
                audio.play('launch');
                onEnter();
              }}
            >
              <span>ENTER MISSION TERMINAL</span>
            </button>
            <span className="boot-telemetry-note">
              Verified Qiskit Aer simulation backend · Zero synthetic scores
            </span>
          </div>
        </div>

        {/* 4 Classy Monochromatic Sector Cards */}
        <div className="boot-sectors-grid">
          {SECTORS.map((s) => {
            const passed = !!progress.missions[s.id]?.passed;
            return (
              <div
                key={s.id}
                className={`boot-sector-card ${passed ? 'cleared' : ''}`}
                onClick={() => {
                  audio.play('select');
                  onDeploySector(s.id);
                }}
              >
                <div className="card-top-row">
                  <span className="card-ep">SEC-0{s.id}</span>
                  <span className="card-status">{passed ? '✓ SECURED' : 'READY'}</span>
                </div>
                <strong className="card-title">{s.title}</strong>
                <p className="card-headline">{s.headline}</p>
                <div className="card-foot">
                  <span className="card-action-link">Initialize ▶</span>
                </div>
              </div>
            );
          })}
        </div>
      </main>

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
