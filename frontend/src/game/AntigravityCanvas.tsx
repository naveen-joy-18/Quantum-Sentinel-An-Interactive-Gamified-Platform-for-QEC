import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  phase: number;
}

interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

// Strict classy palette for light theme: Teal (#0D9488), Sky (#0284C7), Coral (#E11D48)
const PALETTE = [
  '#0d9488',
  'rgba(13, 148, 136, 0.75)',
  '#e11d48',
  'rgba(225, 29, 72, 0.65)',
  '#0284c7',
];

export default function AntigravityCanvas({ accent = '#0d9488' }: { accent?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 160 };

    // Extremely subtle, clean ambient orbs in Teal, Sky, and Coral for light theme
    const orbs: Orb[] = [
      { x: width * 0.25, y: height * 0.35, vx: 0.06, vy: 0.04, radius: 320, color: 'rgba(13, 148, 136, 0.06)' },
      { x: width * 0.75, y: height * 0.3, vx: -0.05, vy: 0.03, radius: 360, color: 'rgba(225, 29, 72, 0.04)' },
      { x: width * 0.5, y: height * 0.75, vx: 0.04, vy: -0.05, radius: 280, color: 'rgba(2, 132, 199, 0.05)' },
    ];

    // Minimal, classy stardust particles (gentle and sparse)
    const particleCount = Math.min(65, Math.floor((width * height) / 22000));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const col = PALETTE[i % PALETTE.length];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.2 - Math.random() * 0.4, // Gentle upward drift
        baseRadius: 1.0 + Math.random() * 1.5,
        radius: 1.5,
        color: col,
        alpha: 0.2 + Math.random() * 0.35,
        pulseSpeed: 0.015 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
      }
    };

    const onMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    // Animation Loop
    let t = 0;
    const render = () => {
      t += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. Draw subtle deep plum nebula background
      ctx.save();
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1;
        if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // 2. Draw very faint lines between nearby stars
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 90 * 90) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / 90) * 0.12;
            ctx.strokeStyle = `rgba(20, 184, 166, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 3. Update and draw stardust particles
      particles.forEach((p) => {
        p.phase += p.pulseSpeed;
        p.radius = p.baseRadius + Math.sin(p.phase) * 0.4;

        p.x += p.vx + Math.sin(t * 1.2 + p.phase) * 0.2;
        p.y += p.vy;

        // Gentle mouse avoidance
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 2.2;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force;
          p.y += Math.sin(angle) * force;
        }

        // Wrap around
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 4. Subtle mouse ambient presence
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.save();
        const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius * 0.8);
        mouseGrad.addColorStop(0, 'rgba(20, 184, 166, 0.06)');
        mouseGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = mouseGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius * 0.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, [accent]);

  return <canvas ref={canvasRef} className="antigravity-canvas" aria-hidden="true" />;
}
