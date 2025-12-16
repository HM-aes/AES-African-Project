"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

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

  const backgroundColors = [
    "rgb(var(--background))",
    "rgb(var(--background))",
    "rgb(var(--background))",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  return (
    <motion.div
      className="h-[28rem] overflow-y-auto flex justify-between relative gap-4 rounded-2xl p-0 custom-scrollbar-card border border-amber-200/60 dark:border-border bg-gradient-to-br from-card via-card to-secondary/30 dark:from-neutral-900 dark:to-neutral-900 shadow-[0_8px_30px_rgba(107,68,35,0.12)] dark:shadow-xl"
      ref={ref}
    >
      <div className="div relative flex items-start pl-6 pr-2 py-6">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-14">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl md:text-4xl font-bold text-amber-950 dark:text-gray-200"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base md:text-lg text-stone-700 dark:text-gray-400 max-w-lg mt-6 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-32" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block h-full w-[40rem] rounded-r-2xl bg-gradient-to-br from-amber-100/50 to-secondary dark:from-neutral-900 dark:to-neutral-900 sticky top-0 overflow-hidden border-l border-amber-200/40 dark:border-border shadow-[inset_0_0_30px_rgba(107,68,35,0.1)] dark:shadow-2xl flex-shrink-0",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
