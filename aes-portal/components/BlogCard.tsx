"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  color: string;
  delay: number;
  slug?: string; // Optional slug for linking to blog detail page
}

export function BlogCard({ title, excerpt, category, date, color, delay, slug }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="group relative bg-card dark:bg-gray-900/50 border border-border dark:border-gray-800 rounded-2xl overflow-hidden hover-espresso-lift"
    >
      {/* Amber glow overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-transparent to-amber-600/0 group-hover:from-amber-500/5 group-hover:to-amber-600/10 dark:group-hover:from-amber-500/5 dark:group-hover:to-transparent transition-all duration-500 pointer-events-none z-10 rounded-2xl" />

      <div className={`h-48 ${color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent group-hover:from-black/30 group-hover:via-black/10 transition-all duration-300" />
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1.5 bg-gradient-to-r from-amber-900/80 to-amber-800/80 dark:from-black/60 dark:to-black/60 backdrop-blur-md rounded-full text-xs text-amber-100 dark:text-white font-bold uppercase tracking-wider shadow-lg">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 bg-gradient-to-b from-transparent via-transparent to-amber-50/40 dark:to-transparent relative z-20">
        <div className="text-sm text-muted-foreground dark:text-stone-400 mb-2 font-medium">{date}</div>
        <h3 className="text-xl font-heading font-bold mb-3 text-foreground dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground dark:text-stone-300 mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
        <Link
          href={slug ? `/blog/${slug}` : "#"}
          className="inline-flex items-center text-amber-800 dark:text-amber-400 font-bold transition-all duration-300 hover:text-amber-900 dark:hover:text-amber-300 group/link"
        >
          Read Article
          <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
