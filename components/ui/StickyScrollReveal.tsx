"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StickyScrollRevealProps {
  className?: string;
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
    glowColor: "rgba(251, 191, 36, 0.3)",
    description: "Leading Mali's sovereignty movement since 2021, Col. Goïta has expelled foreign military bases and forged new partnerships built on mutual respect. Under his leadership, Mali has reclaimed control of its gold mines and natural resources.",
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
    glowColor: "rgba(34, 197, 94, 0.3)",
    description: "At 35, the youngest head of state in Africa. Capt. Traoré embodies the new generation of African leaders fighting for true independence. His Pan-Africanist vision has inspired millions across the continent.",
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
    glowColor: "rgba(239, 68, 68, 0.3)",
    description: "Gen. Tiani has steered Niger away from decades of foreign dependency, securing the nation's uranium and gold for its people. His leadership ensures Niger's resources benefit Nigeriens first.",
    image: "/aes/Images-AES-Leaders/Niger/Abdourahamane_Tchiani_in_2025_(cropped).jpg",
    flag: ["bg-orange-500", "bg-white", "bg-green-500"],
    flagVertical: true,
    flagCircle: true,
    quote: "Our resources belong to our children.",
  },
];

export function StickyScrollReveal({ className }: StickyScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
    <div
      ref={containerRef}
      className={cn(
        "relative w-full",
        className
      )}
    >
      {/* Main Card Container */}
      <div
        className={cn(
          "relative rounded-3xl overflow-hidden",
          "bg-gradient-to-br from-stone-50 via-white to-amber-50/30",
          "dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900",
          // Beautiful black edges
          "border-[3px] border-neutral-900 dark:border-neutral-700",
          "shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_25px_80px_-20px_rgba(0,0,0,0.4)]",
          "dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_80px_-20px_rgba(0,0,0,0.6)]",
        )}
      >
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-green-500 to-red-500 z-30" />

        {/* Header Section - Inside the card */}
        <div className="relative px-6 md:px-10 pt-8 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Title */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-[3px] w-10 bg-gradient-to-r from-amber-500 to-green-500 rounded-full" />
                <span className="text-xs text-amber-600 dark:text-amber-400 uppercase tracking-[0.2em] font-bold">
                  AES Alliance
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wider text-neutral-900 dark:text-white">
                The Visionary Leaders
              </h2>
            </div>

            {/* Country Navigation Flags */}
            <div className="flex items-center gap-3">
              {leadersData.map((leader, index) => (
                <button
                  key={leader.id}
                  onClick={() => goToLeader(index)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300",
                    "border-2",
                    index === activeIndex
                      ? `${leader.bgColor} ${leader.borderColor} shadow-lg scale-105`
                      : "bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 hover:scale-102"
                  )}
                >
                  {/* Mini flag */}
                  <div className={`w-6 h-4 rounded-sm overflow-hidden flex ${leader.flagVertical ? 'flex-col' : 'flex-row'} shadow-sm`}>
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
                    "text-xs font-bold uppercase tracking-wider hidden sm:inline",
                    index === activeIndex ? leader.textColor : "text-neutral-500 dark:text-neutral-400"
                  )}>
                    {leader.countryCode}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative">
          {/* Leader Content - Two column layout */}
          <div className="flex flex-col lg:flex-row min-h-[500px] md:min-h-[550px]">
            {/* Left Column - Leader Info */}
            <div className="w-full lg:w-[55%] p-6 md:p-10 flex flex-col justify-center relative overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentLeader.id}
                  initial={{ opacity: 0, x: direction * 60, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction * -60, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="space-y-5"
                >
                  {/* Country badge with large flag */}
                  <div className="flex items-center gap-4">
                    {/* Large flag */}
                    <div className={`w-16 h-10 md:w-20 md:h-12 rounded-lg overflow-hidden flex ${currentLeader.flagVertical ? 'flex-col' : 'flex-row'} shadow-lg border-2 ${currentLeader.borderColor}`}>
                      {currentLeader.flag.map((color, i) => (
                        <div key={i} className={`${currentLeader.flagVertical ? 'w-full h-1/3' : 'h-full w-1/3'} ${color} relative`}>
                          {currentLeader.flagStar && i === 0 && (
                            <div className="absolute inset-0 flex items-end justify-center">
                              <span className="text-yellow-400 text-base md:text-lg leading-none drop-shadow-md">★</span>
                            </div>
                          )}
                          {currentLeader.flagCircle && i === 1 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-orange-500 shadow-sm" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className={`px-4 py-2 rounded-full ${currentLeader.bgColor} border ${currentLeader.borderColor}`}>
                      <span className={`text-sm font-bold ${currentLeader.textColor} uppercase tracking-wider`}>
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
                  <div className={`mt-4 p-4 rounded-xl ${currentLeader.bgColor} border-l-4 ${currentLeader.borderColor}`}>
                    <p className="text-base md:text-lg italic text-neutral-700 dark:text-neutral-300">
                      &ldquo;{currentLeader.quote}&rdquo;
                    </p>
                  </div>

                  {/* Tagline */}
                  <div className="pt-4">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-amber-600 via-green-600 to-red-600 bg-clip-text text-transparent">
                      From Africa, For Africans
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - Leader Image */}
            <div className="w-full lg:w-[45%] relative overflow-hidden bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800">
              {/* Colored background glow */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: `radial-gradient(circle at 50% 50%, ${currentLeader.glowColor}, transparent 70%)`,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Image container */}
              <div className="relative h-full min-h-[350px] lg:min-h-full flex items-center justify-center p-6 md:p-10">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentLeader.id}
                    initial={{ opacity: 0, scale: 0.85, rotateY: direction * 20 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.85, rotateY: direction * -20 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative w-full max-w-[320px] md:max-w-[380px] aspect-[3/4]"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Glow ring */}
                    <div className={`absolute -inset-3 bg-gradient-to-r ${currentLeader.colorClass} rounded-2xl blur-xl opacity-40`} />

                    {/* Image */}
                    <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 ${currentLeader.borderColor} bg-neutral-200 dark:bg-neutral-700`}>
                      <Image
                        src={currentLeader.image}
                        alt={currentLeader.name}
                        fill
                        className="object-cover object-top"
                        priority
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Name overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                        <p className="text-white font-bold text-xl md:text-2xl">{currentLeader.name}</p>
                        <p className={`${currentLeader.textColor} text-sm md:text-base font-semibold`}>{currentLeader.country}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="px-6 md:px-10 py-5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="flex items-center justify-between">
              {/* Previous button */}
              <button
                onClick={goPrev}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all group shadow-sm hover:shadow-md"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors" />
                <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
                  Previous
                </span>
              </button>

              {/* Progress indicator */}
              <div className="flex items-center gap-3">
                {leadersData.map((leader, index) => (
                  <button
                    key={leader.id}
                    onClick={() => goToLeader(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      index === activeIndex
                        ? `w-10 bg-gradient-to-r ${leader.colorClass}`
                        : "w-2 bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500"
                    )}
                  />
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={goNext}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all group shadow-sm hover:shadow-md"
              >
                <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
                  Next
                </span>
                <ChevronRight className="w-5 h-5 text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 via-green-500 to-amber-500 z-30" />

        {/* Corner accents */}
        <div className="absolute top-1.5 left-0 w-20 h-20 border-l-[3px] border-amber-500/60 pointer-events-none z-30" />
        <div className="absolute top-1.5 right-0 w-20 h-20 border-r-[3px] border-red-500/60 pointer-events-none z-30" />
        <div className="absolute bottom-1.5 left-0 w-20 h-20 border-l-[3px] border-green-500/60 pointer-events-none z-30" />
        <div className="absolute bottom-1.5 right-0 w-20 h-20 border-r-[3px] border-amber-500/60 pointer-events-none z-30" />
      </div>
    </div>
  );
}
