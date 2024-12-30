// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss'), require('autoprefixer'),
    // eslint-disable-next-line no-undef
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
