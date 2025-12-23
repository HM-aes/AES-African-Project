"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const newsSources = [
  {
    name: "Faso7",
    logo: "/news-sources/faso7-logo.png",
    description: "Burkina Faso News (YouTube & Online)",
  },
  {
    name: "ORTM",
    logo: "/news-sources/ortm-logo.png",
    description: "Mali National Television",
  },
  {
    name: "Le Sahel",
    logo: "/news-sources/le-sahel-logo.png",
    description: "Niger News",
  },
  {
    name: "AFO Média",
    logo: "/news-sources/afo-media-logo.png",
    description: "Alain Foka",
  },
  {
    name: "Décrypter l'Afrique",
    logo: "/news-sources/decrypter-afrique-logo.png",
    description: "YouTube Analysis",
  },
];

export function NewsSourceBanner() {
  return (
    <div className="relative w-full bg-neutral-900/20 dark:bg-neutral-900/30 backdrop-blur-xl border-y border-white/10 dark:border-white/5 py-3 md:py-4 overflow-hidden">
      {/* Glassmorphism glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 dark:from-white/5 dark:via-white/10 dark:to-white/5" />
      
      {/* Glass shimmer effect - top glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Glass shimmer effect - bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          {/* Label */}
          <div className="flex-shrink-0">
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-white drop-shadow-lg">
              Our News Sources
            </p>
          </div>

          {/* Divider - hidden on mobile */}
          <div className="hidden md:block h-6 w-px bg-white/20" />

          {/* News Sources - Infinite Scroll Container */}
          <div className="flex-1 w-full overflow-hidden relative">
            {/* Fade edges for smooth infinite effect - enhanced for glass */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-900/60 via-neutral-900/30 to-transparent dark:from-black/60 dark:via-black/30 z-10 pointer-events-none backdrop-blur-sm" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-900/60 via-neutral-900/30 to-transparent dark:from-black/60 dark:via-black/30 z-10 pointer-events-none backdrop-blur-sm" />
            
            <motion.div
              className="flex items-center gap-4 md:gap-6"
              animate={{
                x: [0, -1500],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Render sources 4 times for seamless infinite loop */}
              {[...newsSources, ...newsSources, ...newsSources, ...newsSources].map((source, index) => (
                <motion.div
                  key={`${source.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-lg bg-white/90 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 group-hover:border-blue-400 dark:group-hover:border-blue-600 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    {/* Logo */}
                    <div className="relative w-6 h-6 md:w-8 md:h-8 flex-shrink-0">
                      <Image
                        src={source.logo}
                        alt={`${source.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    {/* Name */}
                    <div className="flex flex-col">
                      <span className="text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                        {source.name}
                      </span>
                      <span className="text-[10px] md:text-xs text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {source.description}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
