"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { AnimatedAvatarTooltip } from "./AnimatedAvatarTooltip";
import {
  MapPin, Sparkles, Globe, Zap, Shield, Wheat, GraduationCap, ArrowRight,
  TrendingUp, Factory, Pickaxe, Banknote, Target
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
    { label: "Technology & AI", icon: Zap, color: "from-blue-500/20 to-blue-600/20", borderColor: "border-blue-500/40", textColor: "text-blue-600 dark:text-blue-400" },
    { label: "Military Defense", icon: Shield, color: "from-red-500/20 to-red-600/20", borderColor: "border-red-500/40", textColor: "text-red-600 dark:text-red-400" },
    { label: "Economy", icon: Globe, color: "from-green-500/20 to-green-600/20", borderColor: "border-green-500/40", textColor: "text-green-600 dark:text-green-400" },
    { label: "Agriculture", icon: Wheat, color: "from-amber-500/20 to-amber-600/20", borderColor: "border-amber-500/40", textColor: "text-amber-600 dark:text-amber-400" },
    { label: "Education", icon: GraduationCap, color: "from-purple-500/20 to-purple-600/20", borderColor: "border-purple-500/40", textColor: "text-purple-600 dark:text-purple-400" },
  ];

  const growthMetrics = [
    {
      label: "GDP Growth",
      value: "+5.2%",
      description: "Average annual growth",
      icon: TrendingUp,
      color: "text-green-600 dark:text-green-500"
    },
    {
      label: "Gold Production",
      value: "+40%",
      description: "Increased mining output",
      icon: Pickaxe,
      color: "text-amber-600 dark:text-amber-500"
    },
    {
      label: "Local Industries",
      value: "150+",
      description: "New factories opened",
      icon: Factory,
      color: "text-blue-600 dark:text-blue-500"
    },
    {
      label: "Revenue Retained",
      value: "85%",
      description: "Kept in-country",
      icon: Banknote,
      color: "text-emerald-600 dark:text-emerald-500"
    },
  ];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative w-full max-w-7xl rounded-3xl overflow-hidden",
        className
      )}
    >
      {/* Outer glow border - unified for both modes */}
      <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-amber-500/40 via-stone-400/30 to-green-500/40 dark:from-amber-500/30 dark:via-white/20 dark:to-green-500/30" />

      {/* Secondary inner glow */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-amber-500/15 via-transparent to-green-500/15 dark:from-amber-500/10 dark:to-green-500/10" />

      {/* Spotlight effect - Light mode */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:hidden"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${mouseX}px ${mouseY}px,
              rgba(251, 191, 36, 0.15),
              rgba(34, 197, 94, 0.08) 40%,
              transparent 70%
            )
          `,
        }}
      />
      {/* Dark mode spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden dark:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${mouseX}px ${mouseY}px,
              rgba(251, 191, 36, 0.25),
              rgba(34, 197, 94, 0.12) 40%,
              transparent 70%
            )
          `,
        }}
      />

      {/* Main card container */}
      <div className="relative rounded-3xl overflow-hidden border border-stone-300/60 dark:border-white/[0.1] h-full shadow-xl shadow-stone-900/5 dark:shadow-none">
        {/* Background layers - Clean and neutral */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-50 to-white dark:from-black/80 dark:via-black/80 dark:to-black/80 backdrop-blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-green-500/[0.03] dark:from-amber-900/10 dark:via-transparent dark:to-green-900/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-100/50 via-transparent to-transparent dark:from-black/60" />

        {/* Top edge highlight */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent z-20" />

        {/* Corner accents */}
        <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-amber-500/40 rounded-tr-2xl z-20" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-green-500/40 rounded-bl-2xl z-20" />

        {/* Content */}
        <div className="relative z-10 p-8 md:p-10 lg:p-12">
          {/* Top Badge Row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-between gap-3 mb-8"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30">
                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                  Est. September 2023
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-stone-500/10 dark:bg-white/5 border border-stone-400/30 dark:border-white/10">
                <Globe className="w-4 h-4 text-stone-600 dark:text-white/60" />
                <span className="text-sm text-stone-700 dark:text-white/60">Pan-African Alliance</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-green-500/10 dark:bg-green-500/10 border border-green-500/30">
                <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm text-green-700 dark:text-green-400 font-medium">Sovereignty First</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-stone-600 dark:text-white/50 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Sahel Region, West Africa</span>
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
                  <span className="text-stone-900 dark:text-white">Alliance of</span>{" "}
                  <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 dark:from-amber-500 dark:via-yellow-400 dark:to-amber-500 bg-clip-text text-transparent">
                    Sahel States
                  </span>
                </h1>
                <p className="mt-3 text-lg md:text-xl text-stone-700 dark:text-white/80 font-medium">
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
                  <div className="h-[2px] w-8 bg-amber-500" />
                  <span className="text-xs text-amber-700 dark:text-amber-400 uppercase tracking-widest font-semibold">Who We Are</span>
                </div>
                <p className="text-base md:text-lg text-stone-700 dark:text-white/70 leading-relaxed">
                  The <span className="font-semibold text-stone-900 dark:text-white">Alliance of Sahel States (AES)</span> is a
                  groundbreaking confederation uniting{" "}
                  <span className="text-amber-700 dark:text-amber-400 font-semibold">Mali</span>,{" "}
                  <span className="text-green-700 dark:text-green-400 font-semibold">Burkina Faso</span>, and{" "}
                  <span className="text-red-700 dark:text-red-400 font-semibold">Niger</span>—three
                  nations that chose sovereignty over dependency, unity over division, and
                  African solutions over foreign intervention.
                </p>
                <p className="text-sm md:text-base text-stone-600 dark:text-white/60 leading-relaxed">
                  Born from a shared vision to end decades of exploitation, our leaders—military officers
                  who rose from the people—are rewriting Africa&apos;s future. We have withdrawn from
                  ECOWAS, expelled foreign military bases, and are building an economy that serves
                  Africans first. With strategic partners like <span className="text-blue-700 dark:text-blue-400 font-medium">Russia</span> and{" "}
                  <span className="text-red-700 dark:text-red-400 font-medium">China</span>, we&apos;re
                  proving that true independence is possible.
                </p>
              </motion.div>

              {/* Growth Since Formation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-4"
              >
                <div className="flex items-center gap-2 mb-5">
                  <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-500" />
                  <span className="text-xs text-stone-600 dark:text-white/40 uppercase tracking-widest font-semibold">
                    Growth Since Formation
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {growthMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -3 }}
                      className="relative p-4 rounded-xl bg-stone-500/[0.06] dark:bg-white/[0.06] border border-stone-300/50 dark:border-white/10 group/metric cursor-default"
                    >
                      <metric.icon className={cn("w-5 h-5 mb-2", metric.color)} />
                      <p className={cn("text-2xl md:text-3xl font-bold", metric.color)}>
                        {metric.value}
                      </p>
                      <p className="text-sm font-medium text-stone-800 dark:text-white/80 mt-1">
                        {metric.label}
                      </p>
                      <p className="text-xs text-stone-500 dark:text-white/40 mt-0.5">
                        {metric.description}
                      </p>
                      {/* Hover glow */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-current/5 to-transparent opacity-0 group-hover/metric:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Key Pillars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <p className="text-xs text-stone-600 dark:text-white/40 uppercase tracking-widest mb-4">
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
                        "bg-gradient-to-r", pillar.color,
                        "border", pillar.borderColor,
                        "cursor-default transition-all duration-300",
                        "hover:shadow-lg hover:shadow-current/10"
                      )}
                    >
                      <pillar.icon className={cn("w-4 h-4", pillar.textColor)} />
                      <span className={cn("text-sm font-medium", pillar.textColor)}>{pillar.label}</span>
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
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold shadow-lg shadow-amber-600/20 dark:shadow-amber-500/25 transition-all duration-300"
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
              className="flex flex-col justify-between bg-stone-500/[0.06] dark:bg-white/5 rounded-2xl p-6 border border-stone-300/50 dark:border-white/10"
            >
              <div className="space-y-5">
                {/* Leaders Section */}
                <div>
                  <p className="text-xs text-stone-600 dark:text-white/40 uppercase tracking-widest mb-4">
                    The Visionary Leaders
                  </p>
                  <AnimatedAvatarTooltip />
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-stone-300 dark:from-white/20 via-stone-200 dark:via-white/10 to-transparent" />

                {/* Key Achievements */}
                <div className="space-y-3">
                  <p className="text-xs text-stone-600 dark:text-white/40 uppercase tracking-widest">
                    Key Achievements
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-stone-700 dark:text-white/60">
                      <span className="text-green-600 dark:text-green-500 mt-0.5">✓</span>
                      <span>Withdrew from ECOWAS</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-stone-700 dark:text-white/60">
                      <span className="text-green-600 dark:text-green-500 mt-0.5">✓</span>
                      <span>Expelled French military bases</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-stone-700 dark:text-white/60">
                      <span className="text-green-600 dark:text-green-500 mt-0.5">✓</span>
                      <span>Launched AES Confederation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-stone-700 dark:text-white/60">
                      <span className="text-green-600 dark:text-green-500 mt-0.5">✓</span>
                      <span>Unified defense pact signed</span>
                    </li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-stone-300 dark:from-white/20 via-stone-200 dark:via-white/10 to-transparent" />

                {/* Quote */}
                <div className="space-y-2">
                  <p className="text-sm text-stone-600 dark:text-white/60 leading-relaxed italic">
                    &ldquo;The time for Africa&apos;s true independence has come.
                    We stand united, sovereign, and unstoppable.&rdquo;
                  </p>
                  <p className="text-xs text-amber-700 dark:text-amber-400/70 font-medium">
                    — The Spirit of AES
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-5 mt-5 border-t border-stone-300/50 dark:border-white/10">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white">3</p>
                  <p className="text-xs text-stone-500 dark:text-white/40 uppercase tracking-wider">Nations</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-amber-600 dark:text-amber-400">72M+</p>
                  <p className="text-xs text-stone-500 dark:text-white/40 uppercase tracking-wider">People</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">1</p>
                  <p className="text-xs text-stone-500 dark:text-white/40 uppercase tracking-wider">Vision</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom ambient glow */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-32 bg-gradient-to-t from-amber-500/15 via-green-500/10 to-transparent dark:from-amber-500/15 dark:via-green-500/10 blur-2xl pointer-events-none" />
      </div>

      {/* Outer ambient glow on hover */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-amber-500/20 via-green-500/15 to-amber-500/20 dark:from-amber-500/15 dark:via-green-500/10 dark:to-red-500/15 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 -z-10" />
    </motion.div>
  );
}
