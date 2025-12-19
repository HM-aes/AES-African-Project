"use client";

import { motion } from "framer-motion";
import { Heart, MapPin, Target, Users, Lightbulb, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-5xl mx-auto">
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
            <Heart className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
              About the Creator
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground dark:text-white mb-6">
            An East African&apos;s Vision for{" "}
            <span className="bg-gradient-to-r from-amber-500 via-green-500 to-red-500 bg-clip-text text-transparent">
              Pan-African Unity
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-400 max-w-3xl mx-auto">
            Building bridges between East Africa and the Sahel, one story at a time.
          </p>

          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-amber-500 via-green-500 to-red-500 rounded-full mt-8" />
        </motion.header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border-2 border-neutral-800 dark:border-neutral-700 shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 via-green-500 to-red-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-bold text-foreground dark:text-white">
                    From East Africa
                  </h2>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">
                    With love for the entire continent
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground dark:text-gray-300 leading-relaxed">
                <p>
                  I am an African from the eastern part of our beautiful continent. Like many
                  of us across Africa, I&apos;ve watched with growing admiration as the Alliance
                  of Sahel States charts a bold new course for African sovereignty.
                </p>
                <p>
                  The courage displayed by leaders like <span className="text-amber-500 font-semibold">Captain Ibrahim Traoré</span>,{" "}
                  <span className="text-green-500 font-semibold">Colonel Assimi Goïta</span>, and{" "}
                  <span className="text-orange-500 font-semibold">General Abdourahamane Tiani</span>{" "}
                  has inspired millions of us across the continent. They represent the kind of
                  leadership Africa has been yearning for—leaders who put their people first.
                </p>
                <p>
                  This platform is my contribution to the Pan-African cause. Through technology
                  and storytelling, I aim to amplify the truth about what&apos;s happening in the
                  Sahel and connect it to the broader Pan-African movement.
                </p>
              </div>
            </div>

            {/* Aspirations */}
            <div className="bg-gradient-to-br from-amber-500/10 via-green-500/10 to-red-500/10 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl p-8 border-2 border-amber-500/30 dark:border-neutral-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-amber-500" />
                </div>
                <h2 className="text-xl font-heading font-bold text-foreground dark:text-white">
                  My Aspiration
                </h2>
              </div>

              <p className="text-muted-foreground dark:text-gray-300 leading-relaxed mb-6">
                My dream is to one day work directly with the AES nations—to bring my skills
                in technology, communication, and digital infrastructure to serve the Sahel&apos;s
                transformation. Whether in tech development, media, education, or public service,
                I believe every African has a role to play in building the Africa we deserve.
              </p>

              <div className="flex items-center gap-2 text-amber-500 font-semibold">
                <span>Until then, I build from where I am</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Mission & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Mission */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border-2 border-neutral-800 dark:border-neutral-700 shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-green-500" />
                </div>
                <h2 className="text-xl font-heading font-bold text-foreground dark:text-white">
                  Platform Mission
                </h2>
              </div>

              <ul className="space-y-4">
                {[
                  {
                    title: "Amplify Truth",
                    description: "Counter misinformation about AES nations with factual, well-sourced reporting"
                  },
                  {
                    title: "Celebrate Achievement",
                    description: "Highlight the remarkable progress in agriculture, security, and sovereignty"
                  },
                  {
                    title: "Educate & Inspire",
                    description: "Connect today's leaders to our Pan-African heritage and historical icons"
                  },
                  {
                    title: "Build Community",
                    description: "Create a space for Pan-Africanists worldwide to learn and connect"
                  }
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-white">{item.title}</h3>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pan-African Connection */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 border-2 border-neutral-800 dark:border-neutral-700 shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-red-500" />
                </div>
                <h2 className="text-xl font-heading font-bold text-foreground dark:text-white">
                  Why This Matters
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground dark:text-gray-300 leading-relaxed">
                <p>
                  The revolution in the Sahel isn&apos;t just about Mali, Burkina Faso, and Niger.
                  It&apos;s about all of us. When Captain Traoré speaks of African dignity, he speaks
                  for every African. When the AES demands sovereignty, they demand it for all of us.
                </p>
                <p>
                  From East Africa, I see the same struggles—the same foreign interference, the
                  same resource extraction, the same media distortions. The AES shows us that
                  another path is possible.
                </p>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/10 via-green-500/10 to-red-500/10 rounded-xl border border-amber-500/20">
                <p className="text-foreground dark:text-white font-semibold text-center italic">
                  &quot;The future of Africa will be built by Africans, for Africans.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-neutral-900 to-black dark:from-neutral-800 dark:to-neutral-900 rounded-2xl p-8 md:p-12 border-2 border-amber-500/30">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Join the Movement
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you&apos;re in West Africa, East Africa, the diaspora, or anywhere in the world,
              you have a role to play in building the Africa we deserve. Start by staying informed.
              Share the truth. Support African initiatives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(251,191,36,0.3)]"
              >
                Read Our Stories
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
              >
                Explore the Hub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground dark:text-gray-500">
            Built with love from East Africa for all of Africa and the diaspora.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="text-2xl">🇲🇱</span>
            <span className="text-2xl">🇧🇫</span>
            <span className="text-2xl">🇳🇪</span>
            <span className="text-xl text-amber-500">+</span>
            <span className="text-2xl">🌍</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
