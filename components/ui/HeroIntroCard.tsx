"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import {
  Zap, Shield, Globe, Wheat, GraduationCap, ArrowRight
} from "lucide-react";

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
      // Create a master timeline for smooth, sequenced animations
      // Navbar finishes around 1.4s, so hero starts at 1.5s
      const masterTimeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        }
      });

      // Phase 1: Main Title (starts after navbar settles)
      masterTimeline.from(".hero-title", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power4.out",
      }, 1.5);

      // Phase 2: Subtitle (follows title smoothly)
      masterTimeline.from(".hero-subtitle", {
        opacity: 0,
        y: 40,
        duration: 1.0,
        ease: "power3.out",
      }, 2.0);

      // Phase 3: Badges (gentle fade in)
      masterTimeline.from(".hero-badge", {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      }, 2.4);

      // Phase 4: Images (elegant scale and fade with longer duration)
      masterTimeline.from(".hero-leader-image", {
        opacity: 0,
        scale: 0.9,
        y: 30,
        duration: 1.4,
        stagger: 0.25,
        ease: "power3.out",
      }, 2.6);

      // Phase 5: Content section header (decorative line + label)
      masterTimeline.from(".hero-content-header", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power2.out",
      }, 3.2);

      // Phase 6: Main description paragraphs
      masterTimeline.from(".hero-description", {
        opacity: 0,
        y: 30,
        duration: 1.0,
        stagger: 0.2,
        ease: "power2.out",
      }, 3.4);

      // Phase 7: Strategic pillars label
      masterTimeline.from(".hero-pillars-label", {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: "power2.out",
      }, 3.8);

      // Phase 8: Pillars (elegant stagger with subtle bounce)
      masterTimeline.from(".hero-pillar", {
        opacity: 0,
        scale: 0.85,
        y: 20,
        duration: 0.7,
        stagger: 0.12,
        ease: "back.out(1.4)",
      }, 4.0);

      // Phase 9: CTA Button (final reveal)
      masterTimeline.from(".hero-cta", {
        opacity: 0,
        y: 25,
        duration: 0.9,
        ease: "power3.out",
      }, 4.4);

      // Phase 10: AES Badge (below images)
      masterTimeline.from(".hero-aes-badge", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.out",
      }, 4.2);

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
            <div className="space-y-4">
              <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight text-neutral-900 dark:text-[#e8e8ec]">
                Alliance of Sahel States
              </h1>
              <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl font-medium text-neutral-700 dark:text-[#c0c0c8] leading-relaxed">
                Africa&apos;s Blueprint for Sovereignty, Unity & Progress
              </p>
            </div>

            {/* Badges - shadcn style: dark in both modes */}
            <div className="flex flex-wrap gap-3">
              <div className="hero-badge flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 shadow-sm">
                <span className="text-sm font-bold text-white">
                  Est. September 2023
                </span>
              </div>
              <div className="hero-badge flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 shadow-sm">
                <span className="text-sm font-bold text-white">
                  Pan-African Alliance
                </span>
              </div>
              <div className="hero-badge flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 shadow-sm">
                <span className="text-sm font-bold text-white">
                  Sovereignty First
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <div className="hero-content-header flex items-center gap-2">
                <div className="h-[2px] w-12 bg-amber-500 dark:bg-amber-600 rounded-full" />
                <span className="text-xs uppercase tracking-widest font-bold text-neutral-600 dark:text-[#c0c0c8]">
                  Who We Are
                </span>
              </div>

              <p className="hero-description text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-[#c0c0c8]">
                The <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]">Alliance of Sahel States (AES)</span> is a
                groundbreaking confederation uniting{" "}
                <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]">Mali</span>,{" "}
                <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]">Burkina Faso</span>, and{" "}
                <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]">Niger</span>—three
                nations that chose sovereignty over dependency, unity over division, and
                African solutions over foreign intervention.
              </p>

              <p className="hero-description text-base md:text-lg leading-relaxed text-neutral-600 dark:text-[#8a8a94]">
                Born from a shared vision to end decades of exploitation, our leaders—military officers
                who rose from the people—are rewriting Africa&apos;s future. We have withdrawn from
                ECOWAS, expelled foreign military bases, and are building an economy that serves
                Africans first.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="space-y-4">
              <p className="hero-pillars-label text-xs uppercase tracking-widest font-bold text-neutral-500 dark:text-[#8a8a94]">
                Strategic Pillars
              </p>
              <div className="flex flex-wrap gap-3">
                {pillars.map((pillar) => (
                  <motion.div
                    key={pillar.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
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
            <div className="hero-cta pt-4">
              <motion.a
                href="/aes"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
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
            <div className="hero-aes-badge mt-8 flex justify-center">
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5.0, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2.0,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
            repeatDelay: 0.5
          }}
          className="w-6 h-10 rounded-full border-2 border-neutral-400 dark:border-neutral-600 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-neutral-600 dark:bg-neutral-400"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
