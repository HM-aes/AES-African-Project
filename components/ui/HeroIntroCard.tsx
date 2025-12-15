"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { AnimatedAvatarTooltip } from "./AnimatedAvatarTooltip";
import { MapPin, Sparkles, Globe, Zap, Users } from "lucide-react";

interface HeroIntroCardProps {
  className?: string;
}

export function HeroIntroCard({ className }: HeroIntroCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative w-full max-w-4xl rounded-2xl overflow-hidden",
        className
      )}
    >
      {/* Outer glow border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-amber-500/30 via-stone-400/40 dark:via-white/20 to-green-500/30 opacity-80" />

      {/* Spotlight effect following cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(251, 191, 36, 0.2),
              rgba(34, 197, 94, 0.1) 40%,
              transparent 70%
            )
          `,
        }}
      />

      {/* Main card container */}
      <div className="relative rounded-2xl overflow-hidden border border-stone-300 dark:border-white/[0.1] h-full">
        {/* Background layers */}
        <div className="absolute inset-0 bg-white/90 dark:bg-black/80 backdrop-blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-transparent to-green-100/20 dark:from-amber-900/10 dark:via-transparent dark:to-green-900/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-100/60 via-transparent to-transparent dark:from-black/60" />

        {/* Top edge highlight */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 dark:via-amber-400/50 to-transparent z-20" />

        {/* Corner accents */}
        <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-amber-500/50 rounded-tr-xl z-20" />
        <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-green-500/50 rounded-bl-xl z-20" />

        {/* Content */}
        <div className="relative z-10 p-6 md:p-8">
          {/* Top Badge Row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-between gap-3 mb-5"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/25 to-amber-600/25 border border-amber-500/40">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Est. September 2023
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-stone-100 dark:bg-white/5 border border-stone-300 dark:border-white/10">
                <Globe className="w-3.5 h-3.5 text-stone-600 dark:text-white/60" />
                <span className="text-xs text-stone-600 dark:text-white/60">Pan-African Alliance</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-stone-500 dark:text-white/50 text-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>Sahel Region</span>
            </div>
          </motion.div>

          {/* Main Content - Two Column */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left Column - Main Story */}
            <div className="flex-1 space-y-4">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading leading-tight">
                  <span className="text-stone-800 dark:text-white">Alliance of</span>{" "}
                  <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    Sahel States
                  </span>
                </h1>
                <p className="mt-2 text-base md:text-lg text-stone-700 dark:text-white/80 font-medium">
                  Africa&apos;s Blueprint for Sovereignty & Progress
                </p>
              </motion.div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="space-y-3"
              >
                <p className="text-sm md:text-base text-stone-700 dark:text-white/70 leading-relaxed">
                  We are answering the call of{" "}
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">Mali</span>,{" "}
                  <span className="text-green-600 dark:text-green-400 font-semibold">Burkina Faso</span>, and{" "}
                  <span className="text-red-600 dark:text-red-400 font-semibold">Niger</span>&apos;s visionary leaders
                  to unite Africa through technology, education, and sovereign development.
                </p>
                <p className="text-xs md:text-sm text-stone-500 dark:text-white/50 leading-relaxed">
                  Our platform tracks the AES journey—from military defense to economic revolution,
                  technological advancement to agricultural transformation. Together with our strategic
                  partner <span className="text-blue-600 dark:text-blue-400 font-medium">Russia</span>, we&apos;re building
                  the future of Pan-African independence.
                </p>
              </motion.div>

              {/* Key Pillars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                {[
                  { label: "Tech & AI", icon: Zap },
                  { label: "Defense", icon: Users },
                  { label: "Economy", icon: Globe },
                ].map((pillar) => (
                  <div
                    key={pillar.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-300 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/20 hover:bg-stone-200 dark:hover:bg-white/10 transition-all duration-300 cursor-default"
                  >
                    <pillar.icon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400/80" />
                    <span className="text-xs text-stone-600 dark:text-white/70">{pillar.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Vertical Divider */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-stone-300 dark:via-white/20 to-transparent self-stretch"
            />

            {/* Right Column - Leaders */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="lg:w-[240px] flex flex-col justify-center"
            >
              <div className="space-y-4">
                {/* Leaders Section */}
                <div>
                  <p className="text-[10px] text-stone-500 dark:text-white/40 uppercase tracking-widest mb-3">
                    The Visionary Leaders
                  </p>
                  <AnimatedAvatarTooltip />
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-stone-300 dark:from-white/20 via-stone-200 dark:via-white/10 to-transparent" />

                {/* Call to Action Text */}
                <div className="space-y-2">
                  <p className="text-xs text-stone-600 dark:text-white/60 leading-relaxed">
                    &ldquo;The time for Africa&apos;s true independence has come.
                    We stand united, sovereign, and unstoppable.&rdquo;
                  </p>
                  <p className="text-[10px] text-amber-600 dark:text-amber-400/70 font-medium">
                    — The Spirit of AES
                  </p>
                </div>

                {/* Stats */}
                <div className="flex gap-4 pt-1">
                  <div className="text-center">
                    <p className="text-xl font-bold text-stone-800 dark:text-white">3</p>
                    <p className="text-[9px] text-stone-500 dark:text-white/40 uppercase tracking-wider">Nations</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-amber-600 dark:text-amber-400">70M+</p>
                    <p className="text-[9px] text-stone-500 dark:text-white/40 uppercase tracking-wider">People</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-green-600 dark:text-green-400">1</p>
                    <p className="text-[9px] text-stone-500 dark:text-white/40 uppercase tracking-wider">Vision</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom ambient glow */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-24 bg-gradient-to-t from-amber-500/15 via-green-500/10 to-transparent blur-2xl pointer-events-none" />
      </div>

      {/* Outer ambient glow on hover */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/15 via-green-500/10 to-red-500/15 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 -z-10" />
    </motion.div>
  );
}
