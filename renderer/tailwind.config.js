const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './renderer/pages/**/*.{ts,tsx}',
    './renderer/components/**/*.{ts,tsx}',
    './renderer/layouts/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('daisyui'),
  ],
};
