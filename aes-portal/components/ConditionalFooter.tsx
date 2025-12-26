"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

// Routes where footer should be hidden
const HIDE_FOOTER_ROUTES = ["/agent-ai"];

export function ConditionalFooter() {
  const pathname = usePathname();
  
  // Check if current route should hide footer
  const shouldHideFooter = HIDE_FOOTER_ROUTES.some(route => 
    pathname?.startsWith(route)
  );

  if (shouldHideFooter) {
    return null;
  }

  return <Footer />;
}
