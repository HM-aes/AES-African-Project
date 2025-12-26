"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Compass, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const content = [
  {
    title: "Colonial Legacy: A History of Exploitation",
    description:
      "For decades, the presence of colonial powers like France in the Sahel resulted in zero development. Their involvement was characterized not by partnership, but by the systematic looting of our minerals and resources. While our wealth built their cities, our nations remained stagnant, proving that their 'aid' was nothing more than a veil for extraction.",
    image: "/aes-russia-military-images/aes/AES/french-army.webp",
    alt: "French military presence",
  },
  {
    title: "A New Vision: Sovereignty & Partnership",
    description:
      "Under new leadership, the AES has charted a bold new course. We have turned away from exploitative relationships and forged a strategic military corporation with Russia. This partnership is based on mutual respect and a shared goal: total sovereignty. It is a new era where African nations dictate their own future, free from external interference.",
    image: "/aes-russia-military-images/aes/AES/IB-putin.jpg",
    alt: "Ibrahim Traoré and Putin",
  },
  {
    title: "Reclaiming Our Territory",
    description:
      "The results speak for themselves. With new strategies and unwavering resolve, we are regaining territory once lost to chaos. The days of retreating are over. Our forces are advancing, securing our borders, and restoring peace to communities that have suffered for too long. Every inch of land reclaimed is a victory for our independence.",
    image: "/aes-russia-military-images/MALI-FLAG.jpeg",
    alt: "Malian flag raised",
  },
  {
    title: "Military Modernization",
    description:
      "We are building a formidable defense. Our armies are being equipped with state-of-the-art weaponry and technology. This modernization ensures that our soldiers have the tools they need to defend our nations effectively against any threat. We are no longer dependent on obsolete equipment from reluctant 'allies'.",
    image: "/aes-russia-military-images/russia-aes-defence.jpg",
    alt: "Russia AES Defense Cooperation",
  },
  {
    title: "Elite Forces: FAMA & Africa Corps",
    description:
      "The backbone of our security is our people. We are intensively training the AES Special Forces, strengthening the Malian Armed Forces (FAMA), and integrating the Africa Corps. This new military structure in Burkina Faso, Niger, and Mali is professional, disciplined, and ready. It is an African army, for African protection.",
    image: "/aes-russia-military-images/africa-corps.webp",
    alt: "Africa Corps",
  },
];

export function AESSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? content.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === content.length - 1 ? 0 : prev + 1));
  };

  const currentContent = content[currentIndex];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
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

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Button
            onClick={handlePrevious}
            variant="outline"
            size="lg"
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-zinc-900 dark:bg-white"
                    : "w-2 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <Button
            onClick={handleNext}
            variant="outline"
            size="lg"
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Content Section - Side by Side Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left Side - Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                <span className="text-xs font-semibold text-black dark:text-zinc-400 uppercase tracking-wider">
                  {currentIndex + 1} of {content.length}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-zinc-900 dark:text-white leading-tight">
                {currentContent.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-zinc-600 dark:text-zinc-300">
                {currentContent.description}
              </p>

              {/* Progress Indicator */}
              <div className="pt-4">
                <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-zinc-900 dark:bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / content.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <span>Progress</span>
                  <span>{Math.round(((currentIndex + 1) / content.length) * 100)}%</span>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                {/* Decorative background blur */}
                <div className="absolute -inset-4 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={currentContent.image}
                    fill
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    alt={currentContent.alt}
                    priority
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Image Caption */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-lg px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-white font-medium">{currentContent.alt}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
