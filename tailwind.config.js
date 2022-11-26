/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('./src/images/homem-se-vestindo.jpg')",

      },
      boxShadow: {
        'shadow': '0px 0px 10px 2px rgb(0 0 0 / 30%)'
      }

    },
  },
  plugins: [],
}
