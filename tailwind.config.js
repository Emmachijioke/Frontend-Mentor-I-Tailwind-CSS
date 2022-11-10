/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background': 'hsl(270, 20%, 96%)',
        'button': 'hsl(271, 36%, 24%)',
        'radio': 'hsl(289, 100%, 72%)',
        'light-violet': 'hsl(264, 100%, 61%)',
        'Light-Magenta': 'hsl(293, 100%, 63%)',
        'white': 'hsl(0, 0%, 100%)',
        'sub-heading': 'hsl(276, 100%, 81%)',
        'chat-left': 'hsl(276, 55%, 52%)',
        'chat-right': 'hsl(271, 15%, 43%)',
        'placeholder': 'hsl(206, 6%, 79%)',
        'main-heading': 'hsl(271, 36%, 24%)',
        'paragraph': 'hsl(270, 7%, 64%)',
      }
    },
  },
  plugins: [],
}
