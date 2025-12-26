/**
 * Centralized Background Styles Configuration
 * 
 * This file contains all background styling configurations used across the application.
 * Use these constants to maintain consistency and prevent code duplication.
 */

export const backgrounds = {
  // Hero Section Background
  hero: {
    main: "bg-white dark:bg-[#0a0a0a]",
    dotPattern: {
      light: "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)",
      dark: "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
      size: "24px 24px",
    },
    gradient: "bg-gradient-to-br from-neutral-50/50 via-white to-neutral-100/50 dark:from-slate-900/20 dark:via-transparent dark:to-purple-900/10",
    vignette: "bg-gradient-to-t from-neutral-100/30 via-transparent to-neutral-50/20 dark:from-black/40 dark:via-transparent dark:to-black/20",
  },

  // Hero Card Background
  heroCard: {
    glow: "bg-gradient-to-r from-amber-200/30 via-neutral-300/20 to-amber-200/30 dark:from-neutral-800/40 dark:via-neutral-700/20 dark:to-neutral-800/40",
    main: "bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 dark:from-[#0a0a0c] dark:via-[#0f0f11] dark:to-[#0a0a0c]",
    border: "border-neutral-400/60 dark:border-[#c0c0c8]/30",
    shadow: "shadow-[0_8px_30px_rgba(0,0,0,0.12),0_2px_8px_rgba(180,140,60,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.6)]",
  },

  // Tooltip Card (Visionary Leaders) Background
  tooltipCard: {
    main: "bg-gradient-to-br from-stone-50 via-white to-amber-50/30 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950",
    header: "bg-gradient-to-b from-white via-white to-white/95 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950/95",
    footer: "bg-neutral-100 dark:bg-neutral-900",
    imageSection: "bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800",
  },

  // News Source Banner
  newsSourceBanner: {
    main: "bg-gradient-to-r from-slate-100 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900",
    shimmer: "bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent",
    fadeEdge: "bg-gradient-to-r from-slate-100 dark:from-slate-900 to-transparent",
  },

  // Common Patterns
  common: {
    sectionDivider: "bg-gradient-to-r from-transparent via-neutral-400 to-neutral-500 dark:via-neutral-600 dark:to-neutral-500",
    badge: "bg-neutral-100 dark:bg-neutral-900",
    border: "border-neutral-300 dark:border-neutral-700",
    card: "bg-white dark:bg-neutral-800",
  },
};

/**
 * Usage Example:
 * 
 * import { backgrounds } from '@/config/backgrounds';
 * 
 * <div className={backgrounds.hero.main}>
 *   <div className={backgrounds.heroCard.main}>
 *     // Content
 *   </div>
 * </div>
 */
