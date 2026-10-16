import { useCallback, useEffect, useRef, useState } from 'react';
import { Atom, Play, Shield, Sparkles, X } from 'lucide-react';
import AntigravityCanvas from './AntigravityCanvas';
import MissionMap from './MissionMap';
import MissionPlay from './MissionPlay';
import Debrief from './Debrief';
import BootScreen from './BootScreen';
import { api, type AttemptResult, type Campaign } from './api';
import { SECTORS } from './story';
import { loadProgress, recordResult, type Progress } from './progress';
import { audio } from './audio';
import type { Stage } from './three/Stage3D';
import './game.css';

type Screen = 'boot' | 'map' | 'play' | 'debrief';

function passedMap(progress: Progress): Record<number, boolean> {
  const p: Record<number, boolean> = {};
  for (const s of SECTORS) p[s.id] = !!progress.missions[s.id]?.passed;
  return p;
}

function HelpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="help-modal" onClick={(e) => e.stopPropagation()}>
        <header><div><h2>HOW TO PLAY</h2><small>No quantum experience needed — this is what is actually happening.</small></div><button className="ghost" onClick={onClose}><X size={16} /></button></header>
        <article className="help-grid">
          <section>
            <h3>1 · GOAL</h3>
            <p>Quantum computers are error-prone. Your job: protect a quantum computation so its <b>final answer survives real noise</b>. Each sector needs a higher protection score than the last.</p>
          </section>
          <section>
            <h3>2 · YOUR CONTROLS</h3>
            <p>On the <b>build board</b> pick how many qbits the computation uses and how you defend it. <b>Watchers</b> are extra qubits wired in to spot damage the moment it happens. <b>T</b> is a special high-value quantum move that is harder to protect. Press <b>ENGAGE</b>.</p>
          </section>
          <section>
            <h3>3 · WHAT ENGAGE DOES</h3>
            <p>Your exact circuit is compiled in <b>Qiskit</b> and run through a simulated noisy chip thousands of times. Each run is checked for damage (an <b>alarm</b>). Every run that sets off an alarm is <b>discarded</b>. The survivors are recounted and compared to the perfect answer to grade how true they are.</p>
          </section>
          <section>
            <h3>4 · HOW TO READ THE RESULT</h3>
            <p><b>Survivors</b> = fraction of runs that avoided alarm. <b>Faithfulness</b> = how close the survivors are to the perfect answer. <b>Score</b> = faithfulness × survivors. Win the stars the sector demands; any attempt still logs a real measured result you can find in the LAB.</p>
          </section>
          <section>
            <h3>QUICK GLOSSARY</h3>
            <ul>
              <li><b>Watchers / ancilla</b> — extra qubits that detect damage (syndrome bit = alarm state).</li>
              <li><b>Alarm / non-trivial syndrome</b> — the watcher says the run was corrupted; that run is dropped.</li>
              <li><b>Faithfulness</b> — output-distribution fidelity F: how close the kept shots look to the perfect outcome.</li>
              <li><b>Survivors</b> — kept-shot fraction r. Score = r × F.</li>
              <li><b>Measured results</b> — cached real runs from an offline benchmark on the same noisy engine.</li>
            </ul>
          </section>
        </article>
        <footer><span>Every number you see is computed by Qiskit + Qiskit Aer + qiskit-paulice. Nothing is scripted.</span><button className="deploy" onClick={onClose}>GOT IT</button></footer>
      </div>
    </div>
  );
}

