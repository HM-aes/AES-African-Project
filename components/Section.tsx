"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { SectionEndLine } from "./SectionDivider";

type SectionBackground =
  | "default"      // White / Neutral 950
  | "alt"          // Light gray / Neutral 900
  | "amber"        // Strong amber tinted
  | "green"        // Strong green tinted
  | "dark"         // Dark neutral
  | "dark-alt"     // Darker alternative
  | "gradient-1"   // Custom gradient 1
  | "gradient-2"   // Custom gradient 2
  | "charcoal"     // Very dark charcoal
  | "slate";       // Slate blue-gray

interface SectionProps {
  children: ReactNode;
  background?: SectionBackground;
  showEndLine?: boolean;
  endLineColor?: "amber" | "green" | "red" | "gradient";
  className?: string;
  id?: string;
}

// More distinct background colors with stronger visual contrast
const backgroundClasses: Record<SectionBackground, string> = {
  // Light: pure white, Dark: deep black
  default: "bg-white dark:bg-[#0a0a0a]",
  // Light: warm stone, Dark: charcoal gray (noticeably different from default)
  alt: "bg-stone-100 dark:bg-neutral-800",
  // Light: warm amber wash, Dark: amber-tinted dark with visible difference
  amber: "bg-gradient-to-b from-amber-100/80 via-amber-50/50 to-white dark:from-amber-950/40 dark:via-[#1a1408] dark:to-[#0f0f0f]",
  // Light: fresh green wash, Dark: green-tinted with visible difference
  green: "bg-gradient-to-b from-emerald-100/70 via-green-50/50 to-white dark:from-emerald-950/40 dark:via-[#0a1a0f] dark:to-[#0a0a0a]",
  // Light: cool gray, Dark: medium dark
  dark: "bg-neutral-200 dark:bg-neutral-850 dark:bg-[#1a1a1a]",
  // Light: warmer gray, Dark: even darker
  "dark-alt": "bg-stone-200 dark:bg-[#0d0d0d]",
  // Light: amber to green blend, Dark: rich gradient
  "gradient-1": "bg-gradient-to-br from-amber-100/60 via-white to-emerald-100/60 dark:from-amber-950/50 dark:via-[#121210] dark:to-emerald-950/40",
  // Light: green to orange blend, Dark: warm gradient
  "gradient-2": "bg-gradient-to-br from-emerald-100/60 via-white to-orange-100/60 dark:from-emerald-950/40 dark:via-[#0f1210] dark:to-orange-950/40",
  // Very dark charcoal - for maximum contrast
  charcoal: "bg-neutral-100 dark:bg-[#050505]",
  // Slate blue-gray for variety
  slate: "bg-slate-100 dark:bg-slate-900",
};

export function Section({
  children,
  background = "default",
  showEndLine = true,
  endLineColor = "gradient",
  className = "",
  id,
}: SectionProps) {
  return (
    <div id={id} className={`relative ${backgroundClasses[background]} ${className}`}>
      {/* Main content */}
      {children}

      {/* End line at bottom of section */}
      {showEndLine && (
        <div className="relative z-10">
          <SectionEndLine color={endLineColor} />
        </div>
      )}
    </div>
  );
}

// Animated Section with entrance animation
interface AnimatedSectionProps extends SectionProps {
  delay?: number;
}

export function AnimatedSectionWrapper({
  children,
  background = "default",
  showEndLine = true,
  endLineColor = "gradient",
  className = "",
  id,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <div id={id} className={`relative ${backgroundClasses[background]} ${className}`}>
      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>

      {/* End line at bottom of section */}
      {showEndLine && (
        <div className="relative z-10">
          <SectionEndLine color={endLineColor} />
        </div>
      )}
    </div>
  );
}
