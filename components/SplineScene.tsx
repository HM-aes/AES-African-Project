"use client";

import { Suspense, lazy, Component, ReactNode } from "react";

// Lazy load Spline - use the /next export for Next.js compatibility
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
    console.error("[SplineScene] Error:", error.message);
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
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">Loading 3D Robot...</p>
      </div>
    </div>
  );
}

function ErrorFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl">
      <div className="text-center p-6">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500 to-green-500 flex items-center justify-center">
          <span className="text-3xl">🤖</span>
        </div>
        <p className="text-amber-500 font-semibold">AES AI Robot</p>
        <p className="text-neutral-400 text-sm mt-1">Pan-African Innovation</p>
      </div>
    </div>
  );
}

/**
 * SplineScene Component
 * Displays the beautiful Spline 3D robot
 * Uses lazy loading with Suspense for optimal performance
 */
export function SplineScene({
  scene = "https://prod.spline.design/nrcOGe-kUiwBz9A9/scene.splinecode",
  className = "",
}: SplineSceneProps) {
  return (
    <SplineErrorBoundary fallback={<ErrorFallback />}>
      <div
        className={`relative ${className}`}
        style={{ width: '100%', height: '100%', minHeight: '280px' }}
      >
        <Suspense fallback={<SplineLoader />}>
          <Spline
            scene={scene}
            style={{ width: '100%', height: '100%' }}
            onLoad={() => console.log("[SplineScene] Loaded successfully!")}
          />
        </Suspense>
      </div>
    </SplineErrorBoundary>
  );
}
