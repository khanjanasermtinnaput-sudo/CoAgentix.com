"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animations";

export function FinalCta() {
  return (
    <section id="start" className="border-t border-border py-section">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-foreground px-6 py-20 text-center text-background md:px-12 md:py-28"
        >
          {/* ambient accent glow */}
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent/30 blur-[120px]" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-[clamp(2.25rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-balance">
              Build with Intelligence.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-background/60">
              Put a coordinated team of AI systems behind every request. Start
              free, scale to Titan Mode when you&apos;re ready.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#start"
                className="btn bg-accent px-7 py-3.5 text-base text-white transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                Start Using Co.AI
                <Arrow />
              </a>
              <a
                href="#technology"
                className="btn border border-background/20 bg-transparent px-7 py-3.5 text-base text-background transition-all hover:-translate-y-0.5 hover:border-background/40"
              >
                View Documentation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
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
