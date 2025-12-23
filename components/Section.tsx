"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { SectionEndLine } from "./SectionDivider";

type SectionBackground =
  | "default"      // Pure black in dark mode
  | "alt"          // Slightly lighter
  | "amber"        // Amber tinted
  | "green"        // Green tinted
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
  endLineColor?: "amber" | "green" | "red" | "gradient" | "silver";
  className?: string;
  id?: string;
  showGrid?: boolean;
  gridStyle?: "default" | "amber" | "dots";
}

// Aceternity-style backgrounds - pure black in dark mode
const backgroundClasses: Record<SectionBackground, string> = {
  // Light: pure white, Dark: pure black
  default: "bg-white dark:bg-black",
  // Light: stone, Dark: pure black
  alt: "bg-stone-50 dark:bg-black",
  // Light: warm amber wash, Dark: pure black
  amber: "bg-gradient-to-b from-amber-50/80 via-white to-white dark:bg-black",
  // Light: fresh green wash, Dark: pure black
  green: "bg-gradient-to-b from-emerald-50/70 via-white to-white dark:bg-black",
  // Light: cool gray, Dark: pure black
  dark: "bg-neutral-100 dark:bg-black",
  // Light: warmer gray, Dark: pure black
  "dark-alt": "bg-stone-100 dark:bg-black",
  // Light: amber to green blend, Dark: pure black
  "gradient-1": "bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/60 dark:bg-black",
  // Light: green to orange blend, Dark: pure black
  "gradient-2": "bg-gradient-to-br from-emerald-50/60 via-white to-orange-50/60 dark:bg-black",
  // Pure black
  charcoal: "bg-neutral-50 dark:bg-black",
  // Pure black
  slate: "bg-slate-50 dark:bg-black",
};

// Grid style classes
const gridClasses: Record<string, string> = {
  default: "grid-background",
  amber: "grid-background-amber",
  dots: "dot-background",
};

export function Section({
  children,
  background = "default",
  showEndLine = true,
  endLineColor = "silver",
  className = "",
  id,
  showGrid = false,
  gridStyle = "default",
}: SectionProps) {
  const gridClass = showGrid ? gridClasses[gridStyle] : "";

  return (
    <div id={id} className={`relative ${backgroundClasses[background]} ${gridClass} ${className}`}>
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
  endLineColor = "silver",
  className = "",
  id,
  delay = 0,
  showGrid = false,
  gridStyle = "default",
}: AnimatedSectionProps) {
  const gridClass = showGrid ? gridClasses[gridStyle] : "";

  return (
    <div id={id} className={`relative ${backgroundClasses[background]} ${gridClass} ${className}`}>
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
