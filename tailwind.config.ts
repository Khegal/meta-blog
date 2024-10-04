import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Inter: ["inter", "sans-serif"],
    },
    extend: {
      boxShadow: {
        custom: "0px 12px 24px -6px rgba(24, 26, 42, 0.12)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        inputColor: "#F4F4F5",
        textColor: "#3B3C4A",
        borderColor: "#696A75",
        borderColor2: "#E8E8EA",
        borderColor3: "#DCDDDF",
        voiletishBlue: "#4B6BFB",
        textGrayColor: "#97989F",
        textColor2: "#181A2A",
        bgColor: "#F6F6F7",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
