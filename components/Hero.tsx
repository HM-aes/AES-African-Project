"use client";

import { motion } from "framer-motion";
import { HeroText } from "@/components/HeroText";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-start overflow-hidden bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 dark:from-[#0a0a0a] dark:via-[#0a0a0a] dark:to-[#0a0a0a] pt-28">
      {/* Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Dark mode specific dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle, #1a1a1a 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle gradient mesh for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-transparent to-green-100/20 dark:from-slate-900/20 dark:via-transparent dark:to-purple-900/10" />

      {/* Ambient glow effect */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/30 via-green-500/20 to-transparent dark:from-blue-500/30 dark:via-purple-500/20 blur-3xl" />
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-200/40 via-transparent to-stone-100/20 dark:from-black/40 dark:via-transparent dark:to-black/20" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-center py-8">
        {/* Centered Text Content */}
        <motion.div 
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroText />
        </motion.div>
      </div>
    </section>
  );
}
