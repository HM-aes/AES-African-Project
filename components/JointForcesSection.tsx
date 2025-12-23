"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight, Users, Target, Globe, Zap, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  { icon: Users, text: "Unified command structure across the Sahel" },
  { icon: Target, text: "Joint special operations with Africa Corps" },
  { icon: Globe, text: "50+ years of Russia-Africa friendship" },
  { icon: Zap, text: "Elite forces against terrorism" },
];

const latestNews = {
  title: "Africa Corps Deploys to Burkina Faso",
  excerpt: "Russian elite special forces join AES Joint Forces in historic rotation, deepening the 50-year partnership against jihadist threats.",
  date: "December 2024",
};

export function JointForcesSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background effects - neutral glows */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-radial from-neutral-300/20 via-transparent to-transparent dark:from-neutral-700/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          {/* Glow effect - neutral */}
          <div className="absolute inset-0 bg-gradient-radial from-neutral-300/30 to-transparent dark:from-neutral-700/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Pan-African Gradient Border Wrapper */}
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-amber-500 via-green-500 to-red-500 shadow-[0_0_25px_rgba(245,158,11,0.2),0_0_25px_rgba(34,197,94,0.2),0_0_25px_rgba(239,68,68,0.2)]">
            <div className="relative bg-white dark:bg-neutral-900/60 backdrop-blur-sm rounded-3xl overflow-hidden">
            {/* Header - Inside Card at Top */}
            <div className="bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 px-6 md:px-8 py-6 md:py-8 border-b border-neutral-200 dark:border-neutral-700">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 dark:text-[#e8e8ec] text-center"
              >
                AES Joint Forces & Africa Corps
              </motion.h2>
              <p className="text-center text-neutral-600 dark:text-[#8a8a94] mt-2 text-sm md:text-base">Unified Defense Partnership</p>
            </div>
            {/* Unified Defense Tag - Top Right Corner */}
            <div className="absolute top-4 right-4 lg:top-6 lg:right-6 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100/95 dark:bg-neutral-900/95 border border-neutral-300 dark:border-neutral-700 backdrop-blur-sm shadow-lg"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-600 dark:bg-neutral-400" />
                </span>
                <span className="text-xs md:text-sm font-semibold text-neutral-700 dark:text-[#c0c0c8] uppercase tracking-wider">
                  Unified Defense
                </span>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-5 gap-0">
              {/* Content Side - Left (3 columns width on desktop) */}
              <div className="lg:col-span-3 p-8 lg:p-10 order-2 lg:order-1">
                <div className="space-y-6">
                  {/* Breaking News Banner - neutral styling */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
                        <Newspaper className="w-4 h-4 text-neutral-700 dark:text-[#c0c0c8]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-neutral-700 dark:text-[#c0c0c8] uppercase">Latest News</span>
                          <span className="text-xs text-neutral-500 dark:text-[#8a8a94]">{latestNews.date}</span>
                        </div>
                        <h4 className="font-semibold text-neutral-900 dark:text-[#e8e8ec] text-sm mb-1">
                          {latestNews.title}
                        </h4>
                        <p className="text-xs text-neutral-600 dark:text-[#8a8a94]">
                          {latestNews.excerpt}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <div>
                    <p className="text-sm font-semibold text-neutral-500 dark:text-[#8a8a94] uppercase tracking-wider mb-2">
                      Security & Defense
                    </p>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-900 dark:text-[#e8e8ec] mb-4">
                      A Historic Partnership
                    </h3>
                    <p className="text-neutral-700 dark:text-[#c0c0c8] leading-relaxed">
                      The seeds of friendship planted 50 years ago by our previous generation with Russian 
                      brothers have blossomed into a powerful alliance. Elite Russian special forces 
                      now stand shoulder-to-shoulder with AES troops, combining expertise to eliminate 
                      jihadist threats and secure our nations.
                    </p>
                  </div>

                  {/* Features Grid - neutral styling */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700"
                      >
                        <feature.icon className="w-5 h-5 text-neutral-700 dark:text-[#c0c0c8] flex-shrink-0" />
                        <span className="text-sm text-neutral-700 dark:text-[#c0c0c8]">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA - black styling */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                      href="/blog#aes-joint-forces"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white font-semibold rounded-xl transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/blog?tag=joint-forces"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-[#c0c0c8] hover:bg-neutral-100 dark:hover:bg-neutral-800 font-semibold rounded-xl transition-colors"
                    >
                      All Security Updates
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image Side - Right (2 columns width on desktop) - Increased height */}
              <div className="lg:col-span-2 relative h-80 lg:h-auto lg:min-h-[700px] overflow-hidden order-1 lg:order-2">
                <Image
                  src="/aes-russia-military-images/africa-corps.webp"
                  alt="Africa Corps - AES Joint Forces"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:bg-gradient-to-l lg:from-black/60 lg:via-black/20 lg:to-transparent" />

                {/* Africa Corps Badge */}
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                  <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                    <Image
                      src="/aes-russia-military-images/afrca-corps-logo.webp"
                      alt="Africa Corps Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Stats Badge - neutral styling on image */}
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black/40 border border-white/20 backdrop-blur-sm">
                    <Shield className="w-6 h-6 text-white" />
                    <div>
                      <span className="text-2xl font-bold text-white">5,000+</span>
                      <span className="text-sm text-white/80 ml-2">Joint Personnel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Tag - Bottom of card */}
            <div className="bg-neutral-700 dark:bg-neutral-800 px-6 py-4 border-t border-neutral-600 dark:border-neutral-700">
              <p className="text-sm md:text-base text-white dark:text-neutral-200 text-center font-medium leading-relaxed">
                Africa Corps Russia elite forces and new AES joint special forces united against jihadist in the AES space, stronger and united
              </p>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
