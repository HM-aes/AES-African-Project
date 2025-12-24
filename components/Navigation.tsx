"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useTranslation } from "@/lib/i18n";
import { Menu, X, Sparkles } from "lucide-react";

// Navigation link keys for translation
const navLinkKeys = [
  { href: "/", key: "home" },
  { href: "/aes", key: "aes" },
  { href: "/agent-ai", key: "agentAi" },
  { href: "/russia", key: "russia" },
  { href: "/tech", key: "tech" },
  { href: "/blog", key: "blog" },
  { href: "/about", key: "about" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const { t } = useTranslation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.8,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94], // Elegant smooth easing
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "pt-0 pb-2"
          : "pt-0 pb-4"
      }`}
    >
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Outer glow for visibility */}
        <div className="relative">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-amber-500/50 via-amber-400/40 to-amber-500/50 opacity-70 blur-sm" />
          
          <motion.div
            className="relative rounded-2xl bg-white/95 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl transition-all duration-500"
          >
            {/* Top highlight - subtle glow */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
            {/* Bottom highlight */}
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-300/50 dark:via-zinc-700/50 to-transparent" />

            <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                delay: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Link href="/" className="group flex items-center gap-3">
                {/* Logo Icon */}
                <motion.div
                  className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-green-500 to-red-500 p-[1px] overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-full h-full rounded-xl bg-white dark:bg-zinc-950 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                  </div>
                  {/* Animated shine */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </motion.div>

                {/* Logo Text */}
                <div className="hidden sm:block">
                  <motion.span
                    className="text-lg font-bold text-zinc-900 dark:text-white"
                    whileHover={{ scale: 1.02 }}
                  >
                    AES Hub
                  </motion.span>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 -mt-0.5">Pan-African Alliance</p>
                </div>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-zinc-100/50 dark:bg-zinc-900/50 rounded-xl p-1 border border-zinc-200/50 dark:border-zinc-800/50">
                {navLinkKeys.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 1.6 + index * 0.12,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Hover background */}
                      {hoveredIndex === index && (
                        <motion.div
                          layoutId="navbar-hover"
                          className="absolute inset-0 bg-zinc-200/80 dark:bg-zinc-800/80 rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span
                        className={`relative z-10 transition-all duration-200 font-semibold ${
                          hoveredIndex === index
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-zinc-700 dark:text-white"
                        }`}
                      >
                        {t(`nav.${link.key}`)}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - CTA & Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.4,
                delay: 2.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="flex items-center gap-3"
            >
              {/* CTA Button - Desktop */}
              <motion.button
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/40 hover:border-amber-400 text-zinc-900 dark:text-white hover:bg-amber-500/20 text-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.2)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Explore</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>

              {/* Language Toggle */}
              <div className="hidden md:block">
                <LanguageToggle />
              </div>

              {/* Theme Toggle */}
              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden relative w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isMobileOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileOpen ? (
                    <X className="w-5 h-5 text-zinc-900 dark:text-white" />
                  ) : (
                    <Menu className="w-5 h-5 text-zinc-900 dark:text-white" />
                  )}
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileOpen ? "auto" : 0,
          opacity: isMobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="md:hidden overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 pt-2">
          <div className="bg-white/95 dark:bg-zinc-950 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-4 space-y-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            {navLinkKeys.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileOpen ? 1 : 0,
                  x: isMobileOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-zinc-700 dark:text-white/90 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-all duration-200 font-medium"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Language Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isMobileOpen ? 1 : 0,
                y: isMobileOpen ? 0 : 10,
              }}
              transition={{ duration: 0.3, delay: navLinkKeys.length * 0.05 }}
              className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between"
            >
              <span className="text-sm text-zinc-500 dark:text-zinc-400">Language</span>
              <LanguageToggle />
            </motion.div>

            {/* Mobile Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isMobileOpen ? 1 : 0,
                y: isMobileOpen ? 0 : 10,
              }}
              transition={{ duration: 0.3, delay: (navLinkKeys.length + 1) * 0.05 }}
              className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between"
            >
              <span className="text-sm text-zinc-500 dark:text-zinc-400">Theme</span>
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
