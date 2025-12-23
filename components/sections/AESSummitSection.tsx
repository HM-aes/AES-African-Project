"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, TrendingUp, Flag } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AESSummitSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate content blocks on scroll
      gsap.from(".summit-block", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* AES Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/AES-logos/aes-main-logo.png"
              alt="AES Logo"
              width={80}
              height={80}
              className="rounded-xl"
            />
          </div>

          {/* Badge - shadcn style: dark in both modes */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 shadow-sm mb-6">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Historic Milestone
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-heading text-zinc-900 dark:text-white mb-4">
            The AES Summit Journey
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            From revolutionary vision to continental transformation
          </p>
        </motion.div>

        {/* Content Timeline - Clean vertical layout */}
        <div className="space-y-16">
          {/* First Summit */}
          <div className="summit-block">
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center shadow-lg border border-zinc-700">
                <Flag className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1 pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
                  July 2023 • Niamey, Niger
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
                  First Summit: The Revolution Begins
                </h3>
              </div>
            </div>

            <div className="ml-[4.75rem] space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p className="text-lg">
                In a historic moment that would reshape West Africa's geopolitical landscape, the leaders of <strong className="text-zinc-900 dark:text-white">Mali, Burkina Faso, and Niger</strong> convened in Niamey to establish the <strong className="text-zinc-900 dark:text-white">Alliance of Sahel States (AES)</strong>.
              </p>
              <p>
                This watershed summit marked the beginning of a new era of sovereignty and self-determination. The three nations pledged mutual defense, economic cooperation, and a unified vision for African development.
              </p>
            </div>
          </div>

          {/* Second Summit */}
          <div className="summit-block">
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center shadow-lg border border-zinc-700">
                <Calendar className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex-1 pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
                  December 2024 • Bamako, Mali
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
                  Second Summit: Consolidating Progress
                </h3>
              </div>
            </div>

            <div className="ml-[4.75rem] space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p className="text-lg">
                Eighteen months after its founding, the AES gathers in <strong className="text-zinc-900 dark:text-white">Bamako</strong> to celebrate remarkable achievements and chart the path forward.
              </p>

              {/* Achievements Card - shadcn style */}
              <div className="rounded-xl p-6 bg-zinc-900 border border-zinc-700 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-4">Key Achievements</h4>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span><strong className="text-white">Joint Military Command</strong> — Unified defense across 1.5M km²</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span><strong className="text-white">Economic Integration</strong> — $2.3B in cross-border projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span><strong className="text-white">Resource Sovereignty</strong> — 67% more mining revenue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span><strong className="text-white">Diplomatic Unity</strong> — Unified AU, UN representation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className="summit-block">
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center shadow-lg border border-zinc-700">
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
              <div className="flex-1 pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
                  Strategic Priorities
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
                  The Road Ahead: 2025 & Beyond
                </h3>
              </div>
            </div>

            <div className="ml-[4.75rem] space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p className="text-lg">
                As the AES enters its second year, leaders have outlined an ambitious agenda to deepen integration.
              </p>

              {/* Priority Cards Grid - shadcn style */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl p-5 bg-zinc-900 border border-zinc-700">
                  <h5 className="font-bold text-white mb-2">🏭 Industrial Development</h5>
                  <p className="text-sm text-zinc-400">Launch AES Industrial Zone with textile, technology, and agricultural facilities</p>
                </div>
                <div className="rounded-xl p-5 bg-zinc-900 border border-zinc-700">
                  <h5 className="font-bold text-white mb-2">💰 AES Development Bank</h5>
                  <p className="text-sm text-zinc-400">Regional financial institution with $5B initial capital</p>
                </div>
                <div className="rounded-xl p-5 bg-zinc-900 border border-zinc-700">
                  <h5 className="font-bold text-white mb-2">🎓 Education Partnership</h5>
                  <p className="text-sm text-zinc-400">AES University Network with technology transfer hubs</p>
                </div>
                <div className="rounded-xl p-5 bg-zinc-900 border border-zinc-700">
                  <h5 className="font-bold text-white mb-2">🤝 Regional Expansion</h5>
                  <p className="text-sm text-zinc-400">Open membership to neighboring sovereignty-focused states</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-amber-500 pl-4 py-2 italic text-zinc-500 dark:text-zinc-400">
                "The AES is Africa's blueprint for self-determined development."
              </blockquote>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 summit-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            <span>Follow Our Journey</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
