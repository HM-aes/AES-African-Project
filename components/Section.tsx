"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { SectionEndLine } from "./SectionDivider";

type SectionBackground =
  | "default"      // White / Neutral 950
  | "alt"          // Light gray / Neutral 900
  | "amber"        // Amber tinted
  | "green"        // Green tinted
  | "dark"         // Dark neutral
  | "gradient-1"   // Custom gradient 1
  | "gradient-2";  // Custom gradient 2

interface SectionProps {
  children: ReactNode;
  background?: SectionBackground;
  showEndLine?: boolean;
  endLineColor?: "amber" | "green" | "red" | "gradient";
  className?: string;
  id?: string;
}

const backgroundClasses: Record<SectionBackground, string> = {
  default: "bg-white dark:bg-neutral-950",
  alt: "bg-stone-50 dark:bg-neutral-900",
  amber: "bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 dark:from-amber-950/20 dark:via-neutral-950 dark:to-amber-950/10",
  green: "bg-gradient-to-b from-green-50/50 via-white to-green-50/30 dark:from-green-950/20 dark:via-neutral-950 dark:to-green-950/10",
  dark: "bg-neutral-100 dark:bg-neutral-900",
  "gradient-1": "bg-gradient-to-br from-amber-50/40 via-white to-green-50/40 dark:from-amber-950/30 dark:via-neutral-950 dark:to-green-950/20",
  "gradient-2": "bg-gradient-to-br from-green-50/40 via-white to-orange-50/40 dark:from-green-950/30 dark:via-neutral-950 dark:to-orange-950/20",
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
