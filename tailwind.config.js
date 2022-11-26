/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('./src/images/homem-se-vestindo.jpg')",

      }

    },
  },
  plugins: [],
}
