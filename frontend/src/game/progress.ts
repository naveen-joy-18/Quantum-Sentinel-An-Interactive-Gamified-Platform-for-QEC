import { rankFor } from './story';

export type MissionRecord = { stars: number; best: number; passed: boolean; attempts: number };

export type Progress = {
  xp: number;
  missions: Record<number, MissionRecord>;
};

const KEY = 'quantum-sentinel-progress';

export function emptyProgress(): Progress {
  return { xp: 0, missions: {} };
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw) as Partial<Progress>;
    return { xp: Number(parsed.xp) || 0, missions: parsed.missions ?? {} };
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(p: Progress): void {
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { /* storage unavailable */ }
}

export function starsFor(missionId: number, passed: boolean, yieldRatio: number, retention: number): number {
  if (!passed) return 0;
  let stars = 1;
  if (missionId === 4) return 3;
  if (yieldRatio >= 0.9) stars = 2;
  if (missionId === 2 ? retention >= 0.85 : retention >= 0.8) stars = 3;
  return stars;
}

export function xpFor(missionId: number, score: number, stars: number): number {
  return Math.round(Math.max(0, score)) + stars * 25 + missionId * 10;
}

export function recordResult(
  p: Progress,
  missionId: number,
  outcome: { passed: boolean; score: number; yieldRatio: number; retention: number },
): { next: Progress; stars: number; xpGained: number; rankedUp: boolean } {
  const previous = p.missions[missionId] ?? { stars: 0, best: -Infinity, passed: false, attempts: 0 };
  const stars = starsFor(missionId, outcome.passed, outcome.yieldRatio, outcome.retention);
  const beforeRank = rankFor(p.xp).current.name;
  const xpGained = outcome.passed ? xpFor(missionId, outcome.score, stars) : 10;
  const next: Progress = {
    xp: p.xp + xpGained,
    missions: {
      ...p.missions,
      [missionId]: {
        stars: Math.max(previous.stars, stars),
        best: Math.max(previous.best === -Infinity ? 0 : previous.best, outcome.score),
        passed: previous.passed || outcome.passed,
        attempts: previous.attempts + 1,
      },
    },
  };
  saveProgress(next);
  const afterRank = rankFor(next.xp).current.name;
  return { next, stars, xpGained, rankedUp: afterRank !== beforeRank };
}
