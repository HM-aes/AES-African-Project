"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  Zap, Shield, Globe, Wheat, GraduationCap, ArrowRight, ChevronLeft, ChevronRight
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

const carouselSlides = [
  {
    id: "what-is-aes",
    title: "What is AES?",
    subtitle: "Alliance of Sahel States",
    description: "A groundbreaking confederation uniting Mali, Burkina Faso, and Niger—three nations that chose sovereignty over dependency, unity over division, and African solutions over foreign intervention.",
    image: "/AES-logos/aes-main-logo.png",
    type: "logo" as const,
  },
  {
    id: "mali",
    title: "Mali",
    subtitle: "Colonel Assimi Goïta",
    description: "Leading Mali's transformation with unwavering commitment to sovereignty and Pan-African unity. Under his leadership, Mali has reclaimed control over its resources and expelled foreign military bases.",
    image: "/aes/AES/assimi-goita.jpg",
    flag: "🇲🇱",
    type: "country" as const,
  },
  {
    id: "burkina-faso",
    title: "Burkina Faso",
    subtitle: "Captain Ibrahim Traoré",
    description: "At 36, one of Africa's youngest leaders, driving radical transformation through self-reliance and African solutions. His visionary leadership inspires a new generation across the continent.",
    image: "/aes/AES/ibrahim-traore.jpg",
    flag: "🇧🇫",
    type: "country" as const,
  },
  {
    id: "niger",
    title: "Niger",
    subtitle: "General Abdourahamane Tiani",
    description: "Leading Niger's path to true independence, prioritizing national sovereignty and African-centered development. Under his guidance, Niger is building strategic partnerships that serve African interests.",
    image: "/aes/AES/abdourahamane-tiani.jpg",
    flag: "🇳🇪",
    type: "country" as const,
  },
];

