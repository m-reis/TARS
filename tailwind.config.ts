import type { Config } from "tailwindcss";

export default {
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
            primary: "#3d4931",
            secondary: "#e396a4",
            tertiary: "#dfcebc"
        },
        fontFamily: {
            amsterdam: ['var(--font-amsterdam)', 'sans-serif'],
            cinzel:    ['var(--font-cinzel)',    'serif'],
        },
    },
  },
  plugins: [],
} satisfies Config;
