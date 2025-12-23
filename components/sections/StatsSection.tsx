"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Users, Calendar } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Stat {
  number: string;
  label: string;
  icon: React.ElementType;
  suffix?: string;
}

const stats: Stat[] = [
  {
    number: "3",
    label: "Sovereign Nations United",
    icon: Shield,
  },
  {
    number: "72",
    label: "Million Citizens Represented",
    icon: Users,
    suffix: "M+",
  },
  {
    number: "2023",
    label: "Alliance Established",
    icon: Calendar,
  },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate stat cards on scroll
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animated number counters
      document.querySelectorAll(".stat-number").forEach((el) => {
        const target = el as HTMLElement;
        const endValue = parseInt(target.dataset.count || "0");
        
        gsap.to(target, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          innerText: endValue,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          onUpdate: function() {
            target.innerText = Math.ceil(parseFloat(target.innerText)).toString();
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-950 to-neutral-900/50 dark:from-black/50 dark:via-neutral-950 dark:to-black/50" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 dark:text-[#e8e8ec] mb-4">
            AES Quick Facts
          </h2>
          <p className="text-lg text-neutral-600 dark:text-[#8a8a94] max-w-2xl mx-auto">
            United in sovereignty, strength, and vision for a prosperous Africa
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="stat-card group relative"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-green-500/20 via-amber-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                
                {/* Card content */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 border-2 border-neutral-300 dark:border-neutral-700 group-hover:border-green-500/50 dark:group-hover:border-green-500/50 rounded-2xl p-8 transition-all duration-300 shadow-xl"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full group-hover:bg-green-500/30 transition-all duration-300" />
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-500/10 to-amber-500/10 dark:from-green-500/20 dark:to-amber-500/20 flex items-center justify-center border border-green-500/30 dark:border-green-500/40">
                        <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                  </div>

                  {/* Number */}
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-1">
                      <span
                        className="stat-number text-6xl font-bold bg-gradient-to-br from-green-600 to-amber-600 dark:from-green-400 dark:to-amber-400 bg-clip-text text-transparent"
                        data-count={stat.number}
                      >
                        0
                      </span>
                      {stat.suffix && (
                        <span className="text-4xl font-bold text-green-600 dark:text-green-400">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-center text-lg font-medium text-neutral-700 dark:text-neutral-300 leading-tight">
                    {stat.label}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Optional: Add a subtle tagline below */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-600 font-semibold">
            Building a Sovereign Future Together
          </p>
        </motion.div>
      </div>
    </section>
  );
}
