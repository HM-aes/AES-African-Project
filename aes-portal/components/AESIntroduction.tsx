"use client";

import { motion } from "framer-motion";
import { Calendar, Shield } from "lucide-react";
import Image from "next/image";
import { YouTubePlayer } from "@/components/ui/youtube-video-player";

const countries = [
  {
    name: "Mali",
    flag: "🇲🇱",
    leader: "Col. Assimi Goïta",
    role: "President of Transition",
    image: "/aes/Images-AES-Leaders/Mali/assimi-Goita-Mali-president.jpg",
  },
  {
    name: "Burkina Faso",
    flag: "🇧🇫",
    leader: "Capt. Ibrahim Traoré",
    role: "President of Transition",
    image: "/aes/AES/ibrahim-traore.jpg",
  },
  {
    name: "Niger",
    flag: "🇳🇪",
    leader: "Gen. Abdourahamane Tiani",
    role: "President of CNSP",
    image: "/aes/Images-AES-Leaders/Niger/Abdourahamane_Tchiani_in_2025_(cropped).jpg",
  },
];

export function AESIntroduction() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background elements - neutral */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-radial from-neutral-300/20 via-transparent to-transparent dark:from-neutral-700/10 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-gradient-radial from-neutral-300/20 via-transparent to-transparent dark:from-neutral-700/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          {/* Header FIRST */}
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-neutral-900 dark:text-[#e8e8ec] mb-4">
            The Birth of AES
          </h2>

          {/* Tag/Badge AFTER header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700"
          >
            <Shield className="w-4 h-4 text-black dark:text-[#c0c0c8]" />
            <span className="text-sm font-semibold text-black dark:text-[#c0c0c8] uppercase tracking-wider">
              Alliance of Sahel States
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
