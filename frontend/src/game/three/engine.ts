import * as THREE from 'three';

export function makeTextSprite(
  text: string,
  opts: { color?: string; bg?: string; size?: number; width?: number; scale?: number } = {},
): THREE.Sprite {
  const { color = '#e8f4ff', bg = 'none', size = 34, width = 256, scale = 0.02 } = opts;
  const lines = text.split('\n');
  const lineH = size * 1.25;
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(64, width);
  canvas.height = Math.max(64, lineH * lines.length + 16);
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.Sprite(new THREE.SpriteMaterial({ color }));
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (bg && bg !== 'none') {
    ctx.fillStyle = bg;
    roundRect(ctx, 4, 4, canvas.width - 8, canvas.height - 8, 14);
    ctx.fill();
  }
  ctx.font = `700 ${size}px 'Barlow Condensed', 'Segoe UI', system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = color;
  lines.forEach((ln, i) => ctx.fillText(ln, canvas.width / 2, (canvas.height / 2) + (i - (lines.length - 1) / 2) * lineH));
  const tex = new THREE.CanvasTexture(canvas);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
  const aspect = canvas.width / canvas.height;
  sprite.scale.set(scale * aspect * canvas.width / 256, scale * canvas.height / 256, 1);
  return sprite;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export function makeBackdrop(count = 900, r = 40): THREE.Points {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 2;
    const y = (Math.random() - 0.5) * 2;
    const z = (Math.random() - 0.5) * 2;
    const v = new THREE.Vector3(x, y, z).normalize().multiplyScalar(r * (0.85 + Math.random() * 0.35));
    pos.set([v.x, v.y, v.z], i * 3);
    const t = 0.4 + Math.random() * 0.6;
    c.setHSL(0.62 + Math.random() * 0.2, 0.5, t);
    col.set([c.r, c.g, c.b], i * 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const m = new THREE.PointsMaterial({
    size: 0.07, vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false, fog: false,
  });
  return new THREE.Points(g, m);
}

export function makeNebula(color: string, x: number, y: number, z: number, r: number): THREE.Sprite {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.Sprite(new THREE.SpriteMaterial({ color }));
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, color);
  grad.addColorStop(0.35, color.replace('5', '3').replace('5', '3'));
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  sprite.position.set(x, y, z);
  sprite.scale.setScalar(r);
  return sprite;
}

export function disposeObject(obj: THREE.Object3D) {
  obj.traverse((o) => {
    const any = o as unknown as { geometry?: THREE.BufferGeometry; material?: THREE.Material | THREE.Material[] };
    if (any.geometry) any.geometry.dispose();
    const mats = Array.isArray(any.material) ? any.material : any.material ? [any.material] : [];
    for (const m of mats) {
      const mm = m as THREE.Material & { map?: THREE.Texture | null };
      if (mm.map) mm.map.dispose();
      m.dispose();
    }
  });
}

export type Updatable = { update: (t: number, dt: number) => void };

export type StageBuild = {
  root: THREE.Group;
  update?: (t: number, dt: number) => void;
  pickables?: THREE.Object3D[];
  hover?: (obj: THREE.Object3D, hovered: boolean) => void;
};