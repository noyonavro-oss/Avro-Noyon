import React, { useEffect, useRef } from 'react';

interface WaterRippleEffectProps {
  className?: string;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
  intensity: number;
  rings: number;
}

export const WaterRippleEffect: React.FC<WaterRippleEffectProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let ripples: Ripple[] = [];
    let lastMoveTime = 0;
    let lastX = 0;
    let lastY = 0;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const addRipple = (x: number, y: number, intensity: number = 1, isClick: boolean = false) => {
      // Add a primary expanding wave
      ripples.push({
        x,
        y,
        radius: isClick ? 2 : 5,
        maxRadius: isClick ? 180 : 120,
        opacity: isClick ? 0.8 : 0.45,
        speed: isClick ? 2.8 : 2.0,
        intensity,
        rings: isClick ? 3 : 2
      });

      // Limit max concurrent ripples for top performance
      if (ripples.length > 35) {
        ripples.shift();
      }
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        return;
      }

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Only trigger if mouse is inside canvas bounds
      if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;

      const now = performance.now();
      const dist = Math.hypot(x - lastX, y - lastY);

      // Throttle mousemove ripples so they feel like liquid trails
      if (now - lastMoveTime > 40 && dist > 8) {
        addRipple(x, y, Math.min(dist / 20, 1.2));
        lastMoveTime = now;
        lastX = x;
        lastY = y;
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        addRipple(x, y, 1.8, true);
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mousedown', handlePointerDown);

    // Initial ambient water droplets
    const ambientInterval = setInterval(() => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0 && Math.random() > 0.4) {
        const randX = Math.random() * rect.width;
        const randY = Math.random() * rect.height * 0.85;
        addRipple(randX, randY, 0.7, false);
      }
    }, 2800);

    // Render loop
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += r.speed;
        r.opacity *= 0.965; // Smooth exponential fade

        if (r.opacity < 0.01 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        // Draw crystal-clear water wave rings (transparent caustic liquid refraction)
        for (let ring = 0; ring < r.rings; ring++) {
          const ringOffset = ring * 12;
          const currentRadius = r.radius - ringOffset;
          if (currentRadius <= 0) continue;

          ctx.save();
          ctx.beginPath();
          ctx.arc(r.x, r.y, currentRadius, 0, Math.PI * 2);

          // Transparent water refraction gradient
          const grad = ctx.createRadialGradient(
            r.x,
            r.y,
            Math.max(0, currentRadius - 6),
            r.x,
            r.y,
            currentRadius + 6
          );

          // Shoccho pani (crystal water) cyan & azure wave crest highlights
          grad.addColorStop(0, 'rgba(0, 206, 254, 0)');
          grad.addColorStop(0.3, `rgba(160, 228, 255, ${r.opacity * 0.6})`); // Crystal highlight
          grad.addColorStop(0.6, `rgba(42, 227, 112, ${r.opacity * 0.35})`); // Emerald water undertone
          grad.addColorStop(0.85, `rgba(0, 206, 254, ${r.opacity * 0.5})`); // Outer wave ridge
          grad.addColorStop(1, 'rgba(0, 206, 254, 0)');

          ctx.strokeStyle = grad;
          ctx.lineWidth = Math.max(1, 4 * (1 - r.radius / r.maxRadius));
          ctx.stroke();

          // Subtle inner water ripple shine
          ctx.beginPath();
          ctx.arc(r.x, r.y, Math.max(1, currentRadius - 2), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${r.opacity * 0.35})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(ambientInterval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mousedown', handlePointerDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-10 w-full h-full overflow-hidden ${className}`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
