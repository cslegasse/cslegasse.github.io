"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  underlineWidth?: number;
};

export default function SectionHeader({
  title,
  underlineWidth = 160,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mb-6"
    >
      <h2 className="font-body tracking-tight text-left leading-[100%] text-[21px] md:text-[28px] uppercase">
        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      <motion.div
        className="mt-2 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ width: 0 }}
        animate={{ width: underlineWidth }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
    </motion.div>
  );
}
