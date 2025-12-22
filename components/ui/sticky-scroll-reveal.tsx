"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickyScrollProps {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
  // Header props for integrated header inside the card
  headerTitle?: string;
  headerSubtitle?: string;
  headerBadge?: string;
}

export const StickyScroll = ({
  content,
  contentClassName,
  headerTitle,
  headerSubtitle,
  headerBadge,
}: StickyScrollProps) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  // Header animation transforms based on scroll progress
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.95]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="h-[34rem] overflow-y-auto flex justify-between relative gap-0 rounded-2xl custom-scrollbar-card border border-stone-300/80 dark:border-neutral-700 bg-gradient-to-br from-card via-card to-secondary/30 dark:from-neutral-900 dark:to-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.15)] dark:shadow-xl"
      ref={ref}
    >
      <div className="relative flex flex-col items-start w-full lg:w-auto lg:flex-1">
        {/* Scrollable Content Container */}
        <div className="px-6 py-8">
          <div className="max-w-2xl">
            {/* Integrated Header Section - Scrolls with content, fades on scroll */}
            {headerTitle && (
              <motion.div
                style={{ opacity: headerOpacity, scale: headerScale }}
                className="mb-10 pb-6 border-b border-stone-200/60 dark:border-neutral-700/60"
              >
                <div className="space-y-3">
                  {headerBadge && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30">
                      <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                        {headerBadge}
                      </span>
                    </div>
                  )}
                  <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground dark:text-white">
                    {headerTitle}
                  </h2>
                  {headerSubtitle && (
                    <p className="text-sm md:text-base text-muted-foreground dark:text-neutral-400 max-w-xl">
                      {headerSubtitle}
                    </p>
                  )}
                  <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-amber-500 rounded-full mt-2" />
                </div>
              </motion.div>
            )}

            {/* Content Items */}
            {content.map((item, index) => (
              <div key={item.title + index} className="mb-14 last:mb-0">
                <motion.h2
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl md:text-3xl font-bold text-foreground dark:text-gray-200"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  transition={{ duration: 0.3 }}
                  className="text-base md:text-lg text-stone-700 dark:text-gray-400 max-w-lg mt-4 leading-relaxed"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-32" />
          </div>
        </div>
      </div>

      {/* Right Side - Sticky Image Panel */}
      <div
        className={cn(
          "hidden lg:block h-full w-[40rem] rounded-r-2xl bg-gradient-to-br from-stone-100/50 to-secondary dark:from-neutral-900 dark:to-neutral-900 sticky top-0 overflow-hidden border-l border-stone-300/60 dark:border-neutral-700 shadow-[inset_0_0_30px_rgba(0,0,0,0.08)] dark:shadow-2xl flex-shrink-0",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
