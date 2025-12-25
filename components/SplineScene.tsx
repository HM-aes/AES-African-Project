"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface SplineSceneProps {
  scene?: string;
  className?: string;
}

/**
 * AES Logo Display Component
 * Beautiful animated logo with shadcn dark style
 * - Glassmorphism effects
 * - Subtle glow animations
 * - Clean black background
 */
export function SplineScene({ className = "" }: SplineSceneProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-black ${className}`}
      style={{ width: "100%", height: "100%", minHeight: "280px" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Logo container with glassmorphism */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow ring behind logo */}
          <motion.div
            className="absolute inset-0 -m-4 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 60%)",
              filter: "blur(20px)",
            }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo with hover effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 p-6 rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800"
          >
            <Image
              src="/images/aes-logo-dark.png"
              alt="Alliance of Sahel States"
              width={160}
              height={160}
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-4 left-0 right-0 text-center"
      >
        <p className="text-xs font-medium text-neutral-500 tracking-widest uppercase">
          Alliance of Sahel States
        </p>
      </motion.div>

      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-neutral-800 rounded-tl-lg" />
      <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-neutral-800 rounded-tr-lg" />
      <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-neutral-800 rounded-bl-lg" />
      <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-neutral-800 rounded-br-lg" />
    </div>
  );
}
