"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplineScene } from "@/components/SplineScene";
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
      // Set initial states for all elements (hidden)
      gsap.set([
        ".hero-title",
        ".hero-subtitle",
        ".hero-badge",
        ".hero-content-header",
        ".hero-description",
        ".hero-pillars-label",
        ".hero-pillar",
        ".hero-cta",
        ".hero-leader-image",
        ".hero-aes-badge",
        ".hero-scroll-indicator"
      ], {
        opacity: 0,
        y: 80,
      });

      // Elegant easing for all animations
      const smoothEase = "power2.out";
      const elegantEase = "power3.out";

      // ==========================================
      // PHASE 1: Initial Hero Entrance (on load)
      // Very slow, elegant reveal
      // ==========================================

      const initialTimeline = gsap.timeline({
        delay: 0.5, // Wait for page to settle
      });

      // Title - dramatic slow rise
      initialTimeline.to(".hero-title", {
        opacity: 1,
        y: 0,
        duration: 2.0,
        ease: elegantEase,
      });

      // Subtitle - follows with overlap
      initialTimeline.to(".hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: elegantEase,
      }, "-=1.2");

      // Badges - gentle stagger
      initialTimeline.to(".hero-badge", {
        opacity: 1,
        y: 0,
        duration: 1.4,
        stagger: 0.2,
        ease: smoothEase,
      }, "-=1.0");

      // ==========================================
      // PHASE 2: Scroll-Triggered Animations
      // Elements reveal as you scroll down
      // ==========================================

      // Leader Images - Parallax + Reveal on scroll
      gsap.to(".hero-leader-image", {
        opacity: 1,
        y: 0,
        duration: 1.8,
        stagger: 0.3,
        ease: elegantEase,
        scrollTrigger: {
          trigger: ".hero-leader-image",
          start: "top 85%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      // Parallax effect on images while scrolling
      gsap.to(".hero-leader-image img", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5, // Smooth parallax
        },
      });

      // Content header with decorative line
      gsap.to(".hero-content-header", {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: elegantEase,
        scrollTrigger: {
          trigger: ".hero-content-header",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Description paragraphs - slow stagger
      gsap.to(".hero-description", {
        opacity: 1,
        y: 0,
        duration: 1.8,
        stagger: 0.4,
        ease: smoothEase,
        scrollTrigger: {
          trigger: ".hero-description",
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      // Strategic Pillars label
      gsap.to(".hero-pillars-label", {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: smoothEase,
        scrollTrigger: {
          trigger: ".hero-pillars-label",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Pillars - elegant staggered reveal
      gsap.to(".hero-pillar", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".hero-pillar",
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      // CTA Button - final reveal
      gsap.to(".hero-cta", {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: elegantEase,
        scrollTrigger: {
          trigger: ".hero-cta",
          start: "top 92%",
          toggleActions: "play none none reverse",
        },
      });

      // AES Badge
      gsap.to(".hero-aes-badge", {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: smoothEase,
        scrollTrigger: {
          trigger: ".hero-aes-badge",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Scroll indicator - appears after initial content
      gsap.to(".hero-scroll-indicator", {
        opacity: 1,
        y: 0,
        duration: 2.0,
        delay: 4.0,
        ease: elegantEase,
      });

      // ==========================================
      // PHASE 3: Background Parallax
      // Subtle movement for depth
      // ==========================================

      gsap.to(".hero-bg-glow", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
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
      <div className="hero-bg-glow absolute top-1/4 left-0 w-96 h-96 bg-amber-200/10 dark:bg-amber-500/5 blur-3xl rounded-full" />
      <div className="hero-bg-glow absolute bottom-1/4 right-0 w-96 h-96 bg-neutral-300/10 dark:bg-neutral-700/5 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Main Content - Header Row with Robot */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Column - Header Section Only (3 columns) */}
          <div ref={textRef} className="lg:col-span-3 space-y-4">
            {/* AES Intelligence Hub Badge */}
            <div className="hero-title inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 to-neutral-500/10 dark:from-amber-500/30 dark:to-neutral-700/20 border-2 border-amber-400/60 dark:border-amber-500/60 backdrop-blur-sm">
              <span className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                🤖 AES Intelligence Hub
              </span>
            </div>
            
            {/* AI Tagline */}
            <p className="hero-subtitle text-base md:text-lg font-semibold text-neutral-600 dark:text-[#a0a0a8] leading-relaxed max-w-3xl">
              First AI Agent & LLM Powered News & Education Platform from an African for Africans
            </p>
            
            {/* Main Headline */}
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight text-neutral-900 dark:text-[#e8e8ec]">
              Alliance of Sahel States
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl font-medium text-neutral-700 dark:text-[#c0c0c8] leading-relaxed">
              Africa&apos;s Blueprint for Sovereignty, Unity & Progress
            </p>
          </div>

          {/* Right Column - 3D AI Robot (2 columns) */}
          <div ref={imagesRef} className="lg:col-span-2">
            {/* 3D Robot Container - always visible, no GSAP animation */}
            <div className="relative w-full h-[280px] md:h-[320px] lg:h-[350px] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700">
              <SplineScene
                scene="https://prod.spline.design/nrcOGe-kUiwBz9A9/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Full Width Content Below */}
        <div className="space-y-8 mt-8 lg:mt-12">
          {/* Badges */}
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
          <div className="space-y-6 max-w-5xl">
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
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="hero-pillar flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 cursor-default hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-md transition-all duration-500"
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
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-700 dark:border-neutral-600 text-white dark:text-[#e8e8ec] font-bold text-lg transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              <span>Explore Our Journey</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
            repeatDelay: 0.8
          }}
          className="w-6 h-10 rounded-full border-2 border-neutral-400 dark:border-neutral-600 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-neutral-600 dark:bg-neutral-400"
          />
        </motion.div>
      </div>
    </div>
  );
}
