const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#3364F6",
          500: "#3364F6",
        },
        cyan: {
          DEFAULT: "#22F7DD",
          500: "#22F7DD",
        },
        yellow: {
          DEFAULT: "#FBCA1D",
          500: "#FBCA1D",
        },
        red: {
          DEFAULT: "#F2542D",
          500: "#F2542D",
        },
        dark: {
          DEFAULT: "#1E1E1E",
          500: "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
});
