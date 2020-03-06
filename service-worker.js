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
    "revision": "27c0c43d0a815292f8d9442b732fae5a"
  },
  {
    "url": "assets/css/0.styles.6aa9fc80.css",
    "revision": "40e7472dd01549a781e483ef47020064"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c541db63.js",
    "revision": "15237490e2de74de053978751f0bbced"
  },
  {
    "url": "assets/js/11.1b1b8919.js",
    "revision": "9f9419bf3e5e3273fd371a3580e8e6bf"
  },
  {
    "url": "assets/js/12.59d500d4.js",
    "revision": "3008dca1cb32d2894fcd417b9e41d207"
  },
  {
    "url": "assets/js/13.422f25b5.js",
    "revision": "b25d7e99a432aa71296e71fc41f2abea"
  },
  {
    "url": "assets/js/14.e7e65fec.js",
    "revision": "6d5ea94b7dfdd7b9c6e270c88356e1c4"
  },
  {
    "url": "assets/js/15.206939e2.js",
    "revision": "36df6dd3a81384674335a740f0ad69c1"
  },
  {
    "url": "assets/js/16.ee6f5cd2.js",
    "revision": "99435f900ec52fd87c0910e38d7e33a6"
  },
  {
    "url": "assets/js/17.56703c3a.js",
    "revision": "4dade7de5f9c56292d1a58cedb9654b5"
  },
  {
    "url": "assets/js/18.2052b3cf.js",
    "revision": "087f5cfe4cc23f71650c3594cfbcbd02"
  },
  {
    "url": "assets/js/2.4c6a1c10.js",
    "revision": "d8b1babceb137990b983e0f4b4223619"
  },
  {
    "url": "assets/js/3.0c5c205d.js",
    "revision": "f352a80487d0c856774ffe936443f025"
  },
  {
    "url": "assets/js/4.f180985b.js",
    "revision": "932949af7061695f5c7115edaf73e03b"
  },
  {
    "url": "assets/js/5.dac3e8b9.js",
    "revision": "2cd0776caacc66c4a9f3d17cf3d53dfc"
  },
  {
    "url": "assets/js/6.0e1dc5d1.js",
    "revision": "8cc3683c2e0139cdc6dd6fbde8b1ae29"
  },
  {
    "url": "assets/js/7.cabfba68.js",
    "revision": "9ff1c53538ebad79b59624c385a7f8d6"
  },
  {
    "url": "assets/js/8.44276722.js",
    "revision": "41ba4374ece47f412ffcc98522d55df0"
  },
  {
    "url": "assets/js/9.d3fd572e.js",
    "revision": "d04b46ea6af9eefad21af7c19989ef69"
  },
  {
    "url": "assets/js/app.d9b9fa8b.js",
    "revision": "bed792261a173371dde6eca721f97fb3"
  },
  {
    "url": "changelog.html",
    "revision": "7fe9c509f4d7515bcc27f7a50bc55b40"
  },
  {
    "url": "en/guide/index.html",
    "revision": "2d47f92511321e8f9299bb5be8d16483"
  },
  {
    "url": "en/index.html",
    "revision": "85b137c3eecfac1d1cbe01e7a091b382"
  },
  {
    "url": "guide/about.html",
    "revision": "a2a08041626b5869656a72d00d6dfc7d"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "f0bf0907a7609aee0375e4a35a918692"
  },
  {
    "url": "guide/config.html",
    "revision": "f4958cf0265568ec7e83812218d7e86b"
  },
  {
    "url": "guide/faq.html",
    "revision": "06ff66461d5fd06934c0cfd1382333c6"
  },
  {
    "url": "guide/index.html",
    "revision": "ea6127b9a550a6834fb64ebf1f7cfe98"
  },
  {
    "url": "guide/page.html",
    "revision": "20d0722a38aea6b44ffe0fa532e51420"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "780f80614d80f04ae2500d636489beaa"
  },
  {
    "url": "guide/Todo.html",
    "revision": "26d88d3ff2c7f12e56e95f8a6e0384c8"
  },
  {
    "url": "index.html",
    "revision": "828dd3b786ab95fb3952c2bd15096d55"
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
