"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { AnimatedAvatarTooltip } from "./AnimatedAvatarTooltip";
import {
  Sparkles, Globe, Zap, Shield, Wheat, GraduationCap, ArrowRight, Target
} from "lucide-react";

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

  const pillars = [
    { label: "Technology & AI", icon: Zap },
    { label: "Military Defense", icon: Shield },
    { label: "Economy", icon: Globe },
    { label: "Agriculture", icon: Wheat },
    { label: "Education", icon: GraduationCap },
  ];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative w-full max-w-7xl",
        className
      )}
    >
      {/* Subtle ambient glow behind card - enhanced */}
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/30 via-neutral-300/20 to-amber-200/30 dark:from-neutral-800/40 dark:via-neutral-700/20 dark:to-neutral-800/40 rounded-[2rem] blur-2xl opacity-60" />

      {/* Main card - Proper light/dark mode support */}
      <div className="relative bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 dark:from-[#0a0a0c] dark:via-[#0f0f11] dark:to-[#0a0a0c] border-2 border-neutral-400/60 dark:border-[#c0c0c8]/30 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12),0_2px_8px_rgba(180,140,60,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.6)]">

        {/* Spotlight effect on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(150, 150, 160, 0.06),
                rgba(100, 100, 110, 0.03) 40%,
                transparent 70%
              )
            `,
          }}
        />

        {/* Top accent line - amber metallic */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent dark:via-neutral-600" />

        {/* Scrollable Content */}
        <div className="relative z-10 p-6 md:p-8">
          {/* AES Education Hub Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-center text-neutral-900 dark:text-[#e8e8ec]">
              AES Education Hub
            </h1>
            <p className="text-center mt-3 text-lg text-neutral-600 dark:text-[#8a8a94]">
              Your gateway to Pan-African knowledge and sovereignty
            </p>
          </motion.div>

          {/* Top Badge Row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700">
                <Sparkles className="w-4 h-4 text-neutral-700 dark:text-[#c0c0c8]" />
                <span className="text-sm font-semibold uppercase tracking-wider text-neutral-700 dark:text-[#c0c0c8]">
                  Est. September 2023
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700">
                <Globe className="w-4 h-4 text-neutral-500 dark:text-[#8a8a94]" />
                <span className="text-sm text-neutral-700 dark:text-[#c0c0c8]">Pan-African Alliance</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700">
                <Target className="w-4 h-4 text-neutral-700 dark:text-[#c0c0c8]" />
                <span className="text-sm font-medium text-neutral-700 dark:text-[#c0c0c8]">Sovereignty First</span>
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Left Column - Main Story (spans 2 columns) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight text-neutral-900 dark:text-[#e8e8ec]">
                  Alliance of Sahel States
                </h1>
                <p className="mt-3 text-lg md:text-xl font-medium text-neutral-700 dark:text-[#c0c0c8]">
                  Africa&apos;s Blueprint for Sovereignty, Unity & Progress
                </p>
              </motion.div>

              {/* Who is AES - Introduction */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-[2px] w-10 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
                  <span className="text-xs uppercase tracking-widest font-bold text-neutral-600 dark:text-[#c0c0c8]">Who We Are</span>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-neutral-700 dark:text-[#c0c0c8]">
                  The <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]">Alliance of Sahel States (AES)</span> is a
                  groundbreaking confederation uniting{" "}
                  <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]">Mali</span>,{" "}
                  <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]">Burkina Faso</span>, and{" "}
                  <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]">Niger</span>—three
                  nations that chose sovereignty over dependency, unity over division, and
                  African solutions over foreign intervention.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-[#8a8a94]">
                  Born from a shared vision to end decades of exploitation, our leaders—military officers
                  who rose from the people—are rewriting Africa&apos;s future. We have withdrawn from
                  ECOWAS, expelled foreign military bases, and are building an economy that serves
                  Africans first. With strategic partners like Russia and China, we&apos;re
                  proving that true independence is possible.
                </p>
              </motion.div>

              {/* Key Pillars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <p className="text-xs uppercase tracking-widest font-bold mb-4 text-neutral-500 dark:text-[#8a8a94]">
                  Strategic Pillars
                </p>
                <div className="flex flex-wrap gap-3">
                  {pillars.map((pillar, index) => (
                    <motion.div
                      key={pillar.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 + index * 0.08 }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 cursor-default transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600"
                    >
                      <pillar.icon className="w-4 h-4 text-neutral-700 dark:text-[#c0c0c8]" />
                      <span className="text-sm font-semibold text-neutral-700 dark:text-[#c0c0c8]">{pillar.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <motion.a
                  href="/aes"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-700 dark:border-neutral-600 text-white dark:text-[#e8e8ec] font-bold transition-all duration-300"
                >
                  <span>Explore Our Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column - Leaders & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col justify-between bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800"
            >
              <div className="space-y-5">
                {/* Leaders Section */}
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold mb-4 text-neutral-500 dark:text-[#8a8a94]">
                    The Visionary Leaders
                  </p>
                  <AnimatedAvatarTooltip />
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />

                {/* Key Achievements */}
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest font-bold text-neutral-500 dark:text-[#8a8a94]">
                    Key Achievements
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-[#c0c0c8]">
                      <span className="font-bold mt-0.5 text-neutral-900 dark:text-[#e8e8ec]">✓</span>
                      <span>Withdrew from ECOWAS</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-[#c0c0c8]">
                      <span className="font-bold mt-0.5 text-neutral-900 dark:text-[#e8e8ec]">✓</span>
                      <span>Expelled French military bases</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-[#c0c0c8]">
                      <span className="font-bold mt-0.5 text-neutral-900 dark:text-[#e8e8ec]">✓</span>
                      <span>Launched AES Confederation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-[#c0c0c8]">
                      <span className="font-bold mt-0.5 text-neutral-900 dark:text-[#e8e8ec]">✓</span>
                      <span>Unified defense pact signed</span>
                    </li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />

                {/* Quote - Shadcn dark style */}
                <div className="relative space-y-2 p-4 rounded-xl bg-zinc-900 border-l-4 border-amber-500/60 shadow-[0_4px_20px_rgba(0,0,0,0.3)] overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800/80 pointer-events-none" />
                  
                  <p className="relative text-sm leading-relaxed italic text-white">
                    &ldquo;The time for Africa&apos;s true independence has come.
                    We stand united, sovereign, and unstoppable.&rdquo;
                  </p>
                  <p className="relative text-xs font-bold text-zinc-400">
                    — The Spirit of AES
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-5 mt-5 border-t border-neutral-200 dark:border-neutral-800">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-[#e8e8ec]">3</p>
                  <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-[#8a8a94]">Nations</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-[#e8e8ec]">72M+</p>
                  <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-[#8a8a94]">People</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-[#e8e8ec]">1</p>
                  <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-[#8a8a94]">Vision</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom accent line - amber metallic */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent dark:via-neutral-600" />
      </div>
    </motion.div>
  );
}
