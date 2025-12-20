"use client";

import { motion } from "framer-motion";
import { HeroText } from "@/components/HeroText";
import { TooltipCard } from "@/components/ui/TooltipCard";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-gradient-to-br from-secondary via-background to-accent dark:from-[#0a0a0a] dark:via-[#0a0a0a] dark:to-[#0a0a0a] pt-28 md:pt-32">
      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(61,46,31,0.25) 1px, transparent 1px)`,
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

      {/* Rich gradient mesh for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/30 via-amber-200/20 to-green-200/25 dark:from-slate-900/20 dark:via-transparent dark:to-purple-900/10" />

      {/* Ambient glow effect */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 opacity-40 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/50 via-amber-400/30 to-transparent dark:from-blue-500/30 dark:via-purple-500/20 blur-3xl" />
      </div>

      {/* Left side warm glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] opacity-25 dark:opacity-0">
        <div className="absolute inset-0 bg-gradient-radial from-amber-600/40 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-200/40 via-transparent to-amber-100/20 dark:from-black/40 dark:via-transparent dark:to-black/20" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-center py-6 md:py-8">
        {/* Centered Text Content */}
        <motion.div
          className="w-full max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroText />
        </motion.div>
      </div>

      {/* Animated Section Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 my-8 md:my-12"
      >
        <div className="relative flex items-center justify-center">
          {/* Left gradient line */}
          <motion.div 
            className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-amber-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          
          {/* Center decorative element */}
          <motion.div 
            className="mx-4 md:mx-6 flex items-center gap-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 via-green-500 to-red-500 shadow-lg shadow-amber-500/50" />
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          </motion.div>
          
          {/* Right gradient line */}
          <motion.div 
            className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-red-500/60 to-red-500"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </div>
        
        {/* Glow effect under the line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent blur-xl pointer-events-none" />
      </motion.div>

      {/* Leaders Section - Full Width Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 mb-12 md:mb-20"
      >
        {/* TooltipCard - Replaces StickyScrollReveal for better scrolling */}
        <TooltipCard className="mx-auto" />
      </motion.div>
    </section>
  );
}

