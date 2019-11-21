// next.config.js
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline')

module.exports = withSass(withCSS(withOffline()));
