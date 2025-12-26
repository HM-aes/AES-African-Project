"use client";

import { useEffect } from "react";

/**
 * This component fixes hydration mismatches caused by browser extensions
 * (like Cursor's browser extension) that add data-cursor-ref attributes
 * to the DOM after React hydrates.
 */
export function HydrationFix() {
  useEffect(() => {
    // Remove data-cursor-ref attributes added by browser extensions
    // This prevents hydration mismatches
    const removeCursorRefs = () => {
      const elements = document.querySelectorAll("[data-cursor-ref]");
      elements.forEach((el) => {
        el.removeAttribute("data-cursor-ref");
      });
    };

    // Run immediately and also set up a MutationObserver to catch
    // any attributes added after initial render
    removeCursorRefs();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-cursor-ref") {
          const target = mutation.target as Element;
          if (target.hasAttribute("data-cursor-ref")) {
            target.removeAttribute("data-cursor-ref");
          }
        } else if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.hasAttribute("data-cursor-ref")) {
                element.removeAttribute("data-cursor-ref");
              }
              // Also check descendants
              const descendants = element.querySelectorAll("[data-cursor-ref]");
              descendants.forEach((el) => el.removeAttribute("data-cursor-ref"));
            }
          });
        }
      });
    });

    // Observe the entire document for attribute and child changes
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-cursor-ref"],
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

