"use client";

import { motion } from "framer-motion";
import { HeroText } from "@/components/HeroText";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n";

export function Hero() {
  const { t } = useTranslation();
  
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
          className="w-full max-w-7xl"
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
        {/* Header ABOVE the image - Premium 3D Design */}
        <div className="text-center mb-8">
          {/* The Visionary Leaders - 3D Header with hover effects */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-[0.2em] mb-4
            text-stone-900 dark:text-white
            cursor-default relative inline-block"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0,0,0,0.1)',
            }}
            whileHover={{ 
              scale: 1.05,
              rotateX: 5,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <span className="relative z-10">
              {t("hero.visionaryLeaders")}
            </span>
            {/* Glow effect on hover */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-stone-400/0 via-stone-400/20 to-stone-400/0 dark:from-white/0 dark:via-white/20 dark:to-white/0 blur-2xl -z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.h2>
          
          {/* Leader Names - Premium 3D styling with individual hover effects */}
          <div 
            className="text-xl md:text-2xl lg:text-3xl font-bold flex items-center justify-center flex-wrap gap-2"
            style={{ perspective: '1000px' }}
          >
            <motion.span 
              className="text-amber-400 hover:text-amber-300 cursor-default px-3 py-1 rounded-lg
              bg-gradient-to-br from-amber-500/10 to-transparent
              border border-amber-500/20 hover:border-amber-400/40
              shadow-[0_4px_20px_rgba(251,191,36,0.2)] hover:shadow-[0_8px_30px_rgba(251,191,36,0.4)]"
              style={{
                textShadow: '0 2px 10px rgba(251, 191, 36, 0.5), 0 0 40px rgba(251, 191, 36, 0.3)',
              }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: -10,
                z: 50,
                transition: { duration: 0.3 }
              }}
            >
              {t("hero.leaderGoita")}
            </motion.span>
            
            <span className="text-amber-500/60 text-3xl font-light">•</span>
            
            <motion.span 
              className="text-green-400 hover:text-green-300 cursor-default px-3 py-1 rounded-lg
              bg-gradient-to-br from-green-500/10 to-transparent
              border border-green-500/20 hover:border-green-400/40
              shadow-[0_4px_20px_rgba(34,197,94,0.2)] hover:shadow-[0_8px_30px_rgba(34,197,94,0.4)]"
              style={{
                textShadow: '0 2px 10px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.3)',
              }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 0,
                z: 50,
                transition: { duration: 0.3 }
              }}
            >
              {t("hero.leaderTraore")}
            </motion.span>
            
            <span className="text-amber-500/60 text-3xl font-light">•</span>
            
            <motion.span 
              className="text-red-400 hover:text-red-300 cursor-default px-3 py-1 rounded-lg
              bg-gradient-to-br from-red-500/10 to-transparent
              border border-red-500/20 hover:border-red-400/40
              shadow-[0_4px_20px_rgba(239,68,68,0.2)] hover:shadow-[0_8px_30px_rgba(239,68,68,0.4)]"
              style={{
                textShadow: '0 2px 10px rgba(239, 68, 68, 0.5), 0 0 40px rgba(239, 68, 68, 0.3)',
              }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 10,
                z: 50,
                transition: { duration: 0.3 }
              }}
            >
              {t("hero.leaderTiani")}
            </motion.span>
          </div>
          
          {/* Flags with amazing 3D hover effects */}
          <div className="flex justify-center gap-6 mt-6" style={{ perspective: '1000px' }}>
            {/* Mali Flag */}
            <motion.div 
              className="relative w-12 h-8 md:w-16 md:h-10 rounded-md overflow-hidden cursor-pointer
              shadow-[0_4px_15px_rgba(0,0,0,0.3),0_0_30px_rgba(251,191,36,0.2)]"
              whileHover={{ 
                scale: 1.3, 
                rotateY: 15,
                rotateX: 10,
                z: 100,
                boxShadow: '0 20px 40px rgba(251,191,36,0.4), 0 0 60px rgba(251,191,36,0.3)',
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              title="Mali 🇲🇱"
            >
              <div className="absolute inset-0 flex">
                <div className="w-1/3 h-full bg-green-500" />
                <div className="w-1/3 h-full bg-yellow-400" />
                <div className="w-1/3 h-full bg-red-500" />
              </div>
              {/* Shine effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0"
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '100%', opacity: 1, transition: { duration: 0.5 } }}
              />
              {/* Border glow */}
              <div className="absolute inset-0 rounded-md ring-2 ring-amber-400/0 hover:ring-amber-400/50 transition-all duration-300" />
            </motion.div>
            
            {/* Niger Flag */}
            <motion.div 
              className="relative w-12 h-8 md:w-16 md:h-10 rounded-md overflow-hidden cursor-pointer
              shadow-[0_4px_15px_rgba(0,0,0,0.3),0_0_30px_rgba(249,115,22,0.2)]"
              whileHover={{ 
                scale: 1.3, 
                rotateY: 0,
                rotateX: 15,
                z: 100,
                boxShadow: '0 20px 40px rgba(249,115,22,0.4), 0 0 60px rgba(249,115,22,0.3)',
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              title="Niger 🇳🇪"
            >
              <div className="absolute inset-0 flex flex-col">
                <div className="h-1/3 w-full bg-orange-500" />
                <div className="h-1/3 w-full bg-white flex items-center justify-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-orange-500" />
                </div>
                <div className="h-1/3 w-full bg-green-500" />
              </div>
              {/* Shine effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0"
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '100%', opacity: 1, transition: { duration: 0.5 } }}
              />
            </motion.div>
            
            {/* Burkina Faso Flag */}
            <motion.div 
              className="relative w-12 h-8 md:w-16 md:h-10 rounded-md overflow-hidden cursor-pointer
              shadow-[0_4px_15px_rgba(0,0,0,0.3),0_0_30px_rgba(239,68,68,0.2)]"
              whileHover={{ 
                scale: 1.3, 
                rotateY: -15,
                rotateX: 10,
                z: 100,
                boxShadow: '0 20px 40px rgba(239,68,68,0.4), 0 0 60px rgba(22,163,74,0.3)',
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              title="Burkina Faso 🇧🇫"
            >
              <div className="absolute inset-0 flex flex-col">
                <div className="h-1/2 w-full bg-red-500" />
                <div className="h-1/2 w-full bg-green-600" />
              </div>
              {/* Center star */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-yellow-400 text-sm md:text-base" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>★</span>
              </div>
              {/* Shine effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0"
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '100%', opacity: 1, transition: { duration: 0.5 } }}
              />
            </motion.div>
          </div>
        </div>
        
        <div className="relative group">
          {/* Glow effect behind image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-green-500/20 to-red-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Border glow */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-500/50 via-green-500/50 to-red-500/50 rounded-2xl opacity-60 dark:opacity-40" />
          
          {/* Image container */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 z-10 pointer-events-none" />
            
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
