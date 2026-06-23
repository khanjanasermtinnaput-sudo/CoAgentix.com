"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { slideUp, staggerContainer, viewport } from "@/lib/animations";

export function ProductEcosystem() {
  return (
    <section id="products" className="border-t border-border py-section">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <SectionLabel>Product ecosystem</SectionLabel>
          <h2 className="mt-5 text-display font-semibold text-balance">
            One intelligence, many surfaces
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary">
            The same orchestration engine powers every Co.AI product — from chat
            to code to raw API access.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-14 grid auto-rows-[minmax(0,1fr)] gap-4 md:grid-cols-3"
        >
          {/* Co.AI Chat — large feature tile */}
          <motion.div variants={slideUp} className="md:col-span-2 md:row-span-2">
            <BentoCard className="h-full bg-foreground text-background">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <Badge dark>Flagship · Mikros 1.0 / Kanon 1.0</Badge>
                  <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                    Coagentix Chat
                  </h3>
                  <p className="mt-3 max-w-md text-background/60">
                    The general AI assistant. Mikros 1.0 for fast everyday answers,
                    Kanon 1.0 for balanced, deeper reasoning — backed by DARS
                    failover so a reply always lands.
                  </p>
                </div>
                <ChatMock />
              </div>
            </BentoCard>
          </motion.div>

          {/* Co.AI Code */}
          <motion.div variants={slideUp}>
            <BentoCard className="h-full">
              <Badge>Lite · 1.0 · Pro · Titan</Badge>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">Coagentix Code</h3>
              <p className="mt-3 text-sm text-secondary">
                Build software conversation-first — from one-shot snippets to
                Titan&apos;s gated architect workflow.
              </p>
              <CodeMock />
            </BentoCard>
          </motion.div>

          {/* API Platform */}
          <motion.div variants={slideUp}>
            <BentoCard className="h-full">
              <Badge>Build</Badge>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                API Platform
              </h3>
              <p className="mt-3 text-sm text-secondary">
                The tmap-v2 engine over streaming SSE endpoints — bring
                orchestration into your own product.
              </p>
              <pre className="mt-6 overflow-hidden rounded-xl border border-border bg-[#FAFAFA] p-4 font-mono text-xs leading-relaxed text-secondary">
                <span className="text-accent">POST</span> /v1/chat{"\n"}
                <span className="text-accent">POST</span> /v1/run{"\n"}
                <span className="text-accent">POST</span> /v1/titan
              </pre>
            </BentoCard>
          </motion.div>

          {/* Future products */}
          <motion.div variants={slideUp} className="md:col-span-2">
            <BentoCard className="h-full">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <Badge>Roadmap</Badge>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    What&apos;s next
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-secondary">
                    Projects persistence, live file trees with diff view, one-click
                    export — and richer memory with embeddings.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Projects", "Live file trees", "Project export", "Memory v2"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-secondary"
                    >
                      {t}
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

function ChatMock() {
  return (
    <div className="mt-8 space-y-3">
      <div className="ml-auto w-fit max-w-[70%] rounded-2xl rounded-br-sm bg-background/10 px-4 py-2.5 text-sm">
        Summarize this quarter and draft the follow-up.
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="w-fit max-w-[80%] rounded-2xl rounded-bl-sm bg-background px-4 py-2.5 text-sm text-foreground"
      >
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
        Kanon 1.0 · DARS routing across providers…
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
