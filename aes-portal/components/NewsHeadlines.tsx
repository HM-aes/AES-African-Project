"use client";

import { motion } from "framer-motion";
import { Newspaper, Clock, ArrowRight, TrendingUp, AlertCircle, Plane } from "lucide-react";
import Link from "next/link";

// Headlines with Nigeria airplane news at top
const headlines = [
  {
    country: "Burkina Faso",
    flag: "🇧🇫",
    title: "AES Asserts Sovereignty: Nigeria Apologizes for Airspace Violation",
    summary: "Nigerian Foreign Minister delivers formal apology after military aircraft violated AES airspace. All 11 personnel released following diplomatic resolution.",
    time: "Breaking",
    trending: true,
    breaking: true,
    icon: Plane,
    link: "/blog/burkina-faso-nigeria-airspace-incident-2025"
  },
  {
    country: "Mali",
    flag: "🇲🇱",
    title: "FAMA Forces Reclaim Northern Territory",
    summary: "Malian Armed Forces achieve major breakthrough in security operations, reclaiming strategic positions in the north.",
    time: "2 hours ago",
    trending: true,
    breaking: false,
    link: null
  },
  {
    country: "Burkina Faso",
    flag: "🇧🇫",
    title: "Captain Traoré Announces Agricultural Revolution",
    summary: "New initiative aims for complete food sovereignty by 2026 through mechanized farming and irrigation projects.",
    time: "4 hours ago",
    trending: false,
    breaking: false,
    link: null
  },
  {
    country: "Niger",
    flag: "🇳🇪",
    title: "Niger Secures Historic Mining Agreement",
    summary: "New deal ensures 80% of uranium revenues stay within Niger, marking a turning point in resource management.",
    time: "6 hours ago",
    trending: false,
    breaking: false,
    link: null
  },
];

export function NewsHeadlines() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background accent - neutral */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-neutral-300/20 via-transparent to-transparent dark:from-neutral-700/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-neutral-300/20 via-transparent to-transparent dark:from-neutral-700/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-600 dark:bg-neutral-400"></span>
            </span>
            <span className="text-sm font-semibold text-black dark:text-[#c0c0c8] uppercase tracking-wider">Live Updates</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-neutral-900 dark:text-[#e8e8ec] mb-4">
            Latest from the Sahel
          </h2>
          <p className="text-black dark:text-[#8a8a94] max-w-2xl mx-auto">
            Breaking news and developments from Mali, Burkina Faso, and Niger
          </p>
          <div className="w-24 h-1 mx-auto bg-neutral-400 dark:bg-neutral-600 rounded-full mt-6" />
        </motion.div>

        {/* Featured Breaking News */}
        {headlines[0].breaking && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href={headlines[0].link || "#"}>
              <div className="group relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900/80 border-2 border-neutral-400 dark:border-neutral-600 hover:border-neutral-600 dark:hover:border-neutral-400 transition-all duration-300 cursor-pointer">
                {/* Animated border glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-300/20 via-transparent to-neutral-300/20 dark:from-neutral-700/20 dark:to-neutral-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  {/* Breaking badge - kept red for urgency */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 dark:bg-neutral-700 animate-pulse">
                    <AlertCircle className="w-4 h-4 text-white" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Breaking</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{headlines[0].flag}</span>
                      <span className="text-sm font-bold uppercase tracking-wider text-black dark:text-[#c0c0c8]">
                        {headlines[0].country}
                      </span>
                      <span className="text-neutral-400 dark:text-neutral-500">•</span>
                      <span className="text-sm text-black dark:text-[#8a8a94]">{headlines[0].time}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-[#e8e8ec] mb-2 group-hover:text-neutral-600 dark:group-hover:text-white transition-colors">
                      {headlines[0].title}
                    </h3>
                    <p className="text-black dark:text-[#8a8a94]">
                      {headlines[0].summary}
                    </p>
                  </div>

                  {/* Read more */}
                  <div className="flex items-center gap-2 text-black dark:text-[#c0c0c8] font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom accent - now black */}
                <div className="h-1 bg-neutral-700 dark:bg-neutral-500" />
              </div>
            </Link>
          </motion.div>
        )}

        {/* News Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {headlines.slice(1).map((headline, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 backdrop-blur-sm border-2 border-neutral-300 dark:border-neutral-700 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:border-neutral-500 dark:hover:border-neutral-500 transition-colors"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

              <div className="relative p-6">
                {/* Top row - Country & Trending */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{headline.flag}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-black dark:text-[#c0c0c8]">
                      {headline.country}
                    </span>
                  </div>
                  {headline.trending && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700">
                      <TrendingUp className="w-3 h-3 text-black dark:text-[#8a8a94]" />
                      <span className="text-[10px] font-semibold text-black dark:text-[#8a8a94] uppercase">Trending</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 dark:text-[#e8e8ec] mb-3 group-hover:text-neutral-600 dark:group-hover:text-white transition-colors duration-300 line-clamp-2">
                  {headline.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-black dark:text-[#8a8a94] mb-4 line-clamp-3">
                  {headline.summary}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center gap-1.5 text-xs text-black dark:text-[#8a8a94]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{headline.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-black dark:text-[#c0c0c8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Read more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Bottom accent line - neutral */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-400 dark:bg-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white font-medium transition-all duration-300"
            >
              <Newspaper className="w-5 h-5" />
              <span>View All Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
