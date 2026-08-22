import React, { useEffect, useRef } from 'react';

export default function FluidWaterCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Disable on mobile touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 767) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates & spring follower position
    const mouse = { x: width / 2, y: height / 2 };
    const liquidFollower = { x: width / 2, y: height / 2, vx: 0, vy: 0, radius: 14 };

    // Fluid particles array
    const particles = [];
    let lastX = mouse.x;
    let lastY = mouse.y;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const dist = Math.hypot(mouse.x - lastX, mouse.y - lastY);

      // Spawn fluid water ripple particles when moving
      if (dist > 4) {
        const count = Math.min(3, Math.floor(dist / 6));
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 1.5 + 0.5;
          particles.push({
            x: mouse.x + (Math.random() - 0.5) * 8,
            y: mouse.y + (Math.random() - 0.5) * 8,
            vx: Math.cos(angle) * speed + (mouse.x - lastX) * 0.1,
            vy: Math.sin(angle) * speed + (mouse.y - lastY) * 0.1,
            radius: Math.random() * 8 + 6,
            maxRadius: Math.random() * 24 + 18,
            alpha: 0.65,
            decay: Math.random() * 0.02 + 0.015,
            colorHue: Math.random() > 0.5 ? 160 : 210, // Emerald teal & deep water blue
          });
        }
        lastX = mouse.x;
        lastY = mouse.y;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Hover state detection for interactive elements
    let isHoveringInteractive = false;
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT' ||
        target.onclick ||
        target.classList?.contains('btn-glass') ||
        target.classList?.contains('btn-sage')
      ) {
        isHoveringInteractive = true;
      } else {
        isHoveringInteractive = false;
      }
    };
    window.addEventListener('mouseover', handleMouseOver);

    // Main animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth liquid follower movement with spring physics
      const dx = mouse.x - liquidFollower.x;
      const dy = mouse.y - liquidFollower.y;

      liquidFollower.vx += dx * 0.12;
      liquidFollower.vy += dy * 0.12;
      liquidFollower.vx *= 0.72; // Liquid resistance / damping
      liquidFollower.vy *= 0.72;

      liquidFollower.x += liquidFollower.vx;
      liquidFollower.y += liquidFollower.vy;

      // Animate liquid ring size based on hover
      const targetRadius = isHoveringInteractive ? 26 : 14;
      liquidFollower.radius += (targetRadius - liquidFollower.radius) * 0.15;

      // Draw expanding fluid water particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.radius += (p.maxRadius - p.radius) * 0.08;
        p.alpha -= p.decay;

        if (p.alpha <= 0 || p.radius >= p.maxRadius) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        if (p.colorHue === 160) {
          gradient.addColorStop(0, `rgba(52, 211, 153, ${p.alpha * 0.7})`);
          gradient.addColorStop(0.6, `rgba(16, 185, 129, ${p.alpha * 0.3})`);
          gradient.addColorStop(1, `rgba(6, 78, 59, 0)`);
        } else {
          gradient.addColorStop(0, `rgba(56, 189, 248, ${p.alpha * 0.7})`);
          gradient.addColorStop(0.6, `rgba(59, 130, 246, ${p.alpha * 0.35})`);
          gradient.addColorStop(1, `rgba(30, 58, 138, 0)`);
        }

        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }

      // Draw outer liquid water droplet ring
      ctx.save();
      ctx.beginPath();
      ctx.arc(liquidFollower.x, liquidFollower.y, liquidFollower.radius, 0, Math.PI * 2);

      const ringGrad = ctx.createRadialGradient(
        liquidFollower.x,
        liquidFollower.y,
        liquidFollower.radius * 0.2,
        liquidFollower.x,
        liquidFollower.y,
        liquidFollower.radius
      );
      ringGrad.addColorStop(0, 'rgba(52, 211, 153, 0.15)');
      ringGrad.addColorStop(0.7, 'rgba(56, 189, 248, 0.4)');
      ringGrad.addColorStop(1, 'rgba(16, 185, 129, 0.7)');

      ctx.fillStyle = ringGrad;
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.65)';
      ctx.shadowColor = 'rgba(52, 211, 153, 0.5)';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Draw central water drop core
      ctx.save();
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#34d399';
      ctx.shadowColor = '#34d399';
      ctx.shadowBlur = 8;
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
