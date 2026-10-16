import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { disposeObject, makeBackdrop, makeNebula, makeTextSprite, type StageBuild } from './engine';
import type { Circuit } from '../api';
import type { Sector } from '../story';

export type PickAction = string;

export type Stage =
  | { kind: 'boot' }
  | { kind: 'core'; accent?: string }
  | { kind: 'map'; sectors: Sector[]; active: number; passed: Record<number, boolean> }
  | { kind: 'play'; circuit: Circuit | null; dataQubits: number; selected: number[]; checks: number; tCount: number; scanning: boolean; accent: string }
  | { kind: 'debrief'; passed: boolean; fidelity: number; retention: number; score: number; accent: string };

const GATE_COLOR: Record<string, number> = {
  h: 0x4f8cff, x: 0xff6b6b, z: 0x8b5cf6, sx: 0x22d3ee, sxdg: 0x0ea5b7, s: 0xa78bfa, sdg: 0x7c3aed,
  t: 0xf472b6, cz: 0x38bdf8, cx: 0x60a5fa, measure: 0xa78bfa, reset: 0xfacc15, id: 0x64748b,
};
const GATE_FALLBACK = 0x3b82f6;
const SECTOR_COLOR: Record<number, number> = { 1: 0xff7ac0, 2: 0xffc46b, 3: 0x9db4ff, 4: 0x6fe6d6 };

function hex(accent: string): number {
  const m = accent.match(/^#?([0-9a-f]{6})$/i);
  return m ? parseInt(m[1], 16) : 0x58d6ff;
}

function buildCore(accent: number, scale = 1): { obj: THREE.Group; update: (t: number, k: number) => void } {
  const g = new THREE.Group();
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.62 * scale, 1),
    new THREE.MeshStandardMaterial({ color: 0x0b1020, emissive: accent, emissiveIntensity: 0.85, metalness: 0.6, roughness: 0.25, flatShading: true }),
  );
  const shell = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.62 * scale, 1),
    new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.32 }),
  );
  shell.scale.setScalar(1.38);
  const a = new THREE.Mesh(new THREE.RingGeometry(0.95 * scale, 0.9 * scale, 96, 1), new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.65 }));
  const b = new THREE.Mesh(new THREE.RingGeometry(1.1 * scale, 1.06 * scale, 96, 1), new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.45 }));
  a.rotation.set(1.25, 0.35, 0); b.rotation.set(1.05, -0.5, 0.6);
  const n = 80;
  const pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const v = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize().multiplyScalar(scale * (1.5 + Math.random() * 0.9));
    pos.set([v.x, v.y, v.z], i * 3);
  }
  const spark = new THREE.Points(
    new THREE.BufferGeometry(),
    new THREE.PointsMaterial({ color: accent, size: 0.1, transparent: true, opacity: 0.9, depthWrite: false }),
  );
  (spark.geometry as THREE.BufferGeometry).setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.add(core, shell, a, b, spark);
  const update = (t: number, k: number) => {
    core.rotation.x += 0.002 * k; core.rotation.y += 0.0032 * k;
    shell.rotation.y -= 0.0016; shell.rotation.x += 0.001;
    a.rotation.z += 0.006 * k; b.rotation.z -= 0.004 * k;
    (core.material as THREE.MeshStandardMaterial).emissiveIntensity = (0.75 + 0.7 * k) * (1 + Math.sin(t * 2.4) * 0.15);
    (shell.material as THREE.MeshBasicMaterial).opacity = 0.25 + 0.2 * Math.sin(t * 2.4);
  };
  return { obj: g, update };
}

