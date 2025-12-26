"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-24 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      className="relative flex items-center w-24 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1 cursor-pointer transition-colors duration-300"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {/* Sliding indicator */}
      <motion.div
        className="absolute w-11 h-7 rounded-full bg-white dark:bg-amber-600 shadow-md"
        initial={false}
        animate={{
          x: isDark ? 44 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 40,
        }}
      />

      {/* Light label */}
      <span
        className={`relative z-10 flex-1 text-xs font-semibold text-center transition-colors duration-200 ${
          isDark ? "text-neutral-500" : "text-neutral-800"
        }`}
      >
        Light
      </span>

      {/* Dark label */}
      <span
        className={`relative z-10 flex-1 text-xs font-semibold text-center transition-colors duration-200 ${
          isDark ? "text-white" : "text-neutral-500"
        }`}
      >
        Dark
      </span>
    </button>
  );
}
