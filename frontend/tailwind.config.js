/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amber: {
          500: "#D4A762",
          600: "#B88E2F",
          700: "#967524",
        },
      },
    },
  },
  plugins: [],
};
