"use client";

import { motion } from "framer-motion";
import { HeroText } from "@/components/HeroText";
import { TooltipCard } from "@/components/ui/TooltipCard";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-white dark:bg-[#0a0a0a] pt-4 md:pt-6">
      {/* Dot Grid Pattern - subtle in light, visible in dark */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Dark mode specific dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle gradient for depth - light mode neutral, dark mode subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 via-white to-neutral-100/50 dark:from-slate-900/20 dark:via-transparent dark:to-purple-900/10" />

      {/* Ambient glow effect - muted for light mode */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 opacity-15 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-neutral-400/40 via-neutral-300/20 to-transparent dark:from-blue-500/30 dark:via-purple-500/20 blur-3xl" />
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-100/30 via-transparent to-neutral-50/20 dark:from-black/40 dark:via-transparent dark:to-black/20" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-center py-6 md:py-8">
        {/* Centered Text Content */}
        <div className="w-full max-w-7xl">
          <HeroText />
        </div>
      </div>

      {/* Animated Section Divider - neutral in light mode */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 5.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 my-8 md:my-12"
      >
        <div className="relative flex items-center justify-center">
          {/* Left gradient line */}
          <motion.div
            className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-neutral-400 to-neutral-500 dark:via-neutral-600 dark:to-neutral-500"
            initial={{ opacity: 0, scaleX: 0, originX: 1 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 5.6, ease: [0.25, 0.1, 0.25, 1] }}
          />

          {/* Center decorative element */}
          <motion.div
            className="mx-4 md:mx-6 flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 6.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 6.2 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-neutral-600 dark:bg-neutral-400 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 6.1 }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 6.3 }}
            />
          </motion.div>

          {/* Right gradient line */}
          <motion.div
            className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-neutral-400 to-neutral-500 dark:via-neutral-600 dark:to-neutral-500"
            initial={{ opacity: 0, scaleX: 0, originX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 5.6, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </div>

        {/* Subtle glow effect under the line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 6.5 }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-transparent via-neutral-300/30 dark:via-neutral-600/20 to-transparent blur-xl pointer-events-none"
        />
      </motion.div>

      {/* Leaders Section - Full Width Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 6.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 mb-12 md:mb-20"
      >
        {/* TooltipCard - Replaces StickyScrollReveal for better scrolling */}
        <TooltipCard className="mx-auto" />
      </motion.div>
    </section>
  );
}
