"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { X, Sparkles, BookOpen, Flag, Building, Globe } from "lucide-react";
import { Leader, educationalTopics } from "@/data/leaders";

interface LeaderSidebarProps {
  leaders: Leader[];
  selectedLeader: Leader | null;
  onSelectLeader: (leader: Leader | null) => void;
  onClose: () => void;
}

const categoryIcons: Record<string, React.ElementType> = {
  flag: Flag,
  building: Building,
  globe: Globe,
  sparkles: Sparkles,
  link: BookOpen,
};

export function LeaderSidebar({
  leaders,
  selectedLeader,
  onSelectLeader,
  onClose,
}: LeaderSidebarProps) {
  return (
    <div className="h-full bg-gradient-to-b from-slate-100 via-slate-150 to-slate-200 dark:from-stone-900 dark:via-stone-900 dark:to-stone-950 backdrop-blur-xl border-r-2 border-slate-400 dark:border-amber-500/30 flex flex-col relative overflow-hidden">
      {/* Decorative gradient line on the right edge */}
      <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-500 via-green-500 to-red-500 opacity-60 dark:opacity-80" />
      
      {/* Header */}
      <div className="p-4 border-b-2 border-slate-300 dark:border-stone-700 bg-slate-200/50 dark:bg-stone-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-green-500 to-red-500 p-[2px] shadow-lg shadow-amber-500/20">
              <div className="w-full h-full rounded-[10px] bg-slate-100 dark:bg-stone-900 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-500" />
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-slate-800 dark:text-white">Agent AI</h2>
              <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">Pan-African Education</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="hidden lg:flex p-2 rounded-lg hover:bg-slate-300 dark:hover:bg-stone-800 text-slate-400 hover:text-slate-600 dark:hover:text-stone-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Leaders Section */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-green-500" />
            Historical Leaders
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {leaders.map((leader, index) => (
              <motion.button
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onSelectLeader(selectedLeader?.id === leader.id ? null : leader)}
                className={`relative group p-3 rounded-xl border-2 transition-all duration-300 ${
                  selectedLeader?.id === leader.id
                    ? "border-amber-500 bg-gradient-to-br from-amber-50 to-green-50 dark:from-amber-500/15 dark:to-green-500/10 shadow-lg shadow-amber-500/20"
                    : "border-slate-300 dark:border-stone-600 hover:border-amber-400 dark:hover:border-amber-500/50 bg-white/80 dark:bg-stone-800/60 hover:bg-gradient-to-br hover:from-slate-50 hover:to-amber-50/30 dark:hover:from-stone-800 dark:hover:to-amber-900/20"
                }`}
              >
                {/* Avatar */}
                <div className="relative w-14 h-14 mx-auto mb-2">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 via-green-500 to-red-500 p-[2.5px] shadow-md ${
                    selectedLeader?.id === leader.id ? "animate-pulse shadow-amber-500/40" : "shadow-slate-400/30"
                  }`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-stone-700">
                      <Image
                        src={leader.imageUrl}
                        alt={leader.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  {/* Country Flag Badge */}
                  <div className="absolute -bottom-1 -right-1 text-lg bg-white dark:bg-stone-800 rounded-full p-0.5 shadow-md border border-slate-200 dark:border-stone-600">
                    {leader.countryFlag}
                  </div>
                </div>

                {/* Info */}
                <p className={`text-sm font-semibold truncate ${
                  selectedLeader?.id === leader.id 
                    ? "text-amber-700 dark:text-amber-400" 
                    : "text-slate-700 dark:text-stone-200"
                }`}>
                  {leader.name.split(" ").slice(-1)[0]}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-stone-400 truncate">
                  {leader.era}
                </p>

                {/* Selection indicator */}
                {selectedLeader?.id === leader.id && (
                  <motion.div
                    layoutId="leader-selection"
                    className="absolute inset-0 rounded-xl border-2 border-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.3)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Topics Section */}
        <div className="p-4 border-t border-slate-300 dark:border-stone-700">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-stone-400 mb-3">
            Explore Topics
          </h3>
          <div className="space-y-2">
            {educationalTopics.map((topic, index) => {
              const IconComponent = categoryIcons[topic.icon] || BookOpen;
              return (
                <motion.button
                  key={topic.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-stone-800/50 hover:bg-slate-300 dark:hover:bg-amber-500/10 border border-slate-300 dark:border-stone-700 hover:border-slate-400 dark:hover:border-amber-500/50 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-400/30 to-zinc-400/30 dark:from-amber-500/20 dark:to-green-500/20 flex items-center justify-center group-hover:from-slate-400/50 group-hover:to-zinc-400/50 dark:group-hover:from-amber-500/30 dark:group-hover:to-green-500/30 transition-colors">
                    <IconComponent className="w-4 h-4 text-slate-600 dark:text-amber-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-slate-700 dark:text-stone-200">
                      {topic.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-stone-400 truncate">
                      {topic.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-300 dark:border-stone-700">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-stone-400">
          <BookOpen className="w-3 h-3" />
          <span>Learning about Pan-African history</span>
        </div>
      </div>
    </div>
  );
}
