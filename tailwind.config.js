/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ]
  ,
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: '#97582c',
          "base-100": '#FFFFFF'
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}