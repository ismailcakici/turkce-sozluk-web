module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D51C24',
        secondary: '#0F7A74',
        gray: {
          100: '#E8DEDF',
          200: '#CFC1C1',
          300: '#B09A9C',
          400: '#9F8284',
          500: '#806667',
          600: '#4B3B3C',
        },
        background: '#F1EDEE',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#D51C24',
          secondary: '#0F7A74',
          'primary-light': '#FEF8F8',
          'primary-dark': '#D51C24',
          neutral: '#806667',
          'base-100': '#F1EDEE',
          info: '#CFC1C1',
          success: '#0F7A74',
          warning: '#B09A9C',
          error: '#D51C24',
        },
        dark: {
          primary: '#D51C24',
          secondary: '#0F7A74',
          'primary-light': '#FEF8F8',
          neutral: '#4B3B3C',
          'base-100': '#1f2937',
          info: '#9F8284',
          success: '#0F7A74',
          warning: '#806667',
          error: '#F04F57',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
