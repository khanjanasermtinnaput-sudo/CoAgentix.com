import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
        secondary: "#666666",
        border: "#EAEAEA",
        accent: {
          DEFAULT: "#FF6A00",
          soft: "#FF8C3A",
          muted: "rgba(255, 106, 0, 0.08)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(2.75rem, 7vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.04em" }],
        "display": ["clamp(2rem, 4.5vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "headline": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        container: "1240px",
      },
      spacing: {
        section: "clamp(6rem, 12vw, 11rem)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.12)",
        "card-hover": "0 1px 2px rgba(0,0,0,0.06), 0 24px 48px -16px rgba(0,0,0,0.18)",
        glow: "0 0 0 1px rgba(255,106,0,0.2), 0 8px 40px -8px rgba(255,106,0,0.35)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2%, -3%) scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "float-slow": "float-slow 14s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
