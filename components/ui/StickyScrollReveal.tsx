"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface StickyScrollRevealProps {
  className?: string;
}

// Helper component for blur animation
function BlurOverlay({ blurAmount, opacity }: { blurAmount: MotionValue<number>; opacity: MotionValue<number> }) {
  const [blur, setBlur] = useState(15);
  const [currentOpacity, setCurrentOpacity] = useState(1);

  useEffect(() => {
    const unsubBlur = blurAmount.on("change", (v) => setBlur(v));
    const unsubOpacity = opacity.on("change", (v) => setCurrentOpacity(v));
    return () => {
      unsubBlur();
      unsubOpacity();
    };
  }, [blurAmount, opacity]);

  return (
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        opacity: currentOpacity,
      }}
    />
  );
}

// Distorted Glass Effect Component
function DistortedGlassOverlay({ opacity }: { opacity: MotionValue<number> }) {
  const [currentOpacity, setCurrentOpacity] = useState(1);

  useEffect(() => {
    const unsub = opacity.on("change", (v) => setCurrentOpacity(v));
    return () => unsub();
  }, [opacity]);

  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
      style={{ opacity: currentOpacity }}
    >
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="glass-distortion-effect size-full" />
      </div>
      <svg className="absolute w-0 h-0">
        <title>Distorted Glass Filter</title>
        <defs>
          <filter id="fractal-noise-glass-reveal">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.08 0.08"
              numOctaves="2"
              result="warp"
            />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="40"
              in="SourceGraphic"
              in2="warp"
            />
          </filter>
        </defs>
      </svg>
      <style jsx>{`
        .glass-distortion-effect {
          background: rgba(0, 0, 0, 0.15);
          background: repeating-radial-gradient(
            circle at 50% 50%,
            rgb(0 0 0 / 0),
            rgba(0, 0, 0, 0.08) 8px,
            rgb(0 0 0 / 0.02) 25px
          );
          filter: url(#fractal-noise-glass-reveal);
          background-size: 5px 5px;
          backdrop-filter: blur(2px);
        }
      `}</style>
    </div>
  );
}

// Content slides for the scroll reveal
const scrollContent = [
  {
    title: "Alliance of Sahel States",
    subtitle: "AES - From Africa, For Africans",
    description: "Three sovereign nations united in purpose, breaking chains of dependency.",
    type: "logo" as const,
  },
  {
    title: "The Visionary Leaders",
    subtitle: "Mali • Burkina Faso • Niger",
    description: "Young military officers rising from the people to lead Africa's renaissance.",
    type: "leaders" as const,
  },
  {
    title: "Sovereignty First",
    subtitle: "United We Stand",
    description: "Building a future where African resources serve African prosperity.",
    type: "unity" as const,
  },
];

