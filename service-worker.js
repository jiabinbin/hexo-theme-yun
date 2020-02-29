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
    "revision": "ae8ef7d4aba302a968cbccd407a94e96"
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
    "url": "assets/js/10.36e6ced2.js",
    "revision": "15237490e2de74de053978751f0bbced"
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
    "url": "assets/js/14.0332d170.js",
    "revision": "b388d9fb1b103d51d36daf3360f2c3e5"
  },
  {
    "url": "assets/js/15.7bc0e8af.js",
    "revision": "36df6dd3a81384674335a740f0ad69c1"
  },
  {
    "url": "assets/js/16.3c9b1a17.js",
    "revision": "9aa1b7375285fb3e9f56b0aa65401401"
  },
  {
    "url": "assets/js/17.256c94a0.js",
    "revision": "c23c19ec8339ccf71bf5e4f4d5f0cfc7"
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
    "url": "assets/js/app.d7fda171.js",
    "revision": "8b2206a3bb7ba136f2482436a99bf171"
  },
  {
    "url": "changelog.html",
    "revision": "1b52ffa4d22fce02a1c7ea5248269c36"
  },
  {
    "url": "en/guide/index.html",
    "revision": "4005c0f6f9f8091b60a6085eb04253da"
  },
  {
    "url": "en/index.html",
    "revision": "f38c7c17acd67a3894b0b433fed8b91f"
  },
  {
    "url": "guide/about.html",
    "revision": "3f60ef10674be03db302747b054de04c"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "cfe80f50f4a2addc863d136decb3a27c"
  },
  {
    "url": "guide/config.html",
    "revision": "7d9057415eaac3f25929b3f482cbcfaa"
  },
  {
    "url": "guide/faq.html",
    "revision": "7f5ad30bab6eb85cca0695ac39315f25"
  },
  {
    "url": "guide/index.html",
    "revision": "3522fc2f3763a80abd5063c39b137ea2"
  },
  {
    "url": "guide/page.html",
    "revision": "03701c1e27aa8e3a84b6d4c642172ed4"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "d85c7b6fc9132995c4fcd76141483b68"
  },
  {
    "url": "guide/Todo.html",
    "revision": "cfe7d1f41001d3b7640633167a577fe3"
  },
  {
    "url": "index.html",
    "revision": "2422a41631a0515747b6cec4334d77e6"
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
