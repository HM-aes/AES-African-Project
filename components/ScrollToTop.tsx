"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change or page reload
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Also scroll to top on initial page load
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      // Prevent scroll restoration
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    }
  }, []);

  return null;
}



