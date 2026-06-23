"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE } from "@/lib/animations";

const nodes = [
  { label: "User", sub: "Intent & prompt" },
  { label: "Orchestrator", sub: "Mode (fast / balanced / deep) + cost optimizer" },
  { label: "RAA", sub: "Requirements gathered & brief locked" },
  { label: "TMAP v2", sub: "Planner → Coder → Reviewer" },
  { label: "DARS", sub: "Provider failover & health routing" },
  { label: "Memory", sub: "Cross-session recall (Supabase)" },
  { label: "Final Response", sub: "Synthesized, reviewed output", accent: true },
];

export function Architecture() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });
  const lineLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="architecture" className="border-t border-border py-section">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="mt-5 text-display font-semibold text-balance">
            One request, a full pipeline of intelligence
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary">
            Watch a single prompt flow through the entire Co.AI stack — routed,
            decomposed, executed in parallel, voted on, grounded, and remembered.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          {/* Animated connecting line (desktop center spine) */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block">
            <motion.div
              style={{ scaleY: lineLength }}
              className="h-full w-full origin-top bg-accent"
            />
          </div>
          {/* Mobile left spine */}
          <div className="pointer-events-none absolute left-5 top-0 h-full w-px bg-border md:hidden">
            <motion.div
              style={{ scaleY: lineLength }}
              className="h-full w-full origin-top bg-accent"
            />
          </div>

          <ul className="space-y-4 md:space-y-0">
            {nodes.map((node, i) => (
              <ArchNode key={node.label} node={node} index={i} total={nodes.length} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ArchNode({
  node,
  index,
}: {
  node: (typeof nodes)[number];
  index: number;
  total: number;
}) {
  const left = index % 2 === 0;
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative md:grid md:min-h-[112px] md:grid-cols-2 md:items-center md:gap-8"
    >
      {/* Node dot on the spine */}
      <span className="absolute left-5 top-6 z-10 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
        <span
          className={`block h-3.5 w-3.5 rounded-full border-2 ${
            node.accent
              ? "border-accent bg-accent"
              : "border-foreground bg-background"
          }`}
        />
      </span>

      <div
        className={`pl-12 md:pl-0 ${
          left ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
        }`}
      >
        <div
          className={`group inline-block w-full max-w-sm rounded-2xl border border-border bg-background p-5 shadow-card transition-all duration-500 hover:-translate-y-0.5 hover:shadow-card-hover ${
            left ? "md:ml-auto" : ""
          } ${node.accent ? "border-accent/40" : ""}`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`font-mono text-xs ${
                node.accent ? "text-accent" : "text-secondary"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base font-semibold tracking-tight">{node.label}</h3>
          </div>
          <p className="mt-1 text-sm text-secondary">{node.sub}</p>
        </div>
      </div>
    </motion.li>
  );
}