export function StickyScrollReveal({ className }: StickyScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to animation values
  const glassOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.4, 0]);
  const blurAmount = useTransform(scrollYProgress, [0, 0.4, 0.8], [15, 6, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.85, 0.95, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0.4, 0.7, 1]);

  // Track active section
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const sectionIndex = Math.min(
        Math.floor(value * scrollContent.length),
        scrollContent.length - 1
      );
      setActiveIndex(sectionIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full max-w-4xl mx-auto",
        className
      )}
    >
      {/* Main Card Container */}
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden",
          "bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/30",
          "dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900",
          // Beautiful black edges
          "border-[3px] border-neutral-900 dark:border-neutral-700",
          "shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_15px_50px_-10px_rgba(0,0,0,0.4),0_30px_60px_-15px_rgba(0,0,0,0.3)]",
          "dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_15px_50px_-10px_rgba(0,0,0,0.6),0_30px_60px_-15px_rgba(0,0,0,0.5)]",
        )}
      >
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-green-500 to-red-500 z-30" />

        {/* Scrollable content area */}
        <div
          ref={scrollRef}
          className="h-[400px] md:h-[450px] overflow-y-auto aes-glass-scrollbar"
        >
          {/* Scroll content - Creates scroll distance */}
          <div className="relative" style={{ height: "250%" }}>
            {/* Sticky visual container */}
            <div className="sticky top-0 h-[400px] md:h-[450px] flex">
              {/* Left side - Text content */}
              <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-center relative z-20">
                {scrollContent.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      y: activeIndex === index ? 0 : 20,
                      pointerEvents: activeIndex === index ? "auto" : "none",
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Decorative line */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-[3px] w-12 bg-gradient-to-r from-amber-500 to-green-500 rounded-full" />
                      <span className="text-xs text-amber-600 dark:text-amber-400 uppercase tracking-[0.2em] font-bold">
                        AES Sahel
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-neutral-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-amber-600 via-green-600 to-red-600 bg-clip-text text-transparent mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">
                      {item.description}
                    </p>

                    {/* Progress dots */}
                    <div className="flex gap-2 mt-6">
                      {scrollContent.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            dotIndex === activeIndex
                              ? "w-8 bg-gradient-to-r from-amber-500 to-green-500"
                              : "bg-neutral-300 dark:bg-neutral-600"
                          )}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right side - Visual content with glass effect */}
              <div className="hidden lg:flex w-1/2 items-center justify-center relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-transparent to-green-100/30 dark:from-amber-900/20 dark:via-transparent dark:to-green-900/10" />

                {/* Animated image content */}
                <motion.div
                  className="relative z-10 w-full h-full flex items-center justify-center p-8"
                  style={{
                    scale: contentScale,
                    opacity: contentOpacity,
                  }}
                >
                  {/* Logo display */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      opacity: activeIndex === 0 ? 1 : 0,
                      scale: activeIndex === 0 ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative w-56 h-56 md:w-64 md:h-64">
                      {/* Glow ring */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-green-500/30 to-red-500/30 rounded-full blur-2xl animate-pulse" />
                      {/* Logo container */}
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-amber-100 via-stone-50 to-amber-50 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 border-4 border-amber-300/50 dark:border-amber-700/50 shadow-2xl">
                        <Image
                          src="/images/aes-logo-transparent.png"
                          alt="Alliance of Sahel States Logo"
                          fill
                          className="object-contain p-4"
                          priority
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Leaders image */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center p-4"
                    animate={{
                      opacity: activeIndex === 1 ? 1 : 0,
                      scale: activeIndex === 1 ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-neutral-800/50 dark:border-neutral-600/50">
                      <Image
                        src="/aes/AES/aes-leaders.jpg"
                        alt="AES Leaders - Goïta, Traoré, Tiani"
                        fill
                        className="object-cover"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  </motion.div>

                  {/* Unity image */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center p-4"
                    animate={{
                      opacity: activeIndex === 2 ? 1 : 0,
                      scale: activeIndex === 2 ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-neutral-800/50 dark:border-neutral-600/50">
                      <Image
                        src="/aes/AES/leaders-aes.jpg"
                        alt="AES Unity - Sovereignty First"
                        fill
                        className="object-cover"
                      />
                      {/* Pan-African gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-green-500/10 to-red-500/20" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Distorted Glass Overlay */}
                <DistortedGlassOverlay opacity={glassOpacity} />

                {/* Blur overlay */}
                <div className="absolute inset-0 z-15 pointer-events-none">
                  <BlurOverlay blurAmount={blurAmount} opacity={glassOpacity} />
                </div>

                {/* Glass edge highlight */}
                <motion.div
                  className="absolute inset-0 pointer-events-none z-20"
                  style={{ opacity: glassOpacity }}
                >
                  <div className="absolute inset-0 border-2 border-white/10 rounded-none" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-green-500 to-amber-500 z-30" />

        {/* Corner accents - Beautiful black edges */}
        <div className="absolute top-1 left-0 w-20 h-20 border-l-[3px] border-t-0 border-amber-500/60 pointer-events-none z-30" />
        <div className="absolute top-1 right-0 w-20 h-20 border-r-[3px] border-t-0 border-red-500/60 pointer-events-none z-30" />
        <div className="absolute bottom-1 left-0 w-20 h-20 border-l-[3px] border-b-0 border-green-500/60 pointer-events-none z-30" />
        <div className="absolute bottom-1 right-0 w-20 h-20 border-r-[3px] border-b-0 border-amber-500/60 pointer-events-none z-30" />

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1"
          initial={{ opacity: 1 }}
          animate={{
            opacity: scrollYProgress.get() > 0.8 ? 0 : 1
          }}
        >
          <span className="text-[10px] text-neutral-500 dark:text-neutral-500 font-medium tracking-wider uppercase">
            Scroll
          </span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-neutral-400/50 dark:border-neutral-600/50 flex justify-center pt-1.5"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-1 rounded-full bg-amber-500"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .aes-glass-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(251, 191, 36, 0.5) rgba(0, 0, 0, 0.2);
        }

        .aes-glass-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .aes-glass-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          margin: 8px 0;
        }

        .aes-glass-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg,
            rgba(251, 191, 36, 0.7) 0%,
            rgba(34, 197, 94, 0.7) 50%,
            rgba(239, 68, 68, 0.7) 100%
          );
          border-radius: 4px;
          border: 1px solid rgba(0, 0, 0, 0.3);
        }

        .aes-glass-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg,
            rgba(251, 191, 36, 0.9) 0%,
            rgba(34, 197, 94, 0.9) 50%,
            rgba(239, 68, 68, 0.9) 100%
          );
        }
      `}</style>
    </div>
  );
}
