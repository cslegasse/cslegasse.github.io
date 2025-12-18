"use client";

import { useEffect, useState } from "react";
import Grain from "./Grain";

type Orb = {
  x: number;
  y: number;
  size: number;
  blur: string;
  animation: string;
  color: string;
};

export default function HeroBackground() {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const area = width * height;

    const orbCount = Math.min(
      Math.max(Math.floor(area / 120_000), 6),
      16
    );

    const cols = Math.ceil(Math.sqrt(orbCount));
    const rows = Math.ceil(orbCount / cols);

    const animations = [
      "animate-float-xl",
      "animate-float-xxl",
      "animate-float-medium",
      "animate-float-diagonal",
      "animate-float-fast",
    ];

    const palette = [
      "255,255,255",
      "190,215,255",
      "150,200,255",
    ];

    const generated: Orb[] = [];

    let index = 0;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (index >= orbCount) break;

        const jitterX = (Math.random() - 0.5) * 20;
        const jitterY = (Math.random() - 0.5) * 20;

        const x = ((col + 0.5) / cols) * 100 + jitterX;
        const y = ((row + 0.5) / rows) * 100 + jitterY;

        const size = Math.floor(
          180 + Math.random() * 360
        );

        const blur =
          size > 360
            ? "blur-3xl"
            : size > 240
            ? "blur-2xl"
            : "blur-xl";

        const opacity =
          size > 360
            ? 0.025
            : size > 240
            ? 0.045
            : 0.07;

        const colorBase = palette[index % palette.length];
        const color = `rgba(${colorBase}, ${opacity})`;

        generated.push({
          x,
          y,
          size,
          blur,
          animation:
            animations[Math.floor(Math.random() * animations.length)],
          color,
        });

        index++;
      }
    }

    setOrbs(generated);
  }, []);

  return (
    <div className="absolute inset-0 z-[-1] bg-black overflow-hidden">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${orb.blur} ${orb.animation}`}
          style={{
            top: `${orb.y}%`,
            left: `${orb.x}%`,
            width: orb.size,
            height: orb.size,
            backgroundColor: orb.color,
            mixBlendMode: "screen",
          }}
        />
      ))}

      <Grain />
    </div>
  );
}
