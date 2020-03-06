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
    "revision": "9700c3c722900009f7f669c9cfb9c44c"
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
    "url": "assets/js/app.8fc5e280.js",
    "revision": "fbd1e008642e417c7b904e49ced0583e"
  },
  {
    "url": "changelog.html",
    "revision": "d5b2beb69cacda631c3a8930d04dc029"
  },
  {
    "url": "en/guide/index.html",
    "revision": "2d3d0fccb48d62a04175488d580e1b66"
  },
  {
    "url": "en/index.html",
    "revision": "015dfad0bbf8850d99a34bbe7951d83a"
  },
  {
    "url": "guide/about.html",
    "revision": "3b90a6c24cd03b1cf9f1c7935ccc9209"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "fe8ee23ba7ca4b4d3a26cac8b82055fa"
  },
  {
    "url": "guide/config.html",
    "revision": "2e98ec3405629216f83349f7728deb72"
  },
  {
    "url": "guide/faq.html",
    "revision": "09ac8ca4c13d8af94317dbf8d8ce1b6e"
  },
  {
    "url": "guide/index.html",
    "revision": "aaeec288c8abaee5b5819b3b8228242f"
  },
  {
    "url": "guide/page.html",
    "revision": "ee6dd706283b21b147660a2292c44522"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "1952a8f2654adf684fba7dfcf71d4968"
  },
  {
    "url": "guide/Todo.html",
    "revision": "f73b5969cd5ea2292aa518aac3f2c16a"
  },
  {
    "url": "index.html",
    "revision": "6662bb2078df70083e38e769828c20f1"
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