function buildCyberGrid(): { obj: THREE.Group; update: (t: number) => void } {
  const g = new THREE.Group();
  const size = 64;
  const divisions = 40;
  const grid = new THREE.GridHelper(size, divisions, 0x00f0ff, 0x4c1d95);
  grid.position.y = -2.8;
  const mat = grid.material as THREE.LineBasicMaterial;
  mat.transparent = true;
  mat.opacity = 0.5;
  g.add(grid);

  // Floating quantum data particles on grid
  const count = 180;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 36;
    pos[i * 3 + 1] = -2.8 + Math.random() * 0.5;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 44;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pmat = new THREE.PointsMaterial({
    color: 0x00f0ff,
    size: 0.12,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const sparks = new THREE.Points(geo, pmat);
  g.add(sparks);

  const update = (t: number) => {
    grid.position.z = (t * 2.2) % (size / divisions) - (size / divisions) / 2;
  };
  return { obj: g, update };
}

function buildBoot(): StageBuild {
  const root = new THREE.Group();
  const grid = buildCyberGrid();
  root.add(grid.obj);

  // Grand Quantum Reactor Core
  const core = buildCore(0x00f0ff, 1.35);
  root.add(core.obj);

  // 4 Orbiting Quantum Qubit Nodes with Entanglement Laser Beams
  const qNodes: { node: THREE.Mesh; line: THREE.Line; angle: number; speed: number; radius: number }[] = [];
  const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
  for (let i = 0; i < 4; i++) {
    const col = i % 2 === 0 ? 0x00f0ff : 0xec4899;
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x030712,
      emissive: col,
      emissiveIntensity: 1.5,
      roughness: 0.2,
    });
    const node = new THREE.Mesh(nodeGeo, nodeMat);
    const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)]);
    const lineMat = new THREE.LineBasicMaterial({
      color: col,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const line = new THREE.Line(lineGeo, lineMat);
    root.add(node);
    root.add(line);
    qNodes.push({
      node,
      line,
      angle: (i / 4) * Math.PI * 2,
      speed: 0.7 + i * 0.2,
      radius: 2.2 + (i % 2) * 0.4,
    });
  }

  const update = (t: number, dt: number) => {
    grid.update(t);
    core.update(t, 1.2);
    qNodes.forEach((qn) => {
      qn.angle += dt * qn.speed;
      const x = Math.cos(qn.angle) * qn.radius;
      const y = Math.sin(t * 1.5 + qn.angle) * 0.45;
      const z = Math.sin(qn.angle) * qn.radius;
      qn.node.position.set(x, y, z);
      const pos = qn.line.geometry.attributes.position as THREE.BufferAttribute;
      pos.setXYZ(1, x, y, z);
      pos.needsUpdate = true;
    });
  };
  return { root, update };
}

function buildCoreStage(accent?: string): StageBuild {
  const root = new THREE.Group();
  const core = buildCore(accent ? hex(accent) : 0x8b7bff, 1);
  root.add(core.obj);
  const update = (t: number) => core.update(t, 0.85);
  return { root, update };
}

