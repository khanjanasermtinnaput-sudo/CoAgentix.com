"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Wraps the app in a Lenis smooth-scroll instance.
 * Respects prefers-reduced-motion by skipping initialization.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    // Anchor links → smooth scroll via Lenis
    const handleAnchor = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -80 });
      }
    };
    document.addEventListener("click", handleAnchor);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", handleAnchor);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
