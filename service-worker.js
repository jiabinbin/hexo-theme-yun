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
    "url": "404.html",
    "revision": "82c1b7d0927bb268e859de7c8c544583"
  },
  {
    "url": "assets/css/0.styles.1748c913.css",
    "revision": "40e7472dd01549a781e483ef47020064"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.86cdb439.js",
    "revision": "d0d9d18fb5457ac8d9e3c616b61405f7"
  },
  {
    "url": "assets/js/11.02e5c7d7.js",
    "revision": "98c5f76aa20f08dc1cf31b475426c317"
  },
  {
    "url": "assets/js/12.bd3b3bfc.js",
    "revision": "3008dca1cb32d2894fcd417b9e41d207"
  },
  {
    "url": "assets/js/13.663f9bab.js",
    "revision": "b25d7e99a432aa71296e71fc41f2abea"
  },
  {
    "url": "assets/js/14.dd22f434.js",
    "revision": "ea0309878ad16122a8ea46ecf450a886"
  },
  {
    "url": "assets/js/15.7bc0e8af.js",
    "revision": "36df6dd3a81384674335a740f0ad69c1"
  },
  {
    "url": "assets/js/16.e7ab62a4.js",
    "revision": "bf8465bc0bdda1bd3527332384e235d1"
  },
  {
    "url": "assets/js/17.64594883.js",
    "revision": "609b2e5c851df474b2583412965aa013"
  },
  {
    "url": "assets/js/18.dda3f7a8.js",
    "revision": "087f5cfe4cc23f71650c3594cfbcbd02"
  },
  {
    "url": "assets/js/2.dddded28.js",
    "revision": "d8b1babceb137990b983e0f4b4223619"
  },
  {
    "url": "assets/js/3.3db8a61e.js",
    "revision": "f352a80487d0c856774ffe936443f025"
  },
  {
    "url": "assets/js/4.ca473ff7.js",
    "revision": "932949af7061695f5c7115edaf73e03b"
  },
  {
    "url": "assets/js/5.7c40eeda.js",
    "revision": "2cd0776caacc66c4a9f3d17cf3d53dfc"
  },
  {
    "url": "assets/js/6.31ce5d56.js",
    "revision": "8cc3683c2e0139cdc6dd6fbde8b1ae29"
  },
  {
    "url": "assets/js/7.7f4f3da3.js",
    "revision": "cbf4ede918910eeb9713ea56c54318d8"
  },
  {
    "url": "assets/js/8.3dc80ba1.js",
    "revision": "41ba4374ece47f412ffcc98522d55df0"
  },
  {
    "url": "assets/js/9.80e12645.js",
    "revision": "d04b46ea6af9eefad21af7c19989ef69"
  },
  {
    "url": "assets/js/app.7c191d20.js",
    "revision": "844a02e18df6b7d6ae81d8dd2d68f3d1"
  },
  {
    "url": "changelog.html",
    "revision": "2a7207cf41923db028bea795291abcab"
  },
  {
    "url": "en/guide/index.html",
    "revision": "95ccd3170a31545a98be1089b6e1e2e1"
  },
  {
    "url": "en/index.html",
    "revision": "9a4a74a2f2a9b77047dbe78f544e647e"
  },
  {
    "url": "guide/about.html",
    "revision": "17ad6d2b58389223f889afa1fd0cab9b"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "2983a55295d0f8130c1281c0487229f5"
  },
  {
    "url": "guide/config.html",
    "revision": "c1af37ee9e2ef6b93d57a6be20e822a2"
  },
  {
    "url": "guide/faq.html",
    "revision": "3cf81c6cd536dac7dab0c7a9ffe50fa9"
  },
  {
    "url": "guide/index.html",
    "revision": "48398d3673587e2817c2dcadef5a0a00"
  },
  {
    "url": "guide/page.html",
    "revision": "d750cc7c4aa17792a03a04412add188c"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "271fbcf86e7d40f2d95bee6f3260e330"
  },
  {
    "url": "guide/Todo.html",
    "revision": "66409c5f2e3d179e4897248e64824dfa"
  },
  {
    "url": "index.html",
    "revision": "ebede2064aa352d651c8417ec0a2fe91"
  },
  {
    "url": "logo.gif",
    "revision": "a15b28b70e73f11115a7d195eba8b3b9"
  },
  {
    "url": "logo.png",
    "revision": "bb35d0cf00948250fd08e4663c133e12"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
