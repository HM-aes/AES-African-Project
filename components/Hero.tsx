"use client";

import { motion } from "framer-motion";
import { SplineScene } from "@/components/SplineScene";
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

      {/* Tech glow effect around robot area */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/30 via-green-500/20 to-transparent dark:from-blue-500/30 dark:via-purple-500/20 blur-3xl" />
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-200/40 via-transparent to-stone-100/20 dark:from-black/40 dark:via-transparent dark:to-black/20" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex items-start py-8">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-[70%] xl:w-[65%]">
          <HeroText />
        </div>

        {/* Right Side - 3D Robot */}
        <motion.div
          className="hidden lg:block absolute -right-20 xl:right-0 top-0 w-[50%] xl:w-[45%] h-full pointer-events-none"
          initial={{ opacity: 0, y: -100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 2.5,
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <SplineScene
            className="inset-0 w-full h-full z-0"
          />
        </motion.div>
      </div>
    </section>
  );
}
