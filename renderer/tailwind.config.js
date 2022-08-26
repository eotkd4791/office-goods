module.exports = {
  content: [
    './renderer/pages/**/*.{ts,tsx}',
    './renderer/components/**/*.{ts,tsx}',
    './renderer/layouts/**/*.{ts,tsx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('daisyui'),
  ],
};
