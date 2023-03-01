/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
 
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Sriracha", "cursive"],
    },
    
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
