"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { slideUp, staggerContainer, viewport } from "@/lib/animations";
import { useLanguage } from "@/lib/LanguageContext";

const spans = [true, false, false, false, false, false, true];

export function TechnologyShowcase() {
  const { t } = useLanguage();

  return (
    <section id="technology" className="border-t border-border py-section">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <SectionLabel>{t.technology.label}</SectionLabel>
          <h2 className="mt-5 text-display font-semibold text-balance">
            {t.technology.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary">
            {t.technology.description}
          </p>
        </Reveal>

        <motion.ul
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.technology.items.map((tech, i) => (
            <motion.li
              key={tech.name}
              variants={slideUp}
              className={spans[i] ? "lg:col-span-2" : ""}
            >
              <TechCard tech={tech} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function TechCard({ tech }: { tech: { name: string; tag: string; description: string } }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background p-7 shadow-card transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-card-hover">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-secondary">
          {tech.tag}
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-secondary transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <h3 className="mt-8 text-xl font-semibold tracking-tight">{tech.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-secondary">
        {tech.description}
      </p>
    </div>
  );
}
