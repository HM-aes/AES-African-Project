"use client";

import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

// Leader data with individual details
const leadersData = [
  {
    id: "goita",
    name: "Col. Assimi Goïta",
    country: "Mali",
    countryCode: "ML",
    role: "President of the Transition",
    color: "amber",
    colorClass: "from-amber-500 to-amber-600",
    borderColor: "border-amber-500/50",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-500",
    description: "Leading Mali's sovereignty movement since 2021, Col. Goïta has expelled foreign military bases and forged new partnerships built on mutual respect.",
    image: "/aes/Images-AES-Leaders/Mali/assimi-Goita-Mali-president.jpg",
    flag: ["bg-green-500", "bg-yellow-400", "bg-red-500"],
    quote: "Africa's future will be written by Africans.",
  },
  {
    id: "traore",
    name: "Capt. Ibrahim Traoré",
    country: "Burkina Faso",
    countryCode: "BF",
    role: "President of Burkina Faso",
    color: "green",
    colorClass: "from-green-500 to-green-600",
    borderColor: "border-green-500/50",
    bgColor: "bg-green-500/10",
    textColor: "text-green-500",
    description: "At 35, the youngest head of state in Africa. Capt. Traoré embodies the new generation of African leaders fighting for true independence.",
    image: "/aes/Images-AES-Leaders/burkina-faso/Ibrahim_Traoré_-_2023_(cropped).png",
    flag: ["bg-red-500", "bg-green-600"],
    flagStar: true,
    quote: "We are not anti-West, we are pro-Africa.",
  },
  {
    id: "tiani",
    name: "Gen. Abdourahamane Tiani",
    country: "Niger",
    countryCode: "NE",
    role: "President of Niger",
    color: "red",
    colorClass: "from-orange-500 to-red-500",
    borderColor: "border-red-500/50",
    bgColor: "bg-red-500/10",
    textColor: "text-red-500",
    description: "Gen. Tiani has steered Niger away from decades of foreign dependency, securing the nation's uranium and gold for its people.",
    image: "/aes/Images-AES-Leaders/Niger/Abdourahamane_Tchiani_in_2025_(cropped).jpg",
    flag: ["bg-orange-500", "bg-white", "bg-green-500"],
    flagVertical: true,
    flagCircle: true,
    quote: "Our resources belong to our children.",
  },
];

