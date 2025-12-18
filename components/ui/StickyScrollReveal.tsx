"use client";

import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StickyScrollRevealProps {
  className?: string;
}

// Glass Blur Overlay - increases blur as you scroll
function GlassBlurOverlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const [blur, setBlur] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (value) => {
      // Calculate progress within current section (0 to 1 within each leader)
      const sectionSize = 1 / 3;
      const currentSection = Math.floor(value / sectionSize);
      const progressInSection = (value - currentSection * sectionSize) / sectionSize;

      // Blur increases toward end of each section
      const blurValue = progressInSection > 0.7 ? (progressInSection - 0.7) * 50 : 0;
      const opacityValue = progressInSection > 0.7 ? (progressInSection - 0.7) * 2 : 0;

      setBlur(blurValue);
      setOpacity(Math.min(opacityValue, 0.7));
    });
    return () => unsubscribe();
  }, [scrollProgress]);

  return (
    <div
      className="absolute inset-0 pointer-events-none z-20 rounded-2xl overflow-hidden transition-all duration-150"
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        opacity: opacity,
        background: `linear-gradient(135deg, rgba(0,0,0,${opacity * 0.4}) 0%, rgba(0,0,0,${opacity * 0.2}) 100%)`,
      }}
    >
      {/* Glass texture */}
      <div
        className="absolute inset-0"
        style={{
          background: `repeating-radial-gradient(
            circle at 50% 50%,
            transparent,
            rgba(255, 255, 255, 0.02) 2px,
            transparent 4px
          )`,
        }}
      />
      {/* Glass reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10" />
    </div>
  );
}

// Leader data
const leadersData = [
  {
    id: "goita",
    name: "Col. Assimi Goïta",
    country: "Mali",
    countryCode: "ML",
    role: "President of the Transition",
    colorClass: "from-amber-500 to-amber-600",
    borderColor: "border-amber-500/50",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-500",
    glowColor: "rgba(251, 191, 36, 0.4)",
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
    colorClass: "from-green-500 to-green-600",
    borderColor: "border-green-500/50",
    bgColor: "bg-green-500/10",
    textColor: "text-green-500",
    glowColor: "rgba(34, 197, 94, 0.4)",
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
    colorClass: "from-orange-500 to-red-500",
    borderColor: "border-red-500/50",
    bgColor: "bg-red-500/10",
    textColor: "text-red-500",
    glowColor: "rgba(239, 68, 68, 0.4)",
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
    <div ref={containerRef} className={cn("relative w-full", className)}>
      {/* Main Card Container */}
      <div
        className={cn(
          "relative rounded-3xl overflow-hidden",
          "bg-gradient-to-br from-stone-50 via-white to-amber-50/30",
          "dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900",
          "border-[3px] border-neutral-900 dark:border-neutral-700",
          "shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_25px_80px_-20px_rgba(0,0,0,0.4)]",
          "dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_80px_-20px_rgba(0,0,0,0.6)]",
        )}
      >
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-green-500 to-red-500 z-30" />

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="h-[420px] md:h-[480px] overflow-y-auto glass-scroll-container"
        >
          {/* Scroll content - Creates scroll distance for 3 leaders */}
          <div className="relative" style={{ height: "300%" }}>
            {/* Sticky visual container */}
            <div className="sticky top-0 h-[420px] md:h-[480px] flex">
              {/* Left Column - Leader Info */}
              <div className="w-full lg:w-[55%] p-5 md:p-8 flex flex-col justify-center relative z-10">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentLeader.id}
                    initial={{ opacity: 0, x: direction * 40, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: direction * -40, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="space-y-3 md:space-y-4"
                  >
                    {/* Country badge with flag */}
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-7 md:w-12 md:h-8 rounded-md overflow-hidden flex ${currentLeader.flagVertical ? 'flex-col' : 'flex-row'} shadow-md border ${currentLeader.borderColor}`}>
                        {currentLeader.flag.map((color, i) => (
                          <div key={i} className={`${currentLeader.flagVertical ? 'w-full h-1/3' : 'h-full w-1/3'} ${color} relative`}>
                            {currentLeader.flagStar && i === 0 && (
                              <div className="absolute inset-0 flex items-end justify-center">
                                <span className="text-yellow-400 text-xs">★</span>
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
                      <div className={`px-3 py-1 rounded-full ${currentLeader.bgColor} border ${currentLeader.borderColor}`}>
                        <span className={`text-xs font-bold ${currentLeader.textColor} uppercase tracking-wider`}>
                          {currentLeader.country}
                        </span>
                      </div>
                    </div>

                    {/* Leader name */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-neutral-900 dark:text-white leading-tight">
                      {currentLeader.name}
                    </h3>

                    {/* Role */}
                    <p className={`text-sm md:text-base font-semibold bg-gradient-to-r ${currentLeader.colorClass} bg-clip-text text-transparent`}>
                      {currentLeader.role}
                    </p>

                    {/* Description */}
                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {currentLeader.description}
                    </p>

                    {/* Quote */}
                    <div className={`p-3 rounded-xl ${currentLeader.bgColor} border-l-4 ${currentLeader.borderColor}`}>
                      <p className="text-sm italic text-neutral-700 dark:text-neutral-300">
                        &ldquo;{currentLeader.quote}&rdquo;
                      </p>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs font-bold uppercase tracking-[0.15em] bg-gradient-to-r from-amber-600 via-green-600 to-red-600 bg-clip-text text-transparent">
                      From Africa, For Africans
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="mt-4 md:mt-6 flex items-center justify-between">
                  <button
                    onClick={goPrev}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all group shadow-sm"
                  >
                    <ChevronLeft className="w-4 h-4 text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300" />
                    <span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">Prev</span>
                  </button>

                  {/* Country buttons */}
                  <div className="flex items-center gap-2">
                    {leadersData.map((leader, index) => (
                      <button
                        key={leader.id}
                        onClick={() => goToLeader(index)}
                        className={cn(
                          "w-7 h-7 rounded-lg flex items-center justify-center transition-all",
                          "border",
                          index === activeIndex
                            ? `${leader.bgColor} ${leader.borderColor} scale-110`
                            : "bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
                        )}
                      >
                        <span className={cn(
                          "text-[10px] font-bold",
                          index === activeIndex ? leader.textColor : "text-neutral-500"
                        )}>
                          {leader.countryCode}
                        </span>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={goNext}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all group shadow-sm"
                  >
                    <span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">Next</span>
                    <ChevronRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300" />
                  </button>
                </div>
              </div>

              {/* Right Column - Leader Image with Glass Effect */}
              <div className="hidden lg:flex w-[45%] relative overflow-hidden bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800">
                {/* Background glow */}
                <motion.div
                  className="absolute inset-0 opacity-40"
                  animate={{
                    background: `radial-gradient(circle at 50% 50%, ${currentLeader.glowColor}, transparent 70%)`,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Image container */}
                <div className="relative w-full h-full flex items-center justify-center p-6">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentLeader.id}
                      initial={{ opacity: 0, scale: 0.85, rotateY: direction * 15 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.85, rotateY: direction * -15 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="relative w-full max-w-[260px] md:max-w-[300px] aspect-[3/4]"
                    >
                      {/* Glow ring */}
                      <div className={`absolute -inset-3 bg-gradient-to-r ${currentLeader.colorClass} rounded-2xl blur-xl opacity-50`} />

                      {/* Image */}
                      <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 ${currentLeader.borderColor} bg-neutral-200 dark:bg-neutral-700`}>
                        <Image
                          src={currentLeader.image}
                          alt={currentLeader.name}
                          fill
                          className="object-cover object-top"
                          priority
                        />
                        {/* Bottom gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Name overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-white font-bold text-base md:text-lg">{currentLeader.name}</p>
                          <p className={`${currentLeader.textColor} text-xs font-medium`}>{currentLeader.country}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Glass Blur Overlay - Increases as you scroll within each section */}
                <GlassBlurOverlay scrollProgress={scrollYProgress} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-3 right-3 z-30 flex items-center gap-1.5 text-neutral-400 dark:text-neutral-600">
          <span className="text-[9px] uppercase tracking-wider font-medium">Scroll</span>
          <motion.div
            className="w-3.5 h-5 rounded-full border border-neutral-400/50 dark:border-neutral-600/50 flex justify-center pt-0.5"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-0.5 h-1 rounded-full bg-amber-500"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-green-500 to-amber-500 z-30" />

        {/* Corner accents */}
        <div className="absolute top-1.5 left-0 w-14 h-14 border-l-[3px] border-amber-500/60 pointer-events-none z-30" />
        <div className="absolute top-1.5 right-0 w-14 h-14 border-r-[3px] border-red-500/60 pointer-events-none z-30" />
        <div className="absolute bottom-1.5 left-0 w-14 h-14 border-l-[3px] border-green-500/60 pointer-events-none z-30" />
        <div className="absolute bottom-1.5 right-0 w-14 h-14 border-r-[3px] border-amber-500/60 pointer-events-none z-30" />
      </div>

      {/* Scrollbar styles */}
      <style jsx global>{`
        .glass-scroll-container {
          scrollbar-width: thin;
          scrollbar-color: rgba(251, 191, 36, 0.5) rgba(0, 0, 0, 0.1);
        }

        .glass-scroll-container::-webkit-scrollbar {
          width: 6px;
        }

        .glass-scroll-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.08);
          border-radius: 3px;
          margin: 6px 0;
        }

        .glass-scroll-container::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg,
            rgba(251, 191, 36, 0.6) 0%,
            rgba(34, 197, 94, 0.6) 50%,
            rgba(239, 68, 68, 0.6) 100%
          );
          border-radius: 3px;
        }

        .glass-scroll-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg,
            rgba(251, 191, 36, 0.8) 0%,
            rgba(34, 197, 94, 0.8) 50%,
            rgba(239, 68, 68, 0.8) 100%
          );
        }
      `}</style>
    </div>
  );
}
