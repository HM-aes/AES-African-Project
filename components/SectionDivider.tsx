"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "amber" | "gold" | "green" | "red" | "gradient";
}

export function SectionDivider({ variant = "gradient" }: SectionDividerProps) {
  const gradients = {
    amber: "from-transparent via-amber-500 to-transparent",
    gold: "from-transparent via-amber-400 to-transparent",
    green: "from-transparent via-emerald-500 to-transparent",
    red: "from-transparent via-red-500 to-transparent",
    gradient: "from-amber-500/0 via-amber-500 to-amber-500/0",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex justify-center py-2"
    >
      <div
        className={`h-[2px] w-full max-w-4xl bg-gradient-to-r ${gradients[variant]} opacity-60 dark:opacity-40`}
      />
    </motion.div>
  );
}
