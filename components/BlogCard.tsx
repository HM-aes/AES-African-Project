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
      whileHover={{ y: -10 }}
      className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-gray-800/20 transition-all"
    >
      <div className={`h-48 ${color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white font-bold uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-white mb-2">{date}</div>
        <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-gray-300 transition-colors">
          {title}
        </h3>
        <p className="text-white mb-4 line-clamp-3">
          {excerpt}
        </p>
        <Link
          href={slug ? `/blog/${slug}` : "#"}
          className="inline-flex items-center text-white font-bold hover:gap-2 transition-all"
        >
          Read Article <span className="ml-2">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
