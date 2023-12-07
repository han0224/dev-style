import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
        side: {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
        "side-out": {
          "0%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.15s ease-in",
        side: "side 0.15s ease-out",
        "side-out": "side-out 0.15s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;

//  Entering: "transition ease-out duration-200";
//  From: "opacity-0 translate-y-1";
//  To: "opacity-100 translate-y-0";
//  Leaving: "transition ease-in duration-150";
//  From: "opacity-100 translate-y-0";
//  To: "opacity-0 translate-y-1";
