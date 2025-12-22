"use client";

import { motion } from "framer-motion";
import { Landmark, ArrowRight, Building2, Coins, TrendingUp, Factory } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  { icon: Coins, text: "Independent development funding" },
  { icon: Building2, text: "Infrastructure project financing" },
  { icon: Factory, text: "Industrial & agricultural investment" },
  { icon: TrendingUp, text: "Trade integration catalyst" },
];

export function InvestmentBankSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-radial from-yellow-500/10 via-transparent to-transparent blur-3xl" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
              Financial Sovereignty
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground dark:text-white mb-4">
            AES{" "}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Investment Bank
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground dark:text-neutral-400 max-w-2xl mx-auto">
            Building economic independence through our own financial institution
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
          <div className="absolute inset-0 bg-gradient-radial from-amber-500/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative bg-white dark:bg-neutral-900/60 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side - Left on desktop */}
              <div className="p-8 lg:p-10 order-2 lg:order-1">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-2">
                      Economic Development
                    </p>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground dark:text-white mb-4">
                      Financing Our Own Future
                    </h3>
                    <p className="text-muted-foreground dark:text-neutral-400 leading-relaxed">
                      The Confederation Investment and Development Bank (BCID-AES) marks a historic
                      step toward financial independence. With $895 million in initial capital, 
                      we&apos;re funding infrastructure, energy, and agriculture without external strings.
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
                        className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20"
                      >
                        <feature.icon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        <span className="text-sm text-foreground dark:text-neutral-300">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link
                      href="/investment-bank"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/blog?tag=investment-bank"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 font-semibold rounded-xl transition-colors"
                    >
                      Latest Updates
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image Side - Right on desktop */}
              <div className="relative h-64 lg:h-auto lg:min-h-[450px] overflow-hidden order-1 lg:order-2">
                <Image
                  src="/images/aes-investment-bank.png"
                  alt="AES Investment Bank"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/70 lg:via-transparent lg:to-transparent" />

                {/* Stats Badge */}
                <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-amber-500/20 border border-amber-500/40 backdrop-blur-sm">
                    <Landmark className="w-6 h-6 text-amber-400" />
                    <div>
                      <span className="text-2xl font-bold text-white">$895M</span>
                      <span className="text-sm text-white/80 ml-2">Initial Capital</span>
                    </div>
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
