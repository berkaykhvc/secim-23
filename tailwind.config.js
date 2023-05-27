/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      'md': '1025px',
      'lg': '1480px',
      'zl': '1550px',
      'xl': '1280px',
      'xll': '1350px',
      '2xl': '2036px',
      'tl': '1481px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        rubik: ['Rubik'],
        russo: ['Russo One'],
        rowdies: ['Rowdies'],
        righteous: ['Righteous'],
        archivo: ['Archivo Black'],
        secular: ['Secular One'],
        braah: ['Braah One'],
        konkhmer: ['Konkhmer Sleokchher']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

