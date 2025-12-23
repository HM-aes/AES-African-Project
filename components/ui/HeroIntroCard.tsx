"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { AESLogo } from "./AESLogo";
import {
  Zap, Shield, Globe, Wheat, GraduationCap, ArrowRight
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroIntroCardProps {
  className?: string;
}

const leaders = [
  {
    name: "Col. Assimi Goïta",
    country: "Mali",
    flag: "🇲🇱",
    image: "/aes/Images-AES-Leaders/Mali/assimi-Goita-Mali-president.jpg",
    role: "President of Transition",
  },
  {
    name: "Capt. Ibrahim Traoré",
    country: "Burkina Faso",
    flag: "🇧🇫",
    image: "/aes/AES/ibrahim-traore.jpg",
    role: "President of Transition",
  },
  {
    name: "Gen. Abdourahamane Tiani",
    country: "Niger",
    flag: "🇳🇪",
    image: "/aes/Images-AES-Leaders/Niger/Abdourahamane_Tchiani_in_2025_(cropped).jpg",
    role: "President of CNSP",
  },
];

const pillars = [
  { label: "Technology & AI", icon: Zap },
  { label: "Military Defense", icon: Shield },
  { label: "Economy", icon: Globe },
  { label: "Agriculture", icon: Wheat },
  { label: "Education", icon: GraduationCap },
];

export function HeroIntroCard({ className }: HeroIntroCardProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate text content with stagger
      gsap.from(".hero-text-item", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });

      // Animate images
      gsap.from(".hero-leader-image", {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.5,
      });

      // Animate pillars
      gsap.from(".hero-pillar", {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.7)",
        delay: 1.0,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center pt-2 pb-12 md:pt-4 md:pb-16 overflow-hidden ${className}`}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-[#0a0a0c] dark:via-[#0f0f11] dark:to-[#0a0a0c]" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-200/10 dark:bg-amber-500/5 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neutral-300/10 dark:bg-neutral-700/5 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Main Content Grid - Split Layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content (3 columns) */}
          <div ref={textRef} className="lg:col-span-3 space-y-8">
            {/* Main Header */}
            <motion.div className="space-y-4 hero-text-item">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight text-neutral-900 dark:text-[#e8e8ec]">
                Alliance of Sahel States
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-neutral-700 dark:text-[#c0c0c8] leading-relaxed">
                Africa&apos;s Blueprint for Sovereignty, Unity & Progress
              </p>
            </motion.div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 hero-text-item">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 dark:bg-zinc-950 border border-zinc-800">
                <span className="text-sm font-bold text-white">
                  Est. September 2023
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 dark:bg-zinc-950 border border-zinc-800">
                <span className="text-sm font-bold text-white">
                  Pan-African Alliance
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 dark:bg-zinc-950 border border-zinc-800">
                <span className="text-sm font-bold text-white">
                  Sovereignty First
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6 hero-text-item">
              <div className="flex items-center gap-2">
                <div className="h-[2px] w-12 bg-amber-500 dark:bg-amber-600 rounded-full" />
                <span className="text-xs uppercase tracking-widest font-bold text-neutral-600 dark:text-[#c0c0c8]">
                  Who We Are
                </span>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-[#c0c0c8]">
                The <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]">Alliance of Sahel States (AES)</span> is a
                groundbreaking confederation uniting{" "}
                <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]">Mali</span>,{" "}
                <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]">Burkina Faso</span>, and{" "}
                <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]">Niger</span>—three
                nations that chose sovereignty over dependency, unity over division, and
                African solutions over foreign intervention.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-neutral-600 dark:text-[#8a8a94]">
                Born from a shared vision to end decades of exploitation, our leaders—military officers
                who rose from the people—are rewriting Africa&apos;s future. We have withdrawn from
                ECOWAS, expelled foreign military bases, and are building an economy that serves
                Africans first.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="space-y-4 hero-text-item">
              <p className="text-xs uppercase tracking-widest font-bold text-neutral-500 dark:text-[#8a8a94]">
                Strategic Pillars
              </p>
              <div className="flex flex-wrap gap-3">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="hero-pillar flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 cursor-default hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-md transition-all duration-300"
                  >
                    <pillar.icon className="w-4 h-4 text-neutral-700 dark:text-[#c0c0c8]" />
                    <span className="text-sm font-semibold text-neutral-700 dark:text-[#c0c0c8]">
                      {pillar.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 hero-text-item">
              <motion.a
                href="/aes"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-700 dark:border-neutral-600 text-white dark:text-[#e8e8ec] font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Explore Our Journey</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Right Column - Leader Images (2 columns) */}
          <div ref={imagesRef} className="lg:col-span-2 relative">
            <div className="grid grid-cols-2 gap-6">
              {/* First leader - Featured (spans 2 rows) */}
              <div className="col-span-2 hero-leader-image">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-br from-amber-400/20 to-neutral-400/20 dark:from-amber-500/20 dark:to-neutral-700/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative overflow-hidden rounded-2xl border-2 border-neutral-300 dark:border-neutral-700 shadow-2xl">
                    <Image
                      src={leaders[0].image}
                      alt={leaders[0].name}
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover aspect-square"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-3xl">{leaders[0].flag}</span>
                        <span className="text-sm font-bold text-white uppercase tracking-wider">
                          {leaders[0].country}
                        </span>
                      </div>
                      <p className="text-lg font-bold text-white">{leaders[0].name}</p>
                      <p className="text-sm text-neutral-300">{leaders[0].role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Second and third leaders */}
              {leaders.slice(1).map((leader, index) => (
                <div key={leader.name} className="hero-leader-image">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/20 to-neutral-400/20 dark:from-amber-500/20 dark:to-neutral-700/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative overflow-hidden rounded-xl border-2 border-neutral-300 dark:border-neutral-700 shadow-xl">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover aspect-square"
                        priority
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-xl">{leader.flag}</span>
                          <span className="text-xs font-bold text-white uppercase tracking-wide">
                            {leader.country}
                          </span>
                        </div>
                        <p className="text-sm font-bold text-white">{leader.name}</p>
                        <p className="text-xs text-neutral-300">{leader.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* AES Confederation Badge */}
            <div className="mt-8 flex justify-center hero-leader-image">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-neutral-500/10 dark:from-amber-500/20 dark:to-neutral-700/20 border-2 border-amber-400/50 dark:border-amber-500/50 backdrop-blur-sm">
                <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span className="text-sm font-bold text-neutral-900 dark:text-[#e8e8ec] uppercase tracking-wider">
                  United for Africa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-neutral-400 dark:border-neutral-600 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 dark:bg-neutral-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}
