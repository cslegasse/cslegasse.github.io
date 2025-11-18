"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const Brands = ({ brandImages }: { brandImages: string[] }) => {
  const [isShaking, setIsShaking] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridCells = 15;


  const generateInitialPositions = () => {
    const positions: { x: number; y: number; rotate: number; size: number }[] = [];
    const occupied: { x: number; y: number; size: number }[] = [];
    
    const containerWidth = 1200; 
    
    const containerHeight = 500; 
    
    const minDistance = 100; 
    

    for (let i = 0; i < Math.min(brandImages.length, gridCells); i++) {
      let attempts = 0;
      let validPosition = false;
      let newPos = { x: 0, y: 0, rotate: 0, size: 0 };

      while (!validPosition && attempts < 50) {
        const size = 80 + Math.random() * 40;
        const x = size / 2 + Math.random() * (containerWidth - size);
        const y = size / 2 + Math.random() * (containerHeight - size);
        const rotate = Math.random() * 12 - 6;

        const hasOverlap = occupied.some(item => {
          const dx = x - item.x;
          const dy = y - item.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDist = (size + item.size) / 2 + 20; 
          return distance < minDist;
        });

        if (!hasOverlap) {
          newPos = { x, y, rotate, size };
          occupied.push({ x, y, size });
          validPosition = true;
        }
        attempts++;
      }

      positions.push(newPos);
    }

    return positions;
  };

  const [positions] = useState(generateInitialPositions);


  return (
    <div className="w-full relative py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-8"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-aeonik-bold tracking-tight text-left leading-[100%] text-[21px] md:text-[28px]">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              REVIEWS + CLIENTS
            </span>
          </h2>
          

        </div>
        <motion.div
          className="mt-2 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* Contained Brand Box */}
      <motion.div
        ref={containerRef}
        className="relative w-full h-[500px] rounded-3xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm"
        style={{
          boxShadow: "inset 0 2px 20px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3)",
        }}
        animate={
          isShaking
            ? {
                x: [0, -10, 10, -10, 10, -5, 5, 0],
                y: [0, -5, 5, -5, 5, -3, 3, 0],
              }
            : {}
        }
        transition={{ duration: 0.6 }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-purple-500/3 to-pink-500/3" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Brand Cards */}
        {brandImages.slice(0, gridCells).map((image, index) => {
          const pos = positions[index];
          
          return (
            <DraggableBrandCard
              key={index}
              image={image}
              index={index}
              initialX={pos.x}
              initialY={pos.y}
              initialRotate={pos.rotate}
              size={pos.size}
              isShaking={isShaking}
              containerRef={containerRef}
            />
          );
        })}
      </motion.div>


    </div>
  );
};

const DraggableBrandCard = ({
  image,
  index,
  initialX,
  initialY,
  initialRotate,
  size,
  isShaking,
  containerRef,
}: {
  image: string;
  index: number;
  initialX: number;
  initialY: number;
  initialRotate: number;
  size: number;
  isShaking: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);


  const constrainToBounds = (clientX: number, clientY: number) => {
    if (!containerRef.current) return { x: clientX, y: clientY };
    
    const container = containerRef.current.getBoundingClientRect();
    const halfSize = size / 2;
    
    const boundedX = Math.max(halfSize, Math.min(clientX, container.width - halfSize));
    const boundedY = Math.max(halfSize, Math.min(clientY, container.height - halfSize));
    
    return { x: boundedX, y: boundedY };
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={containerRef}
      style={{ x, y }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      className="absolute cursor-grab active:cursor-grabbing"
      initial={{
        opacity: 0,
        scale: 0,
        rotate: initialRotate - 180,
      }}
      animate={{
        opacity: 1,
        scale: isDragging ? 1.1 : 1,
        rotate: isDragging ? initialRotate + 5 : initialRotate,
        x: isShaking ? [0, (Math.random() - 0.5) * 30, 0] : undefined,
        y: isShaking ? [0, (Math.random() - 0.5) * 30, 0] : undefined,
      }}
      transition={{
        initial: {
          duration: 0.6,
          delay: index * 0.05,
          type: "spring",
          stiffness: 120,
        },
        scale: { duration: 0.2 },
        rotate: { duration: 0.2 },
      }}
      whileHover={{
        scale: isDragging ? 1.1 : 1.08,
        zIndex: 100,
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-xl"
        animate={{
          opacity: isDragging ? 0.8 : 0.3,
          scale: isDragging ? 1.3 : 1,
        }}
      />

      {/* Card */}
      <motion.div
        className="relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: "rgba(30, 30, 30, 0.8)",
          boxShadow: isDragging
            ? "0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(139, 92, 246, 0.4)"
            : "0 10px 25px rgba(0,0,0,0.4)",
        }}
      >
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Image */}
        <div className="relative w-full h-full p-3 flex items-center justify-center">
          <img
            src={`/ugc/${image}`}
            alt={`Brand ${index + 1}`}
            className="max-w-full max-h-full object-contain select-none pointer-events-none"
            style={{
              filter: isDragging ? "brightness(1.1)" : "brightness(0.95)",
            }}
            draggable={false}
          />
        </div>

        {/* Shine effect when dragging */}
        {isDragging && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default Brands;