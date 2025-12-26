"use client";

import { motion } from "framer-motion";

// Sample headlines - in production these would come from an API/CMS
const headlines = [
  { country: "Mali", flag: "🇲🇱", text: "FAMA forces reclaim northern territory in successful operation", color: "text-amber-400" },
  { country: "Burkina Faso", flag: "🇧🇫", text: "Captain Traoré launches new agricultural initiative for food sovereignty", color: "text-green-400" },
  { country: "Niger", flag: "🇳🇪", text: "Niger signs historic mining agreement securing national resources", color: "text-orange-400" },
  { country: "AES", flag: "⭐", text: "AES Confederation announces joint military exercises for regional security", color: "text-amber-300" },
  { country: "Mali", flag: "🇲🇱", text: "New university hospital opens in Bamako with state-of-the-art facilities", color: "text-amber-400" },
  { country: "Burkina Faso", flag: "🇧🇫", text: "Burkina Faso reports record gold production under new management", color: "text-green-400" },
  { country: "Niger", flag: "🇳🇪", text: "Niamey-Bamako highway construction reaches major milestone", color: "text-orange-400" },
  { country: "AES", flag: "⭐", text: "Russia-AES partnership expands with new defense cooperation agreement", color: "text-amber-300" },
];

export function NewsTicker() {
  // Double the headlines for seamless loop
  const doubledHeadlines = [...headlines, ...headlines];

  return (
    <div className="relative w-full overflow-hidden bg-neutral-900/20 dark:bg-neutral-900/30 backdrop-blur-xl border-y border-white/10 dark:border-white/5">
      {/* Glassmorphism glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 dark:from-white/5 dark:via-white/10 dark:to-white/5" />
      
      {/* Left fade with glass effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-900/60 via-neutral-900/30 to-transparent dark:from-black/60 dark:via-black/30 z-10 pointer-events-none backdrop-blur-sm" />
      
      {/* Right fade with glass effect */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-900/60 via-neutral-900/30 to-transparent dark:from-black/60 dark:via-black/30 z-10 pointer-events-none backdrop-blur-sm" />

      {/* Breaking News label with glass effect */}
      <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center">
        <div className="bg-gradient-to-r from-red-600/80 to-red-500/80 backdrop-blur-md px-4 py-2 flex items-center gap-2 shadow-lg border-r border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="text-white text-xs font-bold uppercase tracking-wider drop-shadow-lg">Live</span>
        </div>
      </div>

      {/* Scrolling headlines */}
      <div className="group py-3 pl-24">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: [0, -50 * headlines.length + "%"],
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{ willChange: "transform" }}
        >
          {doubledHeadlines.map((headline, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 group/item cursor-default"
            >
              {/* Flag */}
              <span className="text-lg">{headline.flag}</span>
              
              {/* Country tag */}
              <span className={`text-xs font-bold uppercase tracking-wider ${headline.color} opacity-80`}>
                {headline.country}
              </span>
              
              {/* Separator */}
              <span className="text-amber-600/40">|</span>
              
              {/* Headline text */}
              <span className="text-sm text-white/90 dark:text-white/95 group-hover/item:text-white font-medium transition-colors duration-200 drop-shadow-sm">
                {headline.text}
              </span>
              
              {/* Dot separator between headlines */}
              <span className="text-amber-400/70 ml-4">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Glass shimmer effect - top glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Glass shimmer effect - bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
    </div>
  );
}
