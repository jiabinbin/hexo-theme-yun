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
    "revision": "5895de9e925473584578be21e745c08a"
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
    "url": "assets/js/app.b66aa3ca.js",
    "revision": "466cbec835593c3a902a3ccb3fda71b7"
  },
  {
    "url": "changelog.html",
    "revision": "61313f21912dd570c03afa9035bf5caa"
  },
  {
    "url": "en/guide/index.html",
    "revision": "63c125008c884c09bb2bd8ab75d0bde2"
  },
  {
    "url": "en/index.html",
    "revision": "133cd79263b940a55ef288aaf8711057"
  },
  {
    "url": "guide/about.html",
    "revision": "7863d498eba5067c4d869efd9b377f77"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "2f0c8182fc9959866e01cd7f54e6ca12"
  },
  {
    "url": "guide/config.html",
    "revision": "387dc72865b37c5ff12f84720a18086f"
  },
  {
    "url": "guide/faq.html",
    "revision": "507bf6ef0e395886314746fa513250fa"
  },
  {
    "url": "guide/index.html",
    "revision": "e8724440d28fd829d6c76226785e5b09"
  },
  {
    "url": "guide/page.html",
    "revision": "de0374a767b5219f503cf692cc0d19ce"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "4713d29f8f53c6370a9f19f120721c7a"
  },
  {
    "url": "guide/Todo.html",
    "revision": "20b6651c735d9b18b42a8effd7fec876"
  },
  {
    "url": "index.html",
    "revision": "d9dc7ebc2ca29b42b48b14035458774b"
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
