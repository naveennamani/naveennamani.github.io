module.exports = {
  content: [
    "components/**/*.{js,jsx,ts,tsx}",
    "layouts/**/*.{js,jsx,ts,tsx}",
    "pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "renderer/**/*.{js,jsx,ts,tsx,md,mdx}"
  ],
  darkMode: "media", // or 'class'
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    styled: true,
    themes: ["light", "dark"]
  },
  theme: {
    extend: {
      fontFamily: {
        special: ['"5x8 LCD"']
      }
    }
  },
  safelist: ["svgicon"]
};
