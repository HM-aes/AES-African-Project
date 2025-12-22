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
      {/* Background effects */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-radial from-emerald-500/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-green-500/10 via-transparent to-transparent blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm font-semibold text-emerald-500 uppercase tracking-wider">
              Unified Defense
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground dark:text-white mb-4">
            AES Joint Forces{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
              & Africa Corps
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground dark:text-neutral-400 max-w-3xl mx-auto">
            Elite forces from Mali, Burkina Faso, Niger and Russian special forces united against terrorism
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-emerald-500/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative bg-white dark:bg-neutral-900/60 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-72 lg:h-auto lg:min-h-[500px] overflow-hidden">
                <Image
                  src="/aes-russia-military-images/africa-corps.webp"
                  alt="Africa Corps - AES Joint Forces"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/70 lg:via-black/30 lg:to-transparent" />

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

                {/* Stats Badge */}
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 backdrop-blur-sm">
                    <Shield className="w-6 h-6 text-emerald-400" />
                    <div>
                      <span className="text-2xl font-bold text-white">5,000+</span>
                      <span className="text-sm text-white/80 ml-2">Joint Personnel</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-10">
                <div className="space-y-6">
                  {/* Breaking News Banner */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Newspaper className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-emerald-500 uppercase">Latest News</span>
                          <span className="text-xs text-muted-foreground">{latestNews.date}</span>
                        </div>
                        <h4 className="font-semibold text-foreground dark:text-white text-sm mb-1">
                          {latestNews.title}
                        </h4>
                        <p className="text-xs text-muted-foreground dark:text-neutral-400">
                          {latestNews.excerpt}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <div>
                    <p className="text-sm font-semibold text-emerald-500 uppercase tracking-wider mb-2">
                      Security & Defense
                    </p>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground dark:text-white mb-4">
                      A Historic Partnership
                    </h3>
                    <p className="text-muted-foreground dark:text-neutral-400 leading-relaxed">
                      The seeds of friendship planted 50 years ago by our previous generation with Russian 
                      brothers have blossomed into a powerful alliance. Elite Russian special forces 
                      now stand shoulder-to-shoulder with AES troops, combining expertise to eliminate 
                      jihadist threats and secure our nations.
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20"
                      >
                        <feature.icon className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-foreground dark:text-neutral-300">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                      href="/joint-forces"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/blog?tag=joint-forces"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 font-semibold rounded-xl transition-colors"
                    >
                      All Security Updates
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
