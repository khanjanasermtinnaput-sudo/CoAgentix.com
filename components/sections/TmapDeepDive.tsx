"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE } from "@/lib/animations";

const steps = [
  {
    title: "Plan",
    body: "The Planner agent breaks the task into a concrete, file-by-file build plan — each step naming a path, an action, and its intent.",
  },
  {
    title: "Capability scoring",
    body: "In v2, agents are matched to subtasks by capability vectors and cosine similarity — chosen on fit, never keyword-routed.",
  },
  {
    title: "Parallel execution",
    body: "Coder agents implement the plan across an execution DAG — bounded-parallel, with per-node retry, timeout, fallback and replan.",
  },
  {
    title: "Review & critique",
    body: "The Reviewer agent attacks the output; Coder revises. The loop repeats until the non-negotiable quality bar is met.",
  },
  {
    title: "Validate & synthesize",
    body: "Results are validated and merged into one coherent, production-ready set of files — with the full run persisted as a trace.",
  },
];

export function TmapDeepDive() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.6"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="border-t border-border bg-foreground py-section text-background">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <SectionLabel className="text-background/60">
            <span className="text-background/80">TMAP deep dive</span>
          </SectionLabel>
          <h2 className="mt-5 text-display font-semibold text-balance">
            How a thought becomes a plan
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-background/60">
            TMAP v2 is the planning brain of Co.AI — turning an open-ended prompt
            into a precise, parallelizable execution graph.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-16 pl-8 md:pl-0">
          {/* Timeline rail */}
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-background/15 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ scaleY: progress }}
              className="h-full w-full origin-top bg-accent"
            />
          </div>

          <ol className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <TimelineStep key={step.title} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const left = index % 2 === 0;
  return (
    <motion.li
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative md:grid md:min-h-[130px] md:grid-cols-2 md:items-center md:gap-12"
    >
      <span className="absolute -left-[26px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-foreground md:left-1/2 md:-translate-x-1/2" />

      <div
        className={`${
          left
            ? "md:col-start-1 md:pr-12 md:text-right"
            : "md:col-start-2 md:pl-12"
        }`}
      >
        <span className="font-mono text-sm text-accent">
          0{index + 1}
        </span>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">{step.title}</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-background/60 md:inline-block">
          {step.body}
        </p>
      </div>
    </motion.li>
  );
}
