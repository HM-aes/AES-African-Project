"use client";

import { motion } from "framer-motion";
import { Landmark, ArrowRight, Building2, Coins, TrendingUp, Factory } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Coins, title: "Independent Development Funding", description: "Self-financed projects without external dependency" },
  { icon: Building2, title: "Infrastructure Project Financing", description: "Roads, rails, and energy across the Sahel" },
  { icon: Factory, title: "Industrial & Agricultural Investment", description: "Manufacturing and food sovereignty initiatives" },
  { icon: TrendingUp, title: "Trade Integration Catalyst", description: "Facilitating intra-AES commerce and growth" },
];

export function InvestmentBankSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-50 to-transparent dark:via-neutral-900/20" />
      
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
            AES Investment Bank
          </h2>
          
          {/* Shadcn-style black tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 dark:bg-zinc-950 border border-zinc-800 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Financial Sovereignty
            </span>
          </div>
          
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Building economic independence through our own financial institution
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold font-heading text-neutral-900 dark:text-[#e8e8ec] mb-4">
              Financing Our Own Future
            </h3>
            <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <p className="text-lg">
                The <strong className="text-neutral-900 dark:text-neutral-100">Confederation Investment and Development Bank (BCID-AES)</strong> marks a historic step toward complete financial independence. With <strong className="text-neutral-900 dark:text-neutral-100">$895 million</strong> in initial capital, we're funding infrastructure, energy, and agriculture without external conditions or interference.
              </p>
              <p>
                This institution represents more than banking—it's a declaration of economic sovereignty, enabling the AES to chart its own development path free from IMF conditionalities and Western financial control.
              </p>
            </div>
          </motion.div>

          {/* Key Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold font-heading text-neutral-900 dark:text-[#e8e8ec] mb-6">
              Investment Priorities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4 p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-amber-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-green-700 dark:text-green-400" />
                    </div>
                    <div>
                      {/* Shadcn-style black tag for feature title */}
                      <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-zinc-900 dark:bg-zinc-950 border border-zinc-800 mb-2">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          {feature.title}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <Landmark className="w-6 h-6 text-green-700 dark:text-green-400" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-900 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-3">
                  Initial Capitalization
                </span>
                <h4 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  $895 Million
                </h4>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Combined contributions from Mali, Burkina Faso, and Niger establish one of Africa's most capitalized regional development banks, positioning the AES as a model for financial independence.
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
              href="/blog#aes-investment-bank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About the Bank
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/blog?tag=investment-bank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-bold rounded-xl transition-all duration-300"
            >
              Latest Financial Updates
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
