"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Leader {
  name: string;
  title: string;
  country: string;
  image: string;
  flag?: string;
}

const leaders: Leader[] = [
  {
    name: "Col. Assimi Goïta",
    title: "President of Mali",
    country: "Mali",
    image: "/aes/Images-AES-Leaders/Mali/Assimi-goita.avif",
  },
  {
    name: "Capt. Ibrahim Traoré",
    title: "President of Burkina Faso",
    country: "Burkina Faso",
    image: "/aes/Images-AES-Leaders/burkina-faso/Ibrahim_Traoré_-_2023_(cropped).png",
  },
  {
    name: "Gen. Abdourahamane Tiani",
    title: "President of Niger",
    country: "Niger",
    image: "/aes/Images-AES-Leaders/Niger/Abdourahamane_Tchiani_in_2025_(cropped).jpg",
  },
];

export function AnimatedAvatarTooltip() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex items-center -space-x-3">
      {leaders.map((leader, index) => (
        <motion.div
          key={leader.name}
          className="relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5 + index * 0.15,
            ease: "easeOut",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none"
              >
                <div className="relative bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3 shadow-2xl min-w-[180px]">
                  {/* Arrow */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-black/90 border-r border-b border-white/20 rotate-45" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <p className="text-white font-semibold text-sm whitespace-nowrap">
                      {leader.name}
                    </p>
                    <p className="text-white/60 text-xs mt-0.5">
                      {leader.title}
                    </p>
                    <div className="flex items-center justify-center gap-1.5 mt-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" />
                      <span className="text-white/50 text-xs">{leader.country}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Avatar */}
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.15, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {/* Glow ring on hover */}
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500/50 via-green-500/50 to-red-500/50 blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Border ring */}
            <div className="relative w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-white/30 via-white/10 to-white/20">
              {/* Inner container */}
              <div className="w-full h-full rounded-full overflow-hidden bg-black/50 backdrop-blur-sm">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Index badge (optional: country initial) */}
            <motion.div
              className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-[10px] font-bold text-black shadow-lg border-2 border-black"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 + index * 0.15, type: "spring" }}
            >
              {leader.country[0]}
            </motion.div>
          </motion.div>
        </motion.div>
      ))}

      {/* "+3 Leaders" indicator */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        className="pl-3 text-stone-500 dark:text-white/40 text-xs font-medium"
      >
        AES Leadership
      </motion.div>
    </div>
  );
}
