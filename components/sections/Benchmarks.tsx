"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { slideUp, staggerContainer, viewport } from "@/lib/animations";
import { useLanguage } from "@/lib/LanguageContext";

const metricValues = [
  { value: 452, decimals: 0, suffix: "", bar: 100 },
  { value: 22, decimals: 0, suffix: "", bar: 100 },
  { value: 5, decimals: 0, suffix: "", bar: 100 },
  { value: 7.7, decimals: 1, suffix: "/10", bar: 77 },
];

export function Benchmarks() {
  const { t } = useLanguage();

  return (
    <section id="benchmarks" className="border-t border-border py-section">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <SectionLabel>{t.benchmarks.label}</SectionLabel>
          <h2 className="mt-5 text-display font-semibold text-balance">
            {t.benchmarks.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary">
            {t.benchmarks.description}
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid gap-4 sm:grid-cols-2"
        >
          {t.benchmarks.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              variants={slideUp}
              className="rounded-2xl border border-border bg-background p-8 shadow-card"
            >
              <p className="text-sm text-secondary">{m.label}</p>
              <div className="mt-3 flex items-baseline gap-1 text-5xl font-semibold tracking-tight md:text-6xl">
                <AnimatedCounter
                  value={metricValues[i].value}
                  decimals={metricValues[i].decimals}
                  suffix={metricValues[i].suffix}
                />
              </div>

              <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${metricValues[i].bar}%` }}
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
