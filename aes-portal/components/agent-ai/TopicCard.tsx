"use client";

import { motion } from "framer-motion";
import { Flag, Building, Globe, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { educationalTopics } from "@/data/leaders";

interface TopicCardProps {
  topic: typeof educationalTopics[0];
  index: number;
  onClick: () => void;
}

const categoryIcons: Record<string, React.ElementType> = {
  flag: Flag,
  building: Building,
  globe: Globe,
  sparkles: Sparkles,
  link: BookOpen,
};

const categoryColors: Record<string, string> = {
  flag: "from-red-500/20 to-orange-500/20",
  building: "from-blue-500/20 to-indigo-500/20",
  globe: "from-green-500/20 to-emerald-500/20",
  sparkles: "from-amber-500/20 to-yellow-500/20",
  link: "from-purple-500/20 to-pink-500/20",
};

export function TopicCard({ topic, index, onClick }: TopicCardProps) {
  const IconComponent = categoryIcons[topic.icon] || Sparkles;
  const gradientColor = categoryColors[topic.icon] || "from-amber-500/20 to-green-500/20";

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 30 }}
      onClick={onClick}
      className="group relative w-full text-left"
    >
      {/* Glow Effect - subtle in light mode */}
      <div className={`absolute inset-0 bg-gradient-to-br from-slate-400/20 to-zinc-400/20 dark:${gradientColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className="relative bg-slate-100 dark:bg-stone-800/80 border-2 border-slate-300 dark:border-stone-700 group-hover:border-slate-400 dark:group-hover:border-amber-500/50 rounded-2xl p-5 transition-all duration-300 group-hover:shadow-lg">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-slate-300 to-zinc-300 dark:${gradientColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className="w-6 h-6 text-slate-600 dark:text-amber-400" />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-slate-700 dark:text-white group-hover:text-slate-900 dark:group-hover:text-amber-400 transition-colors">
                {topic.title}
              </h3>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-300" />
            </div>
            <p className="text-sm text-slate-500 dark:text-stone-400 mt-1 line-clamp-2">
              {topic.description}
            </p>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
