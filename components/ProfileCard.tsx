"use client";

import { motion } from "framer-motion";

interface ProfileCardProps {
  name: string;
  role: string;
  description: string;
  color: string;
  delay: number;
}

export function ProfileCard({ name, role, description, color, delay }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="group relative bg-card dark:bg-gray-900/50 border border-border dark:border-gray-800 p-6 rounded-2xl hover-caramel-glow overflow-hidden"
    >
      {/* Subtle gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/0 to-amber-200/0 group-hover:from-amber-100/40 group-hover:to-amber-50/60 dark:group-hover:from-amber-900/10 dark:group-hover:to-transparent transition-all duration-500 rounded-2xl" />

      {/* Content */}
      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-full ${color} mb-4 flex items-center justify-center text-2xl font-bold text-black shadow-[0_4px_20px_rgba(107,68,35,0.3)] dark:shadow-lg group-hover:shadow-[0_8px_30px_rgba(139,105,20,0.4)] dark:group-hover:shadow-xl transition-shadow duration-300`}>
          {name.charAt(0)}
        </div>
        <h3 className="text-xl font-heading font-bold mb-1 text-foreground dark:text-stone-200 group-hover:text-amber-900 dark:group-hover:text-amber-300 transition-colors duration-300">{name}</h3>
        <p className="text-sm text-amber-800 dark:text-amber-400/80 mb-3 uppercase tracking-wider font-semibold">{role}</p>
        <p className="text-sm text-muted-foreground dark:text-stone-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-600/60 dark:group-hover:via-amber-500/40 transition-all duration-500" />
    </motion.div>
  );
}
