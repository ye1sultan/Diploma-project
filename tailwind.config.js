/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                inter : ['Inter', 'sans-serif'],
                andada: ['Andada Pro', 'serif'],
                arvo: ['Arvo', 'sans-serif'],
                amiri: ['Amiri', 'serif']
            }
        },
    },
    plugins: [],
}