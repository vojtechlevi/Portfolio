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
          light: "#111827", // Light mode text
          dark: "#f3f4f6", // Dark mode text
        },
        primary: {
          light: "#4f46e5", // Light mode primary color
          dark: "#818cf8", // Dark mode primary color
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
