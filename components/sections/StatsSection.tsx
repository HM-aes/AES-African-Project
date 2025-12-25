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
          onUpdate: function () {
            target.innerText = Math.ceil(
              parseFloat(target.innerText)
            ).toString();
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      {/* Background - clean dark */}
      <div className="absolute inset-0 bg-neutral-50 dark:bg-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 dark:text-white mb-4">
            AES Quick Facts
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            United in sovereignty, strength, and vision for a prosperous Africa
          </p>
        </motion.div>

        {/* Stats Grid - shadcn style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="stat-card group"
              >
                {/* Card content - shadcn dark style */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 rounded-xl p-8 transition-colors"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
                      <Icon className="w-7 h-7 text-neutral-700 dark:text-neutral-300" />
                    </div>
                  </div>

                  {/* Number */}
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-1">
                      <span
                        className="stat-number text-5xl font-bold text-neutral-900 dark:text-white"
                        data-count={stat.number}
                      >
                        0
                      </span>
                      {stat.suffix && (
                        <span className="text-3xl font-bold text-neutral-600 dark:text-neutral-400">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Label */}
                  <p className="text-center text-base font-medium text-neutral-600 dark:text-neutral-400 leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-600 font-medium">
            Building a Sovereign Future Together
          </p>
        </motion.div>
      </div>
    </section>
  );
}
