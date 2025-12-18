"use client";

import { useEffect, useRef } from "react";

interface WordObject {
  text: string;
  x: number;
  y: number;
  dx: number;
  dy: number;
  color: string;
}

interface QuadrantData {
  title: string;
  words: string[];
}

const quadrantData: QuadrantData[] = [
  { title: "VALUES", words: ["Independence of thought", "Purposeful action", "Honesty", "Curiosity", "Respect for tradition"] },
  { title: "PERSONALITY", words: ["Pragmatic", "ISTJ", "Authentic", "Altruistic", "Direct"] },
  { title: "BELIEFS", words: ["Secular humanism", "Equality", "Self-discipline", "World culture"] },
  { title: "ABILITIES", words: ["Coding", "Hiking", "Soccer", "Drums", "Language learning", "Cinematography"] },
];

const font = new FontFace("Graebenbach", "url(/fonts/Graebenbach-Mono-Regular.ttf)");

export default function Quadrant() {
  const canvasRefs = useRef<Array<HTMLCanvasElement | null>>([]);

  useEffect(() => {
    canvasRefs.current.forEach((canvas, idx) => {
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      const headerHeight = 30; 
      const words = quadrantData[idx].words.map((text) => ({
        text,
        x: Math.random() * (canvas.width - 50) + 25, 
        y: Math.random() * (canvas.height - headerHeight - 30) + headerHeight + 15,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        color: "#fff",
      }));

      let animationId: number;

      const measureWordWidth = (word: WordObject) => ctx.measureText(word.text).width;
        
      const draw = () => {
    font.load().then((loadedFont) => {
  document.fonts.add(loadedFont);
  ctx.font = "16px 'Graebenbach', monospace";
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        words.forEach((word, i) => {
          ctx.fillStyle = word.color;
          ctx.fillText(word.text, word.x, word.y);

          word.x += word.dx;
          word.y += word.dy;

          const wordWidth = measureWordWidth(word);
          const wordHeight = 32; 

          if (word.x <= 0 || word.x + wordWidth >= canvas.width) {
            word.dx *= -1;
            word.color = word.color === "#fff" ? "#60a5fa" : "#fff"; 
            word.x = Math.max(0, Math.min(word.x, canvas.width - wordWidth));
          }
          if (word.y - wordHeight <= headerHeight || word.y >= canvas.height) {
            word.dy *= -1;
            word.color = word.color === "#fff" ? "#60a5fa" : "#fff";
            word.y = Math.max(headerHeight + wordHeight, Math.min(word.y, canvas.height));
          }

          for (let j = 0; j < words.length; j++) {
            if (i === j) continue;
            const other = words[j];
            const otherWidth = measureWordWidth(other);
            const otherHeight = 16;

            const dx = word.x - other.x;
            const dy = word.y - other.y;
            const distanceX = Math.abs(dx);
            const distanceY = Math.abs(dy);
            if (distanceX < (wordWidth + otherWidth) / 2 && distanceY < (wordHeight + otherHeight) / 2) {
              if (dx !== 0) word.dx = dx > 0 ? Math.abs(word.dx) : -Math.abs(word.dx);
              if (dy !== 0) word.dy = dy > 0 ? Math.abs(word.dy) : -Math.abs(word.dy);
            }
          }
        });
});

        animationId = requestAnimationFrame(draw);
      };

      draw();

      const handleResize = () => {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      };

      window.addEventListener("resize", handleResize);

      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", handleResize);
      };
    });
  }, []);

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-[80vh] p-4">
      {quadrantData.map((q, idx) => (
        <div
          key={q.title}
          className="relative bg-black/20 border border-gray-500 rounded-xl flex flex-col p-4 overflow-hidden"
        >
          <p className="font-header tracking-widest text-[18px] border-b border-gray-400 pb-3">
            {q.title}
          </p>
          <canvas
            ref={(el) => { canvasRefs.current[idx] = el; }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
          />
        </div>
      ))}
    </div>
  );
}
