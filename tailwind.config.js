import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { 
    extend: {
      colors: {
        'blue': '#5551FF',
        'yellow': '#FFC700',
        'purple': '#A259FF',
        'green': '#0FA958',
        'peach': '#FF8577'
      },
      boxShadow: {
        'solid-black': '4px 4px 0 0 #000',
      },
      dropShadow: {
        'semi-black': '0 10px 0 rgba(0, 0, 0, 0.25)'
      }
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}