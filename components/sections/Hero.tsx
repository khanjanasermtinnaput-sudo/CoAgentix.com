"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { EASE } from "@/lib/animations";
import { CHAT_URL } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Scroll-based motion
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 20 });
  const py = useSpring(my, { stiffness: 60, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 2);
    my.set((e.clientY / innerHeight - 0.5) * 2);
  };

  const shape1X = useTransform(px, (v) => v * 40);
  const shape1Y = useTransform(py, (v) => v * 40);
  const shape2X = useTransform(px, (v) => v * -55);
  const shape2Y = useTransform(py, (v) => v * -35);
  const shape3X = useTransform(px, (v) => v * 28);
  const shape3Y = useTransform(py, (v) => v * -48);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 grid-bg opacity-[0.6]" />

        {/* Floating abstract shapes */}
        <motion.div
          style={{ x: shape1X, y: shape1Y }}
          className="absolute -left-20 top-24 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px] animate-float-slow"
        />
        <motion.div
          style={{ x: shape2X, y: shape2Y }}
          className="absolute right-[-6rem] top-10 h-[24rem] w-[24rem] rounded-full bg-foreground/[0.06] blur-[100px] animate-float-slow"
        />
        <motion.div
          style={{ x: shape3X, y: shape3Y }}
          className="absolute bottom-[-4rem] left-1/3 h-[20rem] w-[20rem] rounded-full bg-accent/10 blur-[110px] animate-float-slow"
        />

        {/* Orbiting ring accent */}
        <motion.div
          style={{ x: shape3X, y: shape3Y }}
          className="absolute right-[12%] top-[22%] hidden lg:block"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="h-72 w-72 rounded-full border border-border"
          >
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-px relative z-10 pt-28"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="max-w-4xl"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-secondary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Introducing Co.AI — multi-agent orchestration
            </span>
          </motion.div>

          <h1 className="mt-7 text-hero font-semibold text-balance">
            <TextReveal text="AI That Thinks" />
            <TextReveal text="Beyond One Model" accent />
          </h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-secondary md:text-xl"
          >
            Co.AI combines multiple AI systems, intelligent routing, memory, and
            orchestration into one powerful platform.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a href={CHAT_URL} className="btn-accent px-7 py-3.5 text-base">
              Start Chatting
              <Arrow />
            </a>
            <a href="#technology" className="btn-ghost px-7 py-3.5 text-base">
              Explore Technology
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 1, ease: EASE } },
            }}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-secondary"
          >
            <span>Trusted orchestration for</span>
            {["Routing", "Memory", "Multi-Agent", "RAA", "Titan Mode"].map((t) => (
              <span key={t} className="font-medium text-foreground/70">
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-foreground"
          />
        </div>
      </motion.div>
    </section>
  );
}

function TextReveal({ text, accent }: { text: string; accent?: boolean }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        variants={{
          hidden: { y: "110%" },
          visible: { y: 0, transition: { duration: 0.9, ease: EASE } },
        }}
        className={`block ${accent ? "gradient-text" : ""}`}
      >
        {text}
      </motion.span>
    </span>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
