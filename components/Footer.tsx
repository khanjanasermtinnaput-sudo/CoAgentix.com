"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect width="24" height="24" rx="6" fill="#000000" />
                <circle cx="8.5" cy="12" r="2.4" fill="#ffffff" />
                <circle cx="15.5" cy="8.5" r="2.1" fill="#FF6A00" />
                <circle cx="15.5" cy="15.5" r="2.1" fill="#ffffff" />
              </svg>
              <span className="text-base font-semibold tracking-tight">Co.AI</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary">
              {f.tagline}
            </p>
          </div>

          {f.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-secondary transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-secondary md:flex-row md:items-center">
          <p>{f.copyright}</p>
          <div className="flex items-center gap-6">
            {f.legal.map((item) => (
              <a key={item} href="#" className="transition-colors hover:text-foreground">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
