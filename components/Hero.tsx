"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroText } from "@/components/HeroText";
import { TooltipCard } from "@/components/ui/TooltipCard";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([".section-divider", ".divider-line-left", ".divider-line-right", ".divider-dots", ".divider-glow"], {
        opacity: 0,
      });
      gsap.set(".divider-line-left", { scaleX: 0, transformOrigin: "right" });
      gsap.set(".divider-line-right", { scaleX: 0, transformOrigin: "left" });
      gsap.set(".divider-dot", { scale: 0 });
      gsap.set(".tooltip-card-wrapper", { opacity: 0, y: 60 });

      // Section divider - scroll triggered
      const dividerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      dividerTimeline
        .to(".section-divider", {
          opacity: 1,
          duration: 0.5,
        })
        .to([".divider-line-left", ".divider-line-right"], {
          scaleX: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
        }, "-=0.3")
        .to(".divider-dots", {
          opacity: 1,
          duration: 0.6,
        }, "-=1.2")
        .to(".divider-dot", {
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.4)",
        }, "-=0.4")
        .to(".divider-glow", {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        }, "-=0.6");

      // TooltipCard - scroll triggered with slow reveal
      gsap.to(".tooltip-card-wrapper", {
        opacity: 1,
        y: 0,
        duration: 2.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tooltipRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center overflow-hidden bg-white dark:bg-[#0a0a0a] pt-4 md:pt-6"
    >
      {/* Dot Grid Pattern - subtle in light, visible in dark */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Dark mode specific dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle gradient for depth - light mode neutral, dark mode subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 via-white to-neutral-100/50 dark:from-slate-900/20 dark:via-transparent dark:to-purple-900/10" />

      {/* Ambient glow effect - muted for light mode */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 opacity-15 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-neutral-400/40 via-neutral-300/20 to-transparent dark:from-blue-500/30 dark:via-purple-500/20 blur-3xl" />
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-100/30 via-transparent to-neutral-50/20 dark:from-black/40 dark:via-transparent dark:to-black/20" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-center py-6 md:py-8">
        {/* Centered Text Content */}
        <div className="w-full max-w-7xl">
          <HeroText />
        </div>
      </div>

      {/* Animated Section Divider - scroll triggered */}
      <div
        ref={dividerRef}
        className="section-divider relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 my-8 md:my-12"
      >
        <div className="relative flex items-center justify-center">
          {/* Left gradient line */}
          <div className="divider-line-left flex-1 h-[2px] bg-gradient-to-r from-transparent via-neutral-400 to-neutral-500 dark:via-neutral-600 dark:to-neutral-500" />

          {/* Center decorative element */}
          <div className="divider-dots mx-4 md:mx-6 flex items-center gap-2">
            <div className="divider-dot w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-500" />
            <div className="divider-dot w-3 h-3 rounded-full bg-neutral-600 dark:bg-neutral-400 shadow-lg" />
            <div className="divider-dot w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-500" />
          </div>

          {/* Right gradient line */}
          <div className="divider-line-right flex-1 h-[2px] bg-gradient-to-l from-transparent via-neutral-400 to-neutral-500 dark:via-neutral-600 dark:to-neutral-500" />
        </div>

        {/* Subtle glow effect under the line */}
        <div className="divider-glow absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-transparent via-neutral-300/30 dark:via-neutral-600/20 to-transparent blur-xl pointer-events-none" />
      </div>

      {/* Leaders Section - Full Width Card */}
      <div
        ref={tooltipRef}
        className="tooltip-card-wrapper relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 mb-12 md:mb-20"
      >
        {/* TooltipCard - Replaces StickyScrollReveal for better scrolling */}
        <TooltipCard className="mx-auto" />
      </div>
    </section>
  );
}
