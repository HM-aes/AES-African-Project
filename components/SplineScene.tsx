"use client";

import Spline from '@splinetool/react-spline/next';
import { useState } from "react";

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
    <div className={`absolute pointer-events-none ${className}`}>
      <div
        className="w-full h-full"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 5s ease-in",
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
