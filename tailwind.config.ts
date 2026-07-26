import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F2",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E9CE7C",
          dark: "#A9832A",
        },
        maroon: {
          DEFAULT: "#7A1025",
          deep: "#4F0A18",
        },
        temple: "#5B3B26",
        lotus: "#F7DDE6",
        leaf: "#D7E8C4",
      },
      fontFamily: {
        heading: ["Cinzel", "serif"],
        body: ["Poppins", "sans-serif"],
        telugu: ["Noto Serif Telugu", "serif"],
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(0,-10vh,0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translate3d(-6vw,110vh,0) rotate(320deg)", opacity: "0" },
        },
        cloudMove: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(110%)" },
        },
        birdFly: {
          "0%": { transform: "translate(-10%, 0)" },
          "100%": { transform: "translate(120%, -6%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        swingBell: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        drift: "drift linear infinite",
        cloudMove: "cloudMove linear infinite",
        birdFly: "birdFly linear infinite",
        shimmer: "shimmer 3.5s linear infinite",
        swingBell: "swingBell 3.2s ease-in-out infinite",
        bob: "bob 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
