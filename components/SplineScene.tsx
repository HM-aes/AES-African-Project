"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { AES3DRobot } from "./AES3DRobot";

// Lazy load Spline only when needed, with proper error boundary
let SplineComponent: any = null;
let splineLoaded = false;

const loadSplineComponent = async () => {
  if (!splineLoaded) {
    try {
      const module = await import('@splinetool/react-spline');
      SplineComponent = module.default;
      splineLoaded = true;
    } catch (error) {
      console.warn("Failed to load Spline component:", error);
      splineLoaded = false;
    }
  }
  return SplineComponent;
};

interface SplineSceneProps {
  scene?: string;
  className?: string;
  useSpline?: boolean;
}

export function SplineScene({
  scene = "https://prod.spline.design/nrcOGe-kUiwBz9A9/scene.splinecode",
  className = "",
  useSpline = true
}: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [loadTimeout, setLoadTimeout] = useState(false);
  const [splineReady, setSplineReady] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (!useSpline) {
      return;
    }

    // Try to load Spline component
    const loadSpline = async () => {
      const component = await loadSplineComponent();
      if (component) {
        setSplineReady(true);
      } else {
        setHasError(true);
      }
    };

    loadSpline();

    // Set a timeout for Spline loading
    const timeout = setTimeout(() => {
      if (!isLoaded && splineReady) {
        console.warn("Spline scene took too long to load, switching to Three.js...");
        setLoadTimeout(true);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [useSpline, isLoaded, splineReady]);

  if (!isClient) {
    return <AES3DRobot className={className} />;
  }

  // Always use Three.js robot as primary - most reliable
  if (!splineReady || hasError || loadTimeout || !useSpline) {
    return <AES3DRobot className={className} />;
  }

  // If Spline is available, try to use it
  if (SplineComponent && splineReady) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <div
          className="w-full h-full"
          style={{
            opacity: isLoaded ? 1 : 0.3,
            transition: "opacity 2s ease-in",
          }}
        >
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl">
                <div className="text-center space-y-3">
                  <div className="text-4xl animate-pulse">🤖</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Loading Spline Robot...</p>
                </div>
              </div>
            }
          >
            <SplineComponent
              scene={scene}
              onLoad={() => {
                console.log("Spline scene loaded successfully");
                setIsLoaded(true);
              }}
              onError={(error: any) => {
                console.error("Spline scene failed:", error);
                setHasError(true);
              }}
            />
          </Suspense>
        </div>
      </div>
    );
  }

  // Default to Three.js
  return <AES3DRobot className={className} />;
}
