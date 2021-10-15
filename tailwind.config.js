module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        light: '#68c2e9',
        DEFAULT: '#28A9E0',
        dark: '#1c769c',
      },
      black: '#4D4D4D',
      white: '#FFFFFF',
    },
    extend: {
      height: {
        500: '500px',
      },
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
