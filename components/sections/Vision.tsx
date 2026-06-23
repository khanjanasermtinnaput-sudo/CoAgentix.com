"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/animations";
import { SectionLabel } from "@/components/ui/SectionLabel";

const line = "Many minds. One intelligence.";

export function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.4"],
  });
  const words = line.split(" ");

  return (
    <section className="border-t border-border py-section">
      <div ref={ref} className="container-px">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel className="justify-center">Our vision</SectionLabel>

          <h2 className="mt-8 text-headline font-semibold leading-[1.1] tracking-tight md:text-[3.25rem]">
            {words.map((word, i) => (
              <Word
                key={i}
                word={word}
                index={i}
                total={words.length}
                progress={scrollYProgress}
              />
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-secondary"
          >
            We believe the most capable AI won&apos;t come from a single larger
            model — it will come from many minds, orchestrated as one. That is the
            idea Co.AI was built to prove.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: import("framer-motion").MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const accent = word.toLowerCase().includes("intelligence");
  return (
    <motion.span style={{ opacity }} className="inline-block">
      <span className={accent ? "text-accent" : undefined}>{word}</span>
      {index < total - 1 ? " " : ""}
    </motion.span>
  );
}
