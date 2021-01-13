module.exports = () => ({
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-nested"),
    require("postcss-custom-properties"),
    require("autoprefixer"),
  ],
})
