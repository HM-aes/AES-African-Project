"use client";

import { motion } from "framer-motion";
import { HeroText } from "@/components/HeroText";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-gradient-to-br from-secondary via-background to-accent dark:from-[#0a0a0a] dark:via-[#0a0a0a] dark:to-[#0a0a0a] pt-40">
      {/* Dot Grid Pattern - Rich espresso dots */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(61,46,31,0.25) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Dark mode specific dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle, #1a1a1a 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Rich gradient mesh for depth - deep amber/cappuccino */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300/30 via-amber-200/20 to-green-200/25 dark:from-slate-900/20 dark:via-transparent dark:to-purple-900/10" />

      {/* Ambient glow effect - warm cappuccino glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 opacity-40 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/50 via-amber-400/30 to-transparent dark:from-blue-500/30 dark:via-purple-500/20 blur-3xl" />
      </div>

      {/* Left side warm glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] opacity-25 dark:opacity-0">
        <div className="absolute inset-0 bg-gradient-radial from-amber-600/40 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Subtle vignette with deep amber tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-200/40 via-transparent to-amber-100/20 dark:from-black/40 dark:via-transparent dark:to-black/20" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-center py-8">
        {/* Centered Text Content */}
        <motion.div 
          className="w-full max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroText />
        </motion.div>
      </div>

      {/* Leaders Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 mt-8 mb-12"
      >
        <div className="relative group">
          {/* Glow effect behind image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-green-500/20 to-red-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Border glow */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-500/50 via-green-500/50 to-red-500/50 rounded-2xl opacity-60 dark:opacity-40" />
          
          {/* Image container */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Top gradient overlay for text legibility if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10 pointer-events-none" />
            
            {/* Bottom label - Enhanced with 3D effects and hover animations */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="group cursor-default">
                  {/* The Visionary Leaders - 3D Header */}
                  <p 
                    className="text-sm md:text-base lg:text-lg text-amber-400 uppercase tracking-[0.25em] mb-2 font-bold
                    drop-shadow-[0_2px_4px_rgba(251,191,36,0.3)]
                    group-hover:drop-shadow-[0_4px_12px_rgba(251,191,36,0.5)]
                    group-hover:text-amber-300
                    transition-all duration-300"
                    style={{
                      textShadow: '0 2px 8px rgba(251, 191, 36, 0.4), 0 1px 0 rgba(0,0,0,0.8)',
                    }}
                  >
                    The Visionary Leaders
                  </p>
                  
                  {/* Leader Names - Premium 3D styling */}
                  <p 
                    className="text-lg md:text-xl lg:text-2xl font-bold
                    bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent
                    drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]
                    group-hover:from-amber-200 group-hover:via-white group-hover:to-amber-200
                    transition-all duration-500"
                    style={{
                      textShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
                    }}
                  >
                    <span className="hover:text-amber-400 transition-colors duration-200">Col. Goïta</span>
                    <span className="mx-3 text-amber-500/60">•</span>
                    <span className="hover:text-green-400 transition-colors duration-200">Capt. Traoré</span>
                    <span className="mx-3 text-amber-500/60">•</span>
                    <span className="hover:text-red-400 transition-colors duration-200">Gen. Tiani</span>
                  </p>
                </div>
                
                {/* Flag indicators with hover effects */}
                <div className="flex gap-3">
                  <div 
                    className="w-8 h-5 rounded-sm bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 
                    shadow-lg hover:shadow-amber-500/30 hover:scale-110 transition-all duration-300 cursor-pointer" 
                    title="Mali" 
                  />
                  <div 
                    className="w-8 h-5 rounded-sm bg-gradient-to-r from-orange-500 via-white to-green-500 
                    shadow-lg hover:shadow-green-500/30 hover:scale-110 transition-all duration-300 cursor-pointer" 
                    title="Niger" 
                  />
                  <div 
                    className="w-8 h-5 rounded-sm bg-gradient-to-b from-red-500 via-white to-green-600 
                    shadow-lg hover:shadow-red-500/30 hover:scale-110 transition-all duration-300 cursor-pointer" 
                    title="Burkina Faso" 
                  />
                </div>
              </div>
            </div>
            
            {/* The leaders image */}
            <Image
              src="/images/aes-leaders-banner.png"
              alt="AES Leaders - Colonel Assimi Goïta of Mali, Captain Ibrahim Traoré of Burkina Faso, and General Abdourahamane Tiani of Niger"
              width={1200}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
