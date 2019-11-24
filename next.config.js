// next.config.js
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline')
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
	[withSass],
	[withCSS],
	[withOffline],
	[optimizedImages, {
		optimizeImagesInDev: true,
	}],
]);
