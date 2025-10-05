"use client";

import { motion } from "framer-motion";

const ScatteredBrands = ({ brandImages }: { brandImages: string[] }) => {
  const numRows = 3;
  const numCols = 5;
  const sectionHeight = 100 / numRows;
  const sectionWidth = 100 / numCols;

  return (
    <div className="w-full relative py-2">
      <p className="w-full font-aeonik-bold tracking-tight text-left leading-[100%] text-[21px] mb-8">
        REVIEWS + CLIENTS
      </p>

      <div className="relative w-full h-[650px] md:h-[550px] lg:h-[450px]">
        {brandImages.map((image, index) => {
          const row = Math.floor(index / numCols);
          const col = index % numCols;

          const randomTop = row * sectionHeight + Math.random() * (sectionHeight - 20);
          const randomLeft = col * sectionWidth + Math.random() * (sectionWidth - 20);
          const randomRotate = Math.random() * 20 - 10;
          const randomSize = 80 + Math.random() * 60; 

          return (
            <motion.div
              key={index}
              className="absolute rounded-lg overflow-hidden shadow-xl bg-black flex items-center justify-center cursor-pointer"
              style={{
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                transform: `rotate(${randomRotate}deg)`,
              }}
              initial={{ opacity: 0, scale: 0.8, rotate: randomRotate }}
              animate={{ opacity: 1, scale: 1, rotate: randomRotate }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{
                scale: 1.15,
                rotate: randomRotate + 3,
                boxShadow: "0px 15px 25px rgba(255,255,255,0.3)",
              }}
            >
              <img
                src={`/ugc/${image}`}
                alt={`Brand ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ScatteredBrands;
