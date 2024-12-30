/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')
// const plugin = require('tailwindcss/plugin')

// import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  variants: {
    backgroundColor: [
      'hover',
      'focus',
      'active',
      'odd',
      'dark',
      'dark:hover',
      'dark:focus',
      'dark:active',
      'dark:odd',
    ],
    display: ['responsive', 'dark'],
    textColor: [
      'focus-within',
      'hover',
      'active',
      'dark',
      'dark:focus-within',
      'dark:hover',
      'dark:active',
    ],
    placeholderColor: ['focus', 'dark', 'dark:focus'],
    borderColor: ['focus', 'hover', 'dark', 'dark:focus', 'dark:hover'],
    divideColor: ['dark'],
    boxShadow: ['focus', 'dark:focus'],
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("flowbite/plugin"),
    // eslint-disable-next-line no-undef
    // require('tailwindcss-multi-theme'),
    // eslint-disable-next-line no-undef
    // require('@tailwindcss/custom-forms'),
    // plugin(({ addUtilities, e, theme, variants }) => {
    //   const newUtilities = {}
    //   Object.entries(theme('colors')).map(([name, value]) => {
    //     if (name === 'transparent' || name === 'current') return
    //     const color = value[300] ? value[300] : value
    //     const hsla = Color(color).alpha(0.45).hsl().string()
    //
    //     newUtilities[`.shadow-outline-${name}`] = {
    //       'box-shadow': `0 0 0 3px ${hsla}`,
    //     }
    //   })
    //
    //   addUtilities(newUtilities, variants('boxShadow'))
    // }),
  ],
};
