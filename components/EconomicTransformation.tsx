"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowRight, Gem, Wheat, Factory, Building2, Zap, GraduationCap } from "lucide-react";
import { useState } from "react";

interface TransformationMetric {
  category: string;
  icon: React.ElementType;
  before: {
    value: string;
    label: string;
    year: string;
  };
  after: {
    value: string;
    label: string;
    year: string;
  };
  improvement: string;
  color: string;
}

const transformationData: TransformationMetric[] = [
  {
    category: "Resource Revenue Retained",
    icon: Gem,
    before: { value: "15%", label: "Sent to foreign companies", year: "Pre-2020" },
    after: { value: "80%", label: "Stays in country", year: "2024" },
    improvement: "+433%",
    color: "amber",
  },
  {
    category: "Gold Production Control",
    icon: Factory,
    before: { value: "Foreign", label: "Managed by colonial firms", year: "Pre-2020" },
    after: { value: "National", label: "State-controlled production", year: "2024" },
    improvement: "Sovereign",
    color: "yellow",
  },
  {
    category: "Agricultural Self-Sufficiency",
    icon: Wheat,
    before: { value: "40%", label: "Food imported", year: "Pre-2020" },
    after: { value: "75%", label: "Locally produced", year: "2024" },
    improvement: "+87%",
    color: "green",
  },
  {
    category: "Infrastructure Investment",
    icon: Building2,
    before: { value: "Minimal", label: "Decades of neglect", year: "Pre-2020" },
    after: { value: "$2.1B+", label: "Active projects", year: "2024" },
    improvement: "Massive",
    color: "orange",
  },
  {
    category: "Energy Production",
    icon: Zap,
    before: { value: "30%", label: "Population with access", year: "Pre-2020" },
    after: { value: "52%", label: "And rapidly growing", year: "2024" },
    improvement: "+73%",
    color: "blue",
  },
  {
    category: "Education Enrollment",
    icon: GraduationCap,
    before: { value: "45%", label: "Primary enrollment", year: "Pre-2020" },
    after: { value: "68%", label: "With new schools built", year: "2024" },
    improvement: "+51%",
    color: "purple",
  },
];

const gdpGrowthData = [
  { country: "Burkina Faso", growth: "6.0%", rank: "Top 10 Africa", flag: "🇧🇫" },
  { country: "Niger", growth: "5.2%", rank: "Top 15 Africa", flag: "🇳🇪" },
  { country: "Mali", growth: "4.8%", rank: "Top 20 Africa", flag: "🇲🇱" },
];

const colorClasses: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  amber: { bg: "bg-amber-500/20", border: "border-amber-500/40", text: "text-amber-500", glow: "from-amber-500/30" },
  yellow: { bg: "bg-yellow-500/20", border: "border-yellow-500/40", text: "text-yellow-500", glow: "from-yellow-500/30" },
  green: { bg: "bg-green-500/20", border: "border-green-500/40", text: "text-green-500", glow: "from-green-500/30" },
  orange: { bg: "bg-orange-500/20", border: "border-orange-500/40", text: "text-orange-500", glow: "from-orange-500/30" },
  blue: { bg: "bg-blue-500/20", border: "border-blue-500/40", text: "text-blue-500", glow: "from-blue-500/30" },
  purple: { bg: "bg-purple-500/20", border: "border-purple-500/40", text: "text-purple-500", glow: "from-purple-500/30" },
};

