"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
    >
      {/* Metallic texture overlay */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20" 
        style={{
          backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.05) 49%, rgba(255,255,255,0.05) 51%, transparent 52%)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Subtle gradient shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-zinc-200/10 dark:from-white/5 dark:via-transparent dark:to-zinc-700/10" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-amber-500/10 dark:from-green-500/20 dark:to-amber-500/20 border border-green-500/30 dark:border-green-500/40 mb-6">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="text-sm font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">
              Historic Milestone
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold font-heading text-zinc-900 dark:text-zinc-100 mb-4 leading-tight">
            The AES Summit Journey
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            From revolutionary vision to continental transformation
          </p>
        </motion.div>

        {/* Content Timeline */}
        <div className="space-y-12">
          {/* First Summit - The Beginning */}
          <div className="summit-block">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 flex items-center justify-center shadow-lg">
                <Flag className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  First Summit: The Revolution Begins
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                  July 2023 • Niamey, Niger
                </p>
              </div>
            </div>
            
            <div className="pl-16 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <p className="text-lg">
                In a historic moment that would reshape West Africa's geopolitical landscape, the leaders of <strong className="text-zinc-900 dark:text-zinc-100">Mali, Burkina Faso, and Niger</strong> convened in Niamey to establish the <strong className="text-zinc-900 dark:text-zinc-100">Alliance of Sahel States (AES)</strong>.
              </p>
              <p>
                This watershed summit marked the beginning of a new era of sovereignty and self-determination. Born from shared struggles against external interference and neo-colonial pressures, the three nations pledged mutual defense, economic cooperation, and a unified vision for African development on African terms.
              </p>
              <p>
                The summit's founding charter established critical frameworks for military cooperation, resource sharing, and coordinated diplomatic strategies—laying the groundwork for what would become Africa's most ambitious sovereignty project.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-zinc-400 dark:via-zinc-600 to-transparent" />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <div className="w-2 h-2 rounded-full bg-zinc-500 dark:bg-zinc-500" />
              <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            </div>
            <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-zinc-400 dark:via-zinc-600 to-transparent" />
          </div>

          {/* Second Summit - Today */}
          <div className="summit-block">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600 flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  Second Summit: Consolidating Progress
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                  December 23, 2024 • Bamako, Mali
                </p>
              </div>
            </div>
            
            <div className="pl-16 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <p className="text-lg">
                Eighteen months after its founding, the AES gathers in <strong className="text-zinc-900 dark:text-zinc-100">Bamako</strong> to celebrate remarkable achievements and chart the path forward for Pan-African integration.
              </p>
              
              <div className="bg-white/50 dark:bg-zinc-800/50 rounded-xl p-6 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700">
                <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Key Achievements Since Formation:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                    <span><strong>Joint Military Command:</strong> Established unified defense framework with coordinated operations across 1.5 million km² territory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                    <span><strong>Economic Integration:</strong> Launched common trade zones and cross-border infrastructure projects worth $2.3 billion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                    <span><strong>Resource Sovereignty:</strong> Renegotiated mining contracts returning 67% more revenue to national treasuries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                    <span><strong>Diplomatic Coordination:</strong> Unified representation at AU, UN, and bilateral engagements with Russia and China</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-zinc-400 dark:via-zinc-600 to-transparent" />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <div className="w-2 h-2 rounded-full bg-zinc-500 dark:bg-zinc-500" />
              <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            </div>
            <div className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-zinc-400 dark:via-zinc-600 to-transparent" />
          </div>

          {/* Future Vision */}
          <div className="summit-block">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  The Road Ahead: 2025 & Beyond
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                  Strategic Priorities
                </p>
              </div>
            </div>
            
            <div className="pl-16 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <p className="text-lg">
                As the AES enters its second year, leaders have outlined an ambitious agenda to deepen integration and expand the alliance's continental influence.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-800">
                  <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">🏭 Industrial Development</h5>
                  <p className="text-sm">Launch AES Industrial Zone with textile, technology, and agricultural processing facilities</p>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20 rounded-xl p-5 border border-amber-200 dark:border-amber-800">
                  <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">💰 AES Development Bank</h5>
                  <p className="text-sm">Establish regional financial institution with $5B initial capital for infrastructure projects</p>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-950/30 dark:to-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800">
                  <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">🎓 Education Partnership</h5>
                  <p className="text-sm">Create AES University Network with technology transfer and research collaboration hubs</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-800">
                  <h5 className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">🤝 Regional Expansion</h5>
                  <p className="text-sm">Open membership to neighboring states committed to sovereignty and Pan-African unity</p>
                </div>
              </div>

              <p className="text-lg pt-4 italic border-l-4 border-amber-500 dark:border-amber-600 pl-4">
                "The AES is not just an alliance—it is Africa's blueprint for self-determined development, proving that sovereignty and prosperity are achievable when nations unite in common purpose."
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 summit-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 via-amber-600 to-red-600 hover:from-green-700 hover:via-amber-700 hover:to-red-700 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
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
