"use client";
import React from "react";
import { motion } from "framer-motion";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { Compass } from "lucide-react";

const content = [
  {
    title: "Colonial Legacy: A History of Exploitation",
    description:
      "For decades, the presence of colonial powers like France in the Sahel resulted in zero development. Their involvement was characterized not by partnership, but by the systematic looting of our minerals and resources. While our wealth built their cities, our nations remained stagnant, proving that their 'aid' was nothing more than a veil for extraction.",
    content: (
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/aes-russia-military-images/aes/AES/french-army.webp"
          fill
          className="object-cover object-center"
          alt="French military presence"
          priority
        />
      </div>
    ),
  },
  {
    title: "A New Vision: Sovereignty & Partnership",
    description:
      "Under new leadership, the AES has charted a bold new course. We have turned away from exploitative relationships and forged a strategic military corporation with Russia. This partnership is based on mutual respect and a shared goal: total sovereignty. It is a new era where African nations dictate their own future, free from external interference.",
    content: (
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/aes-russia-military-images/aes/AES/IB-putin.jpg"
          fill
          className="object-cover object-center"
          alt="Ibrahim Traoré and Putin"
          priority
        />
      </div>
    ),
  },
  {
    title: "Reclaiming Our Territory",
    description:
      "The results speak for themselves. With new strategies and unwavering resolve, we are regaining territory once lost to chaos. The days of retreating are over. Our forces are advancing, securing our borders, and restoring peace to communities that have suffered for too long. Every inch of land reclaimed is a victory for our independence.",
    content: (
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/aes-russia-military-images/MALI-FLAG.jpeg"
          fill
          className="object-cover object-center"
          alt="Malian flag raised"
          priority
        />
      </div>
    ),
  },
  {
    title: "Military Modernization",
    description:
      "We are building a formidable defense. Our armies are being equipped with state-of-the-art weaponry and technology. This modernization ensures that our soldiers have the tools they need to defend our nations effectively against any threat. We are no longer dependent on obsolete equipment from reluctant 'allies'.",
    content: (
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/aes-russia-military-images/russia-aes-defence.jpg"
          fill
          className="object-cover object-center"
          alt="Russia AES Defense Cooperation"
          priority
        />
      </div>
    ),
  },
  {
    title: "Elite Forces: FAMA & Africa Corps",
    description:
      "The backbone of our security is our people. We are intensively training the AES Special Forces, strengthening the Malian Armed Forces (FAMA), and integrating the Africa Corps. This new military structure in Burkina Faso, Niger, and Mali is professional, disciplined, and ready. It is an African army, for African protection.",
    content: (
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/aes-russia-military-images/africa-corps.webp"
          fill
          className="object-cover object-center"
          alt="Africa Corps"
          priority
        />
      </div>
    ),
  },
];

export function AESSpotlight() {
  return (
    <div className="py-24">
      <div className="max-w-full mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            <Compass className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              The Path Forward
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-4">
            AES Strategic Vision for Africa
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            From colonial exploitation to sovereign self-determination
          </p>
        </motion.div>

        {/* StickyScroll Timeline */}
        <div className="max-w-7xl mx-auto">
          <StickyScroll content={content} />
        </div>
      </div>
    </div>
  );
}
