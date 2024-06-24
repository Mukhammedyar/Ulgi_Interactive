/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#5768FC",
        "light-blue": "#ECEEFF",
        yellow: "#FADB8D",
      },
    },
  },
  plugins: [],
};
