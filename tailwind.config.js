/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'image-min-md': "linear-gradient(rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.727)), url('/src/images/homem-se-vestindo-alternativo.jpg')",

        'bg-image': "linear-gradient(rgba(0, 0, 0, 0.73), rgba(0, 0, 0, 0.727)), url('/src/images/homem-se-vestindo.jpg')"

      },
      boxShadow: {
        'shadow': '0px 0px 10px 2px rgb(0 0 0 / 30%)'
      }

    },
  },
  plugins: [],
}
