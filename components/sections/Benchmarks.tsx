"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { slideUp, staggerContainer, viewport } from "@/lib/animations";

const metrics = [
  {
    label: "Response Speed",
    value: 0.4,
    decimals: 1,
    suffix: "s",
    bar: 88,
    note: "Median time-to-first-token in fast mode",
  },
  {
    label: "Routing Accuracy",
    value: 99.2,
    decimals: 1,
    suffix: "%",
    bar: 99,
    note: "Correct model + tier selection",
  },
  {
    label: "Multi-Agent Performance",
    value: 4,
    decimals: 0,
    suffix: "×",
    bar: 80,
    note: "Throughput vs. single-model baseline",
  },
  {
    label: "Context Utilization",
    value: 96,
    decimals: 0,
    suffix: "%",
    bar: 96,
    note: "Relevant context retained per task",
  },
];

export function Benchmarks() {
  return (
    <section id="benchmarks" className="border-t border-border py-section">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <SectionLabel>Benchmarks</SectionLabel>
          <h2 className="mt-5 text-display font-semibold text-balance">
            Measured where it matters
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary">
            Performance isn&apos;t a tagline. Co.AI is tuned and tracked across the
            metrics that define a production-grade AI platform.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid gap-4 sm:grid-cols-2"
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={slideUp}
              className="rounded-2xl border border-border bg-background p-8 shadow-card"
            >
              <p className="text-sm text-secondary">{m.label}</p>
              <div className="mt-3 flex items-baseline gap-1 text-5xl font-semibold tracking-tight md:text-6xl">
                <AnimatedCounter
                  value={m.value}
                  decimals={m.decimals}
                  suffix={m.suffix}
                />
              </div>

              <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${m.bar}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="h-full rounded-full bg-accent"
                />
              </div>
              <p className="mt-4 text-xs text-secondary">{m.note}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
