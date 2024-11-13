import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGrey: "var(--darkGrey)",
        grey: "var(--grey)",
        white: "var(--white)",
        black: "var(--black)",
        green: "var(--green)",
        red: "var(--red)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
      },
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
};
export default config;


