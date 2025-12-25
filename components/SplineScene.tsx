"use client";

import { useState, useEffect, Suspense } from "react";
import { AES3DRobot } from "./AES3DRobot";

interface SplineSceneProps {
  scene?: string;
  className?: string;
  useSpline?: boolean;
}

// Lazy load Spline component dynamically
const SplineLoader = ({ scene, onLoad, onError }: any) => {
  const [SplineComponent, setSplineComponent] = useState<any>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const loadSpline = async () => {
      try {
        const imported = await import('@splinetool/react-spline');
        setSplineComponent(() => imported.default);
      } catch (error) {
        console.error("Failed to load Spline:", error);
        setLoadError(true);
        onError?.(error);
      }
    };

    loadSpline();
  }, [onError]);

  if (loadError) return null;
  if (!SplineComponent) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl">
        <div className="text-center space-y-3">
          <div className="text-4xl animate-pulse">🤖</div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Loading 3D Robot...</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="w-full h-full" />}>
      <SplineComponent
        scene={scene}
        onLoad={onLoad}
        onError={onError}
      />
    </Suspense>
  );
};

export function SplineScene({
  scene = "https://prod.spline.design/nrcOGe-kUiwBz9A9/scene.splinecode",
  className = "",
  useSpline = true
}: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [loadTimeout, setLoadTimeout] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Set a timeout for Spline loading - if it takes too long, show fallback
    const timeout = setTimeout(() => {
      if (!isLoaded && !hasError) {
        console.warn("Spline scene took too long to load, switching to Three.js...");
        setLoadTimeout(true);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isLoaded, hasError]);

  if (!isClient) {
    return <AES3DRobot className={className} />;
  }

  // Always use Three.js robot as primary fallback - most reliable
  if (hasError || loadTimeout || !useSpline) {
    return <AES3DRobot className={className} />;
  }

  // Try to use Spline if available
  if (useSpline) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <div
          className="w-full h-full"
          style={{
            opacity: isLoaded ? 1 : 0.3,
            transition: "opacity 2s ease-in",
          }}
        >
          <SplineLoader
            scene={scene}
            onLoad={() => {
              console.log("Spline scene loaded successfully");
              setIsLoaded(true);
            }}
            onError={(error: any) => {
              console.error("Spline scene failed to load:", error);
              setHasError(true);
            }}
          />
        </div>
      </div>
    );
  }

  // Default to Three.js
  return <AES3DRobot className={className} />;
}
