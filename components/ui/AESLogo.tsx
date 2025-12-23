"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface AESLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "default" | "hero";
}

export function AESLogo({ 
  className = "", 
  size = "md", 
  showText = true,
  variant = "default"
}: AESLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizes = {
    sm: { width: 50, height: 50, text: "text-sm" },
    md: { width: 70, height: 70, text: "text-base" },
    lg: { width: 100, height: 100, text: "text-lg" },
    xl: { width: 140, height: 140, text: "text-2xl" },
  };

  const { width, height, text } = sizes[size];

  // Hero variant - more dramatic
  if (variant === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex flex-col items-center gap-4 ${className}`}
      >
        {/* Logo with dramatic glow */}
        <motion.div
          animate={{
            y: isHovered ? -8 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative group"
        >
          {/* Multiple glow layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-amber-500/30 to-red-500/30 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
          <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Logo container with border */}
          <div className="relative p-3 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 backdrop-blur-sm border-2 border-amber-500/40 group-hover:border-green-500/60 transition-all duration-300 shadow-2xl">
            <Image
              src="/images/aes-logo-redesign.png"
              alt="AES Alliance Logo"
              width={width}
              height={height}
              className="relative z-10 object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {showText && (
          <motion.div
            animate={{
              y: isHovered ? -4 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center gap-1"
          >
            <h3 className={`font-bold font-heading bg-gradient-to-r from-green-400 via-amber-400 to-red-400 bg-clip-text text-transparent ${text} tracking-tight`}>
              Alliance of Sahel States
            </h3>
            <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
              Unity • Sovereignty • Progress
            </p>
          </motion.div>
        )}
      </motion.div>
    );
  }

  // Default variant - compact
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center gap-3 ${className}`}
    >
      <motion.div
        animate={{
          y: isHovered ? -2 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-green-500/20 to-amber-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Logo image with border */}
        <div className="relative p-1.5 rounded-xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-amber-500/30">
          <Image
            src="/images/aes-logo-redesign.png"
            alt="AES Logo"
            width={width}
            height={height}
            className="relative z-10 object-contain"
            priority
          />
        </div>
      </motion.div>

      {showText && (
        <motion.div
          animate={{
            y: isHovered ? -2 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-col"
        >
          <span className={`font-bold font-heading text-neutral-900 dark:text-[#e8e8ec] ${text}`}>
            AES
          </span>
          <span className="text-xs text-neutral-600 dark:text-[#8a8a94] -mt-1">
            Alliance of Sahel States
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}
