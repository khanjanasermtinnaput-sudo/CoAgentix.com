"use client";

import { motion, type Variants } from "framer-motion";
import { slideUp, viewport } from "@/lib/animations";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "header";
};

/**
 * Scroll-triggered reveal wrapper. Animates once when entering the viewport.
 */
export function Reveal({
  children,
  className,
  variants = slideUp,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
