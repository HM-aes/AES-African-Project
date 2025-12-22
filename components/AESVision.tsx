"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function AESVision() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-amber-400/20 via-transparent to-transparent blur-3xl dark:from-amber-500/10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-green-400/15 via-transparent to-transparent blur-3xl dark:from-emerald-500/10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground dark:text-gray-200 mb-4 drop-shadow-sm">
            AES Strategic Vision for Africa
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-400 italic">
            Carrying Forward the Dreams of Pan-African Giants
          </p>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-amber-600 to-amber-500 rounded-full mt-4" />
        </motion.div>

        {/* Main Article Card */}
        <motion.article
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group"
          style={{
            transition: 'box-shadow 0.3s ease-out',
            boxShadow: isHovered 
              ? '0 25px 50px -12px rgba(139, 69, 19, 0.5), 0 12px 24px -8px rgba(120, 53, 15, 0.4)' 
              : 'none',
            borderRadius: '1rem',
          }}
        >
          {/* Glassmorphic card with amber glow */}
          <div className="relative bg-white/90 dark:bg-neutral-900/80 backdrop-blur-2xl border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgba(180,120,20,0.08)] dark:shadow-[0_8px_40px_rgba(245,158,11,0.1)] hover:shadow-[0_20px_60px_rgba(180,120,20,0.15)] dark:hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)] transition-shadow duration-300">

            {/* Content */}
            <div className="relative z-10">
              {/* Article Header - Newspaper Style */}
              <div className="border-b-2 border-pan-gold/30 pb-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center gap-3 mb-3"
                >
                  <div className="h-1 w-12 bg-gradient-to-r from-pan-red to-pan-gold" />
                  <span className="text-xs md:text-sm font-bold tracking-widest text-pan-gold uppercase">
                    Special Report
                  </span>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-3"
                >
                  From Vision to Reality: The New Dawn of African Sovereignty
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-sm text-muted-foreground italic"
                >
                  How today's leaders honor the legacy of Sankara, Nkrumah, Lumumba, and Cheikh Anta Diop
                </motion.p>
              </div>

              {/* Article Body - Two Column Layout on larger screens */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-6"
                >
                  {/* Opening paragraph with drop cap */}
                  <div className="text-base md:text-lg leading-relaxed text-foreground/90">
                    <span className="float-left text-6xl md:text-7xl font-heading font-bold bg-gradient-to-br from-pan-red to-pan-gold bg-clip-text text-transparent leading-none mr-2 mt-2">
                      T
                    </span>
                    <p>
                      he Alliance of Sahel States represents more than a confederation—it embodies the{" "}
                      <span className="font-semibold text-pan-gold">fulfillment of a Pan-African dream</span>{" "}
                      that visionaries like Thomas Sankara, Kwame Nkrumah, Patrice Lumumba, and Cheikh Anta Diop 
                      dared to imagine decades ago.
                    </p>
                  </div>

                  <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                    These revolutionary thinkers understood what today's leaders of Mali, Burkina Faso, and Niger 
                    are bringing to fruition: that{" "}
                    <span className="font-semibold bg-gradient-to-r from-pan-green to-pan-gold bg-clip-text text-transparent">
                      true independence requires economic sovereignty, cultural renaissance, and unwavering unity
                    </span>.
                  </p>

                  {/* Quote Box */}
                  <motion.blockquote
                    whileHover={{ scale: 1.02 }}
                    className="border-l-4 border-pan-red pl-6 py-4 bg-pan-red/5 rounded-r-lg"
                  >
                    <p className="text-base md:text-lg italic text-foreground/80 mb-2">
                      "We must dare to invent the future... Africa's liberation will come from Africans themselves."
                    </p>
                    <footer className="text-sm font-semibold text-pan-red">
                      — Thomas Sankara
                    </footer>
                  </motion.blockquote>
                </motion.div>

                {/* Right Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-6"
                >
                  <h4 className="text-xl md:text-2xl font-heading font-bold text-foreground border-b border-pan-gold/30 pb-3">
                    The Visionary Foundation
                  </h4>

                  {/* Legacy Leaders Grid */}
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex gap-4 items-start group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-pan-red group-hover:bg-pan-gold transition-colors" />
                      <div>
                        <h5 className="font-bold text-foreground group-hover:text-pan-gold transition-colors">
                          Kwame Nkrumah
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Championed continental unity and the United States of Africa
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex gap-4 items-start group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-pan-gold group-hover:bg-pan-green transition-colors" />
                      <div>
                        <h5 className="font-bold text-foreground group-hover:text-pan-green transition-colors">
                          Thomas Sankara
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Demonstrated radical self-reliance and dignity in governance
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex gap-4 items-start group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-pan-green group-hover:bg-pan-red transition-colors" />
                      <div>
                        <h5 className="font-bold text-foreground group-hover:text-pan-red transition-colors">
                          Patrice Lumumba
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Fought for economic independence and resource sovereignty
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex gap-4 items-start group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-nano-purple group-hover:bg-nano-orange transition-colors" />
                      <div>
                        <h5 className="font-bold text-foreground group-hover:text-nano-orange transition-colors">
                          Cheikh Anta Diop
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Restored African history and proved our ancient civilizations
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Section - Present Day Connection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 pt-8 border-t border-pan-green/30"
              >
                <h4 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">
                  The New Generation of Visionary Leaders
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-6">
                  By deeply understanding their history and honoring the sacrifices of those who came before, 
                  Colonel Assimi Goïta, Captain Ibrahim Traoré, and General Abdourahamane Tiani are not merely 
                  leading their nations—they are{" "}
                  <span className="font-bold bg-gradient-to-r from-pan-red via-pan-gold to-pan-green bg-clip-text text-transparent">
                    actualizing the Pan-African vision
                  </span>{" "}
                  in real-time.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  Their strategic alliance proves that when African nations unite with shared purpose, reject 
                  external dependence, and chart their own destiny, the dreams of Sankara, Nkrumah, Lumumba, 
                  and Diop transform from aspiration into lived reality.
                </p>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-8 flex justify-center"
              >
                <motion.a
                  href="/aes"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-[0_4px_20px_rgba(245,158,11,0.25)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.4)]"
                >
                  Learn More About AES
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
