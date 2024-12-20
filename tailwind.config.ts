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
      colors: {
        checkboxRed: "#FF341C",
        checkboxGreen: "#7EE31A",
        checkboxGreenhover: "#adeb70",
        gradientDark: "#f77600",
        gradientLight: "#ff9d0e",
      },
    },
  },
  plugins: [],
};
export default config;
