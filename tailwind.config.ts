import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070f",
        foreground: "#f4f7fb",
      },
      fontFamily: {
        brand: [
          "var(--font-brand)",
          "var(--font-orbitron)",
          "Orbitron",
          "sans-serif",
        ],
        gaming: [
          "var(--font-gaming)",
          "var(--font-be-vietnam)",
          "Be Vietnam Pro",
          "sans-serif",
        ],
        sans: [
          "var(--font-sans)",
          "var(--font-be-vietnam)",
          "Be Vietnam Pro",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "var(--font-jetbrains-mono)",
          "JetBrains Mono",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
