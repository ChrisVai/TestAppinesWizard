/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    /* naming convention : 'wz-' prefix used for 'wizardApp' to prevent duplicates/naming conflicts */
    colors: {
      'wz-bg-dark-green': '#004755',
      'wz-font-color-light-green': '#53A7BC',
      'wz-font-color-light-gray': '#DBE6E9',
      'wz-border-color-light-green': '#4B91A1',
      'wz-pink': '#C64191',
      'wz-light-purple' : '#9C95DC',
      'wz-turquoise': '#53A7BC',
    },
    extend: {
      fontFamily: {
        montserratAlternatesSans: ['"Montserrat Alternates"', 'sans-serif'],
        montserratSans: ['"Montserrat"', 'sans-serif'],
      },
      padding: {
        'wz-card-y': '15px',
        'wz-card-x': '20px',
      },
      boxShadow: {
        'wz-box-shadow': '0 4px 4px 0 #00000040',
      },
      screens: {
        tablet: "640px",
      }
    },
  },
  plugins: [],
}

