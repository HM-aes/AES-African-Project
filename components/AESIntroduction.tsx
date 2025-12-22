"use client";

import { motion } from "framer-motion";
import { Calendar, Shield } from "lucide-react";
import Image from "next/image";

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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 mb-6"
          >
            <Shield className="w-4 h-4 text-neutral-700 dark:text-[#c0c0c8]" />
            <span className="text-sm font-semibold text-neutral-700 dark:text-[#c0c0c8] uppercase tracking-wider">
              Alliance of Sahel States
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-neutral-900 dark:text-[#e8e8ec] mb-6">
            What is the AES?
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-[#8a8a94] max-w-3xl mx-auto leading-relaxed">
            The <span className="font-semibold text-neutral-900 dark:text-[#e8e8ec]">Alliance of Sahel States</span> (AES)
            is a mutual defense pact and confederation formed in September 2023, uniting
            <span className="font-semibold text-neutral-900 dark:text-[#e8e8ec]"> Mali</span>,
            <span className="font-semibold text-neutral-900 dark:text-[#e8e8ec]"> Burkina Faso</span>, and
            <span className="font-semibold text-neutral-900 dark:text-[#e8e8ec]"> Niger</span> in pursuit of
            sovereignty, security, and shared prosperity.
          </p>

          <div className="w-32 h-1 mx-auto bg-neutral-400 dark:bg-neutral-600 rounded-full mt-8" />
        </motion.div>

        {/* Key Stat - Population */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-[#e8e8ec]">
                72M+
              </p>
              <p className="text-sm text-neutral-500 dark:text-[#8a8a94] mt-1">
                Combined Population
              </p>
            </div>
            <div className="w-px h-12 bg-neutral-300 dark:bg-neutral-700" />
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-neutral-600 dark:text-[#8a8a94]" />
                <p className="text-xs text-neutral-500 dark:text-[#8a8a94] uppercase tracking-wider">Founded</p>
              </div>
              <p className="text-lg font-bold text-neutral-900 dark:text-[#e8e8ec]">September 16, 2023</p>
              <p className="text-xs text-neutral-500 dark:text-[#8a8a94]">Liptako-Gourma Charter</p>
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

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-10 max-w-4xl backdrop-blur-sm">
            <p className="text-lg md:text-xl text-neutral-700 dark:text-[#c0c0c8] leading-relaxed italic">
              "An attack on one member state is considered an attack on all member states.
              Together, we are building an Africa that is <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]">sovereign</span>,
              <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]"> self-sufficient</span>, and
              <span className="font-bold text-neutral-900 dark:text-[#e8e8ec]"> united</span>."
            </p>
            <p className="mt-4 text-sm text-neutral-500 dark:text-[#8a8a94] font-semibold">
              — Liptako-Gourma Charter, 2023
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