function buildMap(sectors: Sector[], active: number, passed: Record<number, boolean>): StageBuild {
  const root = new THREE.Group();
  const pickables: THREE.Object3D[] = [];
  const planets: { obj: THREE.Group; body: THREE.Mesh }[] = [];
  const n = sectors.length;
  for (let i = 0; i < n; i++) {
    const s = sectors[i];
    const angle = (i / n) * Math.PI * 2 + 0.35;
    const col = SECTOR_COLOR[s.id] ?? 0x88ccff;
    const grp = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.42, 0),
      new THREE.MeshStandardMaterial({ color: 0x0c1220, emissive: col, emissiveIntensity: 0.55, metalness: 0.5, roughness: 0.3, flatShading: true }),
    );
    body.userData.action = `sector:${s.id}`;
    body.userData.label = `${s.title} · ${s.codename}${passed[s.id] ? ' · SECURED' : ''}`;
    body.userData.pick = true;
    grp.add(body);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.58, 0.02, 12, 60),
      new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: i === active ? 0.95 : 0.25 }),
    );
    ring.rotation.set(Math.PI / 2.4, 0, 0.4);
    ring.scale.set(1, 0.62, 1);
    grp.add(ring);
    if (passed[s.id]) {
      const pt = new THREE.Points(
        new THREE.BufferGeometry(),
        new THREE.PointsMaterial({ color: 0xffe9a8, size: 0.09, transparent: true, depthWrite: false }),
      );
      const st = new Float32Array(26 * 3);
      for (let q = 0; q < 26; q++) {
        const v = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize().multiplyScalar(0.95);
        st.set([v.x, v.y, v.z], q * 3);
      }
      (pt.geometry as THREE.BufferGeometry).setAttribute('position', new THREE.BufferAttribute(st, 3));
      grp.add(pt);
    }
    const label = makeTextSprite(`${s.title}\nEPISODE ${String(s.id).padStart(2, '0')} · ${s.codename}`, {
      color: '#eaf4ff', bg: 'none', size: 30, width: 430, scale: 0.03,
    });
    label.position.set(0, -0.95, 0);
    grp.add(label);
    const frac = i / n;
    const radius = 2.7;
    grp.position.set(Math.cos(angle) * radius, Math.sin(frac * Math.PI * 2) * 0.85, Math.sin(angle) * radius);
    grp.add(orbitPath(angle, radius));
    root.add(grp);
    pickables.push(body);
    planets.push({ obj: grp, body });
  }
  const core = buildCore(0x9db4ff, 0.8);
  root.add(core.obj);
  const update = (t: number) => {
    planets.forEach((p, i) => {
      const a = (i / n) * Math.PI * 2 + 0.35;
      p.obj.position.y = Math.sin(a * 1.7) * 0.85 + Math.sin(t * 0.8 + i * 1.3) * 0.06;
      const mat = p.body.material as THREE.MeshStandardMaterial;
      if (i === active) {
        mat.emissiveIntensity = 0.95 + Math.sin(t * 4) * 0.3;
        p.body.scale.setScalar(1 + Math.sin(t * 3.2) * 0.05);
      } else {
        mat.emissiveIntensity = 0.55;
        p.body.scale.setScalar(1);
      }
      p.body.rotation.y += 0.007; p.body.rotation.x += 0.003;
    });
    core.update(t, 0.75);
  };
  const hover = (obj: THREE.Object3D, on: boolean) => {
    const m = (obj as THREE.Mesh).material as THREE.MeshStandardMaterial;
    if (on) { m.emissiveIntensity = 1.5; obj.scale.setScalar(1.18); }
    else { m.emissiveIntensity = 0.55; obj.scale.setScalar(1); }
  };
  return { root, update, pickables, hover };
}

function orbitPath(angle: number, radius: number): THREE.Object3D {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= 96; i++) {
    const a = angle + (i / 96) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a * 1.7) * 0.85 + 0.08, Math.sin(a) * radius));
  }
  return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x2a4a78, transparent: true, opacity: 0.12 }));
}

