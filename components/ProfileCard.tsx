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
      whileHover={{ y: -5 }}
      className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl hover:bg-gray-900 transition-colors"
    >
      <div className={`w-16 h-16 rounded-full ${color} mb-4 flex items-center justify-center text-2xl font-bold text-black`}>
        {name.charAt(0)}
      </div>
      <h3 className="text-xl font-heading font-bold mb-1 text-gray-600">{name}</h3>
      <p className="text-sm text-gray-600 mb-3 uppercase tracking-wider">{role}</p>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
