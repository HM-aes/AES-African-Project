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
    { label: "Technology & AI", icon: Zap, color: "bg-blue-500/10", borderColor: "border-blue-500/40", textColor: "text-blue-600 dark:text-blue-400" },
    { label: "Military Defense", icon: Shield, color: "bg-red-500/10", borderColor: "border-red-500/40", textColor: "text-red-600 dark:text-red-400" },
    { label: "Economy", icon: Globe, color: "bg-green-500/10", borderColor: "border-green-500/40", textColor: "text-green-600 dark:text-green-400" },
    { label: "Agriculture", icon: Wheat, color: "bg-amber-500/10", borderColor: "border-amber-500/40", textColor: "text-amber-600 dark:text-amber-400" },
    { label: "Education", icon: GraduationCap, color: "bg-purple-500/10", borderColor: "border-purple-500/40", textColor: "text-purple-600 dark:text-purple-400" },
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
      {/* Ambient glow behind card */}
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-green-500/10 to-red-500/20 rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

      {/* Main card - Compact with scroll */}
      <div className="relative bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-neutral-600 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]">

        {/* Spotlight effect on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(251, 191, 36, 0.08),
                rgba(34, 197, 94, 0.05) 40%,
                transparent 70%
              )
            `,
          }}
        />

        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-amber-500 via-green-500 to-red-500 sticky top-0 z-30" />

        {/* Scrollable Content */}
        <div className="relative z-10 p-6 md:p-8">
          {/* AES Education Hub Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-center">
              <span className="bg-gradient-to-r from-amber-600 via-green-500 to-red-500 bg-clip-text text-transparent">
                AES Education Hub
              </span>
            </h1>
            <p className="text-center text-neutral-600 dark:text-neutral-400 mt-3 text-lg">
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
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/40">
                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                  Est. September 2023
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600">
                <Globe className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">Pan-African Alliance</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-green-500/10 border border-green-500/40">
                <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm text-green-700 dark:text-green-400 font-medium">Sovereignty First</span>
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
                  <span className="text-neutral-900 dark:text-white">Alliance of</span>{" "}
                  <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                    Sahel States
                  </span>
                </h1>
                <p className="mt-3 text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-medium">
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
                  <div className="h-[3px] w-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" />
                  <span className="text-xs text-amber-700 dark:text-amber-400 uppercase tracking-widest font-bold">Who We Are</span>
                </div>
                <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  The <span className="font-bold text-neutral-900 dark:text-white">Alliance of Sahel States (AES)</span> is a
                  groundbreaking confederation uniting{" "}
                  <span className="text-amber-600 dark:text-amber-400 font-bold">Mali</span>,{" "}
                  <span className="text-green-600 dark:text-green-400 font-bold">Burkina Faso</span>, and{" "}
                  <span className="text-red-600 dark:text-red-400 font-bold">Niger</span>—three
                  nations that chose sovereignty over dependency, unity over division, and
                  African solutions over foreign intervention.
                </p>
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Born from a shared vision to end decades of exploitation, our leaders—military officers
                  who rose from the people—are rewriting Africa&apos;s future. We have withdrawn from
                  ECOWAS, expelled foreign military bases, and are building an economy that serves
                  Africans first. With strategic partners like <span className="text-blue-600 dark:text-blue-400 font-semibold">Russia</span> and{" "}
                  <span className="text-red-600 dark:text-red-400 font-semibold">China</span>, we&apos;re
                  proving that true independence is possible.
                </p>
              </motion.div>



              {/* Key Pillars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <p className="text-xs text-neutral-600 dark:text-neutral-400 uppercase tracking-widest font-bold mb-4">
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
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl",
                        pillar.color,
                        "border", pillar.borderColor,
                        "cursor-default transition-all duration-300"
                      )}
                    >
                      <pillar.icon className={cn("w-4 h-4", pillar.textColor)} />
                      <span className={cn("text-sm font-semibold", pillar.textColor)}>{pillar.label}</span>
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
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold shadow-[0_4px_15px_rgba(217,119,6,0.4)] hover:shadow-[0_6px_20px_rgba(217,119,6,0.5)] transition-all duration-300"
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
              className="flex flex-col justify-between bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border-2 border-neutral-200 dark:border-neutral-700"
            >
              <div className="space-y-5">
                {/* Leaders Section */}
                <div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 uppercase tracking-widest font-bold mb-4">
                    The Visionary Leaders
                  </p>
                  <AnimatedAvatarTooltip />
                </div>

                {/* Divider */}
                <div className="h-[2px] bg-gradient-to-r from-amber-500 via-green-500 to-red-500 rounded-full" />

                {/* Key Achievements */}
                <div className="space-y-3">
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 uppercase tracking-widest font-bold">
                    Key Achievements
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                      <span className="text-green-600 dark:text-green-500 font-bold mt-0.5">✓</span>
                      <span>Withdrew from ECOWAS</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                      <span className="text-green-600 dark:text-green-500 font-bold mt-0.5">✓</span>
                      <span>Expelled French military bases</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                      <span className="text-green-600 dark:text-green-500 font-bold mt-0.5">✓</span>
                      <span>Launched AES Confederation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                      <span className="text-green-600 dark:text-green-500 font-bold mt-0.5">✓</span>
                      <span>Unified defense pact signed</span>
                    </li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="h-[2px] bg-gradient-to-r from-amber-500 via-green-500 to-red-500 rounded-full" />

                {/* Quote */}
                <div className="space-y-2">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed italic">
                    &ldquo;The time for Africa&apos;s true independence has come.
                    We stand united, sovereign, and unstoppable.&rdquo;
                  </p>
                  <p className="text-xs text-amber-700 dark:text-amber-400 font-bold">
                    — The Spirit of AES
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-5 mt-5 border-t-2 border-neutral-200 dark:border-neutral-700">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">3</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 uppercase tracking-wider font-semibold">Nations</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-amber-600 dark:text-amber-400">72M+</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 uppercase tracking-wider font-semibold">People</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">1</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 uppercase tracking-wider font-semibold">Vision</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom accent bar - sticky at bottom */}
        <div className="h-1 bg-gradient-to-r from-red-500 via-green-500 to-amber-500 sticky bottom-0 z-30" />
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .hero-card-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(251, 191, 36, 0.4) rgba(0, 0, 0, 0.1);
        }

        .hero-card-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .hero-card-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }

        .hero-card-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg,
            rgba(251, 191, 36, 0.6) 0%,
            rgba(34, 197, 94, 0.6) 50%,
            rgba(239, 68, 68, 0.6) 100%
          );
          border-radius: 3px;
        }

        .hero-card-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg,
            rgba(251, 191, 36, 0.8) 0%,
            rgba(34, 197, 94, 0.8) 50%,
            rgba(239, 68, 68, 0.8) 100%
          );
        }
      `}</style>
    </motion.div>
  );
}
