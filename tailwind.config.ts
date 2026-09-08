import type { Config } from "tailwindcss";

/**
 * Diane Denise — author-brand landing page tokens.
 * Warm cream throughout, one deep-navy accent, near-black serif text.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#F4EEE2", deep: "#EAE1D0" },
        navy: { DEFAULT: "#2A3550", ink: "#202942" },
        ink: { DEFAULT: "#2B2A26", soft: "#4A473F" },
        taupe: "#8B8170",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      maxWidth: { wrap: "1200px", prose: "620px" },
      letterSpacing: { widemark: "0.3em" },
      keyframes: {
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
