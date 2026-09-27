import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B1E2B",
        slateink: "#5B6072",
        mist: "#F6F7FC",
        cloud: "#FFFFFF",
        indigo: {
          DEFAULT: "#4F6BFF",
          soft: "#EEF1FF",
          deep: "#3347CC"
        },
        coral: {
          DEFAULT: "#FF9A62",
          soft: "#FFEDDD"
        },
        sky: {
          DEFAULT: "#6EA8FE",
          soft: "#E7F0FF"
        },
        line: "#E7E9F3"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(79, 107, 255, 0.35)",
        card: "0 12px 30px -12px rgba(27, 30, 43, 0.12)",
        pill: "0 8px 20px -8px rgba(79, 107, 255, 0.45)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        drift: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(10px, -12px) scale(1.03)" }
        },
        blink: {
          "0%, 90%, 100%": { transform: "scaleY(1)" },
          "95%": { transform: "scaleY(0.1)" }
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
        blink: "blink 4.5s ease-in-out infinite",
        rise: "rise 0.5s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
