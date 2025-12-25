"use client";

import dynamic from 'next/dynamic';
import { useState } from "react";

// Dynamically import Spline with no SSR to avoid Next.js build issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl">
      <div className="text-center space-y-3">
        <div className="text-4xl animate-pulse">🤖</div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Loading AI Robot...</p>
      </div>
    </div>
  ),
});

interface SplineSceneProps {
  scene?: string;
  className?: string;
}

export function SplineScene({
  scene = "https://prod.spline.design/nrcOGe-kUiwBz9A9/scene.splinecode",
  className = ""
}: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full pointer-events-none ${className}`}>
      <div
        className="w-full h-full"
        style={{
          opacity: isLoaded ? 1 : 0.3,
          transition: "opacity 2s ease-in",
        }}
      >
        <Spline
          scene={scene}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}
