export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'title': ['Roboto', 'sans-serif', ],
      'regular': ['Raleway', 'sans-serif', ],
    }
  },
  plugins: [require("daisyui")],
}

