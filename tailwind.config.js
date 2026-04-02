/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "bg-gradient-to-r",
    "bg-gradient-to-br",
    "from-indigo-100",
    "via-purple-100",
    "to-pink-100",
    "from-indigo-500",
    "to-purple-600",
    "text-white",
    "shadow-2xl",
    "rounded-3xl",
    "p-10",
    "grid",
    "md:grid-cols-3",
    "gap-6"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}