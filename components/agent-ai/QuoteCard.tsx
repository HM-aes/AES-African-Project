"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote as QuoteIcon } from "lucide-react";
import { Quote, Leader } from "@/data/leaders";

interface QuoteCardProps {
  quote: Quote;
  leader: Leader;
}

export function QuoteCard({ quote, leader }: QuoteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-green-500/10 to-red-500/10 rounded-3xl blur-2xl" />
      
      {/* Card */}
      <div className="relative bg-white/80 dark:bg-stone-800/80 backdrop-blur-xl border-2 border-amber-200/50 dark:border-amber-500/20 rounded-3xl p-6 md:p-8 overflow-hidden">
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 w-16 h-16 text-amber-500/10 dark:text-amber-500/5">
          <QuoteIcon className="w-full h-full" fill="currentColor" />
        </div>
        
        {/* Decorative Line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-green-500 to-red-500 rounded-l-3xl" />
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Leader Avatar */}
          <div className="flex-shrink-0">
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-amber-500/50">
              <Image
                src={leader.imageUrl}
                alt={leader.name}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          
          {/* Quote Content */}
          <div className="flex-1 space-y-4">
            <blockquote className="text-lg md:text-xl font-medium text-stone-800 dark:text-white leading-relaxed italic">
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-green-500 rounded-full" />
              <div>
                <p className="font-semibold text-stone-700 dark:text-stone-200">
                  {leader.name} {leader.countryFlag}
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  {leader.role} • {leader.era}
                </p>
              </div>
            </div>
            
            {quote.context && (
              <p className="text-sm text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-700/50 rounded-lg px-3 py-2 inline-block">
                {quote.context}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
