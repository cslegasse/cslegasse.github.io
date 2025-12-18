"use client";

import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Array<{ x: number; y: number; alpha: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const addParticle = (x: number, y: number) => {
      particles.current.push({ x, y, alpha: 1 });
      if (particles.current.length > 20) particles.current.shift();
    };

    const handleMouseMove = (e: MouseEvent) => {
      addParticle(e.clientX, e.clientY);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter(p => {
        p.alpha -= 0.05;
        if (p.alpha <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.3})`;
        ctx.fill();

        return true;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}