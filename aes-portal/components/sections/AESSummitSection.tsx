"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, TrendingUp, Flag, ArrowRight } from "lucide-react";

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
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero Image with Leaders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 rounded-2xl overflow-hidden"
        >
          {/* Image Container with light/dark mode adaptation */}
          <div className="relative aspect-[21/9] w-full">
            <Image
              src="/images/aes-summit-leaders.png"
              alt="The Three Leaders of the Alliance of Sahel States - Mali, Niger, Burkina Faso"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Dark mode overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black opacity-60" />
            {/* Subtle vignette for dark mode */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent dark:from-black/60 dark:to-black/20" />
          </div>
          
          {/* Overlay text on image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black border border-neutral-800 shadow-sm mb-4">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Historic Milestone
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white drop-shadow-lg">
              The AES Summit Journey
            </h2>
          </div>
        </motion.div>

        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg md:text-xl text-black dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            The Alliance of Sahel States represents one of the most significant political developments in modern African history. 
            Born from a shared vision of sovereignty and self-determination, three nations came together to forge a new path 
            for the Sahel region—free from colonial interference and focused on African solutions for African challenges.
          </p>
        </motion.div>

        {/* Content Timeline - Clean vertical layout */}
        <div className="space-y-16">
          {/* First Summit */}
          <div className="summit-block">
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-black flex items-center justify-center shadow-lg border border-neutral-800">
                <Flag className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1 pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black border border-neutral-800 text-xs font-bold text-white uppercase tracking-wider mb-3">
                  September 16, 2023 • Bamako, Mali
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
                  The Liptako-Gourma Charter: A New Era Begins
                </h3>
              </div>
            </div>

            <div className="ml-[4.75rem] space-y-4 text-black dark:text-neutral-400 leading-relaxed">
              <p className="text-lg">
                On September 16, 2023, history was made when the transitional leaders of <strong className="text-black dark:text-white">Mali, Burkina Faso, and Niger</strong> signed 
                the <strong className="text-black dark:text-white">Liptako-Gourma Charter</strong>, officially establishing the Alliance of Sahel States.
              </p>
              <p>
                The charter created a collective defense framework where an attack on one member state would be considered an attack on all—a 
                direct response to ECOWAS threats of military intervention following Niger's political transition. The three leaders declared 
                their intention to break free from decades of French military presence and neocolonial economic arrangements.
              </p>
              <p>
                <strong className="text-black dark:text-white">Captain Ibrahim Traoré</strong> of Burkina Faso, <strong className="text-black dark:text-white">Colonel Assimi Goïta</strong> of Mali, 
                and <strong className="text-black dark:text-white">General Abdourahmane Tchiani</strong> of Niger stood united, declaring: 
                <em className="italic">"The time has come for Africa to take its destiny into its own hands."</em>
              </p>
            </div>
          </div>

          {/* ECOWAS Withdrawal */}
          <div className="summit-block">
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-black flex items-center justify-center shadow-lg border border-neutral-800">
                <Calendar className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex-1 pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black border border-neutral-800 text-xs font-bold text-white uppercase tracking-wider mb-3">
                  January 28, 2024 • Joint Declaration
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
                  Breaking with ECOWAS: Sovereignty Over Submission
                </h3>
              </div>
            </div>

            <div className="ml-[4.75rem] space-y-6 text-black dark:text-neutral-400 leading-relaxed">
              <p className="text-lg">
                In a bold declaration that shocked the international community, the three AES nations announced their 
                <strong className="text-black dark:text-white"> immediate withdrawal from ECOWAS</strong>—the Economic Community of West African States 
                that had threatened military intervention and imposed harsh sanctions.
              </p>

              {/* Key Points Card */}
              <div className="rounded-xl p-6 bg-black border border-neutral-800 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-4">Reasons for Withdrawal</h4>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span><strong className="text-white">Foreign Influence</strong> — ECOWAS had become an instrument of Western powers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span><strong className="text-white">Unjust Sanctions</strong> — Economic warfare against sovereign nations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span><strong className="text-white">Military Threats</strong> — Threats of armed intervention against member states</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">✓</span>
                    <span><strong className="text-white">Failed Leadership</strong> — Decades of corruption and stagnation under ECOWAS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Confederation Summit */}
          <div className="summit-block">
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-black flex items-center justify-center shadow-lg border border-neutral-800">
                <TrendingUp className="w-6 h-6 text-red-400" />
              </div>
              <div className="flex-1 pt-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black border border-neutral-800 text-xs font-bold text-white uppercase tracking-wider mb-3">
                  July 6, 2024 • Niamey, Niger
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
                  The Confederation of Sahel States is Born
                </h3>
              </div>
            </div>

            <div className="ml-[4.75rem] space-y-6 text-black dark:text-neutral-400 leading-relaxed">
              <p className="text-lg">
                The first official summit of the AES heads of state was held in Niamey, Niger, marking a historic moment when the alliance 
                evolved into a full <strong className="text-black dark:text-white">Confederation of Sahel States</strong>.
              </p>

              <p>
                The summit produced the <strong className="text-black dark:text-white">Treaty Establishing the Confederation of Sahel States</strong>, 
                which went far beyond military cooperation to create a framework for complete political and economic integration. 
                The three nations committed to eventual federation, with shared institutions, a common currency, and unified foreign policy.
              </p>

              {/* Summit Outcomes Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl p-5 bg-black border border-neutral-800">
                  <h5 className="font-bold text-white mb-2">🏛️ Political Integration</h5>
                  <p className="text-sm text-neutral-400">Creation of a confederation parliament and unified executive council</p>
                </div>
                <div className="rounded-xl p-5 bg-black border border-neutral-800">
                  <h5 className="font-bold text-white mb-2">💰 Economic Union</h5>
                  <p className="text-sm text-neutral-400">Plans for a common currency and integrated financial system</p>
                </div>
                <div className="rounded-xl p-5 bg-black border border-neutral-800">
                  <h5 className="font-bold text-white mb-2">🛡️ Defense Pact</h5>
                  <p className="text-sm text-neutral-400">Unified military command with shared resources and training</p>
                </div>
                <div className="rounded-xl p-5 bg-black border border-neutral-800">
                  <h5 className="font-bold text-white mb-2">🌍 Diplomatic Unity</h5>
                  <p className="text-sm text-neutral-400">Joint representation in international organizations</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-amber-500 pl-4 py-2 italic text-black dark:text-neutral-300">
                "This confederation is Africa's answer to those who said we could not stand on our own. 
                Today, we prove that unity, sovereignty, and dignity are not just dreams—they are our reality."
                <footer className="text-sm text-neutral-500 mt-2">— Joint Declaration, Niamey Summit 2024</footer>
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-black hover:bg-neutral-900 border border-neutral-800 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            <span>Follow Our Journey</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
