"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/aes", label: "AES" },
  { href: "/russia", label: "Russia" },
  { href: "/tech", label: "Tech" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();

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
        duration: 0.6,
        delay: 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "pt-0 pb-2"
          : "pt-0 pb-4"
      }`}
    >
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Outer glow for visibility */}
        <div className="relative">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-amber-500/40 via-green-500/30 to-amber-500/40 opacity-60 blur-[1px]" />
          
          <motion.div
            className={`relative rounded-2xl transition-all duration-500 ${
              isScrolled
                ? "bg-white/90 dark:bg-black/80 backdrop-blur-2xl border-2 border-amber-400/50 dark:border-amber-500/30 shadow-[0_8px_32px_rgba(180,120,20,0.15)] dark:shadow-[0_8px_32px_rgba(251,191,36,0.1)]"
                : "bg-white/70 dark:bg-black/50 backdrop-blur-xl border-2 border-amber-300/40 dark:border-amber-500/20 shadow-[0_4px_20px_rgba(180,120,20,0.1)]"
            }`}
          >
            {/* Top highlight - amber glow */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent rounded-t-2xl" />
            {/* Bottom highlight */}
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/40 to-transparent rounded-b-2xl" />

            <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/" className="group flex items-center gap-3">
                {/* Logo Icon */}
                <motion.div
                  className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-green-500 to-red-500 p-[1px] overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="w-full h-full rounded-xl bg-white dark:bg-black/90 flex items-center justify-center">
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
                    className="text-lg font-bold bg-gradient-to-r from-stone-800 via-stone-700 to-stone-600 dark:from-white dark:via-white dark:to-white/60 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                  >
                    AES Hub
                  </motion.span>
                  <p className="text-[10px] text-stone-500 dark:text-white/40 -mt-0.5">Pan-African Alliance</p>
                </div>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-stone-100 dark:bg-white/5 rounded-xl p-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
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
                          className="absolute inset-0 bg-stone-200 dark:bg-white/10 rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span
                        className={`relative z-10 transition-colors duration-200 ${
                          hoveredIndex === index ? "text-stone-900 dark:text-white" : "text-stone-600 dark:text-white/60"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - CTA & Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              {/* CTA Button - Desktop */}
              <motion.button
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-green-500/20 border border-amber-500/30 hover:border-amber-500/60 text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 text-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(180,120,20,0.15)] hover:shadow-[0_0_25px_rgba(180,120,20,0.35),0_0_50px_rgba(180,120,20,0.2)] dark:shadow-[0_0_15px_rgba(251,191,36,0.1)] dark:hover:shadow-[0_0_25px_rgba(251,191,36,0.25),0_0_50px_rgba(251,191,36,0.15)]"
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

              {/* Theme Toggle */}
              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden relative w-10 h-10 rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 flex items-center justify-center"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isMobileOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileOpen ? (
                    <X className="w-5 h-5 text-stone-700 dark:text-white" />
                  ) : (
                    <Menu className="w-5 h-5 text-stone-700 dark:text-white" />
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
          <div className="bg-white/95 dark:bg-black/80 backdrop-blur-2xl border border-amber-200/50 dark:border-white/10 rounded-2xl p-4 space-y-2 shadow-[0_8px_30px_rgba(180,120,20,0.1)] dark:shadow-none">
            {navLinks.map((link, index) => (
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
                  className="block px-4 py-3 rounded-xl text-stone-600 dark:text-white/70 hover:text-amber-700 dark:hover:text-white hover:bg-amber-50 dark:hover:bg-white/5 transition-all duration-200 font-medium"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isMobileOpen ? 1 : 0,
                y: isMobileOpen ? 0 : 10,
              }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
              className="pt-2 border-t border-amber-200/30 dark:border-white/10 flex items-center justify-between"
            >
              <span className="text-sm text-stone-500 dark:text-white/40">Theme</span>
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
