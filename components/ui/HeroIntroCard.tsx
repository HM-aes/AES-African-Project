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
        ".hero-aes-badge",
        ".hero-scroll-indicator"
      ], {
        opacity: 0,
        y: 80,
      });

      const smoothEase = "power2.out";
      const elegantEase = "power3.out";

      const initialTimeline = gsap.timeline({
        delay: 0.5,
      });

      initialTimeline.to(".hero-title", {
        opacity: 1,
        y: 0,
        duration: 2.0,
        ease: elegantEase,
      });

      initialTimeline.to(".hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: elegantEase,
      }, "-=1.2");

      initialTimeline.to(".hero-badge", {
        opacity: 1,
        y: 0,
        duration: 1.4,
        stagger: 0.2,
        ease: smoothEase,
      }, "-=1.0");

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

      gsap.to(".hero-scroll-indicator", {
        opacity: 1,
        y: 0,
        duration: 2.0,
        delay: 4.0,
        ease: elegantEase,
      });

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
      {/* Background - clean dark */}
      <div className="absolute inset-0 bg-white dark:bg-black" />
      <div className="hero-bg-glow absolute top-1/4 left-0 w-96 h-96 bg-neutral-200/50 dark:bg-neutral-800/30 blur-3xl rounded-full" />
      <div className="hero-bg-glow absolute bottom-1/4 right-0 w-96 h-96 bg-neutral-200/50 dark:bg-neutral-800/30 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Main Content - Header Row with Logo */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Column - Header Section (3 columns) */}
          <div ref={textRef} className="lg:col-span-3 space-y-4">
            {/* AES Intelligence Hub Badge - shadcn style */}
            <div className="hero-title inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 dark:bg-neutral-900 border border-neutral-800 dark:border-neutral-800">
              <span className="text-sm font-medium text-white tracking-wide">
                AES Intelligence Hub
              </span>
            </div>

            {/* AI Tagline */}
            <p className="hero-subtitle text-base md:text-lg font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
              First AI Agent & LLM Powered News & Education Platform from an African for Africans
            </p>

            {/* Main Headline */}
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight text-neutral-900 dark:text-white">
              Alliance of Sahel States
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl font-medium text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Africa&apos;s Blueprint for Sovereignty, Unity & Progress
            </p>
          </div>

          {/* Right Column - AES Logo Display (2 columns) */}
          <div ref={imagesRef} className="lg:col-span-2">
            <div className="relative w-full h-[280px] md:h-[320px] lg:h-[350px] overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
              <SplineScene className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Full Width Content Below */}
        <div className="space-y-8 mt-8 lg:mt-12">
          {/* Badges - shadcn dark style */}
          <div className="flex flex-wrap gap-2">
            <div className="hero-badge inline-flex items-center px-3 py-1.5 rounded-md bg-neutral-900 dark:bg-neutral-900 border border-neutral-800">
              <span className="text-xs font-medium text-neutral-300">
                Est. September 2023
              </span>
            </div>
            <div className="hero-badge inline-flex items-center px-3 py-1.5 rounded-md bg-neutral-900 dark:bg-neutral-900 border border-neutral-800">
              <span className="text-xs font-medium text-neutral-300">
                Pan-African Alliance
              </span>
            </div>
            <div className="hero-badge inline-flex items-center px-3 py-1.5 rounded-md bg-neutral-900 dark:bg-neutral-900 border border-neutral-800">
              <span className="text-xs font-medium text-neutral-300">
                Sovereignty First
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 max-w-5xl">
            <div className="hero-content-header flex items-center gap-3">
              <div className="h-px w-12 bg-neutral-300 dark:bg-neutral-700" />
              <span className="text-xs uppercase tracking-widest font-medium text-neutral-500 dark:text-neutral-500">
                Who We Are
              </span>
            </div>

            <p className="hero-description text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300">
              The <span className="font-semibold text-neutral-900 dark:text-white">Alliance of Sahel States (AES)</span> is a
              groundbreaking confederation uniting{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">Mali</span>,{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">Burkina Faso</span>, and{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">Niger</span>—three
              nations that chose sovereignty over dependency, unity over division, and
              African solutions over foreign intervention.
            </p>

            <p className="hero-description text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
              Born from a shared vision to end decades of exploitation, our leaders—military officers
              who rose from the people—are rewriting Africa&apos;s future. We have withdrawn from
              ECOWAS, expelled foreign military bases, and are building an economy that serves
              Africans first.
            </p>
          </div>

          {/* Strategic Pillars - shadcn style */}
          <div className="space-y-4">
            <p className="hero-pillars-label text-xs uppercase tracking-widest font-medium text-neutral-500 dark:text-neutral-500">
              Strategic Pillars
            </p>
            <div className="flex flex-wrap gap-2">
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.label}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="hero-pillar inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                >
                  <pillar.icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {pillar.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button - shadcn style */}
          <div className="hero-cta pt-4">
            <motion.a
              href="/aes"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white dark:bg-white text-black font-medium text-sm border border-neutral-200 hover:bg-neutral-100 transition-colors"
            >
              <span>Explore Our Journey</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-500"
          />
        </motion.div>
      </div>
    </div>
  );
}
