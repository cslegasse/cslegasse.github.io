"use client";

import { useEffect, useState } from 'react';

export default function ParallaxArrow() {
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      
      const rotationDegree = Math.min(currentScroll / 10, 90);
      setRotation(rotationDegree);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="self-start mt-3 transition-all duration-150 ease-out"
      style={{ 
        transform: `translateY(${scrollY * 0.15}px) rotate(${rotation}deg)`,
        opacity: Math.max(1 - (scrollY / 300), 0.3)
      }}
    >
      <h1 className="tracking-tight font-voyager-thin text-[16px] md:text-[14px] lg:text-[14px] mr-1">
        ►
      </h1>
    </div>
  );
}