export function HeroIntroCard({ className }: HeroIntroCardProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mouse position for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse following
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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

      // Logo scroll-following animation
      if (logoContainerRef.current) {
        gsap.to(logoContainerRef.current, {
          y: 150, // Move down as user scrolls
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "40% top", // Stop before the section divider
            scrub: 1.5, // Smooth following
          },
        });
        
        // Fade out and scale down slightly as it reaches the end
        gsap.to(logoContainerRef.current, {
          opacity: 0.3,
          scale: 0.9,
          ease: "power2.in",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "30% top",
            end: "50% top",
            scrub: 1,
          },
        });
      }

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
            <div className="hero-title inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black border border-neutral-800">
              <span className="text-sm font-medium text-white tracking-wide">
                AES Intelligence Hub
              </span>
            </div>

            {/* AI Tagline */}
            <p className="hero-subtitle text-base md:text-lg font-medium text-black dark:text-neutral-400 leading-relaxed max-w-3xl">
              First AI Agent & LLM Powered News & Education Platform from an African for Africans
            </p>

            {/* Main Headline */}
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight text-neutral-900 dark:text-white">
              Alliance of Sahel States
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl font-medium text-black dark:text-white leading-relaxed">
              Africa&apos;s Blueprint for Sovereignty, Unity & Progress
            </p>
          </div>

          {/* Right Column - AES Logo Card (2 columns) */}
          <div 
            ref={imagesRef} 
            className="lg:col-span-2 flex items-center justify-center" 
            style={{ perspective: "1000px" }}
          >
            <div ref={logoContainerRef} className="will-change-transform">
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 1.8,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.6,
              }}
              style={{ 
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative group cursor-pointer"
            >
              {/* Dark shadow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-black/40 blur-2xl translate-y-4 scale-95 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Outer glow on hover */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/25 via-green-500/20 to-amber-500/25 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Card container */}
              <div className="relative p-4 md:p-5 rounded-2xl
                bg-white dark:bg-black
                border border-neutral-200 dark:border-neutral-800
                shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]
                transition-all duration-300 ease-out
                group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                dark:group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.8)]
                group-hover:border-neutral-300 dark:group-hover:border-neutral-700"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

                {/* 3D floating effect for logo */}
                <div
                  className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-xl bg-white dark:bg-black overflow-hidden transition-transform duration-300"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {/* Light mode logo (white background) */}
                  <Image
                    src="/images/aes-logo-white-bg.png"
                    alt="Alliance of Sahel States"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain dark:hidden"
                    priority
                  />
                  {/* Dark mode logo (dark background) */}
                  <Image
                    src="/images/aes-logo-dark-bg.png"
                    alt="Alliance of Sahel States"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain hidden dark:block"
                    priority
                  />
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
              </div>
              
              {/* Corner dots */}
              <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-amber-500/60 transition-all duration-300 group-hover:scale-150 group-hover:bg-amber-500" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-500/60 transition-all duration-300 group-hover:scale-150 group-hover:bg-green-500" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-green-500/60 transition-all duration-300 group-hover:scale-150 group-hover:bg-green-500" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-amber-500/60 transition-all duration-300 group-hover:scale-150 group-hover:bg-amber-500" />
            </motion.div>
            </div>
          </div>
        </div>

        {/* Full Width Content Below */}
        <div className="space-y-8 mt-8 lg:mt-12">
          {/* Badges - always black background with white text */}
          <div className="flex flex-wrap gap-2">
            <div className="hero-badge inline-flex items-center px-3 py-1.5 rounded-md bg-black border border-neutral-800">
              <span className="text-xs font-medium text-white">
                Est. September 2023
              </span>
            </div>
            <div className="hero-badge inline-flex items-center px-3 py-1.5 rounded-md bg-black border border-neutral-800">
              <span className="text-xs font-medium text-white">
                Pan-African Alliance
              </span>
            </div>
            <div className="hero-badge inline-flex items-center px-3 py-1.5 rounded-md bg-black border border-neutral-800">
              <span className="text-xs font-medium text-white">
                Sovereignty First
              </span>
            </div>
          </div>

          {/* Who We Are - Glassmorphic TV Screen Carousel */}
          <div className="space-y-8 max-w-7xl mx-auto">
            {/* Beautiful Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 dark:text-white">
                Who We Are
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-pan-red via-pan-gold to-pan-green rounded-full" />
            </motion.div>

            {/* Glassmorphic TV Screen Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              {/* Ambient glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Glass TV Screen Container */}
              <div className="relative bg-gradient-to-br from-white/90 via-white/70 to-white/90 dark:from-neutral-900/90 dark:via-neutral-900/70 dark:to-neutral-900/90 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-neutral-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden">

                {/* Screen bezel effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-black/10 dark:from-white/5 dark:via-transparent dark:to-black/20 pointer-events-none" />

                {/* Navigation Buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between items-center z-20 pointer-events-none">
                  <motion.button
                    onClick={prevSlide}
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/90 transition-all shadow-xl"
                  >
                    <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
                  </motion.button>

                  <motion.button
                    onClick={nextSlide}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/90 transition-all shadow-xl"
                  >
                    <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
                  </motion.button>
                </div>

                {/* Content Area */}
                <div className="relative p-8 md:p-12 lg:p-16">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px] md:min-h-[500px]"
                  >
                    {/* Left: Image/Logo */}
                    <div className="flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                      >
                        {carouselSlides[currentSlide].type === "logo" ? (
                          <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <Image
                              src={carouselSlides[currentSlide].image}
                              alt={carouselSlides[currentSlide].title}
                              fill
                              className="object-contain drop-shadow-2xl"
                              priority
                            />
                          </div>
                        ) : (
                          <div className="space-y-6">
                            {/* Flag */}
                            <div className="text-8xl md:text-9xl text-center drop-shadow-2xl">
                              {carouselSlides[currentSlide].flag}
                            </div>
                            {/* Leader Image */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden border-4 border-white/20 dark:border-neutral-700/50 shadow-2xl">
                              <Image
                                src={carouselSlides[currentSlide].image}
                                alt={carouselSlides[currentSlide].subtitle}
                                fill
                                className="object-cover"
                                priority
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 dark:text-white mb-3">
                          {carouselSlides[currentSlide].title}
                        </h3>
                        <p className="text-xl md:text-2xl font-medium text-neutral-700 dark:text-neutral-300 mb-6">
                          {carouselSlides[currentSlide].subtitle}
                        </p>
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
                      >
                        {carouselSlides[currentSlide].description}
                      </motion.p>

                      {/* Progress Indicators */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex gap-2 pt-4"
                      >
                        {carouselSlides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === currentSlide
                                ? "w-12 bg-neutral-900 dark:bg-white"
                                : "w-2 bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Strategic Pillars - shadcn style */}
          <div className="space-y-4">
            <p className="hero-pillars-label text-xs uppercase tracking-widest font-medium text-black dark:text-neutral-500">
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
                  <pillar.icon className="w-4 h-4 text-black dark:text-neutral-400" />
                  <span className="text-sm font-medium text-black dark:text-neutral-300">
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
