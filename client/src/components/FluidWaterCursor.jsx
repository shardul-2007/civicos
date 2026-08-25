import React, { useEffect, useRef } from 'react';

export default function FluidWaterCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
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

    // Position & organic liquid state
    const pointer = { x: width / 2, y: height / 2, active: false };
    const liquidBlob = {
      x: width / 2,
      y: height / 2,
      vx: 0,
      vy: 0,
      radius: 7,
      targetRadius: 7,
      points: Array.from({ length: 8 }, (_, i) => ({
        angle: (i * Math.PI * 2) / 8,
      })),
    };

    // Water splash droplets array
    const droplets = [];
    let lastX = pointer.x;
    let lastY = pointer.y;
    let time = 0;

    const spawnDroplets = (x, y, dx, dy) => {
      const dist = Math.hypot(dx, dy);
      if (dist > 4) {
        const count = Math.min(2, Math.floor(dist / 5));
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 1.5 + 0.4;
          droplets.push({
            x: x + (Math.random() - 0.5) * 6,
            y: y + (Math.random() - 0.5) * 6,
            vx: Math.cos(angle) * speed + dx * 0.08,
            vy: Math.sin(angle) * speed + dy * 0.08,
            rx: Math.random() * 4 + 3,
            ry: Math.random() * 4 + 3,
            rotation: Math.random() * Math.PI,
            alpha: 0.55,
            decay: Math.random() * 0.03 + 0.015,
            hue: Math.random() > 0.5 ? 160 : 210, // Emerald teal & deep water blue
          });
        }
      }
    };

    // Desktop Mouse Events
    const handleMouseMove = (e) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
      spawnDroplets(pointer.x, pointer.y, dx, dy);
      lastX = pointer.x;
      lastY = pointer.y;
    };

    // Mobile Touch Events (iOS & Android)
    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        pointer.x = e.touches[0].clientX;
        pointer.y = e.touches[0].clientY;
        pointer.active = true;
        liquidBlob.targetRadius = 14;
        spawnDroplets(pointer.x, pointer.y, 8, 8);
        lastX = pointer.x;
        lastY = pointer.y;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const tx = e.touches[0].clientX;
        const ty = e.touches[0].clientY;
        const dx = tx - lastX;
        const dy = ty - lastY;
        pointer.x = tx;
        pointer.y = ty;
        pointer.active = true;
        spawnDroplets(pointer.x, pointer.y, dx, dy);
        lastX = pointer.x;
        lastY = pointer.y;
      }
    };

    const handleTouchEnd = () => {
      liquidBlob.targetRadius = 0;
      pointer.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Interactive Hover State
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

    // Main organic water drop render loop
    const render = () => {
      time += 0.05;
      ctx.clearRect(0, 0, width, height);

      // Smooth liquid spring physics
      const dx = pointer.x - liquidBlob.x;
      const dy = pointer.y - liquidBlob.y;

      liquidBlob.vx += dx * 0.18;
      liquidBlob.vy += dy * 0.18;
      liquidBlob.vx *= 0.65; // Liquid viscosity damping
      liquidBlob.vy *= 0.65;

      liquidBlob.x += liquidBlob.vx;
      liquidBlob.y += liquidBlob.vy;

      const speed = Math.hypot(liquidBlob.vx, liquidBlob.vy);
      const motionAngle = Math.atan2(liquidBlob.vy, liquidBlob.vx);
      const hoverTarget = isHovering ? 12 : 7;
      liquidBlob.radius += ((pointer.active ? hoverTarget : liquidBlob.targetRadius) - liquidBlob.radius) * 0.2;

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
      if (liquidBlob.radius > 0.5) {
        ctx.save();
        ctx.beginPath();

        const numPoints = liquidBlob.points.length;
        const points = [];

        for (let i = 0; i < numPoints; i++) {
          const angle = (i * Math.PI * 2) / numPoints;
          const stretch = Math.cos(angle - motionAngle) * Math.min(1.2, speed * 0.25);
          const wave = Math.sin(time * 4 + i * 1.5) * 1.5;
          const r = liquidBlob.radius + stretch * 3 + wave;

          const px = liquidBlob.x + Math.cos(angle) * r;
          const py = liquidBlob.y + Math.sin(angle) * r;
          points.push({ x: px, y: py });
        }

        // Draw smooth closed bezier curve
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
        if (pointer.active) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(pointer.x, pointer.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = '#34d399';
          ctx.shadowColor = '#34d399';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
