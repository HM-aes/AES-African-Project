"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-b from-neutral-50 via-white to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Timeline dot - dark metallic style */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg">
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 border border-zinc-500" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-zinc-700 dark:text-zinc-300">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-zinc-700 dark:text-zinc-300">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        {/* Background track line - dark metallic */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-zinc-400 via-zinc-500 to-zinc-400 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-700 rounded-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)]"
        >
          {/* Animated streaming line - dark metallic accent */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-500 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </div>
  );
};
