"use client";

import { useEffect, useRef } from "react";

export default function Grain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    const drawGrain = () => {
      const imageData = ctx.createImageData(
        canvas.width,
        canvas.height
      );
      const buffer = imageData.data;

      for (let i = 0; i < buffer.length; i += 4) {
        const noise = Math.random() * 20;
        buffer[i] = noise;
        buffer[i + 1] = noise;
        buffer[i + 2] = noise;
        buffer[i + 3] = 6; 
      }

      ctx.putImageData(imageData, 0, 0);
    };

    drawGrain();
    const interval = setInterval(drawGrain, 140);

    window.addEventListener("resize", resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-[0.12]"
      style={{ mixBlendMode: "soft-light" }}
    />
  );
}
