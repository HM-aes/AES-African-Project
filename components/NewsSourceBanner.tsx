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
    <div className="relative w-full bg-zinc-950 border-b border-zinc-900 py-3 md:py-4 overflow-hidden">
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          {/* Label */}
          <div className="flex-shrink-0">
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-white">
              Our News Sources
            </p>
          </div>

          {/* Divider - hidden on mobile */}
          <div className="hidden md:block h-6 w-px bg-zinc-800" />

          {/* News Sources - Infinite Scroll Container */}
          <div className="flex-1 w-full overflow-hidden relative">
            {/* Fade edges for smooth infinite effect */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-100 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-100 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
            
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
                  <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 group-hover:border-blue-400 dark:group-hover:border-blue-600 transition-all duration-300 shadow-sm group-hover:shadow-md">
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
