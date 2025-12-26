"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Cpu,
  Shield,
  TrendingUp,
  Wheat,
  Trophy,
  Newspaper,
} from "lucide-react";

interface Category {
  label: string;
  icon: React.ElementType;
  gradient: string;
  hoverGradient: string;
  glowColor: string;
}

const categories: Category[] = [
  {
    label: "Tech/AI",
    icon: Cpu,
    gradient: "from-purple-500/20 to-blue-500/20",
    hoverGradient: "from-purple-500/40 to-blue-500/40",
    glowColor: "rgba(147, 51, 234, 0.5)",
  },
  {
    label: "Military",
    icon: Shield,
    gradient: "from-slate-500/20 to-zinc-500/20",
    hoverGradient: "from-slate-500/40 to-zinc-500/40",
    glowColor: "rgba(100, 116, 139, 0.5)",
  },
  {
    label: "Economy",
    icon: TrendingUp,
    gradient: "from-emerald-500/20 to-teal-500/20",
    hoverGradient: "from-emerald-500/40 to-teal-500/40",
    glowColor: "rgba(16, 185, 129, 0.5)",
  },
  {
    label: "Agriculture",
    icon: Wheat,
    gradient: "from-amber-500/20 to-yellow-500/20",
    hoverGradient: "from-amber-500/40 to-yellow-500/40",
    glowColor: "rgba(245, 158, 11, 0.5)",
  },
  {
    label: "Sports",
    icon: Trophy,
    gradient: "from-orange-500/20 to-red-500/20",
    hoverGradient: "from-orange-500/40 to-red-500/40",
    glowColor: "rgba(249, 115, 22, 0.5)",
  },
  {
    label: "News",
    icon: Newspaper,
    gradient: "from-cyan-500/20 to-sky-500/20",
    hoverGradient: "from-cyan-500/40 to-sky-500/40",
    glowColor: "rgba(6, 182, 212, 0.5)",
  },
];

interface CategoryBadgesProps {
  className?: string;
}

export function CategoryBadges({ className }: CategoryBadgesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={cn("flex flex-wrap gap-2", className)}
    >
      {categories.map((category, index) => {
        const Icon = category.icon;
        return (
          <motion.button
            key={category.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.7 + index * 0.08,
              ease: [0.23, 1, 0.32, 1],
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative"
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute -inset-1 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: category.glowColor }}
            />

            {/* Badge container */}
            <div
              className={cn(
                "relative flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                "bg-gradient-to-r",
                category.gradient,
                "group-hover:bg-gradient-to-r",
                "border border-white/10 group-hover:border-white/25",
                "backdrop-blur-sm",
                "transition-all duration-300 ease-out",
                "cursor-pointer"
              )}
            >
              {/* Icon */}
              <Icon className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors duration-300" />
              
              {/* Label */}
              <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                {category.label}
              </span>
            </div>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
