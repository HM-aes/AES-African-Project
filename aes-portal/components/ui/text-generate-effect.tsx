"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function TextGenerateEffect({
  words,
  className = "",
  delay = 0,
  duration = 0.05,
}: TextGenerateEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < words.length) {
        setDisplayedText(words.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, delay + currentIndex * duration * 1000);

    return () => clearTimeout(timeout);
  }, [currentIndex, words, delay, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {displayedText}
      {currentIndex < words.length && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-current ml-1 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </motion.span>
  );
}

interface TypingTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function TypingText({ children, className = "", delay = 0 }: TypingTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Hero Highlight Effect Component
interface HeroHighlightProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function HeroHighlight({
  children,
  className,
  containerClassName,
}: HeroHighlightProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={cn(
        "relative group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient following cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.15), transparent 40%)`,
        }}
      />
      <div className={className}>{children}</div>
    </div>
  );
}

// Highlight specific text with animated background
interface HighlightProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Highlight({ children, className, delay = 0 }: HighlightProps) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{
        duration: 1.5,
        delay,
        ease: "easeInOut",
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block pb-1 px-2 rounded-lg bg-slate-700/30",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "gradient" | "subtle" | "vibrant" | "premium";
}

export function GlassmorphicCard({
  children,
  className = "",
  variant = "premium",
}: GlassmorphicCardProps) {
  const variantStyles = {
    gradient: "bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.05)]",
    subtle: "bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg",
    vibrant: "bg-slate-800/60 backdrop-blur-2xl border border-slate-700/50 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-shadow duration-300",
    premium: "",
  };

  if (variant === "premium") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className={cn("relative group", className)}
      >
        {/* Subtle border glow */}
        <div className="absolute -inset-[0.5px] rounded-2xl bg-gradient-to-b from-white/20 via-white/5 to-white/10 opacity-60" />

        {/* Main glass container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
          {/* Glass background - neutral gray, no blue */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />

          {/* Glass highlight layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Top edge highlight - glass reflection */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Left edge highlight */}
          <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

          {/* Inner shadow for depth */}
          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" />

          {/* Content - compact padding */}
          <div className="relative z-10 p-4 md:p-5 lg:p-6">
            {children}
          </div>
        </div>

        {/* Subtle outer glow on hover */}
        <div className="absolute -inset-1 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10" />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`rounded-3xl p-6 md:p-8 lg:p-10 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
