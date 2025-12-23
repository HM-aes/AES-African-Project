"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AESSummitSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate summit card on scroll
      gsap.from(".summit-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      });

      // Animate details with stagger
      gsap.from(".summit-detail", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        x: -30,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent dark:via-amber-500/3" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Summit Card */}
        <div className="summit-card relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-amber-500/20 to-red-500/20 blur-2xl opacity-50 rounded-3xl" />
          
          {/* Main card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="relative bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-3xl border-2 border-amber-500/30 dark:border-amber-500/20 p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-amber-500 to-red-500" />
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-amber-500/10 dark:from-green-500/20 dark:to-amber-500/20 border border-green-500/30 dark:border-green-500/40 mb-6">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-sm font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">
                Happening Now
              </span>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Left: Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Title */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 dark:text-[#e8e8ec] mb-3 leading-tight">
                    AES Second Summit
                  </h2>
                  <p className="text-xl text-neutral-700 dark:text-[#c0c0c8] font-medium">
                    Strengthening Pan-African Unity \u0026 Sovereignty
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div className="summit-detail flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide font-semibold">
                        Date
                      </p>
                      <p className="font-semibold">December 23, 2024</p>
                    </div>
                  </div>

                  <div className="summit-detail flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide font-semibold">
                        Location
                      </p>
                      <p className="font-semibold">Bamako, Mali 🇲🇱</p>
                    </div>
                  </div>

                  <div className="summit-detail flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide font-semibold">
                        Participants
                      </p>
                      <p className="font-semibold">AES Leaders \u0026 Delegations</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  The Alliance of Sahel States convenes for its historic second summit, bringing together leaders from Mali, Burkina Faso, and Niger to advance regional cooperation, economic integration, and collective security initiatives.
                </p>

                {/* CTA */}
                <motion.a
                  href="/blog"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Follow Live Updates</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>

              {/* Right: Flags/Visual */}
              <div className="lg:col-span-2 flex justify-center items-center">
                <div className="relative">
                  {/* Decorative circle bg */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-amber-400/20 to-red-400/20 blur-3xl rounded-full" />
                  
                  {/* Flags */}
                  <motion.div 
                    className="relative flex flex-col gap-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <div className="flex justify-center gap-3">
                      <motion.span 
                        className="text-7xl md:text-8xl drop-shadow-2xl"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        🇲🇱
                      </motion.span>
                    </div>
                    <div className="flex justify-center gap-3">
                      <motion.span 
                        className="text-6xl md:text-7xl drop-shadow-2xl"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        🇧🇫
                      </motion.span>
                      <motion.span 
                        className="text-6xl md:text-7xl drop-shadow-2xl"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        🇳🇪
                      </motion.span>
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-2xl font-bold bg-gradient-to-r from-green-600 via-amber-600 to-red-600 bg-clip-text text-transparent">
                        United for Africa
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
