const daisyui = require('daisyui');

module.exports = {
  content: [
    './{app,components,src,pages}/**/*.{ts,tsx,js,jsx,html}', // include app dir
    '../../libs/**/*.{ts,tsx,js,jsx,html}', // shared libs
    '!../../libs/**/*.{stories,spec}.{ts,tsx,js,jsx,html}', // ignore tests/stories
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'],
        signature: ['"Satisfy"', 'cursive'],
        body: ['"Inter Variable"', 'sans-serif'],
        title: ['"Playfair Display Variable"', 'serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
