"use client";

import { motion } from "framer-motion";
import { HeroText } from "@/components/HeroText";
import { StickyScrollReveal } from "@/components/ui/StickyScrollReveal";
import { useTranslation } from "@/lib/i18n";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-gradient-to-br from-secondary via-background to-accent dark:from-[#0a0a0a] dark:via-[#0a0a0a] dark:to-[#0a0a0a] pt-40">
      {/* Dot Grid Pattern - Rich espresso dots */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(61,46,31,0.25) 1px, transparent 1px)
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

      {/* Rich gradient mesh for depth - deep amber/cappuccino */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/30 via-amber-200/20 to-green-200/25 dark:from-slate-900/20 dark:via-transparent dark:to-purple-900/10" />

      {/* Ambient glow effect - warm cappuccino glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 opacity-40 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/50 via-amber-400/30 to-transparent dark:from-blue-500/30 dark:via-purple-500/20 blur-3xl" />
      </div>

      {/* Left side warm glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] opacity-25 dark:opacity-0">
        <div className="absolute inset-0 bg-gradient-radial from-amber-600/40 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Subtle vignette with deep amber tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-200/40 via-transparent to-amber-100/20 dark:from-black/40 dark:via-transparent dark:to-black/20" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-center py-8">
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

      {/* Leaders Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 mt-8 mb-16"
      >
        {/* Sticky Header - The Visionary Leaders */}
        <div className="text-center mb-8 sticky top-20 z-20 py-4 bg-gradient-to-b from-background via-background/95 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/95">
          {/* The Visionary Leaders Header */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-[0.15em] mb-4
            text-stone-900 dark:text-white
            cursor-default relative inline-block"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0,0,0,0.1)',
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {t("hero.visionaryLeaders")}
          </motion.h2>

          {/* Leader Names */}
          <div
            className="text-lg md:text-xl lg:text-2xl font-bold flex items-center justify-center flex-wrap gap-2"
            style={{ perspective: '1000px' }}
          >
            <motion.span
              className="text-amber-500 hover:text-amber-400 cursor-default px-3 py-1 rounded-lg
              bg-gradient-to-br from-amber-500/10 to-transparent
              border border-amber-500/30"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              {t("hero.leaderGoita")}
            </motion.span>

            <span className="text-amber-500/50 text-2xl">•</span>

            <motion.span
              className="text-green-500 hover:text-green-400 cursor-default px-3 py-1 rounded-lg
              bg-gradient-to-br from-green-500/10 to-transparent
              border border-green-500/30"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              {t("hero.leaderTraore")}
            </motion.span>

            <span className="text-amber-500/50 text-2xl">•</span>

            <motion.span
              className="text-red-500 hover:text-red-400 cursor-default px-3 py-1 rounded-lg
              bg-gradient-to-br from-red-500/10 to-transparent
              border border-red-500/30"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              {t("hero.leaderTiani")}
            </motion.span>
          </div>

          {/* Flags */}
          <div className="flex justify-center gap-4 mt-5">
            {/* Mali Flag */}
            <motion.div
              className="relative w-10 h-7 md:w-12 md:h-8 rounded-md overflow-hidden cursor-pointer shadow-md"
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              title="Mali"
            >
              <div className="absolute inset-0 flex">
                <div className="w-1/3 h-full bg-green-500" />
                <div className="w-1/3 h-full bg-yellow-400" />
                <div className="w-1/3 h-full bg-red-500" />
              </div>
            </motion.div>

            {/* Burkina Faso Flag */}
            <motion.div
              className="relative w-10 h-7 md:w-12 md:h-8 rounded-md overflow-hidden cursor-pointer shadow-md"
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              title="Burkina Faso"
            >
              <div className="absolute inset-0 flex flex-col">
                <div className="h-1/2 w-full bg-red-500" />
                <div className="h-1/2 w-full bg-green-600" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-yellow-400 text-xs">★</span>
              </div>
            </motion.div>

            {/* Niger Flag */}
            <motion.div
              className="relative w-10 h-7 md:w-12 md:h-8 rounded-md overflow-hidden cursor-pointer shadow-md"
              whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
              title="Niger"
            >
              <div className="absolute inset-0 flex flex-col">
                <div className="h-1/3 w-full bg-orange-500" />
                <div className="h-1/3 w-full bg-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                </div>
                <div className="h-1/3 w-full bg-green-500" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sticky Scroll Reveal with Glass Effect */}
        <StickyScrollReveal className="mx-auto" />
      </motion.div>
    </section>
  );
}
