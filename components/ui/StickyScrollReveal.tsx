"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Shield } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface StickyScrollRevealProps {
  className?: string;
}

// Leader data
const leadersData = [
  {
    id: "goita",
    name: "Col. Assimi Goïta",
    shortName: "Col. Goïta",
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
    emoji: "🇲🇱",
    quote: "Africa's future will be written by Africans.",
  },
  {
    id: "traore",
    name: "Capt. Ibrahim Traoré",
    shortName: "Capt. Traoré",
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
    emoji: "🇧🇫",
    quote: "We are not anti-West, we are pro-Africa.",
  },
  {
    id: "tiani",
    name: "Gen. Abdourahamane Tiani",
    shortName: "Gen. Tiani",
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
    emoji: "🇳🇪",
    quote: "Our resources belong to our children.",
  },
];

export function StickyScrollReveal({ className }: StickyScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { t } = useTranslation();

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
      {/* Main Full-Width Card Container */}
      <div
        className={cn(
          "relative rounded-2xl md:rounded-3xl overflow-hidden",
          "bg-gradient-to-br from-stone-50 via-white to-amber-50/30",
          "dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950",
          "border-2 md:border-[3px] border-neutral-900 dark:border-neutral-700",
          "shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_25px_80px_-20px_rgba(0,0,0,0.4)]",
          "dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_80px_-20px_rgba(0,0,0,0.6)]",
        )}
      >
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-amber-500 via-green-500 to-red-500 z-30" />

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="h-[600px] md:h-[700px] lg:h-[750px] overflow-y-auto leaders-scroll-container"
        >
          {/* Scroll content - Creates scroll distance for 3 leaders */}
          <div className="relative" style={{ height: "300%" }}>
            {/* Sticky visual container */}
            <div className="sticky top-0 h-[600px] md:h-[700px] lg:h-[750px] flex flex-col">

              {/* STICKY HEADER - Inside the card */}
              <div className="relative z-20 px-4 md:px-8 pt-6 md:pt-8 pb-4 md:pb-6 bg-gradient-to-b from-white via-white/95 to-transparent dark:from-neutral-950 dark:via-neutral-950/95 dark:to-transparent">
                {/* Badge */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30">
                    <Shield className="w-4 h-4 text-amber-500" />
                    <span className="text-xs md:text-sm font-semibold text-amber-500 uppercase tracking-wider">
                      Alliance of Sahel States
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-[0.1em] text-center text-stone-900 dark:text-white mb-4 md:mb-6">
                  {t("hero.visionaryLeaders")}
                </h2>

                {/* Leader Names - Interactive Tabs */}
                <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap mb-4 md:mb-6">
                  {leadersData.map((leader, index) => (
                    <motion.button
                      key={leader.id}
                      onClick={() => goToLeader(index)}
                      className={cn(
                        "group relative px-3 md:px-4 py-1.5 md:py-2 rounded-xl transition-all duration-300",
                        "border-2",
                        index === activeIndex
                          ? `${leader.bgColor} ${leader.borderColor} shadow-lg`
                          : "bg-white/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600"
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className={cn(
                        "text-sm md:text-base font-bold transition-colors",
                        index === activeIndex ? leader.textColor : "text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300"
                      )}>
                        {leader.shortName}
                      </span>
                      {index === activeIndex && (
                        <motion.div
                          layoutId="leader-indicator"
                          className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${leader.colorClass}`}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Flags */}
                <div className="flex justify-center gap-3 md:gap-4">
                  {leadersData.map((leader, index) => (
                    <motion.button
                      key={leader.id}
                      onClick={() => goToLeader(index)}
                      className={cn(
                        "relative transition-all duration-300",
                        index === activeIndex ? "scale-125 z-10" : "opacity-60 hover:opacity-100"
                      )}
                      whileHover={{ scale: index === activeIndex ? 1.25 : 1.15 }}
                      title={leader.country}
                    >
                      <span className="text-2xl md:text-3xl drop-shadow-lg">{leader.emoji}</span>
                      {index === activeIndex && (
                        <motion.div
                          layoutId="flag-ring"
                          className={`absolute -inset-2 rounded-lg ${leader.bgColor} ${leader.borderColor} border-2`}
                          style={{ zIndex: -1 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
                {/* Left Column - Leader Info */}
                <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col justify-center relative z-10">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentLeader.id}
                      initial={{ opacity: 0, y: direction * 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: direction * -30 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="space-y-4 md:space-y-5"
                    >
                      {/* Country badge */}
                      <div className="flex items-center gap-3">
                        <span className="text-3xl md:text-4xl">{currentLeader.emoji}</span>
                        <div className={`px-4 py-1.5 rounded-full ${currentLeader.bgColor} border-2 ${currentLeader.borderColor}`}>
                          <span className={`text-sm md:text-base font-bold ${currentLeader.textColor} uppercase tracking-wider`}>
                            {currentLeader.country}
                          </span>
                        </div>
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
                      <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {currentLeader.description}
                      </p>

                      {/* Quote */}
                      <div className={`p-4 md:p-5 rounded-xl ${currentLeader.bgColor} border-l-4 ${currentLeader.borderColor}`}>
                        <p className="text-base md:text-lg italic text-neutral-700 dark:text-neutral-300">
                          &ldquo;{currentLeader.quote}&rdquo;
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Controls */}
                  <div className="mt-6 md:mt-8 flex items-center justify-between">
                    <button
                      onClick={goPrev}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 transition-all group shadow-sm"
                    >
                      <ChevronLeft className="w-5 h-5 text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300" />
                      <span className="text-sm font-semibold text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">Previous</span>
                    </button>

                    {/* Progress indicators */}
                    <div className="flex items-center gap-2">
                      {leadersData.map((leader, index) => (
                        <button
                          key={leader.id}
                          onClick={() => goToLeader(index)}
                          className={cn(
                            "transition-all duration-300",
                            index === activeIndex
                              ? "w-8 h-2 rounded-full"
                              : "w-2 h-2 rounded-full"
                          )}
                          style={{
                            background: index === activeIndex
                              ? `linear-gradient(to right, ${leader.glowColor}, ${leader.glowColor})`
                              : "rgba(150, 150, 150, 0.3)"
                          }}
                        />
                      ))}
                    </div>

                    <button
                      onClick={goNext}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 transition-all group shadow-sm"
                    >
                      <span className="text-sm font-semibold text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">Next</span>
                      <ChevronRight className="w-5 h-5 text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300" />
                    </button>
                  </div>
                </div>

                {/* Right Column - Leader Image */}
                <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800">
                  {/* Background glow */}
                  <motion.div
                    className="absolute inset-0 opacity-50"
                    animate={{
                      background: `radial-gradient(circle at 50% 50%, ${currentLeader.glowColor}, transparent 70%)`,
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Image container */}
                  <div className="relative w-full h-full flex items-center justify-center p-8">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={currentLeader.id}
                        initial={{ opacity: 0, scale: 0.85, rotateY: direction * 15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.85, rotateY: direction * -15 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative w-full max-w-[350px] aspect-[3/4]"
                      >
                        {/* Glow ring */}
                        <div className={`absolute -inset-4 bg-gradient-to-r ${currentLeader.colorClass} rounded-3xl blur-xl opacity-60`} />

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
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                          {/* Name overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                            <p className="text-white font-bold text-xl">{currentLeader.name}</p>
                            <p className={`${currentLeader.textColor} text-sm font-semibold`}>{currentLeader.country}</p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Bottom tagline */}
              <div className="relative z-20 px-4 md:px-8 py-4 md:py-6 bg-gradient-to-t from-white via-white/95 to-transparent dark:from-neutral-950 dark:via-neutral-950/95 dark:to-transparent">
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                  <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-amber-600 via-green-600 to-red-600 bg-clip-text text-transparent">
                    From Africa, For Africans
                  </p>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-16 md:bottom-20 right-4 md:right-6 z-30 flex items-center gap-2 text-neutral-400 dark:text-neutral-500">
          <span className="text-[10px] md:text-xs uppercase tracking-wider font-medium">Scroll to explore</span>
          <motion.div
            className="w-4 h-6 rounded-full border-2 border-neutral-400/50 dark:border-neutral-600/50 flex justify-center pt-1"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-1.5 rounded-full bg-amber-500"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-red-500 via-green-500 to-amber-500 z-30" />

        {/* Corner accents */}
        <div className="absolute top-1 md:top-1.5 left-0 w-12 md:w-16 h-12 md:h-16 border-l-2 md:border-l-[3px] border-amber-500/60 pointer-events-none z-30" />
        <div className="absolute top-1 md:top-1.5 right-0 w-12 md:w-16 h-12 md:h-16 border-r-2 md:border-r-[3px] border-red-500/60 pointer-events-none z-30" />
        <div className="absolute bottom-1 md:bottom-1.5 left-0 w-12 md:w-16 h-12 md:h-16 border-l-2 md:border-l-[3px] border-green-500/60 pointer-events-none z-30" />
        <div className="absolute bottom-1 md:bottom-1.5 right-0 w-12 md:w-16 h-12 md:h-16 border-r-2 md:border-r-[3px] border-amber-500/60 pointer-events-none z-30" />
      </div>

      {/* Scrollbar styles */}
      <style jsx global>{`
        .leaders-scroll-container {
          scrollbar-width: thin;
          scrollbar-color: rgba(251, 191, 36, 0.5) rgba(0, 0, 0, 0.1);
        }

        .leaders-scroll-container::-webkit-scrollbar {
          width: 8px;
        }

        .leaders-scroll-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.08);
          border-radius: 4px;
          margin: 8px 0;
        }

        .leaders-scroll-container::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg,
            rgba(251, 191, 36, 0.6) 0%,
            rgba(34, 197, 94, 0.6) 50%,
            rgba(239, 68, 68, 0.6) 100%
          );
          border-radius: 4px;
        }

        .leaders-scroll-container::-webkit-scrollbar-thumb:hover {
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
