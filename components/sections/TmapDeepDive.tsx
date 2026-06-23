"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE } from "@/lib/animations";
import { useLanguage } from "@/lib/LanguageContext";

export function TmapDeepDive() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
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
            <span className="text-background/80">{t.tmap.label}</span>
          </SectionLabel>
          <h2 className="mt-5 text-display font-semibold text-balance">
            {t.tmap.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-background/60">
            {t.tmap.description}
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-16 pl-8 md:pl-0">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-background/15 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ scaleY: progress }}
              className="h-full w-full origin-top bg-accent"
            />
          </div>

          <ol className="space-y-12 md:space-y-0">
            {t.tmap.steps.map((step, i) => (
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
  step: { title: string; body: string };
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
