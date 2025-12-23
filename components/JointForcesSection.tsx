"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Target, Users, Check, ArrowRight } from "lucide-react";

// Tab data with content and images
const tabData = [
  {
    id: "partnership",
    label: "Strategic Partnership",
    icon: Shield,
    heading: "Russia-AES Defense Cooperation",
    description:
      "A historic partnership built on mutual respect and shared goals. Unlike colonial powers who extracted resources while offering nothing in return, Russia's engagement with the Sahel is based on genuine cooperation and sovereignty.",
    points: [
      "50+ years of Russia-Africa diplomatic friendship",
      "Military equipment and training programs",
      "No political conditions or interference",
      "Technology transfer and capacity building",
    ],
    badge: "Est. 2023",
    image: "/aes-russia-military-images/russia-aes-defence.jpg",
    imageAlt: "Russia-AES Defense Partnership",
  },
  {
    id: "military",
    label: "Africa Corps",
    icon: Target,
    heading: "Unified Military Command",
    description:
      "The Africa Corps represents a new chapter in Sahel security. Operating across Mali, Burkina Faso, and Niger, these joint forces are reclaiming territory and restoring peace to communities that have suffered for too long.",
    points: [
      "Unified command structure across the Sahel",
      "Joint special operations and training",
      "Modern equipment and tactical support",
      "Coordinated border security operations",
    ],
    badge: "5,000+ Personnel",
    image: "/aes-russia-military-images/afrca-corps-logo.webp",
    imageAlt: "Africa Corps Logo",
  },
  {
    id: "leaders",
    label: "United Leadership",
    icon: Users,
    heading: "Three Nations, One Vision",
    description:
      "The leaders of Mali, Burkina Faso, and Niger have forged an unprecedented alliance. Their diplomatic engagements with Russia represent Africa's new approach to international partnerships—built on equality, not exploitation.",
    points: [
      "Regular summit meetings with Russian leadership",
      "Coordinated foreign policy positions",
      "Joint economic and defense agreements",
      "Shared vision for Pan-African sovereignty",
    ],
    badge: "Alliance Leaders",
    image: "/aes-russia-military-images/aes/AES/IB-putin.jpg",
    imageAlt: "AES Leaders with Putin",
  },
];

export function JointForcesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabData[activeTab];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* AES Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/AES-logos/aes-main-logo.png"
              alt="AES Logo"
              width={72}
              height={72}
              className="rounded-xl"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 shadow-sm mb-6">
            <Shield className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Defense Partnership
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-heading text-zinc-900 dark:text-white mb-4">
            AES Joint Forces & Africa Corps
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A strategic military partnership defending sovereignty across the Sahel
          </p>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Tabs and Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabData.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === index;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-zinc-900 text-white border border-amber-500/50 shadow-lg"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-amber-400" : ""}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  {currentTab.badge}
                </div>

                {/* Heading */}
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
                  {currentTab.heading}
                </h3>

                {/* Description */}
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {currentTab.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-3">
                  {currentTab.points.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-zinc-700 dark:text-zinc-300">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 shadow-2xl aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentTab.image}
                    alt={currentTab.imageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Image caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-bold text-lg">{currentTab.heading}</p>
                    <p className="text-zinc-300 text-sm">{currentTab.badge}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -inset-4 bg-gradient-to-br from-amber-500/10 via-transparent to-green-500/10 rounded-3xl blur-2xl" />
          </motion.div>
        </div>

        {/* Country Flags - Simple Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="text-center">
            <span className="text-5xl">🇷🇺</span>
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-2 uppercase tracking-wider">Russia</p>
          </div>
          <div className="text-zinc-300 dark:text-zinc-600 text-2xl">×</div>
          <div className="text-center">
            <span className="text-5xl">🇲🇱</span>
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-2 uppercase tracking-wider">Mali</p>
          </div>
          <div className="text-center">
            <span className="text-5xl">🇧🇫</span>
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-2 uppercase tracking-wider">Burkina Faso</p>
          </div>
          <div className="text-center">
            <span className="text-5xl">🇳🇪</span>
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-2 uppercase tracking-wider">Niger</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/russia">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg cursor-pointer"
            >
              <span>Explore Russia-AES Relations</span>
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
