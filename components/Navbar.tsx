"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { CHAT_URL } from "@/lib/site";
import { useLanguage } from "@/lib/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLanguage();

  const links = [
    { label: t.nav.technology, href: "#technology" },
    { label: t.nav.architecture, href: "#architecture" },
    { label: t.nav.benchmarks, href: "#benchmarks" },
    { label: t.nav.products, href: "#products" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <a href="#main" className="flex items-center gap-2" aria-label="Co.AI home">
          <Logo />
          <span className="text-base font-semibold tracking-tight">Co.AI</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-secondary transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {/* Language toggle */}
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-secondary transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <span className={lang === "en" ? "text-foreground font-semibold" : "text-secondary"}>EN</span>
            <span className="text-border">/</span>
            <span className={lang === "th" ? "text-foreground font-semibold" : "text-secondary"}>TH</span>
          </button>

          <a
            href={CHAT_URL}
            className="text-sm text-secondary transition-colors hover:text-foreground"
          >
            {t.nav.signIn}
          </a>
          <a href={CHAT_URL} className="btn-accent text-sm">
            {t.nav.startChatting}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {/* Language toggle (mobile) */}
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs font-medium text-secondary"
          >
            <span className={lang === "en" ? "text-foreground font-semibold" : "text-secondary"}>EN</span>
            <span className="text-border">/</span>
            <span className={lang === "th" ? "text-foreground font-semibold" : "text-secondary"}>TH</span>
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-4 bg-foreground transition-transform duration-300",
                  open && "translate-y-[5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-4 bg-foreground transition-transform duration-300",
                  open && "-translate-y-[5px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base text-foreground hover:bg-accent-muted"
                >
                  {l.label}
                </a>
              ))}
              <a href={CHAT_URL} onClick={() => setOpen(false)} className="btn-accent mt-2">
                {t.nav.startChatting}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Logo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#000000" />
      <circle cx="8.5" cy="12" r="2.4" fill="#ffffff" />
      <circle cx="15.5" cy="8.5" r="2.1" fill="#FF6A00" />
      <circle cx="15.5" cy="15.5" r="2.1" fill="#ffffff" />
      <path d="M10.6 11l3-2M10.6 13l3 2" stroke="#ffffff" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}
