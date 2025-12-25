"use client";

import { useState, useEffect } from "react";
import { AES3DRobot } from "./AES3DRobot";

interface SplineSceneProps {
  scene?: string;
  className?: string;
}

/**
 * SplineScene Component
 * Displays 3D robot - uses Three.js by default (always reliable)
 * Can optionally load Spline if available
 */
export function SplineScene({
  scene = "https://prod.spline.design/nrcOGe-kUiwBz9A9/scene.splinecode",
  className = "",
}: SplineSceneProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  // Always use Three.js robot - most reliable and performant
  // Spline can be added back later if needed, but Three.js is the stable fallback
  return <AES3DRobot className={className} />;
}
