"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "amber" | "green" | "gradient" | "gold" | "red" | "subtle";
  className?: string;
}

export function SectionDivider({ variant = "gradient", className = "" }: SectionDividerProps) {
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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex-1 h-[2px] bg-gradient-to-r ${style.line} origin-right ${style.shadow}`}
        />

        {/* Center decoration */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mx-4 md:mx-6"
        >
          {/* Outer ring */}
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 ${style.ring} flex items-center justify-center bg-background/50 dark:bg-neutral-900/50 backdrop-blur-sm`}>
            {/* Inner dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex-1 h-[2px] bg-gradient-to-l ${style.line} origin-left ${style.shadow}`}
        />
      </div>

      {/* Decorative side elements */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1.5">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`w-1 h-1 rounded-full ${style.dot}`}
        />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className={`w-1.5 h-1.5 rounded-full ${style.dot}`}
        />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className={`w-1 h-1 rounded-full ${style.dot}`}
        />
      </div>

      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1.5">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className={`w-1 h-1 rounded-full ${style.dot}`}
        />
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className={`w-1.5 h-1.5 rounded-full ${style.dot}`}
        />
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`w-1 h-1 rounded-full ${style.dot}`}
        />
      </div>
    </div>
  );
}
