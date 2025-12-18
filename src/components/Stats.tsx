"use client";

import { motion } from "framer-motion";

const StatsSection = ({ stats }: { stats: { label: string; value: string }[] }) => {
  return (
    <div className="w-full py-4 flex flex-col items-center justify-center">
    
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-6xl">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-br from-gray-800/70 to-gray-900/50 border border-gray-700 shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 90 }}
            whileHover={{ scale: 1.08 }}
          >
            <p className="text-[36px] md:text-[42px] font-header text-white">
              {stat.value}
            </p>
            <p className="text-sm md:text-base font-body text-gray-400 mt-2 text-center">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
