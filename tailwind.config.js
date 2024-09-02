/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode using a class
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        background: {
          light: "#eeeeee", // Light mode background
          dark: "#121212", // Dark mode background
          darkcontainer: "#1c1c1b",
          darkborder: "#2e2e2e",
        },
        text: {
          light: "#eeeeee", // Light mode text
          dark: "#4e4e4e", // Dark mode text
        },
        // Add more custom colors as needed
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