function buildPlay(stage: Extract<Stage, { kind: 'play' }>): StageBuild {
  const root = new THREE.Group();
  const pickables: THREE.Object3D[] = [];
  const circuit = stage.circuit;
  const n = circuit ? circuit.n_qubits : stage.dataQubits;
  const dataQubits = circuit ? circuit.data_qubits : stage.dataQubits;
  const ops = circuit?.operations ?? [];
  const laneH = 0.62;
  const step = 0.34;
  const startX = -3.4;
  const x0 = startX + 2.6;
  const midX = ops.length ? x0 + ((ops.length - 1) * step) / 2 : 0;
  const span = ops.length ? (ops.length - 1) * step + 1.4 : 6;
  const scale = Math.min(1, 7.6 / span);
  const laneLen = span + 7;
  const laneY = (q: number) => (q - (n - 1) / 2) * laneH;
  const atoms: { group: THREE.Group; nucleus: THREE.Mesh; on: boolean }[] = [];
  const pulse: { obj: THREE.Object3D; baseY: number; amp: number; phase: number; speed: number }[] = [];
  const beamCol = hex(stage.accent);

  const laneGeo = new THREE.CylinderGeometry(0.022, 0.022, laneLen, 12, 1, true);
  laneGeo.rotateZ(-Math.PI / 2);

  for (let q = 0; q < n; q++) {
    const y = laneY(q);
    const anc = circuit ? circuit.ancilla_indices.includes(q) : q >= dataQubits;
    const lane = new THREE.Mesh(
      laneGeo,
      new THREE.MeshStandardMaterial({ color: anc ? 0x0d4a42 : 0x1e3a55, emissive: anc ? 0x2dd4bf : 0x3f7fc0, emissiveIntensity: 0.6, metalness: 0.6, roughness: 0.35 }),
    );
    lane.position.set(0.35, y, 0);
    root.add(lane);
    const glow = new THREE.Mesh(
      laneGeo,
      new THREE.MeshBasicMaterial({ color: anc ? 0x2dd4bf : 0x4aa0e8, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    glow.position.copy(lane.position);
    glow.scale.setScalar(1.5);
    root.add(glow);
    const on = stage.selected.includes(q);
    const lbl = makeTextSprite(on ? `q${q} · #${stage.selected.indexOf(q) + 1}` : anc ? `a${q - dataQubits}` : `q${q}`, {
      color: on ? '#06202b' : anc ? '#5fe0cf' : '#cfe6ff', bg: on ? stage.accent : 'none', size: 24, width: 120, scale: 0.05,
    });
    lbl.position.set(-4.5, y, 0);
    root.add(lbl);

    if (anc) {
      const dot = new THREE.Mesh(new THREE.OctahedronGeometry(0.1, 0), new THREE.MeshStandardMaterial({ color: 0x0d3f3a, emissive: 0x2dd4bf, emissiveIntensity: 0.35, metalness: 0.5, roughness: 0.3 }));
      dot.position.set(-3.95, y, 0);
      root.add(dot);
      continue;
    }

    const atom = new THREE.Group();
    atom.position.set(-3.95, y, 0);
    const nucleus = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.135, 1),
      new THREE.MeshStandardMaterial({ color: on ? hex(stage.accent) : 0x12263a, emissive: on ? hex(stage.accent) : 0x6ab0ff, emissiveIntensity: on ? 1.25 : 0.55, metalness: 0.6, roughness: 0.3 }),
    );
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.32, 0.34, 48, 1),
      new THREE.MeshBasicMaterial({ color: on ? hex(stage.accent) : 0x74b7ff, transparent: true, opacity: on ? 0.9 : 0.45, side: THREE.DoubleSide }),
    );
    ring.rotation.x = Math.PI / 2.2;
    const ring2 = new THREE.Mesh(
      new THREE.RingGeometry(0.42, 0.44, 48, 1),
      new THREE.MeshBasicMaterial({ color: on ? hex(stage.accent) : 0x5a8cc2, transparent: true, opacity: on ? 0.7 : 0.3, side: THREE.DoubleSide }),
    );
    ring2.rotation.x = Math.PI / 1.6;
    const electron = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 12, 10),
      new THREE.MeshBasicMaterial({ color: on ? 0xffe9a8 : 0xa8d8ff, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    electron.position.set(0.34, 0.04, 0);
    atom.add(nucleus, ring, ring2, electron);
    atom.userData.spin = Math.random() * Math.PI * 2;
    root.add(atom);
    nucleus.userData.action = `qubit:${q}`;
    nucleus.userData.label = on ? `q${q} · target #${stage.selected.indexOf(q) + 1} — click to remove` : `q${q} — click to add as protection target`;
    nucleus.userData.pick = true;
    pickables.push(nucleus);
    atoms.push({ group: atom, nucleus, on });
  }

  gateHelpers(ops, laneY, x0, step, root, pulse);

  const halo = new THREE.Mesh(
    new THREE.RingGeometry(Math.max(3.4, n * laneH + 1.1), Math.max(4.0, n * laneH + 1.7), 96, 1),
    new THREE.MeshBasicMaterial({ color: beamCol, transparent: true, opacity: 0.16, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }),
  );
  halo.rotation.x = -Math.PI / 2;
  halo.position.set(0.35, -Math.max(1.8, (n * laneH) / 2 + 0.2) - 0.02, -0.5);
  root.add(halo);

  const beams: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>[] = [];
  for (let c = 0; c < stage.checks; c++) {
    if (!stage.selected.length) break;
    const ys = stage.selected.map(laneY);
    const min = Math.min(...ys); const max = Math.max(...ys);
    const bx = 0.4 + (c - (Math.max(1, stage.checks) - 1) / 2) * 0.62;
    const edge = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, max - min + 0.5, 0.14),
      new THREE.MeshBasicMaterial({ color: beamCol, transparent: true, opacity: 0.85 }),
    );
    edge.position.set(bx, (max + min) / 2, -0.12);
    beams.push(edge);
    root.add(edge);
    const glowB = new THREE.Mesh(
      new THREE.BoxGeometry(0.34, max - min + 0.6, 0.34),
      new THREE.MeshBasicMaterial({ color: beamCol, transparent: true, opacity: 0.12 }),
    );
    glowB.position.copy(edge.position);
    root.add(glowB);
  }

  let scanPlane: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial> | null = null;
  if (stage.scanning) {
    scanPlane = new THREE.Mesh(
      new THREE.BoxGeometry(0.22, Math.max(3.2, n * laneH + 1.2), 0.22),
      new THREE.MeshBasicMaterial({ color: 0x35d8ee, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    scanPlane.position.set(-laneLen / 2, 0, 0.25);
    root.add(scanPlane);
  }

  root.position.x = -midX;
  root.scale.setScalar(scale);

  const update = (t: number, dt: number) => {
    root.rotation.y = Math.sin(t * 0.25) * 0.06;
    halo.rotation.z += dt * 0.1;
    atoms.forEach((a, i) => {
      a.group.rotation.z += dt * (a.on ? 2.6 : 1.8);
      a.group.rotation.y = Math.sin(t * 0.7 + i * 1.7) * 0.35;
      const m = a.nucleus.material as THREE.MeshStandardMaterial;
      m.emissiveIntensity = (a.on ? 1.15 : 0.5) + Math.sin(t * 4 + i * 1.9) * 0.25;
      a.nucleus.scale.setScalar(a.on ? 1 + Math.sin(t * 3.4 + i) * 0.08 : 1);
    });
    pulse.forEach((p, i) => {
      p.obj.position.y = p.baseY + Math.sin(t * (p.speed ?? 2.2) + p.phase) * 0.03;
      p.obj.scale.setScalar(1 + (p.amp ?? 0.08) * Math.sin(t * (p.speed ?? 2.2) + p.phase));
    });
    beams.forEach((b, i) => {
      b.material.opacity = 0.55 + Math.sin(t * 5 + i * 1.4) * 0.3;
      b.scale.y = 1 + Math.sin(t * 4 + i) * 0.05;
    });
    if (scanPlane) {
      scanPlane.position.x = -laneLen / 2 + ((t * 2.2) % (laneLen + 0.4));
    }
  };

  const hover = (obj: THREE.Object3D, on: boolean) => {
    const m = (obj as THREE.Mesh).material as THREE.MeshStandardMaterial;
    obj.scale.setScalar(on ? 1.4 : 1);
    if (m.emissiveIntensity !== undefined) m.emissiveIntensity = on ? 1.8 : (obj.userData.hoverOnly ? 0.45 : 0.55);
  };
  return { root, update, pickables, hover };
}

function gateHelpers(ops: Circuit['operations'], laneY: (q: number) => number, x0: number, step: number, root: THREE.Group, pulse: { obj: THREE.Object3D; baseY: number; amp: number; phase: number; speed: number }[]) {
  ops.forEach((gate, j) => {
    const x = x0 + j * step;
    const col = gate.role === 'check_related' ? 0x2dd4bf : GATE_COLOR[gate.name] ?? GATE_FALLBACK;
    const ys = gate.qubits.map(laneY);
    if (!ys.length) return;
    const phase = (j % 5) * 1.1;
    if (gate.qubits.length === 2) {
      const min = Math.min(...ys); const max = Math.max(...ys);
      const mid = (max + min) / 2;
      const brace = new THREE.Mesh(
        new THREE.BoxGeometry(0.07, Math.max(0.14, max - min), 0.07),
        new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.85 }),
      );
      brace.position.set(x, mid, 0);
      root.add(brace);
      const ctrl = new THREE.Mesh(new THREE.SphereGeometry(0.115, 14, 10), new THREE.MeshBasicMaterial({ color: col === 0x38bdf8 ? 0x9b8cff : 0x22d3ee }));
      ctrl.position.set(x, min, 0);
      root.add(ctrl);
      const tgt = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), new THREE.MeshBasicMaterial({ color: col, wireframe: true }));
      tgt.position.set(x, max, 0);
      root.add(tgt);
      pulse.push({ obj: ctrl, baseY: min, amp: 0.1, phase, speed: 2.6 });
      pulse.push({ obj: tgt, baseY: max, amp: 0.1, phase: phase + 0.6, speed: 2.6 });
    } else {
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(0.17, 0.17, 0.17),
        new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 0.45, metalness: 0.4, roughness: 0.3 }),
      );
      box.position.set(x, ys[0], 0);
      box.userData.action = `gate:${gate.index}`;
      box.userData.label = `${gate.name.toUpperCase()} · qubit ${gate.qubits[0]} · op #${gate.index}`;
      box.userData.pick = true;
      box.userData.hoverOnly = true;
      root.add(box);
      pulse.push({ obj: box, baseY: ys[0], amp: 0.07, phase, speed: 2.6 });
      const sym = gate.name === 'sdg' ? 'S†' : gate.name === 'sxdg' ? '√X†' : gate.name === 'measure' ? 'M' : gate.name.toUpperCase().slice(0, 3);
      const lbl = makeTextSprite(sym, { color: '#ffffff', bg: 'none', size: 22, width: 100, scale: 0.09 });
      lbl.position.set(x, ys[0], 0.3);
      root.add(lbl);
    }
  });
}

