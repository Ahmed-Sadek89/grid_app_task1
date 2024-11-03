import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '4rem',
      },
      colors: {
        "custom-blue": "#090761",
        "custom-sky-blue1": "#87a7c5",
        "custom-sky-blue2": "#388ba0",
        "custom-gray": "#f0efef",
        "custom-green": "#1e7531",
        "custom-black1": "#131313",
        "custom-black2": "#373636",
        "custom-black3": "#373636",
      },
    },
  },
  plugins: [],
};
export default config;
