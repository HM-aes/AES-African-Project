"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Shield } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface TooltipCardProps {
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
    borderColor: "border-amber-500",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-500",
    glowColor: "rgba(251, 191, 36, 0.4)",
    flagColors: "from-green-500 via-amber-400 to-red-500",
    description: "Leading Mali's sovereignty movement since 2021, Col. Goïta has expelled foreign military bases and forged new partnerships built on mutual respect. Under his leadership, Mali has taken control of its natural resources and strengthened ties with nations that respect African sovereignty.",
    image: "/aes/Images-AES-Leaders/Mali/assimi-Goita-Mali-president.jpg",
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
    borderColor: "border-green-500",
    bgColor: "bg-green-500/10",
    textColor: "text-green-500",
    glowColor: "rgba(34, 197, 94, 0.4)",
    flagColors: "from-red-500 to-green-500",
    description: "At 35, the youngest head of state in Africa. Capt. Traoré embodies the new generation of African leaders fighting for true independence. His commitment to the people of Burkina Faso has inspired youth across the continent to believe in Pan-African unity.",
    image: "/aes/Images-AES-Leaders/burkina-faso/Ibrahim_Traoré_-_2023_(cropped).png",
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
    borderColor: "border-orange-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-500",
    glowColor: "rgba(249, 115, 22, 0.4)",
    flagColors: "from-orange-500 via-white to-green-500",
    description: "Gen. Tiani has steered Niger away from decades of foreign dependency, securing the nation's uranium and gold for its people. His bold stance has positioned Niger as a key pillar of the Alliance of Sahel States.",
    image: "/aes/Images-AES-Leaders/Niger/Abdourahamane_Tchiani_in_2025_(cropped).jpg",
    emoji: "🇳🇪",
    quote: "Our resources belong to our children.",
  },
];

