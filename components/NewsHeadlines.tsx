"use client";

import { motion } from "framer-motion";
import { Newspaper, Clock, ArrowRight, TrendingUp } from "lucide-react";

// Sample headlines - in production these would come from an API/CMS
const headlines = [
  { 
    country: "Mali", 
    flag: "🇲🇱", 
    title: "FAMA Forces Reclaim Northern Territory",
    summary: "Malian Armed Forces achieve major breakthrough in security operations, reclaiming strategic positions in the north.",
    time: "2 hours ago",
    color: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/40",
    textColor: "text-amber-400",
    trending: true
  },
  { 
    country: "Burkina Faso", 
    flag: "🇧🇫", 
    title: "Captain Traoré Announces Agricultural Revolution",
    summary: "New initiative aims for complete food sovereignty by 2026 through mechanized farming and irrigation projects.",
    time: "4 hours ago",
    color: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-500/40",
    textColor: "text-green-400",
    trending: true
  },
  { 
    country: "Niger", 
    flag: "🇳🇪", 
    title: "Niger Secures Historic Mining Agreement",
    summary: "New deal ensures 80% of uranium revenues stay within Niger, marking a turning point in resource management.",
    time: "6 hours ago",
    color: "from-orange-500/20 to-orange-600/10",
    borderColor: "border-orange-500/40",
    textColor: "text-orange-400",
    trending: false
  },
  { 
    country: "AES", 
    flag: "⭐", 
    title: "Russia-AES Defense Partnership Deepens",
    summary: "Joint military exercises and equipment modernization signal new era of strategic cooperation.",
    time: "8 hours ago",
    color: "from-amber-400/20 to-amber-500/10",
    borderColor: "border-amber-400/40",
    textColor: "text-amber-300",
    trending: false
  },
];

export function NewsHeadlines() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background dark:from-neutral-950 dark:via-neutral-900/50 dark:to-neutral-950 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-green-500/10 via-transparent to-transparent blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">Live Updates</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground dark:text-gray-200 mb-4">
            Latest from the{" "}
            <span className="bg-gradient-to-r from-amber-500 via-green-500 to-orange-500 bg-clip-text text-transparent">
              Sahel
            </span>
          </h2>
          <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            Breaking news and developments from Mali, Burkina Faso, and Niger
          </p>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-500 via-green-500 to-orange-500 rounded-full mt-6" />
        </motion.div>

        {/* News Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {headlines.map((headline, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`group relative rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 backdrop-blur-sm border-2 border-neutral-800 dark:border-neutral-600 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:border-amber-500 dark:hover:border-amber-500 transition-colors`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
              
              <div className="relative p-6">
                {/* Top row - Country & Trending */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{headline.flag}</span>
                    <span className={`text-xs font-bold uppercase tracking-wider ${headline.textColor}`}>
                      {headline.country}
                    </span>
                  </div>
                  {headline.trending && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 border border-amber-500/30">
                      <TrendingUp className="w-3 h-3 text-amber-400" />
                      <span className="text-[10px] font-semibold text-amber-400 uppercase">Trending</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-3 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300 line-clamp-2">
                  {headline.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4 line-clamp-3">
                  {headline.summary}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground dark:text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{headline.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-amber-500 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Read more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${headline.color.replace('/20', '/60').replace('/10', '/40')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
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
          <motion.a
            href="/news"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-neutral-600 hover:border-amber-500 text-foreground dark:text-white font-medium transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.3)]"
          >
            <Newspaper className="w-5 h-5 text-amber-500" />
            <span>View All News</span>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
