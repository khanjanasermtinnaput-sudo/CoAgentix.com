"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLanguage } from "@/lib/LanguageContext";

export function RaaShowcase() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();
  const stages = t.raa.stages;

  useEffect(() => {
    setActive(0);
    const id = setInterval(() => {
      setActive((a) => (a + 1) % stages.length);
    }, 1800);
    return () => clearInterval(id);
  }, [stages.length]);

  return (
    <section className="border-t border-border py-section">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionLabel>{t.raa.label}</SectionLabel>
            <h2 className="mt-5 text-display font-semibold text-balance">
              {t.raa.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary">
              {t.raa.description}
            </p>
            <ul className="mt-8 space-y-3">
              {stages.map((s, i) => (
                <li
                  key={s.key}
                  className="flex items-center gap-3 text-sm"
                  aria-current={active === i}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium transition-colors duration-300 ${
                      active === i
                        ? "bg-accent text-white"
                        : "border border-border text-secondary"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`transition-colors duration-300 ${
                      active === i ? "font-medium text-foreground" : "text-secondary"
                    }`}
                  >
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-3xl border border-border bg-background p-8 shadow-card">
              <div className="flex flex-col gap-3">
                {stages.map((s, i) => {
                  const isActive = active === i;
                  const isPast = i < active;
                  return (
                    <motion.div
                      key={s.key}
                      animate={{
                        opacity: isActive ? 1 : isPast ? 0.55 : 0.4,
                        scale: isActive ? 1 : 0.99,
                      }}
                      transition={{ duration: 0.4 }}
                      className={`relative flex items-center justify-between rounded-2xl border p-4 ${
                        isActive
                          ? "border-accent/40 bg-accent-muted"
                          : "border-border bg-background"
                      }`}
                    >
                      <div>
                        <p
                          className={`text-sm font-medium ${
                            isActive ? "text-foreground" : "text-secondary"
                          }`}
                        >
                          {s.label}
                        </p>
                        <p className="text-xs text-secondary">{s.detail}</p>
                      </div>
                      <motion.span
                        animate={{
                          backgroundColor: isActive ? "#FF6A00" : "#EAEAEA",
                        }}
                        className="h-2.5 w-2.5 rounded-full"
                      />
                      {isActive && (
                        <motion.span
                          layoutId="raa-glow"
                          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-accent/30"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
