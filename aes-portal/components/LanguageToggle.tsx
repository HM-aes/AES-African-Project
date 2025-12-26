"use client";

import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";

export function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "fr" : "en");
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full
        bg-gradient-to-br from-amber-500/10 to-transparent
        border border-amber-500/20 hover:border-amber-400/40
        shadow-[0_2px_10px_rgba(251,191,36,0.1)] hover:shadow-[0_4px_20px_rgba(251,191,36,0.2)]
        transition-all duration-300 cursor-pointer group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={locale === "en" ? "Switch to French" : "Passer en Anglais"}
    >
      {/* Flag icons with smooth transition */}
      <motion.span 
        className="text-lg"
        key={locale}
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {locale === "en" ? "🇬🇧" : "🇫🇷"}
      </motion.span>
      
      {/* Language code with glow effect */}
      <motion.span 
        className="text-sm font-bold text-amber-400 group-hover:text-amber-300
        drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
        key={`text-${locale}`}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        {locale === "en" ? "EN" : "FR"}
      </motion.span>

      {/* Subtle hover glow */}
      <div className="absolute inset-0 rounded-full bg-amber-400/0 group-hover:bg-amber-400/5 transition-colors duration-300" />
    </motion.button>
  );
}
