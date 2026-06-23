"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  motion,
} from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

/**
 * Counts up from 0 to `value` when scrolled into view.
 */
export function AnimatedCounter({
  value,
  decimals = 0,
  suffix = "",
  prefix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: 1600,
    bounce: 0,
  });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + latest.toFixed(decimals) + suffix;
      }
    });
  }, [spring, decimals, suffix, prefix]);

  return (
    <motion.span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}
