"use client";

import { useState, useEffect } from "react";
import { AES3DRobot } from "./AES3DRobot";

interface SplineSceneProps {
  scene?: string;
  className?: string;
}

/**
 * SplineScene Component
 * Displays beautiful AES 3D robot with Three.js (Pan-African themed)
 * - Black body with gold and green accents
 * - Animated rotation, bobbing, and waving arms
 * - Glowing green eyes and accent stripes
 * - Reliable and performant Three.js implementation
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

  // Render the custom AES 3D robot with Three.js
  // - Pan-African themed design (gold, green, black)
  // - Smooth animations
  // - Always available, no external dependencies
  return <AES3DRobot className={className} />;
}
