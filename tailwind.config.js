/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      dropShadow: {
        'glow': '0 0 10px 5px rgba(255, 255, 255, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}