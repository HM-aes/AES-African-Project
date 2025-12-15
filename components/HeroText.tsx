"use client";

import { motion } from "framer-motion";
import { HeroIntroCard } from "@/components/ui/HeroIntroCard";

export function HeroText() {
  return (
    <div className="text-left w-full">
      {/* Welcome Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-3"
      >
        <span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-wider uppercase text-stone-600 dark:text-white/60">
          Welcome to
        </span>
      </motion.div>

      {/* Hero Card - Cinematic Wide */}
      <HeroIntroCard />
    </div>
  );
}
