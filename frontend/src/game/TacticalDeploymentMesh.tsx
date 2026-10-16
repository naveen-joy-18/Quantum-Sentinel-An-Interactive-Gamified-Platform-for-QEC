import React, { useEffect, useRef } from 'react';

export default function TacticalDeploymentMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 240);
    let height = (canvas.height = 70);

    let t = 0;
    const render = () => {
      t += 0.025;
      ctx.clearRect(0, 0, width, height);

      const rows = 9;
      const cols = 22;
      const xStep = width / (cols - 1);
      const yStep = height / (rows - 1);

      // Draw wireframe elevation grid
      ctx.lineWidth = 1;

      // Draw horizontal undulating lines
      for (let r = 0; r < rows; r++) {
        const yBase = r * yStep;
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const x = c * xStep;
          const distToCenter = 1 - Math.abs(c / (cols - 1) - 0.5) * 1.8;
          const wave = Math.sin(c * 0.45 + t + r * 0.3) * Math.cos(r * 0.35 + t * 0.5);
          const yOffset = wave * 10 * Math.max(0, distToCenter);
          const y = yBase - yOffset * 0.7;

          if (c === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const alpha = 0.15 + (r / rows) * 0.45;
        ctx.strokeStyle = `rgba(20, 184, 166, ${alpha * 0.75})`; // Soft teal topographic line
        ctx.stroke();
      }

      // Draw vertical lines
      for (let c = 0; c < cols; c += 2) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const x = c * xStep;
          const yBase = r * yStep;
          const distToCenter = 1 - Math.abs(c / (cols - 1) - 0.5) * 1.8;
          const wave = Math.sin(c * 0.45 + t + r * 0.3) * Math.cos(r * 0.35 + t * 0.5);
          const yOffset = wave * 10 * Math.max(0, distToCenter);
          const y = yBase - yOffset * 0.7;

          if (r === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = 'rgba(20, 184, 166, 0.25)'; // Teal structural line
        ctx.stroke();
      }

      // Draw Beacons: 1 active teal beacon at center, 2 coral pins on sides
      const beaconPins = [
        { x: width * 0.28, y: height * 0.55, color: '#ff6b5a', label: 'HAZ' },
        { x: width * 0.54, y: height * 0.38, color: '#14b8a6', label: 'BEACON' },
        { x: width * 0.78, y: height * 0.62, color: '#ff6b5a', label: 'HAZ' },
      ];

      beaconPins.forEach((b) => {
        // Pin stem
        ctx.strokeStyle = b.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(b.x, b.y + 12);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();

        // Glowing pin head
        ctx.fillStyle = b.color;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(b.x, b.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Ground ripple
        ctx.strokeStyle = `${b.color}55`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(b.x, b.y + 12, 6, 2.5, 0, 0, Math.PI * 2);
        ctx.stroke();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="tactical-deployment-canvas" />;
}
