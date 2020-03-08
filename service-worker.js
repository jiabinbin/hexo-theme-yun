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
    "revision": "145971a4f587eeb3f9f301b8dacb36c6"
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
    "url": "assets/js/10.604f6e06.js",
    "revision": "58bab5d5c032038304f86ab999ca9f76"
  },
  {
    "url": "assets/js/11.38d981e0.js",
    "revision": "b00f74652fa2e2b5dbd9b620b4c7721f"
  },
  {
    "url": "assets/js/12.97ea4357.js",
    "revision": "2ec5e2909dc30208eb05346a748fe02b"
  },
  {
    "url": "assets/js/13.8237a7c3.js",
    "revision": "051d8b20295ccd869d95e87feccbb8c3"
  },
  {
    "url": "assets/js/14.27ff6de2.js",
    "revision": "4eae45fee508445c8fd9e80c63e21087"
  },
  {
    "url": "assets/js/15.bd300823.js",
    "revision": "8464e22c5308051218a0e0fbfafea4b6"
  },
  {
    "url": "assets/js/16.699acd5a.js",
    "revision": "dd91c11505132b20193c0d173d37a3c5"
  },
  {
    "url": "assets/js/17.76fe4f1d.js",
    "revision": "a24d8a94062192a44c5cf4560a322376"
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
    "url": "assets/js/app.54510d8c.js",
    "revision": "9d3ba9d5fd2898f5650e14f52bd4b7da"
  },
  {
    "url": "changelog.html",
    "revision": "3e893bac7b8b15e74d121489d3af067c"
  },
  {
    "url": "en/guide/index.html",
    "revision": "b5b707fcdf7628c519535aab479ba075"
  },
  {
    "url": "en/index.html",
    "revision": "46941a80183ef2bf5a6b26e801907293"
  },
  {
    "url": "guide/about.html",
    "revision": "3740edc4c584309083ac3a2cda91c816"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "9bf6013514f9ae4b745e402df9f3567b"
  },
  {
    "url": "guide/config.html",
    "revision": "d9301254c4661a481e00dfa28d56819f"
  },
  {
    "url": "guide/faq.html",
    "revision": "c63ad336f12cb973313407daaf6b4416"
  },
  {
    "url": "guide/index.html",
    "revision": "bbb954f9458a920cb355c958eee4e4a1"
  },
  {
    "url": "guide/page.html",
    "revision": "30114f5c63c15c090a2f194c4da082f3"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "87cbd64fc17bacf933369e8f8df2f6d2"
  },
  {
    "url": "guide/Todo.html",
    "revision": "cf9cc46bceed5406c522dc87bc2c1b77"
  },
  {
    "url": "index.html",
    "revision": "ae38780756f69bf07d44277b3485f649"
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
