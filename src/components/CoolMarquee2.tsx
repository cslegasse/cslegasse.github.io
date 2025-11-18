"use client";

import Marquee from "react-fast-marquee";

export default function ContinuousMarquee() {
  const words = ["LETS", "BUILD", "STUFF"];
  const repeatedWords = Array(20).fill(words).flat();

  return (
    <div className="w-full py-0 overflow-hidden bg-black">
      <Marquee
        gradient={false}
        speed={150}         
        pauseOnHover
        loop={0}             
        className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]"
      >
        {repeatedWords.map((word, index) => (
          <span
            key={index}
            className="mx-2 font-voyager-thin text-[64px] md:text-[64px] tracking-tight text-white uppercase"
          >
            {word}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
