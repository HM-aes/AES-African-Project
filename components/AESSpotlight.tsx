"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

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
    <div className="py-20 bg-gradient-to-b from-amber-50 via-stone-100/50 to-background dark:from-background dark:via-background dark:to-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground dark:text-gray-200 drop-shadow-sm">
            The Path to Sovereignty
          </h2>
          <p className="text-2xl md:text-3xl font-heading text-stone-600 dark:text-gray-400">
            AES Journey
          </p>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 dark:from-amber-500 dark:to-amber-500 rounded-full mt-6" />
        </div>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
