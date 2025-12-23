"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "amber" | "green" | "gradient" | "gold" | "red" | "subtle" | "end";
  className?: string;
}

export function SectionDivider({ variant = "gradient", className = "" }: SectionDividerProps) {
  // End-of-section variant - more prominent
  if (variant === "end") {
    return (
      <div className={`relative py-4 md:py-6 ${className}`}>
        {/* Full width gradient line */}
        <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />

        {/* Center diamond decoration */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ scale: 0, rotate: 45 }}
            whileInView={{ scale: 1, rotate: 45 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-2 h-2 bg-gradient-to-br from-amber-500 via-green-500 to-red-500 shadow-lg"
          />
        </div>
      </div>
    );
  }

  const variants = {
    amber: {
      line: "from-transparent via-amber-500/60 to-transparent",
      glow: "from-transparent via-amber-500/20 to-transparent",
      dot: "bg-amber-500",
      ring: "border-amber-500/40",
      shadow: "shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    },
    green: {
      line: "from-transparent via-green-500/60 to-transparent",
      glow: "from-transparent via-green-500/20 to-transparent",
      dot: "bg-green-500",
      ring: "border-green-500/40",
      shadow: "shadow-[0_0_20px_rgba(34,197,94,0.3)]",
    },
    gold: {
      line: "from-transparent via-yellow-500/60 to-transparent",
      glow: "from-transparent via-yellow-500/20 to-transparent",
      dot: "bg-yellow-500",
      ring: "border-yellow-500/40",
      shadow: "shadow-[0_0_20px_rgba(234,179,8,0.3)]",
    },
    red: {
      line: "from-transparent via-red-500/60 to-transparent",
      glow: "from-transparent via-red-500/20 to-transparent",
      dot: "bg-red-500",
      ring: "border-red-500/40",
      shadow: "shadow-[0_0_20px_rgba(239,68,68,0.3)]",
    },
    gradient: {
      line: "from-amber-500/60 via-green-500/60 to-red-500/60",
      glow: "from-amber-500/10 via-green-500/10 to-red-500/10",
      dot: "bg-gradient-to-r from-amber-500 via-green-500 to-red-500",
      ring: "border-amber-500/40",
      shadow: "shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    },
    subtle: {
      line: "from-transparent via-neutral-400/30 dark:via-neutral-600/30 to-transparent",
      glow: "from-transparent via-neutral-400/10 dark:via-neutral-600/10 to-transparent",
      dot: "bg-neutral-400 dark:bg-neutral-600",
      ring: "border-neutral-400/40 dark:border-neutral-600/40",
      shadow: "",
    },
  };

  const style = variants[variant];

  return (
    <div className={`relative py-8 md:py-12 overflow-hidden ${className}`}>
      {/* Main decorative line */}
      <div className="relative flex items-center justify-center max-w-5xl mx-auto px-4">
        {/* Left line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
          className={`flex-1 h-[2px] bg-gradient-to-r ${style.line} origin-right ${style.shadow}`}
        />

        {/* Center decoration */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-4 md:mx-6"
        >
          {/* Outer ring */}
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 ${style.ring} flex items-center justify-center bg-background/50 dark:bg-neutral-900/50 backdrop-blur-sm`}>
            {/* Inner dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${style.dot}`}
            />
          </div>

          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${style.glow} blur-xl`} />
        </motion.div>

        {/* Right line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
          className={`flex-1 h-[2px] bg-gradient-to-l ${style.line} origin-left ${style.shadow}`}
        />
      </div>

      {/* Decorative side elements */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1.5">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className={`w-1 h-1 rounded-full ${style.dot}`}
        />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className={`w-1.5 h-1.5 rounded-full ${style.dot}`}
        />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className={`w-1 h-1 rounded-full ${style.dot}`}
        />
      </div>

      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1.5">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className={`w-1 h-1 rounded-full ${style.dot}`}
        />
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className={`w-1.5 h-1.5 rounded-full ${style.dot}`}
        />
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className={`w-1 h-1 rounded-full ${style.dot}`}
        />
      </div>
    </div>
  );
}

// Section End Line - PROMINENT separator between sections with metallic silver
export function SectionEndLine({ color = "silver" }: { color?: "amber" | "green" | "red" | "gradient" | "silver" }) {
  // Metallic silver is now the default and preferred option
  const colors = {
    amber: "from-amber-600/20 via-amber-500 to-amber-600/20",
    green: "from-green-600/20 via-green-500 to-green-600/20",
    red: "from-red-600/20 via-red-500 to-red-600/20",
    gradient: "from-amber-500 via-green-500 to-red-500",
    silver: "from-neutral-300 via-neutral-400 to-neutral-300 dark:from-neutral-600 dark:via-neutral-500 dark:to-neutral-600",
  };

  const glowColors = {
    amber: "shadow-[0_0_30px_rgba(245,158,11,0.5)]",
    green: "shadow-[0_0_30px_rgba(34,197,94,0.5)]",
    red: "shadow-[0_0_30px_rgba(239,68,68,0.5)]",
    gradient: "shadow-[0_0_40px_rgba(34,197,94,0.4)]",
    silver: "shadow-[0_0_30px_rgba(163,163,163,0.3)] dark:shadow-[0_0_30px_rgba(115,115,115,0.4)]",
  };

  return (
    <div className="w-full py-6 md:py-8">
      {/* Top fade gradient for depth */}
      <div className="w-full h-8 bg-gradient-to-b from-transparent via-black/5 to-transparent dark:via-white/5" />
      
      {/* Main prominent line with glow and smooth animation */}
      <div className="relative">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full h-[4px] md:h-[6px] bg-gradient-to-r ${colors[color]} origin-center rounded-full ${glowColors[color]}`}
        />
        
        {/* Center diamond decoration - metallic silver */}
        <motion.div
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 45, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-300 dark:from-neutral-600 dark:via-neutral-500 dark:to-neutral-600 shadow-lg"
        />
      </div>
      
      {/* Bottom fade gradient for depth */}
      <div className="w-full h-8 bg-gradient-to-t from-transparent via-black/5 to-transparent dark:via-white/5" />
    </div>
  );
}
