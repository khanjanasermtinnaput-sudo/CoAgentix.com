"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, type Lang } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  toggle: () => void;
  t: typeof translations["en"];
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  toggle: () => {},
  t: translations["en"],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("coai-lang") as Lang | null;
    if (saved === "en" || saved === "th") setLang(saved);
  }, []);

  const toggle = () => {
    setLang((l) => {
      const next = l === "en" ? "th" : "en";
      localStorage.setItem("coai-lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] as typeof translations["en"] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
