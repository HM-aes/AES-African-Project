"use client";

import * as React from "react";
import { Moon, Sun, Stars } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
        <span className="sr-only">Toggle theme</span>
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      className="group relative w-12 h-12 rounded-2xl overflow-hidden"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle theme"
    >
      {/* Background with gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/20 via-purple-500/20 to-blue-500/20 p-[1px]">
        <div className="w-full h-full rounded-2xl bg-black/80 backdrop-blur-xl" />
      </div>

      {/* Animated glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: isDark
            ? "radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.3), transparent 70%)"
            : "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3), transparent 70%)",
        }}
      />

      {/* Stars background for dark mode */}
      <AnimatePresence>
        {isDark && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
                style={{
                  top: `${20 + i * 25}%`,
                  left: `${15 + i * 30}%`,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Sun rays for light mode */}
      <AnimatePresence>
        {!isDark && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-3 bg-gradient-to-t from-amber-400 to-yellow-200 rounded-full"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-16px)`,
                }}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  height: ["10px", "14px", "10px"],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              <Moon className="w-5 h-5 text-amber-300" />
              {/* Moon glow */}
              <div className="absolute inset-0 w-5 h-5 bg-amber-300/30 rounded-full blur-md" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="relative"
            >
              <Sun className="w-5 h-5 text-amber-500" />
              {/* Sun glow */}
              <div className="absolute inset-0 w-5 h-5 bg-amber-400/40 rounded-full blur-md" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Border highlight */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-300" />
    </motion.button>
  );
}
