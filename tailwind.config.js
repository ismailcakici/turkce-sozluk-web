module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D51C24',
        secondary: '#0F7A74',
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require('daisyui')],
}
