export type Voice =
  | 'hover'
  | 'select'
  | 'place'
  | 'remove'
  | 'launch'
  | 'pulse'
  | 'success'
  | 'fail'
  | 'unlock'
  | 'error'
  | 'scan'
  | 'hit'
  | 'chime'
  | 'zap';

const MUTE_KEY = 'quantum-sentinel-muted';

class AudioEngine {
  private ctx: AudioContext | null = null;
  private sfxMaster: GainNode | null = null;
  private bgmMaster: GainNode | null = null;
  muted = false;

  // BGM Synthesizer State
  private bgmPlaying = false;
  private bgmTimer: number | null = null;
  private currentStep = 0;
  private bpm = 108;

  constructor() {
    try {
      this.muted = localStorage.getItem(MUTE_KEY) === '1';
    } catch {
      /* ignore */
    }

    // Auto-unlock Web Audio and kick off background gaming music on first interaction
    if (typeof window !== 'undefined') {
      const unlock = () => {
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        } else if (!this.ctx && !this.muted) {
          this.ensure();
        }
        if (!this.muted && !this.bgmPlaying) {
          this.startBgm();
        }
      };
      window.addEventListener('pointerdown', unlock, { once: true });
      window.addEventListener('keydown', unlock, { once: true });
    }
  }

  private ensure(): boolean {
    if (this.muted) return false;
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return false;

    if (!this.ctx) {
      this.ctx = new Ctor();

      // SFX Bus
      this.sfxMaster = this.ctx.createGain();
      this.sfxMaster.gain.value = 0.7;
      this.sfxMaster.connect(this.ctx.destination);

      // BGM Bus with dedicated lowpass warmth filter
      this.bgmMaster = this.ctx.createGain();
      this.bgmMaster.gain.value = 0.22; // Comfortable, ambient, gaming background volume
      const bgmFilter = this.ctx.createBiquadFilter();
      bgmFilter.type = 'lowpass';
      bgmFilter.frequency.value = 2400;
      this.bgmMaster.connect(bgmFilter);
      bgmFilter.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return true;
  }

  // =========================================================================
  // RETRO-FUTURISTIC CYBER-SYNTH BGM ENGINE (Procedural Web Audio Soundtrack)
  // Inspiring, ambient, heroic sci-fi soundtrack in D-Minor Pentatonic
  // =========================================================================
  startBgm(): void {
    if (this.bgmPlaying || this.muted) return;
    if (!this.ensure()) return;
    this.bgmPlaying = true;
    this.currentStep = 0;

    // Musical loop definitions: 4-bar chord progression (Dm9 -> Bbmaj7 -> Fsus2 -> C/E)
    const chordPads = [
      [146.83, 220.0, 261.63, 329.63], // D3, A3, C4, E4 (Dm9)
      [116.54, 174.61, 220.0, 261.63], // Bb2, F3, A3, C4 (Bbmaj7)
      [174.61, 261.63, 349.23, 392.0], // F3, C4, F4, G4 (Fsus2)
      [164.81, 196.0, 261.63, 329.63], // E3, G3, C4, E4 (C/E)
    ];

    const bassNotes = [73.42, 58.27, 87.31, 82.41]; // D2, Bb1, F2, E2

    const arpeggioNotes = [
      293.66, 349.23, 440.0, 523.25, 659.25, 523.25, 440.0, 349.23, // D4, F4, A4, C5, E5...
      293.66, 349.23, 440.0, 587.33, 523.25, 440.0, 349.23, 293.66,
    ];

    const stepInterval = (60 / this.bpm / 4) * 1000; // 16th note timing

    this.bgmTimer = window.setInterval(() => {
      if (!this.ctx || !this.bgmMaster || !this.bgmPlaying) return;

      const bar = Math.floor(this.currentStep / 16) % 4;
      const stepInBar = this.currentStep % 16;
      const now = this.ctx.currentTime;

      // 1. Lush Ambient Pad Chords (trigger on beat 1 of each bar)
      if (stepInBar === 0) {
        const chord = chordPads[bar];
        chord.forEach((freq, idx) => {
          this.playPadVoice(freq, (60 / this.bpm) * 3.8, idx * 0.04);
        });

        // Deep warm sub-bass note
        this.playSubBass(bassNotes[bar], (60 / this.bpm) * 3.6);
      }

      // 2. Sparkling Ambient Arpeggio Lead (on 16th notes with gentle syncopation)
      if (stepInBar % 2 === 0) {
        const arpIndex = (this.currentStep % arpeggioNotes.length);
        const freq = arpeggioNotes[arpIndex];
        // Skip occasional notes for natural musical breathing
        if (stepInBar !== 6 && stepInBar !== 14) {
          this.playArpPluck(freq, 0.28);
        }
      }

      // 3. Subtle Lo-Fi Electronic Beat Pulse (soft kick on beats 0 & 8, soft hi-hat on offbeats)
      if (stepInBar === 0 || stepInBar === 8) {
        this.playSoftKick();
      } else if (stepInBar % 4 === 2) {
        this.playSoftHat();
      }

      this.currentStep = (this.currentStep + 1) % 64; // 4-bar loop (64 steps)
    }, stepInterval);
  }

  stopBgm(): void {
    this.bgmPlaying = false;
    if (this.bgmTimer !== null) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  private playPadVoice(freq: number, dur: number, delay = 0): void {
    if (!this.ctx || !this.bgmMaster) return;
    try {
      const t0 = this.ctx.currentTime + delay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t0);

      // Soft swelling attack and smooth release
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.linearRampToValueAtTime(0.06, t0 + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

      osc.connect(gain);
      gain.connect(this.bgmMaster);

      osc.start(t0);
      osc.stop(t0 + dur + 0.1);
    } catch {
      /* ignore */
    }
  }

  private playSubBass(freq: number, dur: number): void {
    if (!this.ctx || !this.bgmMaster) return;
    try {
      const t0 = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t0);

      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.linearRampToValueAtTime(0.14, t0 + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

      osc.connect(gain);
      gain.connect(this.bgmMaster);

      osc.start(t0);
      osc.stop(t0 + dur + 0.05);
    } catch {
      /* ignore */
    }
  }

  private playArpPluck(freq: number, dur: number): void {
    if (!this.ctx || !this.bgmMaster) return;
    try {
      const t0 = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t0);

      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.linearRampToValueAtTime(0.05, t0 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

      osc.connect(gain);
      gain.connect(this.bgmMaster);

      osc.start(t0);
      osc.stop(t0 + dur + 0.02);
    } catch {
      /* ignore */
    }
  }

  private playSoftKick(): void {
    if (!this.ctx || !this.bgmMaster) return;
    try {
      const t0 = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, t0);
      osc.frequency.exponentialRampToValueAtTime(35, t0 + 0.12);

      gain.gain.setValueAtTime(0.12, t0);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.15);

      osc.connect(gain);
      gain.connect(this.bgmMaster);

      osc.start(t0);
      osc.stop(t0 + 0.16);
    } catch {
      /* ignore */
    }
  }

  private playSoftHat(): void {
    if (!this.ctx || !this.bgmMaster) return;
    try {
      const t0 = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(7500, t0);

      gain.gain.setValueAtTime(0.02, t0);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.04);

      osc.connect(gain);
      gain.connect(this.bgmMaster);

      osc.start(t0);
      osc.stop(t0 + 0.05);
    } catch {
      /* ignore */
    }
  }

  // =========================================================================
  // SCI-FI SOUND EFFECTS (SFX)
  // Crisp, tactile, modern game sound design
  // =========================================================================
  private tone(freq: number, dur: number, type: OscillatorType, when = 0, gain = 1, slideTo?: number): void {
    if (!this.ensure() || !this.ctx || !this.sfxMaster) return;
    try {
      const t0 = this.ctx.currentTime + when;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t0);
      if (slideTo) {
        osc.frequency.exponentialRampToValueAtTime(Math.max(40, slideTo), t0 + dur);
      }
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.linearRampToValueAtTime(0.85 * gain, t0 + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(g);
      g.connect(this.sfxMaster);
      osc.start(t0);
      osc.stop(t0 + dur + 0.05);
    } catch {
      // AudioContext error handling
    }
  }

  play(voice: Voice): void {
    if (!this.ensure()) return;
    switch (voice) {
      case 'hover':
        // Crisp tactile micro-tick
        this.tone(880, 0.04, 'sine', 0, 0.4, 1100);
        break;
      case 'select':
        // Resonant sci-fi confirmation beep
        this.tone(587, 0.1, 'triangle', 0, 0.7, 880);
        this.tone(1174, 0.09, 'sine', 0.03, 0.6);
        break;
      case 'place':
        // Mechanical check engagement snap with subtle sub-punch
        this.tone(330, 0.15, 'triangle', 0, 0.8, 660);
        this.tone(990, 0.12, 'sine', 0.02, 0.7, 1320);
        break;
      case 'remove':
        // De-select feedback drop
        this.tone(550, 0.12, 'triangle', 0, 0.5, 220);
        break;
      case 'launch':
        // Power surge launch sweep
        this.tone(150, 0.6, 'sawtooth', 0, 0.7, 750);
        this.tone(300, 0.55, 'sine', 0.05, 0.75, 1200);
        this.tone(600, 0.45, 'triangle', 0.1, 0.6, 1600);
        break;
      case 'scan':
        // High-tech laser wavefront radar sweep
        this.tone(440, 0.35, 'triangle', 0, 0.6, 1320);
        this.tone(880, 0.3, 'sine', 0.05, 0.5, 1760);
        break;
      case 'hit':
        // Electric noise spark & alarm trip
        this.tone(280, 0.22, 'square', 0, 0.7, 140);
        this.tone(560, 0.18, 'sawtooth', 0.03, 0.6, 120);
        break;
      case 'chime':
        // Clean post-selection preservation chime
        this.tone(784, 0.25, 'sine', 0, 0.7);
        this.tone(1046, 0.28, 'triangle', 0.05, 0.65);
        break;
      case 'zap':
        // Physical gate depolarizing noise pulse
        this.tone(190, 0.18, 'sawtooth', 0, 0.65, 80);
        break;
      case 'pulse':
        // Sensor ping
        this.tone(520 + Math.random() * 260, 0.08, 'triangle', 0, 0.4);
        break;
      case 'success':
        // Triumphant five-note victory fanfare in D major
        [587.33, 739.99, 880.0, 1174.66, 1479.98].forEach((f, i) => {
          this.tone(f, 0.38, 'triangle', i * 0.08, 0.75);
          this.tone(f * 1.5, 0.25, 'sine', i * 0.08 + 0.02, 0.4);
        });
        break;
      case 'fail':
        // Minor hazard warning
        [330, 277, 196].forEach((f, i) => {
          this.tone(f, 0.35, 'sawtooth', i * 0.11, 0.65, f * 0.7);
        });
        break;
      case 'unlock':
        // High-level achievement chime
        [659, 880, 1175, 1760].forEach((f, i) => {
          this.tone(f, 0.45, 'sine', i * 0.08, 0.75);
        });
        break;
      case 'error':
        // Warning buzz
        this.tone(180, 0.24, 'sawtooth', 0, 0.65, 120);
        break;
    }
  }

  toggleMute(): boolean {
    this.muted = !this.muted;
    try {
      localStorage.setItem(MUTE_KEY, this.muted ? '1' : '0');
    } catch {
      /* ignore */
    }
    if (this.muted) {
      this.stopBgm();
      if (this.ctx && this.ctx.state === 'running') {
        this.ctx.suspend();
      }
    } else {
      this.ensure();
      this.startBgm();
      this.play('select');
    }
    return this.muted;
  }
}

export const audio = new AudioEngine();