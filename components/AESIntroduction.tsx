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
          className="text-center mb-16"
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
            <Shield className="w-4 h-4 text-neutral-700 dark:text-[#c0c0c8]" />
            <span className="text-sm font-semibold text-neutral-700 dark:text-[#c0c0c8] uppercase tracking-wider">
              Alliance of Sahel States
            </span>
          </motion.div>
        </motion.div>

        {/* Video Section - Faso7 Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          {/* Pan-African Gradient Border Wrapper */}
          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-amber-500 via-green-500 to-red-500 shadow-[0_0_40px_rgba(245,158,11,0.3),0_0_40px_rgba(34,197,94,0.3),0_0_40px_rgba(239,68,68,0.3)]">
            <div className="rounded-3xl overflow-hidden">
              <YouTubePlayer
                videoId="aoszsEpNFiQ"
                title="Understanding the Alliance of Sahel States"
                containerClassName="rounded-3xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Three Nations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-neutral-900 dark:text-[#e8e8ec] mb-8">
            Three Nations, One Vision
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  {/* Leader Image - Taller to show full face */}
                  <div className="relative h-72 md:h-80 overflow-hidden">
                    <Image
                      src={country.image}
                      alt={country.leader}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Flag overlay */}
                    <div className="absolute top-4 right-4 text-3xl drop-shadow-lg bg-white/90 dark:bg-neutral-800/90 rounded-lg p-2">
                      {country.flag}
                    </div>
                  </div>

                  {/* Content - Compact info bar at bottom - now black/neutral */}
                  <div className="bg-neutral-900 dark:bg-neutral-800 px-4 py-3">
                    <p className="text-white font-bold text-lg leading-tight">
                      {country.leader}
                    </p>
                    <p className="text-white/80 text-sm">
                      {country.role} • <span className="font-semibold">{country.name}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement - Shadcn dark style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block bg-zinc-900 border-l-4 border-amber-500/60 rounded-2xl p-8 md:p-10 max-w-4xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800/80 pointer-events-none" />
            
            <p className="relative text-lg md:text-xl text-white leading-relaxed italic">
              "An attack on one member state is considered an attack on all member states.
              Together, we are building an Africa that is <span className="font-bold text-amber-400">sovereign</span>,
              <span className="font-bold text-amber-400"> self-sufficient</span>, and
              <span className="font-bold text-amber-400"> united</span>."
            </p>
            <p className="relative mt-4 text-sm text-zinc-400 font-semibold">
              — Liptako-Gourma Charter, 2023
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