export function StickyScrollReveal({ className }: StickyScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to animation values
  const glassOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0.3, 0]);
  const blurAmount = useTransform(scrollYProgress, [0, 0.2, 0.4], [15, 5, 0]);

  // Track active section based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const sectionIndex = Math.min(
        Math.floor(value * leadersData.length),
        leadersData.length - 1
      );
      if (sectionIndex !== activeIndex) {
        setDirection(sectionIndex > activeIndex ? 1 : -1);
        setActiveIndex(sectionIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeIndex]);

  // Navigation handlers
  const goToLeader = useCallback((index: number) => {
    if (scrollRef.current) {
      const scrollHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      const targetScroll = (index / leadersData.length) * scrollHeight + (scrollHeight / leadersData.length / 2);
      setDirection(index > activeIndex ? 1 : -1);
      scrollRef.current.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const goNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % leadersData.length;
    goToLeader(nextIndex);
  }, [activeIndex, goToLeader]);

  const goPrev = useCallback(() => {
    const prevIndex = (activeIndex - 1 + leadersData.length) % leadersData.length;
    goToLeader(prevIndex);
  }, [activeIndex, goToLeader]);

  const currentLeader = leadersData[activeIndex];

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full max-w-5xl mx-auto",
        className
      )}
    >
      {/* Main Card Container - Made bigger */}
      <div
        className={cn(
          "relative rounded-3xl overflow-hidden",
          "bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/30",
          "dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900",
          // Beautiful black edges
          "border-[3px] border-neutral-900 dark:border-neutral-700",
          "shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_20px_60px_-15px_rgba(0,0,0,0.4),0_40px_80px_-20px_rgba(0,0,0,0.3)]",
          "dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_60px_-15px_rgba(0,0,0,0.6),0_40px_80px_-20px_rgba(0,0,0,0.5)]",
        )}
      >
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-green-500 to-red-500 z-30" />

        {/* Scrollable content area - Taller */}
        <div
          ref={scrollRef}
          className="h-[550px] md:h-[600px] overflow-y-auto aes-glass-scrollbar"
        >
          {/* Scroll content - Creates scroll distance */}
          <div className="relative" style={{ height: "300%" }}>
            {/* Sticky visual container */}
            <div className="sticky top-0 h-[550px] md:h-[600px] flex">
              {/* Left side - Leader info with navigation */}
              <div className="w-full lg:w-[55%] p-6 md:p-10 flex flex-col justify-between relative z-20">
                {/* AES Badge */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-[3px] w-12 bg-gradient-to-r from-amber-500 to-green-500 rounded-full" />
                  <span className="text-xs text-amber-600 dark:text-amber-400 uppercase tracking-[0.2em] font-bold">
                    AES Sahel Leaders
                  </span>
                </div>

                {/* Leader Content with Animation */}
                <div className="flex-1 flex flex-col justify-center relative">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentLeader.id}
                      initial={{ opacity: 0, x: direction * 50, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: direction * -50, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="space-y-4"
                    >
                      {/* Country badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${currentLeader.bgColor} border ${currentLeader.borderColor}`}>
                        {/* Mini flag */}
                        <div className={`w-6 h-4 rounded-sm overflow-hidden flex ${currentLeader.flagVertical ? 'flex-col' : 'flex-row'}`}>
                          {currentLeader.flag.map((color, i) => (
                            <div key={i} className={`${currentLeader.flagVertical ? 'w-full h-1/3' : 'h-full w-1/3'} ${color} relative`}>
                              {currentLeader.flagStar && i === 0 && (
                                <div className="absolute inset-0 flex items-end justify-center">
                                  <span className="text-yellow-400 text-[8px] leading-none">★</span>
                                </div>
                              )}
                              {currentLeader.flagCircle && i === 1 && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        <span className={`text-sm font-bold ${currentLeader.textColor}`}>
                          {currentLeader.country}
                        </span>
                      </div>

                      {/* Leader name */}
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-neutral-900 dark:text-white leading-tight">
                        {currentLeader.name}
                      </h3>

                      {/* Role */}
                      <p className={`text-lg md:text-xl font-semibold bg-gradient-to-r ${currentLeader.colorClass} bg-clip-text text-transparent`}>
                        {currentLeader.role}
                      </p>

                      {/* Description */}
                      <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
                        {currentLeader.description}
                      </p>

                      {/* Quote */}
                      <div className={`mt-4 pl-4 border-l-4 ${currentLeader.borderColor}`}>
                        <p className="text-sm md:text-base italic text-neutral-500 dark:text-neutral-500">
                          &ldquo;{currentLeader.quote}&rdquo;
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation - Country buttons */}
                <div className="mt-6 space-y-4">
                  {/* Country navigation buttons */}
                  <div className="flex items-center gap-3">
                    {leadersData.map((leader, index) => (
                      <button
                        key={leader.id}
                        onClick={() => goToLeader(index)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300",
                          "border-2",
                          index === activeIndex
                            ? `${leader.bgColor} ${leader.borderColor} shadow-lg`
                            : "bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"
                        )}
                      >
                        {/* Mini flag */}
                        <div className={`w-5 h-3.5 rounded-sm overflow-hidden flex ${leader.flagVertical ? 'flex-col' : 'flex-row'} shadow-sm`}>
                          {leader.flag.map((color, i) => (
                            <div key={i} className={`${leader.flagVertical ? 'w-full h-1/3' : 'h-full w-1/3'} ${color} relative`}>
                              {leader.flagStar && i === 0 && (
                                <div className="absolute inset-0 flex items-end justify-center">
                                  <span className="text-yellow-400 text-[6px] leading-none">★</span>
                                </div>
                              )}
                              {leader.flagCircle && i === 1 && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-1 h-1 rounded-full bg-orange-500" />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        <span className={cn(
                          "text-xs font-bold uppercase tracking-wider",
                          index === activeIndex ? leader.textColor : "text-neutral-500 dark:text-neutral-400"
                        )}>
                          {leader.countryCode}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Arrow navigation */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={goPrev}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all group"
                    >
                      <ChevronLeft className="w-4 h-4 text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors" />
                      <span className="text-xs font-semibold text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
                        Previous
                      </span>
                    </button>

                    {/* Progress indicator */}
                    <div className="flex gap-2">
                      {leadersData.map((_, index) => (
                        <div
                          key={index}
                          className={cn(
                            "h-1.5 rounded-full transition-all duration-300",
                            index === activeIndex
                              ? `w-8 bg-gradient-to-r ${leadersData[index].colorClass}`
                              : "w-1.5 bg-neutral-300 dark:bg-neutral-600"
                          )}
                        />
                      ))}
                    </div>

                    <button
                      onClick={goNext}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all group"
                    >
                      <span className="text-xs font-semibold text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
                        Next
                      </span>
                      <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right side - Leader image with glass effect */}
              <div className="hidden lg:flex w-[45%] items-center justify-center relative overflow-hidden">
                {/* Background with leader color */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: `linear-gradient(135deg, var(--${currentLeader.color}-100, #fef3c7) 0%, transparent 50%, var(--${currentLeader.color}-50, #fffbeb) 100%)`,
                  }}
                  transition={{ duration: 0.5 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${currentLeader.bgColor} opacity-50`} />

                {/* Animated image content */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentLeader.id}
                      initial={{ opacity: 0, scale: 0.9, rotateY: direction * 15 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.9, rotateY: direction * -15 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="relative w-full h-full max-w-[350px] max-h-[450px]"
                    >
                      {/* Glow ring */}
                      <div className={`absolute -inset-4 bg-gradient-to-r ${currentLeader.colorClass} rounded-3xl blur-2xl opacity-30`} />

                      {/* Image container */}
                      <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 ${currentLeader.borderColor}`}>
                        <Image
                          src={currentLeader.image}
                          alt={currentLeader.name}
                          fill
                          className="object-cover object-top"
                          priority
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        {/* Name overlay at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-white font-bold text-lg">{currentLeader.name}</p>
                          <p className={`${currentLeader.textColor} text-sm font-medium`}>{currentLeader.country}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

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
                  <div className="absolute inset-0 border-2 border-white/10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-green-500 to-amber-500 z-30" />

        {/* Corner accents */}
        <div className="absolute top-1.5 left-0 w-24 h-24 border-l-[3px] border-amber-500/60 pointer-events-none z-30" />
        <div className="absolute top-1.5 right-0 w-24 h-24 border-r-[3px] border-red-500/60 pointer-events-none z-30" />
        <div className="absolute bottom-1.5 left-0 w-24 h-24 border-l-[3px] border-green-500/60 pointer-events-none z-30" />
        <div className="absolute bottom-1.5 right-0 w-24 h-24 border-r-[3px] border-amber-500/60 pointer-events-none z-30" />

        {/* Scroll hint - only shows initially */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 lg:hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: scrollYProgress.get() > 0.1 ? 0 : 1 }}
        >
          <span className="text-[10px] text-neutral-500 dark:text-neutral-500 font-medium tracking-wider uppercase">
            Scroll to explore
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
          width: 10px;
        }

        .aes-glass-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.15);
          border-radius: 5px;
          margin: 12px 0;
        }

        .aes-glass-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg,
            rgba(251, 191, 36, 0.8) 0%,
            rgba(34, 197, 94, 0.8) 50%,
            rgba(239, 68, 68, 0.8) 100%
          );
          border-radius: 5px;
          border: 2px solid rgba(0, 0, 0, 0.2);
        }

        .aes-glass-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg,
            rgba(251, 191, 36, 1) 0%,
            rgba(34, 197, 94, 1) 50%,
            rgba(239, 68, 68, 1) 100%
          );
        }
      `}</style>
    </div>
  );
}
