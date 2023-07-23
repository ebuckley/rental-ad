import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Abril Fatface", "serif"],
        sans: ["Zilla Slab", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