export function EconomicTransformation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-background via-green-950/5 to-background dark:from-neutral-950 dark:via-green-950/10 dark:to-neutral-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-gradient-radial from-green-500/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6"
          >
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm font-semibold text-green-500 uppercase tracking-wider">
              Economic Revolution
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground dark:text-white mb-6">
            From Exploitation to{" "}
            <span className="bg-gradient-to-r from-green-400 to-amber-500 bg-clip-text text-transparent">
              Prosperity
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Under new leadership, AES nations have transformed from exploited economies to some of
            <span className="font-semibold text-green-500"> Africa's fastest-growing economies</span>.
            The change is not just visible—it's measurable.
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-green-500 to-amber-500 rounded-full mt-8" />
        </motion.div>

        {/* GDP Growth Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-neutral-600 rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground dark:text-white mb-2">
                GDP Growth Rates (2024)
              </h3>
              <p className="text-muted-foreground dark:text-gray-400">
                Outpacing global averages and proving skeptics wrong
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {gdpGrowthData.map((country, index) => (
                <motion.div
                  key={country.country}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="bg-white dark:bg-neutral-800 backdrop-blur-sm border-2 border-neutral-800 dark:border-neutral-600 rounded-2xl p-6 text-center hover:border-green-500 transition-colors shadow-[0_4px_15px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
                    <span className="text-4xl mb-3 block">{country.flag}</span>
                    <h4 className="text-lg font-bold text-foreground dark:text-white mb-2">
                      {country.country}
                    </h4>
                    <p className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                      {country.growth}
                    </p>
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm font-medium">
                      <TrendingUp className="w-3 h-3" />
                      {country.rank}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground dark:text-gray-500 mt-6">
              Source: IMF World Economic Outlook, African Development Bank Reports 2024
            </p>
          </div>
        </motion.div>

        {/* Before/After Comparison Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground dark:text-white mb-10">
            The Transformation in Numbers
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformationData.map((metric, index) => {
              const colors = colorClasses[metric.color];
              return (
                <motion.div
                  key={metric.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-radial ${colors.glow} to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className={`relative bg-white dark:bg-neutral-900 backdrop-blur-sm border-2 border-neutral-800 dark:border-neutral-600 rounded-2xl p-6 h-full hover:border-${metric.color}-500 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.3)]`}>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-2 rounded-lg ${colors.bg}`}>
                        <metric.icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <h4 className="font-bold text-foreground dark:text-white text-sm">
                        {metric.category}
                      </h4>
                    </div>

                    {/* Before/After */}
                    <div className="flex items-center justify-between gap-4">
                      {/* Before */}
                      <div className="flex-1 text-center">
                        <p className="text-xs text-muted-foreground dark:text-gray-500 uppercase tracking-wider mb-1">
                          {metric.before.year}
                        </p>
                        <p className="text-2xl font-bold text-red-400 dark:text-red-400 mb-1">
                          {metric.before.value}
                        </p>
                        <p className="text-xs text-muted-foreground dark:text-gray-500">
                          {metric.before.label}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          animate={hoveredIndex === index ? { x: [0, 5, 0] } : {}}
                          transition={{ duration: 0.5, repeat: hoveredIndex === index ? Infinity : 0 }}
                        >
                          <ArrowRight className={`w-6 h-6 ${colors.text}`} />
                        </motion.div>
                        <span className={`text-xs font-bold ${colors.text} mt-1`}>
                          {metric.improvement}
                        </span>
                      </div>

                      {/* After */}
                      <div className="flex-1 text-center">
                        <p className="text-xs text-muted-foreground dark:text-gray-500 uppercase tracking-wider mb-1">
                          {metric.after.year}
                        </p>
                        <p className={`text-2xl font-bold ${colors.text} mb-1`}>
                          {metric.after.value}
                        </p>
                        <p className="text-xs text-muted-foreground dark:text-gray-500">
                          {metric.after.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-neutral-600 rounded-2xl p-8 md:p-10 max-w-4xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-green-500" />
              <TrendingDown className="w-6 h-6 text-red-400 rotate-180" />
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground dark:text-white mb-4">
              The Verdict is Clear
            </h3>
            <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed">
              Critics predicted collapse. Instead, AES nations have achieved what decades of
              "development aid" never could: <span className="font-bold text-green-500">real, measurable progress</span> built
              on sovereignty, not dependency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
