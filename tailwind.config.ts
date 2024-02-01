import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors : {
        primary : {
          main : '#6548AE',
          surface : '#F5F5FF',
          border : '#E0E0E0',
          hover : '#3334CC',
          pressed : '#21217A',
          focus : '#fff',
        },
        neutral : {
          main : "#A1A1A1"
        },
        text :  {
          100: '#6B7280',
          200 : "#111928",
          300 : "#9E9E9E",
          400 : '#404040',
          500 : '#141619',
          
        },
        gray : {
          100 : '#ECECEC',
          200 : '#F9FAFB',
          300 : "#D2D5DA",
          400 : '#7C7C7C'
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
