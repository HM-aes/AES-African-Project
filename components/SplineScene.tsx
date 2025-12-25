"use client";

import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline/next"));

interface SplineSceneProps {
  scene?: string;
  className?: string;
}

export function SplineScene({
  scene = "https://prod.spline.design/nrcOGe-kUiwBz9A9/scene.splinecode",
  className = "",
}: SplineSceneProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: "100%", height: "100%", minHeight: "280px" }}
    >
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
            <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <Spline scene={scene} style={{ width: "100%", height: "100%" }} />
      </Suspense>
    </div>
  );
}
