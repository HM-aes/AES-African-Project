"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface AESLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function AESLogo({ className = "", size = "md", showText = true }: AESLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizes = {
    sm: { width: 40, height: 40, text: "text-sm" },
    md: { width: 60, height: 60, text: "text-base" },
    lg: { width: 80, height: 80, text: "text-xl" },
  };

  const { width, height, text } = sizes[size];

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
        <div className="absolute inset-0 bg-amber-500/20 dark:bg-amber-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Logo image */}
        <Image
          src="/images/aes-logo-transparent.png"
          alt="AES Logo"
          width={width}
          height={height}
          className="relative z-10 object-contain"
          priority
        />
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
