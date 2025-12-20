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
    <div className="h-full bg-white/90 dark:bg-stone-900/95 backdrop-blur-xl border-r border-amber-200/50 dark:border-stone-700 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-amber-200/50 dark:border-stone-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-green-500 to-red-500 p-[2px]">
              <div className="w-full h-full rounded-[10px] bg-white dark:bg-stone-900 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-stone-800 dark:text-white">Agent AI</h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">Pan-African Education</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="hidden lg:flex p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Leaders Section */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
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
                    ? "border-amber-500 bg-amber-50 dark:bg-amber-500/10"
                    : "border-stone-200 dark:border-stone-700 hover:border-amber-300 dark:hover:border-amber-500/50 bg-stone-50/50 dark:bg-stone-800/50"
                }`}
              >
                {/* Avatar */}
                <div className="relative w-12 h-12 mx-auto mb-2">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-green-500 p-[2px] ${
                    selectedLeader?.id === leader.id ? "animate-pulse" : ""
                  }`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-stone-200 dark:bg-stone-700">
                      <Image
                        src={leader.imageUrl}
                        alt={leader.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  {/* Country Flag Badge */}
                  <div className="absolute -bottom-1 -right-1 text-lg bg-white dark:bg-stone-800 rounded-full p-0.5 shadow-md">
                    {leader.countryFlag}
                  </div>
                </div>

                {/* Info */}
                <p className="text-sm font-semibold text-stone-700 dark:text-stone-200 truncate">
                  {leader.name.split(" ").slice(-1)[0]}
                </p>
                <p className="text-[10px] text-stone-500 dark:text-stone-400 truncate">
                  {leader.era}
                </p>

                {/* Selection indicator */}
                {selectedLeader?.id === leader.id && (
                  <motion.div
                    layoutId="leader-selection"
                    className="absolute inset-0 rounded-xl border-2 border-amber-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Topics Section */}
        <div className="p-4 border-t border-stone-200 dark:border-stone-700">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">
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
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 hover:bg-amber-50 dark:hover:bg-amber-500/10 border border-stone-200 dark:border-stone-700 hover:border-amber-300 dark:hover:border-amber-500/50 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-green-500/20 flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-green-500/30 transition-colors">
                    <IconComponent className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-stone-700 dark:text-stone-200">
                      {topic.title}
                    </p>
                    <p className="text-xs text-stone-500 dark:text-stone-400 truncate">
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
      <div className="p-4 border-t border-stone-200 dark:border-stone-700">
        <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
          <BookOpen className="w-3 h-3" />
          <span>Learning about Pan-African history</span>
        </div>
      </div>
    </div>
  );
}
