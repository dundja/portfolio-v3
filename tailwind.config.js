module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#28A9E0',
      black: '#4D4D4D',
    },
    // extend: {},
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
