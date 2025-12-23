"use client";

import { motion } from "framer-motion";
import { Shield, Users, Target, Globe, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const partnerships = [
  { icon: Users, text: "Unified command structure across the Sahel" },
  { icon: Target, text: "Joint special operations with Africa Corps" },
  { icon: Globe, text: "50+ years of Russia-Africa friendship" },
  { icon: Zap, text: "Elite forces against terrorism" },
];

export function JointForcesSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-100/50 to-transparent dark:via-neutral-900/30" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading text-neutral-900 dark:text-[#e8e8ec] mb-4 leading-tight">
            AES Joint Forces & Africa Corps
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            A strategic military partnership defending sovereignty across the Sahel
          </p>
        </motion.div>

        {/* Flags Display - Partnership Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8 mb-16"
        >
          {/* Russia Flag */}
          <div className="text-center">
            <motion.span 
              className="text-9xl drop-shadow-2xl inline-block"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              🇷🇺
            </motion.span>
            <p className="text-sm font-bold text-neutral-700 dark:text-neutral-300 mt-2 uppercase tracking-wider">
              Russia - Africa Corps
            </p>
          </div>

          {/* Partnership Symbol */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-neutral-400 dark:via-neutral-600 to-neutral-400" />
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 via-amber-500 to-red-500 flex items-center justify-center"
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
            </div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent via-neutral-400 dark:via-neutral-600 to-neutral-400" />
          </div>

          {/* AES Flags */}
          <div className="flex gap-8 items-center">
            <motion.div className="text-center" whileHover={{ scale: 1.1, y: -5 }}>
              <span className="text-8xl drop-shadow-2xl inline-block">🇲🇱</span>
              <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mt-2">Mali</p>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.1, y: -5 }}>
              <span className="text-8xl drop-shadow-2xl inline-block">🇧🇫</span>
              <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mt-2">Burkina Faso</p>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.1, y: -5 }}>
              <span className="text-8xl drop-shadow-2xl inline-block">🇳🇪</span>
              <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mt-2">Niger</p>
            </motion.div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 dark:bg-zinc-950 border border-zinc-800">
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Unified Defense Partnership
            </span>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Historic Partnership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold font-heading text-neutral-900 dark:text-[#e8e8ec] mb-4">
              A Historic 50-Year Partnership
            </h3>
            <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <p className="text-lg">
                The seeds of friendship planted <strong className="text-neutral-900 dark:text-neutral-100">50 years ago</strong> by our previous generation with Russian brothers have blossomed into a powerful alliance. This enduring relationship, forged during Africa's independence movements, now manifests in concrete military cooperation.
              </p>
              <p>
                Elite <strong className="text-neutral-900 dark:text-neutral-100">Africa Corps</strong> special forces—successors to the legendary Wagner Group—now stand shoulder-to-shoulder with AES troops, combining decades of combat expertise with local knowledge to eliminate jihadist threats and secure our nations.
              </p>
            </div>
          </motion.div>

          {/* Partnership Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold font-heading text-neutral-900 dark:text-[#e8e8ec] mb-6">
              Strategic Cooperation
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {partnerships.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-amber-500/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-green-700 dark:text-green-400" />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Latest Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/30 dark:to-amber-900/20 rounded-2xl p-8 border-2 border-amber-200 dark:border-amber-800"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-amber-700 dark:text-amber-400" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                  Latest News
                </span>
                <h4 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  Africa Corps Deploys to Burkina Faso
                </h4>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Russian elite special forces join AES Joint Forces in historic rotation, deepening the 50-year partnership against jihadist threats. The deployment marks a new chapter in Russia-AES military cooperation, with <strong>5,000+ joint personnel</strong> now operating across the Sahel region.
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-3">
                  December 2024
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Link
              href="/blog#aes-joint-forces"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About Joint Forces
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/blog?tag=joint-forces"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-bold rounded-xl transition-all duration-300"
            >
              All Security Updates
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
