/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "rgb(255, 225, 69)",
          "primaryHover": "rgb(255, 247, 204)",
          "primaryActive": "rgb(255, 225, 69)",

          "secondary": "rgb(144, 147, 166)",
          "secondaryHover": "rgb(242, 244, 250)",
          "secondaryActive": "rgb(212, 215, 230)",

          "neutral": "#3F4255",

          "base-100": "#FFFFFF",

          "info": "#17233e",

          "success": "#029E9D",

          "warning": "#27334C",

          "error": "#F32B42",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
