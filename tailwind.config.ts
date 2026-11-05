import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07070a",
        foreground: "#f3f4f6",
        surface: {
          DEFAULT: "#0d0d14",
          subtle: "#12121c",
          elevated: "#181824",
          border: "#232338",
        },
        neon: {
          purple: "#a855f7",
          violet: "#8b5cf6",
          fuchsia: "#d946ef",
          blue: "#3b82f6",
          cyan: "#00f0ff",
          emerald: "#10b981",
          amber: "#f59e0b",
        },
      },
      fontFamily: {
        gaming: ["var(--font-gaming)", "Montserrat", "Be Vietnam Pro", "sans-serif"],
        sans: ["var(--font-sans)", "Be Vietnam Pro", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero":
          "radial-gradient(circle at 50% -20%, rgba(168, 85, 247, 0.25) 0%, rgba(0, 240, 255, 0.12) 40%, rgba(7, 7, 10, 0) 75%)",
        "gradient-card-glow":
          "linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(0, 240, 255, 0.08) 100%)",
        "neon-gradient":
          "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #00f0ff 100%)",
        "neon-gradient-hover":
          "linear-gradient(135deg, #c084fc 0%, #818cf8 50%, #38bdf8 100%)",
      },
      boxShadow: {
        "glow-purple": "0 0 25px -4px rgba(168, 85, 247, 0.45)",
        "glow-cyan": "0 0 25px -4px rgba(0, 240, 255, 0.4)",
        "glow-combined":
          "0 0 35px -5px rgba(168, 85, 247, 0.35), 0 0 20px -5px rgba(0, 240, 255, 0.25)",
        "glow-card": "0 8px 32px -8px rgba(0, 0, 0, 0.6), 0 0 16px -2px rgba(168, 85, 247, 0.15)",
        "glow-card-hover": "0 12px 40px -6px rgba(0, 0, 0, 0.8), 0 0 24px -1px rgba(0, 240, 255, 0.25)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.03)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