export function TooltipCard({ className }: TooltipCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { t } = useTranslation();

  // Navigation handlers
  const goToLeader = useCallback((index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
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
    <div className={cn("relative w-full", className)}>
      {/* Main Card Container */}
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

        {/* HEADER SECTION - Fixed */}
        <div className="relative z-20 px-4 md:px-8 pt-6 md:pt-8 pb-4 md:pb-6 bg-gradient-to-b from-white via-white to-white/95 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950/95 border-b border-neutral-200 dark:border-neutral-800">
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

          {/* Leader Tab Buttons */}
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap mb-4">
            {leadersData.map((leader, index) => (
              <motion.button
                key={leader.id}
                onClick={() => goToLeader(index)}
                className={cn(
                  "group relative px-4 md:px-5 py-2 md:py-2.5 rounded-xl transition-all duration-300",
                  "border-2",
                  index === activeIndex
                    ? `${leader.bgColor} ${leader.borderColor} shadow-lg`
                    : "bg-white/50 dark:bg-neutral-800/50 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{leader.emoji}</span>
                  <span className={cn(
                    "text-sm md:text-base font-bold transition-colors",
                    index === activeIndex ? leader.textColor : "text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300"
                  )}>
                    {leader.shortName}
                  </span>
                </div>
                {index === activeIndex && (
                  <motion.div
                    layoutId="leader-indicator"
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${leader.colorClass}`}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Navigation Controls - At Top */}
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <motion.button
              onClick={goPrev}
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold shadow-lg shadow-amber-500/30 transition-all duration-300 border-2 border-amber-400/50"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm">Previous</span>
            </motion.button>

            {/* Progress indicators */}
            <div className="flex items-center gap-3">
              {leadersData.map((leader, index) => (
                <button
                  key={leader.id}
                  onClick={() => goToLeader(index)}
                  className={cn(
                    "transition-all duration-300 rounded-full",
                    index === activeIndex
                      ? "w-10 h-3"
                      : "w-3 h-3 hover:scale-125"
                  )}
                  style={{
                    background: index === activeIndex
                      ? `linear-gradient(to right, ${leader.glowColor}, ${leader.glowColor})`
                      : "rgba(150, 150, 150, 0.4)"
                  }}
                />
              ))}
            </div>

            <motion.button
              onClick={goNext}
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold shadow-lg shadow-green-500/30 transition-all duration-300 border-2 border-green-400/50"
            >
              <span className="text-sm">Next</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* CONTENT AREA - Scrollable with visible scrollbar */}
        <div className="tooltip-card-scroll overflow-y-auto max-h-[500px] md:max-h-[550px] lg:max-h-[600px]">
          <div className="flex flex-col lg:flex-row min-h-[400px]">
            
            {/* Left Column - Leader Info */}
            <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-start relative z-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentLeader.id}
                  initial={{ opacity: 0, x: direction * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -30 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="space-y-6 md:space-y-8"
                >
                  {/* Country badge */}
                  <div className="flex items-center gap-3">
                    <span className="text-4xl md:text-5xl">{currentLeader.emoji}</span>
                    <div className={`px-5 py-2 rounded-full ${currentLeader.bgColor} border-2 ${currentLeader.borderColor}`}>
                      <span className={`text-base md:text-lg font-bold ${currentLeader.textColor} uppercase tracking-wider`}>
                        {currentLeader.country}
                      </span>
                    </div>
                  </div>

                  {/* Leader name */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-neutral-900 dark:text-white leading-tight">
                    {currentLeader.name}
                  </h3>

                  {/* Role */}
                  <p className={`text-xl md:text-2xl font-semibold bg-gradient-to-r ${currentLeader.colorClass} bg-clip-text text-transparent`}>
                    {currentLeader.role}
                  </p>

                  {/* Description - More space */}
                  <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {currentLeader.description}
                  </p>

                  {/* Quote - More prominent */}
                  <div className={`p-6 md:p-8 rounded-2xl ${currentLeader.bgColor} border-l-4 ${currentLeader.borderColor} bg-opacity-50`}>
                    <p className="text-lg md:text-xl italic text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      &ldquo;{currentLeader.quote}&rdquo;
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - Leader Image */}
            <div className="w-full lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 min-h-[350px] lg:min-h-[500px]">
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
                    className="relative w-full max-w-[320px] md:max-w-[380px] aspect-[3/4]"
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
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                        <p className="text-white font-bold text-xl md:text-2xl">{currentLeader.name}</p>
                        <p className={`${currentLeader.textColor} text-base font-semibold`}>{currentLeader.country}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER - Tagline Only */}
        <div className="relative z-20 px-4 md:px-8 py-4 md:py-5 bg-gradient-to-t from-white via-white to-white/95 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950/95 border-t border-neutral-200 dark:border-neutral-800">
          {/* Tagline */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-amber-600 via-green-600 to-red-600 bg-clip-text text-transparent">
              From Africa, For Africans
            </p>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
          </div>
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
        .tooltip-card-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(251, 191, 36, 0.6) rgba(0, 0, 0, 0.15);
        }

        .tooltip-card-scroll::-webkit-scrollbar {
          width: 10px;
        }

        .tooltip-card-scroll::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          margin: 4px;
        }

        .tooltip-card-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg,
            rgba(251, 191, 36, 0.7) 0%,
            rgba(34, 197, 94, 0.7) 50%,
            rgba(239, 68, 68, 0.7) 100%
          );
          border-radius: 5px;
          border: 2px solid rgba(0, 0, 0, 0.1);
        }

        .tooltip-card-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg,
            rgba(251, 191, 36, 0.9) 0%,
            rgba(34, 197, 94, 0.9) 50%,
            rgba(239, 68, 68, 0.9) 100%
          );
        }

        @media (prefers-color-scheme: dark) {
          .tooltip-card-scroll {
            scrollbar-color: rgba(251, 191, 36, 0.6) rgba(255, 255, 255, 0.1);
          }
          
          .tooltip-card-scroll::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
          }
        }
      `}</style>
    </div>
  );
}
