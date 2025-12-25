"use client";

import { useState, useEffect, Suspense, lazy, useCallback, Component, ReactNode } from "react";
import { AES3DRobot } from "./AES3DRobot";

// Lazy load Spline for better performance and to avoid SSR issues
const Spline = lazy(() => import("@splinetool/react-spline/next"));

interface SplineSceneProps {
  scene?: string;
  className?: string;
}

// Error boundary to catch Spline runtime errors
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class SplineErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("[SplineScene] Error caught by boundary:", error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function SplineLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-3 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-neutral-500 dark:text-neutral-400 text-xs">Loading 3D...</p>
      </div>
    </div>
  );
}

/**
 * SplineScene Component
 * Displays the beautiful Spline 3D robot with automatic Three.js fallback
 * - Primary: Spline cloud-hosted 3D scene (beautiful, interactive)
 * - Fallback: Custom Three.js robot (Pan-African themed, always works)
 * - Automatic timeout detection (8 seconds)
 * - Error boundary for runtime error recovery
 */
export function SplineScene({
  scene = "https://prod.spline.design/nrcOGe-kUiwBz9A9/scene.splinecode",
  className = "",
}: SplineSceneProps) {
  const [isClient, setIsClient] = useState(false);
  const [useSpline, setUseSpline] = useState(true);
  const [splineLoaded, setSplineLoaded] = useState(false);

  // Track if component is mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Timeout fallback - if Spline doesn't load in 8 seconds, use Three.js
  useEffect(() => {
    if (!isClient || splineLoaded) return;

    const timeout = setTimeout(() => {
      if (!splineLoaded) {
        console.log("[SplineScene] Timeout - switching to Three.js fallback");
        setUseSpline(false);
      }
    }, 8000);

    return () => clearTimeout(timeout);
  }, [isClient, splineLoaded]);

  const handleSplineLoad = useCallback(() => {
    console.log("[SplineScene] Spline loaded successfully");
    setSplineLoaded(true);
  }, []);

  if (!isClient) {
    return null;
  }

  // Use Three.js fallback if Spline failed or timed out
  if (!useSpline) {
    return <AES3DRobot className={className} />;
  }

  return (
    <SplineErrorBoundary fallback={<AES3DRobot className={className} />}>
      <div className={`w-full h-full ${className}`}>
        <Suspense fallback={<SplineLoader />}>
          <Spline scene={scene} onLoad={handleSplineLoad} />
        </Suspense>
      </div>
    </SplineErrorBoundary>
  );
}
