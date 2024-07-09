import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackrussian: '#030426',
        cetaceanblue: '#001440',
      }
    }
  },
  plugins: [],
};
export default config;
