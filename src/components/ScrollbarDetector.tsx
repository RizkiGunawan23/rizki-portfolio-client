"use client";

import { useEffect } from "react";

export default function ScrollbarDetector() {
  useEffect(() => {
    function setScrollbarWidth() {
      // Only run on client side
      if (typeof window !== "undefined") {
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;
        document.documentElement.style.setProperty(
          "--scrollbar-width",
          `${scrollbarWidth}px`,
        );
      }
    }

    // Set on mount
    setScrollbarWidth();

    // Set on resize
    window.addEventListener("resize", setScrollbarWidth);

    return () => {
      window.removeEventListener("resize", setScrollbarWidth);
    };
  }, []);

  return null; // This component doesn't render anything
}
