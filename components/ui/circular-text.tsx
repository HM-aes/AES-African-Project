"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CircularTextProps {
  text: string;
  radius?: number;
  fontSize?: number;
  className?: string;
}

export function CircularText({ 
  text, 
  radius = 120, 
  fontSize = 14,
  className = "" 
}: CircularTextProps) {
  const [mounted, setMounted] = useState(false);
  
  // Only render on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null during SSR
  }

  const characters = text.split("");
  const angleStep = 360 / characters.length;

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {characters.map((char, index) => {
        const angle = index * angleStep;
        const x = radius + radius * Math.cos((angle - 90) * (Math.PI / 180));
        const y = radius + radius * Math.sin((angle - 90) * (Math.PI / 180));

        return (
          <span
            key={`${char}-${index}`}
            className="absolute font-bold text-gray-400"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              fontSize: `${fontSize}px`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              transformOrigin: "center",
            }}
          >
            {char}
          </span>
        );
      })}
    </motion.div>
  );
}