function buildDebrief(stage: Extract<Stage, { kind: 'debrief' }>): StageBuild {
  const root = new THREE.Group();
  const fracs = [
    { val: stage.retention, color: 0x22d3ee, label: 'SHOTS KEPT' },
    { val: stage.fidelity, color: hex(stage.accent), label: 'OUTPUT FIDELITY' },
    { val: Math.max(0, Math.min(1, stage.score / 100)), color: 0xffc46b, label: 'SCORE / 100' },
  ];
  const rings: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>[] = [];
  fracs.forEach((f, i) => {
    const r = new THREE.Mesh(
      new THREE.RingGeometry(0.92, 1.1, 96, 1, 0, Math.PI * 2),
      new THREE.MeshBasicMaterial({ color: f.color, transparent: true, opacity: 0.95, side: THREE.DoubleSide }),
    );
    r.position.set((i - 1) * 1.7, 0.2, 0);
    r.scale.set(0.001, 0.001, 1);
    root.add(r);
    rings.push(r);
    const label = makeTextSprite(f.label, { color: '#cfe0ef', bg: 'none', size: 26, width: 300, scale: 0.03 });
    label.position.set((i - 1) * 1.7, -0.62, 0);
    root.add(label);
  });
  let burst: THREE.Points | null = null;
  if (stage.passed) {
    const N = 140;
    const pos = new Float32Array(N * 3);
    const vel: THREE.Vector3[] = [];
    for (let i = 0; i < N; i++) {
      const v = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize().multiplyScalar(0.6 + Math.random() * 1.2);
      pos.set([0, 0.1, 1.2], i * 3);
      vel.push(v);
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    burst = new THREE.Points(
      geom,
      new THREE.PointsMaterial({ color: 0xffe9a8, size: 0.07, transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending }),
    );
    burst.userData.v = vel;
    root.add(burst);
  }
  const update = (t: number, dt: number) => {
    rings.forEach((ring, i) => {
      const f = ring.scale.x + (fracs[i].val - ring.scale.x) * Math.min(1, dt * 1.8);
      ring.scale.set(f, f, 1);
      ring.rotation.z = t * 0.12;
    });
    if (burst) {
      const att = (burst.geometry as THREE.BufferGeometry).getAttribute('position') as THREE.BufferAttribute;
      const arr = att.array as Float32Array;
      const ref = burst.userData.v as THREE.Vector3[];
      for (let i = 0; i < arr.length / 3; i++) {
        arr[i * 3] += ref[i].x * dt;
        arr[i * 3 + 1] += ref[i].y * dt;
        arr[i * 3 + 2] += ref[i].z * dt;
      }
      att.needsUpdate = true;
    }
  };
  return { root, update };
}

function buildStage(stage: Stage): StageBuild {
  switch (stage.kind) {
    case 'boot': return buildBoot();
    case 'core': return buildCoreStage(stage.accent);
    case 'map': return buildMap(stage.sectors, stage.active, stage.passed);
    case 'play': return buildPlay(stage);
    case 'debrief': return buildDebrief(stage);
  }
}

export default function Stage3D({
  stage, onPick, onHover, className, id,
}: {
  stage: Stage;
  onPick?: (a: PickAction) => void;
  onHover?: (label: string | null) => void;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef(stage);
  const pickRef = useRef(onPick);
  const hoverRef = useRef(onHover);
  const buildRef = useRef<(s: Stage) => void>(() => {});
  stageRef.current = stage;
  pickRef.current = onPick;
  hoverRef.current = onHover;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#04060d');
    scene.fog = new THREE.Fog('#04060d', 16, 34);
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 120);
    camera.position.set(0, 0.25, 8.6);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    el.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0x8fb3ff, 0x0a0a14, 0.9);
    const key = new THREE.DirectionalLight(0xcfd8ff, 0.9);
    key.position.set(3, 6, 4);
    scene.add(hemi, key);

    const stars = makeBackdrop(1100, 44);
    scene.add(stars);
    scene.add(makeNebula('rgba(124,92,255,0.10)', -9, 3, -8, 17));
    scene.add(makeNebula('rgba(34,211,238,0.10)', 10, -4, -10, 20));

    const stageRoot = new THREE.Group();
    scene.add(stageRoot);
    let current: StageBuild = { root: new THREE.Group() };
    const putStage = (s: Stage) => {
      disposeObject(stageRoot);
      while (stageRoot.children.length) stageRoot.remove(stageRoot.children[0]);
      current = buildStage(s);
      stageRoot.add(current.root);
    };
    putStage(stageRef.current);
    buildRef.current = putStage;

    const clock = new THREE.Clock();
    const raycaster = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    const pickedCursor: THREE.Object3D[] = [];

    const raycast = (cx: number, cy: number) => {
      const rect = renderer.domElement.getBoundingClientRect();
      ndc.x = ((cx - rect.left) / rect.width) * 2 - 1;
      ndc.y = -((cy - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(ndc, camera);
      return raycaster.intersectObjects(current.pickables ?? [], false);
    };

    const down = (e: PointerEvent) => {
      const hit = raycast(e.clientX, e.clientY).find((h) => h.object.userData.action);
      if (hit) pickRef.current?.(hit.object.userData.action as string);
    };

    let targetMouseX = 0;
    let targetMouseY = 0;

    const move = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      targetMouseX = (((e.clientX - rect.left) / rect.width) * 2 - 1) * 0.85;
      targetMouseY = (-((e.clientY - rect.top) / rect.height) * 2 + 1) * 0.55;

      pickedCursor.forEach((o) => current.hover?.(o, false));
      pickedCursor.length = 0;
      const hit = raycast(e.clientX, e.clientY).find((h) => h.object.userData.action || h.object.userData.hoverOnly);
      if (hit) {
        pickedCursor.push(hit.object);
        current.hover?.(hit.object, true);
        hoverRef.current?.(hit.object.userData.label as string);
        renderer.domElement.style.cursor = 'pointer';
      } else {
        hoverRef.current?.(null);
        renderer.domElement.style.cursor = '';
      }
    };

    renderer.domElement.addEventListener('pointerdown', down);
    renderer.domElement.addEventListener('pointermove', move);

    let raf = 0;
    const loop = () => {
      const dt = Math.min(0.1, clock.getDelta());
      const t = clock.elapsedTime;
      stars.rotation.y += dt * 0.006;
      camera.position.x += (targetMouseX - camera.position.x) * 0.04;
      camera.position.y += (0.25 + targetMouseY - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      current.update?.(t, dt);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => {
      const w = el.clientWidth; const h = el.clientHeight;
      camera.aspect = w / Math.max(1, h);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    ro.observe(el);

    return () => {
      buildRef.current = () => {};
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.domElement.removeEventListener('pointerdown', down);
      renderer.domElement.removeEventListener('pointermove', move);
      disposeObject(stars);
      disposeObject(stageRoot);
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    buildRef.current(stage);
  }, [stage]);

  return <div ref={ref} id={id} className={className ?? 'stage3d'} aria-hidden="true" />;
}