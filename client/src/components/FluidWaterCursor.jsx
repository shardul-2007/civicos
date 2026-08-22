import React, { useEffect, useRef, useState } from 'react';

export default function FluidWaterCursor() {
  const canvasRef = useRef(null);
  const [isMobileDevice, setIsMobileDevice] = useState(() => {
    return typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 767);
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileDevice('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 767);
    };
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobileDevice) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates & liquid droplet state
    const mouse = { x: width / 2, y: height / 2 };
    const liquidBlob = {
      x: width / 2,
      y: height / 2,
      vx: 0,
      vy: 0,
      radius: 8,
      points: Array.from({ length: 8 }, (_, i) => ({
        angle: (i * Math.PI * 2) / 8,
        offset: 0,
      })),
    };

    // Water splash droplets array
    const droplets = [];
    let lastX = mouse.x;
    let lastY = mouse.y;
    let time = 0;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const dist = Math.hypot(mouse.x - lastX, mouse.y - lastY);

      // Spawn amorphous fluid water splashes when cursor moves
      if (dist > 5) {
        const count = Math.min(3, Math.floor(dist / 6));
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 1.8 + 0.6;
          droplets.push({
            x: mouse.x + (Math.random() - 0.5) * 6,
            y: mouse.y + (Math.random() - 0.5) * 6,
            vx: Math.cos(angle) * speed + (mouse.x - lastX) * 0.08,
            vy: Math.sin(angle) * speed + (mouse.y - lastY) * 0.08,
            rx: Math.random() * 4 + 3,
            ry: Math.random() * 4 + 3,
            rotation: Math.random() * Math.PI,
            alpha: 0.55,
            decay: Math.random() * 0.025 + 0.015,
            hue: Math.random() > 0.5 ? 160 : 210, // Emerald teal & deep water blue
          });
        }
        lastX = mouse.x;
        lastY = mouse.y;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Interactive element hover detection
    let isHovering = false;
    const handleMouseOver = (e) => {
      const tag = e.target.tagName;
      if (
        tag === 'BUTTON' ||
        tag === 'A' ||
        tag === 'INPUT' ||
        tag === 'SELECT' ||
        e.target.onclick ||
        e.target.classList?.contains('btn-glass') ||
        e.target.classList?.contains('btn-sage')
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };
    window.addEventListener('mouseover', handleMouseOver);

    // Main organic liquid animation loop
    const render = () => {
      time += 0.05;
      ctx.clearRect(0, 0, width, height);

      // Smooth liquid spring physics
      const dx = mouse.x - liquidBlob.x;
      const dy = mouse.y - liquidBlob.y;

      liquidBlob.vx += dx * 0.16;
      liquidBlob.vy += dy * 0.16;
      liquidBlob.vx *= 0.68; // Liquid viscosity damping
      liquidBlob.vy *= 0.68;

      liquidBlob.x += liquidBlob.vx;
      liquidBlob.y += liquidBlob.vy;

      const speed = Math.hypot(liquidBlob.vx, liquidBlob.vy);
      const motionAngle = Math.atan2(liquidBlob.vy, liquidBlob.vx);
      const targetRadius = isHovering ? 13 : 8;
      liquidBlob.radius += (targetRadius - liquidBlob.radius) * 0.2;

      // Draw dynamic organic water splash droplets
      for (let i = droplets.length - 1; i >= 0; i--) {
        const d = droplets[i];
        d.x += d.vx;
        d.y += d.vy;
        d.rx += 0.35;
        d.ry += 0.25;
        d.alpha -= d.decay;

        if (d.alpha <= 0) {
          droplets.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.rotate(d.rotation + time * 0.2);
        ctx.beginPath();

        // Amorphous fluid shape (ellipse with dynamic sine wave distortion)
        ctx.ellipse(0, 0, d.rx, d.ry * (1 + Math.sin(time * 3 + i) * 0.25), 0, 0, Math.PI * 2);

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(d.rx, d.ry));
        if (d.hue === 160) {
          grad.addColorStop(0, `rgba(52, 211, 153, ${d.alpha * 0.5})`);
          grad.addColorStop(0.7, `rgba(16, 185, 129, ${d.alpha * 0.2})`);
          grad.addColorStop(1, 'rgba(6, 78, 59, 0)');
        } else {
          grad.addColorStop(0, `rgba(56, 189, 248, ${d.alpha * 0.5})`);
          grad.addColorStop(0.7, `rgba(59, 130, 246, ${d.alpha * 0.2})`);
          grad.addColorStop(1, 'rgba(30, 58, 138, 0)');
        }

        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      // Draw main organic liquid water blob (non-circular amorphous metaball shape)
      ctx.save();
      ctx.beginPath();

      const numPoints = liquidBlob.points.length;
      const points = [];

      for (let i = 0; i < numPoints; i++) {
        const angle = (i * Math.PI * 2) / numPoints;
        // Motion directional stretch + organic wave oscillation
        const stretch = Math.cos(angle - motionAngle) * Math.min(1.2, speed * 0.25);
        const wave = Math.sin(time * 4 + i * 1.5) * 1.5;
        const r = liquidBlob.radius + stretch * 3 + wave;

        const px = liquidBlob.x + Math.cos(angle) * r;
        const py = liquidBlob.y + Math.sin(angle) * r;
        points.push({ x: px, y: py });
      }

      // Draw smooth closed bezier curve through points
      ctx.moveTo((points[0].x + points[numPoints - 1].x) / 2, (points[0].y + points[numPoints - 1].y) / 2);
      for (let i = 0; i < numPoints; i++) {
        const p1 = points[i];
        const p2 = points[(i + 1) % numPoints];
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
      }
      ctx.closePath();

      const blobGrad = ctx.createRadialGradient(
        liquidBlob.x,
        liquidBlob.y,
        0,
        liquidBlob.x,
        liquidBlob.y,
        liquidBlob.radius * 1.8
      );
      blobGrad.addColorStop(0, 'rgba(52, 211, 153, 0.2)');
      blobGrad.addColorStop(0.6, 'rgba(56, 189, 248, 0.35)');
      blobGrad.addColorStop(1, 'rgba(16, 185, 129, 0.6)');

      ctx.fillStyle = blobGrad;
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.65)';
      ctx.shadowColor = 'rgba(52, 211, 153, 0.4)';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Central precise fluid pointer dot
      ctx.save();
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#34d399';
      ctx.shadowColor = '#34d399';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobileDevice]);

  if (isMobileDevice) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 999999,
      }}
    />
  );
}
