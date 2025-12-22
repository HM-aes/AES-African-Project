"use client";

import { motion } from "framer-motion";
import { Landmark, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";

const initiatives = [
  {
    id: "investment-bank",
    icon: Landmark,
    title: "AES Investment Bank",
    subtitle: "Financial Sovereignty",
    description:
      "A groundbreaking financial institution to fund infrastructure, agriculture, and industrial projects across the Sahel. Breaking free from external financial dependency.",
    features: [
      "Independent funding for development projects",
      "Support for local entrepreneurs",
      "Trade financing between member states",
      "Economic integration catalyst",
    ],
    image: "/images/aes_investment_bank.png",
    color: "amber",
    stats: { value: "$500M+", label: "Initial Capital Target" },
  },
  {
    id: "joint-force",
    icon: Shield,
    title: "AES Joint Force",
    subtitle: "Unified Defense",
    description:
      "A unified military command combining elite forces from Mali, Burkina Faso, and Niger. Securing the Sahel through collective strength and shared intelligence.",
    features: [
      "Unified command structure",
      "Joint special operations",
      "Shared intelligence network",
      "Coordinated border security",
    ],
    image: "/images/aes_joint_forces.png",
    color: "green",
    stats: { value: "5,000+", label: "Joint Force Personnel" },
  },
];

const colorClasses = {
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-500",
    glow: "from-amber-500/20",
    iconBg: "bg-amber-500/20",
  },
  green: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-500",
    glow: "from-emerald-500/20",
    iconBg: "bg-emerald-500/20",
  },
};

export function AESInitiatives() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
              Strategic Initiatives
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground dark:text-white mb-6">
            Building the{" "}
            <span className="bg-gradient-to-r from-amber-500 to-emerald-500 bg-clip-text text-transparent">
              Future
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Two pillars of AES sovereignty: financial independence through our own bank,
            and collective security through unified forces.
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full mt-8" />
        </motion.div>

        {/* Initiatives Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
          {initiatives.map((initiative, index) => {
            const colors = colorClasses[initiative.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-radial ${colors.glow} to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative bg-white dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300">
                  {/* Image Header */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Stats Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${colors.bg} border ${colors.border} backdrop-blur-sm`}>
                        <span className={`text-2xl font-bold ${colors.text}`}>
                          {initiative.stats.value}
                        </span>
                        <span className="text-sm text-white/80">
                          {initiative.stats.label}
                        </span>
                      </div>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`p-3 rounded-xl ${colors.iconBg} backdrop-blur-sm border ${colors.border}`}>
                        <initiative.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="mb-4">
                      <p className={`text-sm font-semibold ${colors.text} uppercase tracking-wider mb-1`}>
                        {initiative.subtitle}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground dark:text-white">
                        {initiative.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground dark:text-neutral-400 leading-relaxed mb-6">
                      {initiative.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {initiative.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                          className="flex items-center gap-3 text-sm text-foreground dark:text-neutral-300"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${colors.text} bg-current`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`inline-flex items-center gap-2 ${colors.text} font-semibold text-sm group/btn`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 max-w-2xl backdrop-blur-sm">
            <p className="text-lg text-foreground dark:text-neutral-200 leading-relaxed">
              These initiatives represent a{" "}
              <span className="font-bold text-amber-500">new model of African development</span>
              {" "}— built by Africans, for Africans, free from external control.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
