"use client";

import { motion } from "framer-motion";
import { Shield, Users, MapPin, Gem, Wheat, Calendar, Flag, Target } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    icon: Users,
    value: "72M+",
    label: "Combined Population",
    color: "text-amber-500",
  },
  {
    icon: MapPin,
    value: "2.78M",
    label: "km² Territory",
    color: "text-green-500",
  },
  {
    icon: Gem,
    value: "#1",
    label: "Gold Producer Region",
    color: "text-yellow-500",
  },
  {
    icon: Wheat,
    value: "60%",
    label: "Agricultural Land",
    color: "text-orange-500",
  },
];

const countries = [
  {
    name: "Mali",
    flag: "/aes/AES/pride-of-mali.jpg",
    leader: "Colonel Assimi Goïta",
    role: "President of Transition",
    description: "A key pillar of the alliance, leading efforts in security and political independence.",
    color: "from-green-500 to-yellow-500",
    borderColor: "border-green-500/40",
    emoji: "🇲🇱",
  },
  {
    name: "Burkina Faso",
    flag: "/aes/AES/ibrahim-traore.jpg",
    leader: "Captain Ibrahim Traoré",
    role: "President of Transition",
    description: "Driving the agricultural revolution and food sovereignty initiatives.",
    color: "from-red-500 to-green-500",
    borderColor: "border-red-500/40",
    emoji: "🇧🇫",
  },
  {
    name: "Niger",
    flag: "/aes/Images-AES-Leaders/Niger/Abdourahamane_Tchiani_in_2025_(cropped).jpg",
    leader: "General Abdourahamane Tiani",
    role: "President of CNSP",
    description: "Strategic partner in defense and resource management for the Sahel.",
    color: "from-orange-500 to-green-500",
    borderColor: "border-orange-500/40",
    emoji: "🇳🇪",
  },
];

const achievements = [
  {
    title: "Mutual Defense Pact",
    description: "An attack on one is an attack on all - united military response against threats",
    icon: Shield,
  },
  {
    title: "Economic Integration",
    description: "Shared currency plans, free trade zone, and joint infrastructure projects",
    icon: Target,
  },
  {
    title: "ECOWAS Exit",
    description: "January 2025 formal withdrawal, charting an independent regional path",
    icon: Flag,
  },
];

export default function AESPage() {
  return (
    <div className="min-h-screen bg-background py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6"
          >
            <Shield className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
              Alliance of Sahel States
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground dark:text-white mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-amber-500 via-green-500 to-red-500 bg-clip-text text-transparent">
              AES
            </span>{" "}
            Alliance
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A confederation of Mali, Burkina Faso, and Niger formed to foster mutual defense,
            economic cooperation, and a bold step towards regional sovereignty and self-determination.
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-amber-500 via-green-500 to-red-500 rounded-full mt-8" />
        </motion.header>

        {/* Formation Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-neutral-600 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            <Calendar className="w-5 h-5 text-amber-500" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground dark:text-gray-500 uppercase tracking-wider">Founded</p>
              <p className="text-sm font-bold text-foreground dark:text-white">September 16, 2023</p>
            </div>
            <div className="w-px h-8 bg-amber-500/30 mx-2" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground dark:text-gray-500 uppercase tracking-wider">Charter</p>
              <p className="text-sm font-bold text-foreground dark:text-white">Liptako-Gourma</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-neutral-700 rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <p className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Member Nations */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground dark:text-white mb-8">
            Three Nations, One Vision
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-neutral-600 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                  {/* Leader Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={country.flag}
                      alt={country.leader}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 text-3xl bg-white/90 dark:bg-neutral-800/90 rounded-lg p-2">
                      {country.emoji}
                    </div>
                  </div>

                  {/* Info Bar */}
                  <div className={`bg-gradient-to-r ${country.color} px-4 py-3`}>
                    <p className="text-white font-bold text-lg leading-tight">
                      {country.leader}
                    </p>
                    <p className="text-white/90 text-sm">
                      {country.role} - {country.name}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="p-4">
                    <p className="text-muted-foreground dark:text-gray-400 text-sm">
                      {country.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground dark:text-white mb-8">
            Key Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-neutral-700 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <achievement.icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-br from-amber-500/10 via-green-500/10 to-red-500/10 dark:from-neutral-900 dark:to-neutral-800 border-2 border-amber-500/30 dark:border-neutral-700 rounded-2xl p-8 md:p-10 max-w-4xl">
            <p className="text-lg md:text-xl text-foreground dark:text-gray-200 leading-relaxed italic">
              &quot;An attack on one member state is considered an attack on all member states.
              Together, we are building an Africa that is{" "}
              <span className="font-bold text-amber-500">sovereign</span>,{" "}
              <span className="font-bold text-green-500">self-sufficient</span>, and{" "}
              <span className="font-bold text-red-500">united</span>.&quot;
            </p>
            <p className="mt-4 text-sm text-muted-foreground dark:text-gray-500 font-semibold">
              — Liptako-Gourma Charter, 2023
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
