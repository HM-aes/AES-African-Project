"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Calendar, Shield, Gem, Wheat } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    icon: Users,
    value: "72M+",
    label: "Population",
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
    flag: "🇲🇱",
    leader: "Col. Assimi Goïta",
    role: "President of Transition",
    color: "from-green-500/20 to-yellow-500/20",
    borderColor: "border-green-500/40",
    image: "/aes/Images-AES-Leaders/Mali/assimi-Goita-Mali-president.jpg",
  },
  {
    name: "Burkina Faso",
    flag: "🇧🇫",
    leader: "Capt. Ibrahim Traoré",
    role: "President of Transition",
    color: "from-red-500/20 to-green-500/20",
    borderColor: "border-red-500/40",
    image: "/aes/AES/ibrahim-traore.jpg",
  },
  {
    name: "Niger",
    flag: "🇳🇪",
    leader: "Gen. Abdourahamane Tiani",
    role: "President of CNSP",
    color: "from-orange-500/20 to-green-500/20",
    borderColor: "border-orange-500/40",
    image: "/aes/Images-AES-Leaders/Niger/Abdourahamane_Tchiani_in_2025_(cropped).jpg",
  },
];

export function AESIntroduction() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-background via-amber-950/5 to-background dark:from-neutral-950 dark:via-amber-950/10 dark:to-neutral-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-radial from-amber-500/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-gradient-radial from-green-500/10 via-transparent to-transparent blur-3xl" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6"
          >
            <Shield className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
              Alliance of Sahel States
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground dark:text-white mb-6">
            What is the{" "}
            <span className="bg-gradient-to-r from-amber-500 via-green-500 to-red-500 bg-clip-text text-transparent">
              AES
            </span>
            ?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The <span className="font-semibold text-foreground dark:text-white">Alliance of Sahel States</span> (AES)
            is a mutual defense pact and confederation formed in September 2023, uniting
            <span className="text-amber-500 font-semibold"> Mali</span>,
            <span className="text-green-500 font-semibold"> Burkina Faso</span>, and
            <span className="text-orange-500 font-semibold"> Niger</span> in pursuit of
            sovereignty, security, and shared prosperity.
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-amber-500 via-green-500 to-red-500 rounded-full mt-8" />
        </motion.div>

        {/* Formation Date Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-neutral-600 shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white dark:bg-neutral-900 backdrop-blur-sm border-2 border-neutral-800 dark:border-neutral-700 rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
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

        {/* Three Nations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground dark:text-white mb-8">
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
                <div className="relative bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-neutral-600 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
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

                  {/* Content - Compact info bar at bottom */}
                  <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 dark:from-amber-700 dark:via-amber-600 dark:to-yellow-600 px-4 py-3">
                    <p className="text-white font-bold text-lg leading-tight">
                      {country.leader}
                    </p>
                    <p className="text-white/90 text-sm">
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
          <div className="inline-block bg-white dark:bg-neutral-900 border-2 border-neutral-800 dark:border-neutral-600 rounded-2xl p-8 md:p-10 max-w-4xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <p className="text-lg md:text-xl text-foreground dark:text-gray-200 leading-relaxed italic">
              "An attack on one member state is considered an attack on all member states.
              Together, we are building an Africa that is <span className="font-bold text-amber-500">sovereign</span>,
              <span className="font-bold text-green-500"> self-sufficient</span>, and
              <span className="font-bold text-red-500"> united</span>."
            </p>
            <p className="mt-4 text-sm text-muted-foreground dark:text-gray-500 font-semibold">
              — Liptako-Gourma Charter, 2023
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
