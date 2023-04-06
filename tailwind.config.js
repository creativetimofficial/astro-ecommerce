const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#3066FF",
          500: "#3066FF",
        },
        yellow: {
          DEFAULT: "#F19937",
          500: "#F19937",
        },
        red: {
          DEFAULT: "#EA4E3D",
          500: "#EA4E3D",
        },
        green: {
          DEFAULT: "#67C23A",
          500: "#67C23A",
        },
        sky: {
          DEFAULT: "#55A6F8",
          500: "#55A6F8",
        },
        slate: {
          DEFAULT: "#64748B",
          500: "#64748B",
        },
        dark: {
          DEFAULT: "#0F172A",
          500: "#0F172A",
        },
      },
    },
  },
  plugins: [],
});
