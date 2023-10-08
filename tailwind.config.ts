import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#333333",
        "light-grey": "#808080",
        yellow: "#FFB612",
        red: "#dc0a17",
        green: "#2FC022",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        gotham: ["Gotham", "sans"],
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".typography-h1": {
          "@apply text-[2rem] lg:text-[2.5rem] font-bold uppercase text-dark-grey relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-2 after:bg-dark-grey": "",
        },
      });
    }),
  ],
};
export default config;
