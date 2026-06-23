"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { slideUp, staggerContainer, viewport } from "@/lib/animations";
import { useLanguage } from "@/lib/LanguageContext";

export function ProductEcosystem() {
  const { t } = useLanguage();
  const p = t.products;

  return (
    <section id="products" className="border-t border-border py-section">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <SectionLabel>{p.label}</SectionLabel>
          <h2 className="mt-5 text-display font-semibold text-balance">
            {p.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary">
            {p.description}
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid auto-rows-[minmax(0,1fr)] gap-4 md:grid-cols-3"
        >
          {/* Coagentix Chat */}
          <motion.div variants={slideUp} className="md:col-span-2 md:row-span-2">
            <BentoCard className="h-full bg-foreground text-background">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <Badge dark>{p.chat.badge}</Badge>
                  <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                    {p.chat.name}
                  </h3>
                  <p className="mt-3 max-w-md text-background/60">
                    {p.chat.description}
                  </p>
                </div>
                <ChatMock mock={p.chat.mock} mockReply={p.chat.mockReply} />
              </div>
            </BentoCard>
          </motion.div>

          {/* Coagentix Code */}
          <motion.div variants={slideUp}>
            <BentoCard className="h-full">
              <Badge>{p.code.badge}</Badge>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{p.code.name}</h3>
              <p className="mt-3 text-sm text-secondary">
                {p.code.description}
              </p>
              <CodeMock />
            </BentoCard>
          </motion.div>

          {/* API Platform */}
          <motion.div variants={slideUp}>
            <BentoCard className="h-full">
              <Badge>{p.api.badge}</Badge>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                {p.api.name}
              </h3>
              <p className="mt-3 text-sm text-secondary">
                {p.api.description}
              </p>
              <pre className="mt-6 overflow-hidden rounded-xl border border-border bg-[#FAFAFA] p-4 font-mono text-xs leading-relaxed text-secondary">
                <span className="text-accent">POST</span> /v1/chat{"\n"}
                <span className="text-accent">POST</span> /v1/run{"\n"}
                <span className="text-accent">POST</span> /v1/titan
              </pre>
            </BentoCard>
          </motion.div>

          {/* Roadmap */}
          <motion.div variants={slideUp} className="md:col-span-2">
            <BentoCard className="h-full">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <Badge>{p.roadmap.badge}</Badge>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    {p.roadmap.name}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-secondary">
                    {p.roadmap.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.roadmap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </BentoCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-border p-7 shadow-card transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-card-hover ${className}`}
    >
      {children}
    </div>
  );
}

function Badge({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        dark ? "bg-background/10 text-background" : "bg-accent-muted text-accent"
      }`}
    >
      {children}
    </span>
  );
}

function ChatMock({ mock, mockReply }: { mock: string; mockReply: string }) {
  return (
    <div className="mt-8 space-y-3">
      <div className="ml-auto w-fit max-w-[70%] rounded-2xl rounded-br-sm bg-background/10 px-4 py-2.5 text-sm">
        {mock}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="w-fit max-w-[80%] rounded-2xl rounded-bl-sm bg-background px-4 py-2.5 text-sm text-foreground"
      >
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
        {mockReply}
      </motion.div>
    </div>
  );
}

function CodeMock() {
  return (
    <pre className="mt-6 overflow-hidden rounded-xl border border-border bg-[#FAFAFA] p-4 font-mono text-xs leading-relaxed text-secondary">
      <span className="text-accent">$</span> coai build --validate{"\n"}
      <span className="text-foreground">✓</span> tests 452 passed{"\n"}
      <span className="text-foreground">✓</span> checkpoint saved
    </pre>
  );
}
