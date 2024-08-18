/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "comic-neue": ["Comic Neue", "cursive"],
        anton: ["Anton", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
        "source-code-pro": ["Source Code Pro", "monospace"],
      },
      backgroundColor: {
        about: "rgba(39, 39, 42, .43)",
      },
    },
  },
  plugins: [],
};
