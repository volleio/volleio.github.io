self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.798a4cf3f0267a37e658.js",
    "revision": "6bce480b6da231fbbdac"
  },
  {
    "url": "/_next/static/chunks/styles.d6dbf6c644f6f030e24c.js",
    "revision": "b51f1080ff6b094e09b5"
  },
  {
    "url": "/_next/static/css/styles.0c6c29ed.chunk.css",
    "revision": "b51f1080ff6b094e09b5"
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
    "url": "/_next/static\\3umrfbEJMW3S9y4-7_5E9\\pages\\_app.js",
    "revision": "ab887a54be3d971c6035"
  },
  {
    "url": "/_next/static\\3umrfbEJMW3S9y4-7_5E9\\pages\\_error.js",
    "revision": "789f20e2d4b364bd75c1"
  },
  {
    "url": "/_next/static\\3umrfbEJMW3S9y4-7_5E9\\pages\\index.js",
    "revision": "73abd70000be26d0da77"
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
self.__precacheManifest = [
  {
    "url": "static/AR/ar.html",
    "revision": "6feea1861f76b7b7203a09a6a01bc1b5"
  },
  {
    "url": "static/AR/business-card.png",
    "revision": "1f5b4182c1b6c6275386029f14a357b7"
  },
  {
    "url": "static/AR/data/data/camera_para.dat",
    "revision": "343c761a5174cf7f427e30ba75ceb63f"
  },
  {
    "url": "static/AR/jsartoolkit5/artoolkit.api.js",
    "revision": "b60497714265f409559740a9e342ec6d"
  },
  {
    "url": "static/AR/jsartoolkit5/artoolkit.min.js",
    "revision": "c039181877429366a24e60335f58c362"
  },
  {
    "url": "static/AR/pattern-L.patt",
    "revision": "ae93eec41ab9cbb50a745b4ce0c9cd9e"
  },
  {
    "url": "static/AR/pattern-L.png",
    "revision": "fa93355865bd70fa09e530a0fc05d96d"
  },
  {
    "url": "static/AR/pattern-V.patt",
    "revision": "3bb72f54c91b0561d3a9952824f3b793"
  },
  {
    "url": "static/AR/pattern-V.png",
    "revision": "9b99e7f388827121518d0ddec25ff196"
  },
  {
    "url": "static/AR/three.js/three.min.js",
    "revision": "dd41010f7147e2f0f79bab6be8eab3bf"
  },
  {
    "url": "static/AR/threex/threex-arbasecontrols.js",
    "revision": "b58a5f72f75ef533834cb0db240882ae"
  },
  {
    "url": "static/AR/threex/threex-armarkercontrols.js",
    "revision": "3db530b028ca73a831cbd7a12aab2c5e"
  },
  {
    "url": "static/AR/threex/threex-armarkerhelper.js",
    "revision": "d057b361fa007120900e15a0e6765c0c"
  },
  {
    "url": "static/AR/threex/threex-armultimarkercontrols.js",
    "revision": "0f620a322739361751a44e94b6bb7e8c"
  },
  {
    "url": "static/AR/threex/threex-armultimarkerutils.js",
    "revision": "4909482f40446aa922ca60efd4068aba"
  },
  {
    "url": "static/AR/threex/threex-arsmoothedcontrols.js",
    "revision": "ac7b6fe0bfb3f83d45cc55dbc3f90f5e"
  },
  {
    "url": "static/AR/threex/threex-artoolkitcontext.js",
    "revision": "76b29bbb70cf0a8a4ddbe0666dcc6dc8"
  },
  {
    "url": "static/AR/threex/threex-artoolkitprofile.js",
    "revision": "adcdf01b25b802c21fdb4bea4d06cf3a"
  },
  {
    "url": "static/AR/threex/threex-artoolkitsource.js",
    "revision": "9d9ae5d39e39f7385ce38b5581bdad1a"
  },
  {
    "url": "static/colourpicker.css",
    "revision": "05354b1eaf7a71f66e406edc29bca466"
  },
  {
    "url": "static/favicon.png",
    "revision": "ce91c6ca30c5a7336629c0e598fe293c"
  },
  {
    "url": "static/images/biometric-diary.png",
    "revision": "36d14b3d116690523dda219502bca632"
  },
  {
    "url": "static/images/colourpicker.png",
    "revision": "2bd61e0e48d5e09ec75da7798a1d4ed8"
  },
  {
    "url": "static/images/email-selected.svg",
    "revision": "8efc3af976d27f1da96248e07488e43d"
  },
  {
    "url": "static/images/email.svg",
    "revision": "abd66736bfa9b2cb634cd875998baa93"
  },
  {
    "url": "static/images/flash-lab.png",
    "revision": "691657d634cf7b5d292834d630eaa756"
  },
  {
    "url": "static/images/food-diplomat.png",
    "revision": "751f5b3ee9f32f61f044871cc064eb50"
  },
  {
    "url": "static/images/github-link.svg",
    "revision": "72a482f4ec8bbf534fd7374068a8584b"
  },
  {
    "url": "static/images/github-selected.svg",
    "revision": "5d24f605932217e81ef41ca8f77cf96a"
  },
  {
    "url": "static/images/github.svg",
    "revision": "9a93727e8e1689ccb73f4971440bf5f7"
  },
  {
    "url": "static/images/glo-spa-woodstock.png",
    "revision": "66ab14ea38411f792dec74ddaefd99f6"
  },
  {
    "url": "static/images/insta-selected.svg",
    "revision": "eb3437e16ec448e959620e428d4a545c"
  },
  {
    "url": "static/images/insta.svg",
    "revision": "fe847bac3425d7c25afd8f2fa4cf1ff3"
  },
  {
    "url": "static/images/linkedn-selected.svg",
    "revision": "a2197bd368ce74ba65942f3f2da9a730"
  },
  {
    "url": "static/images/linkedn.svg",
    "revision": "d971e18166be843fff9e9bc9674c3a1c"
  },
  {
    "url": "static/images/me-avatar.svg",
    "revision": "565559eac66b021a3c68f473611d0531"
  },
  {
    "url": "static/images/me-selected.svg",
    "revision": "0357162c64b397a8830895b58229dd50"
  },
  {
    "url": "static/images/me.svg",
    "revision": "af15d5617ff912c56b8b8f874b8fe4fa"
  },
  {
    "url": "static/images/mobile-devtools.png",
    "revision": "b72436ab3267edcf11fce3c9d5b440dc"
  },
  {
    "url": "static/images/presentation-link.svg",
    "revision": "aab76e96f54f76e477eabf874dfdd370"
  },
  {
    "url": "static/images/sanitation-vehicle-tracker.png",
    "revision": "37df0831d10035d055101882105c0739"
  },
  {
    "url": "static/images/summary-to-speech.png",
    "revision": "5318f73586cce18812d3a780b7e84e6f"
  },
  {
    "url": "static/images/twittr-selected.svg",
    "revision": "5750ba3a484a7e3caf7237e0e9ee1e7d"
  },
  {
    "url": "static/images/twittr.svg",
    "revision": "aa16d15decba8c51286235d84c295bd0"
  },
  {
    "url": "static/images/volle.io.png",
    "revision": "1b9adcbe9051a0063ec061f8e0f84373"
  },
  {
    "url": "static/images/webpage-link.svg",
    "revision": "01a66918a77b65110ef020d4161840bd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