export default function Game() {
  const [screen, setScreen] = useState<Screen>('map');
  const [stage, setStage] = useState<Stage>({ kind: 'map', sectors: SECTORS, active: 0, passed: {} });
  const [hover, setHover] = useState<string | null>(null);
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [progress, setProgress] = useState<Progress>(() => loadProgress());
  const [sector, setSector] = useState(1);
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(audio.muted);
  const [result, setResult] = useState<AttemptResult | null>(null);
  const [stars, setStars] = useState(0);
  const [xpGained, setXpGained] = useState(0);
  const [rankedUp, setRankedUp] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const pickRef = useRef<(a: string) => void>(() => {});

  useEffect(() => {
    api.campaign().then(setCampaign).catch(() => setCampaign(null));
  }, []);

  const registerPick = useCallback((fn: (a: string) => void) => { pickRef.current = fn; }, []);
  const onPick = useCallback((a: string) => { audio.play('pulse'); pickRef.current(a); }, []);
  const onHover = useCallback((label: string | null) => setHover(label ?? null), []);

  const deploy = useCallback((id: number) => {
    audio.play('launch');
    setSector(id); setHover(null); setScreen('play');
  }, []);

  const onResult = useCallback((r: AttemptResult) => {
    setResult(r);
    const s = SECTORS[sector - 1];
    setStage({ kind: 'debrief', passed: r.verdict.passed, fidelity: Number(r.row.conditional_fidelity) || 0, retention: Number(r.row.retention) || 0, score: r.verdict.score, accent: s.accent });
    const outcome = {
      passed: r.verdict.passed,
      score: r.verdict.score,
      yieldRatio: Number(r.row.yield_ratio) || 0,
      retention: Number(r.row.retention) || 0,
    };
    const rec = recordResult(progress, sector, outcome);
    setProgress(rec.next);
    setStars(rec.stars); setXpGained(rec.xpGained); setRankedUp(rec.rankedUp);
    audio.play(r.verdict.passed ? 'success' : 'fail');
    if (rec.rankedUp) setTimeout(() => audio.play('unlock'), 600);
    setScreen('debrief');
  }, [progress, sector]);

  const next = useCallback(() => {
    if (sector < SECTORS.length) deploy(sector + 1);
    else { setStage({ kind: 'core' }); setScreen('map'); }
  }, [sector, deploy]);

  const toggleMute = useCallback(() => setMuted(audio.toggleMute()), []);
  const toMap = useCallback(() => { setStage({ kind: 'map', sectors: SECTORS, active, passed: passedMap(progress) }); setScreen('map'); }, [active, progress]);

  return (
    <div className="game-root">
      <AntigravityCanvas accent={SECTORS[sector - 1]?.accent} />

      {screen === 'boot' && (
        <BootScreen
          onEnter={() => {
            setStage({ kind: 'map', sectors: SECTORS, active: 0, passed: passedMap(progress) });
            setScreen('map');
          }}
          onDeploySector={(sectorId) => {
            deploy(sectorId);
          }}
          onHelp={() => setHelpOpen(true)}
          muted={muted}
          onToggleMute={toggleMute}
          progress={progress}
        />
      )}

      {screen === 'map' && (
        <MissionMap
          campaign={campaign}
          progress={progress}
          active={active}
          onSetActive={setActive}
          onDeploy={deploy}
          muted={muted}
          onToggleMute={toggleMute}
          registerPick={registerPick}
          setStage={setStage}
          onHelp={() => setHelpOpen(true)}
        />
      )}

      {screen === 'play' && (
        <MissionPlay
          mission={SECTORS[sector - 1]}
          setStage={setStage}
          onResult={onResult}
          onBack={toMap}
          onHelp={() => setHelpOpen(true)}
          muted={muted}
          onToggleMute={toggleMute}
          registerPick={registerPick}
        />
      )}

      {screen === 'debrief' && result && (
        <Debrief
          result={result}
          sector={SECTORS[sector - 1]}
          stars={stars}
          xpGained={xpGained}
          rankedUp={rankedUp}
          onRetry={() => { setHover(null); setScreen('play'); }}
          onNext={next}
          onMap={toMap}
          hasNext={sector < SECTORS.length}
          onHelp={() => setHelpOpen(true)}
        />
      )}

      {helpOpen && <HelpModal onClose={() => setHelpOpen(false)} />}

      {hover && screen !== 'boot' && screen !== 'debrief' && <div className="hover-tip">{hover}</div>}
    </div>
  );
}