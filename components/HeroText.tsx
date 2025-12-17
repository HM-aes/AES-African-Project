"use client";

import { motion } from "framer-motion";
import { HeroIntroCard } from "@/components/ui/HeroIntroCard";

export function HeroText() {
  // Letter animation for "Welcome"
  const welcomeText = "Welcome";
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <div className="text-left w-full">
      {/* Large Animated Welcome Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-6 overflow-hidden"
      >
        {/* Welcome - Letter by letter animation */}
        <div className="flex items-baseline gap-1 md:gap-2 flex-wrap">
          <div className="flex perspective-1000">
            {welcomeText.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.2,
                  color: "#f59e0b",
                  textShadow: "0 0 30px rgba(245, 158, 11, 0.5)",
                  transition: { duration: 0.2 },
                }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-stone-800 dark:text-white cursor-default inline-block origin-bottom"
                style={{ transformStyle: "preserve-3d" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          {/* "to the" text */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-light text-stone-500 dark:text-white/50 ml-2"
          >
            to the
          </motion.span>
        </div>

        {/* Future of Africa tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-2 flex items-center gap-3"
        >
          <div className="h-[2px] w-12 md:w-20 bg-gradient-to-r from-amber-500 to-amber-500/0" />
          <span className="text-sm md:text-base uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400 font-semibold">
            Future of Africa
          </span>
        </motion.div>
      </motion.div>

      {/* Hero Card - Expanded */}
      <HeroIntroCard />
    </div>
  );
}
