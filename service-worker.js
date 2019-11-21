self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.798a4cf3f0267a37e658.js",
    "revision": "6bce480b6da231fbbdac"
  },
  {
    "url": "/_next/static/chunks/styles.cfdabdb92963917668dd.js",
    "revision": "b8ee377bdff726b4fc0b"
  },
  {
    "url": "/_next/static/css/styles.9f439af8.chunk.css",
    "revision": "b8ee377bdff726b4fc0b"
  },
  {
    "url": "/_next/static/runtime/main-b59ded9f46960d99130c.js",
    "revision": "c227ff5b8fa533eec296"
  },
  {
    "url": "/_next/static/runtime/polyfills-ebd4705da3402b2d78e1.js",
    "revision": "eac62969129f68ad8f31"
  },
  {
    "url": "/_next/static/runtime/webpack-9369c5c69dbf6d4912cb.js",
    "revision": "339869abd27a67efd9af"
  },
  {
    "url": "/_next/static\\jFp7vEm51Jot5l-IMg1CD\\pages\\_app.js",
    "revision": "cf9e7ceb5bd36ac90b5e"
  },
  {
    "url": "/_next/static\\jFp7vEm51Jot5l-IMg1CD\\pages\\_error.js",
    "revision": "c0bae1d2ad81945fd890"
  },
  {
    "url": "/_next/static\\jFp7vEm51Jot5l-IMg1CD\\pages\\index.js",
    "revision": "4ea44fc1bf6f43f385fa"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
