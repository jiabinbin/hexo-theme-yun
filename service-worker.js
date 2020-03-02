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
    "revision": "62c50b77a3b6c64493ba7792d1bda4d8"
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
    "url": "assets/js/11.4ad89dc4.js",
    "revision": "9f9419bf3e5e3273fd371a3580e8e6bf"
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
    "url": "assets/js/14.83de6743.js",
    "revision": "07f14a9c4616fa58984e9df735092930"
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
    "url": "assets/js/7.2b85df89.js",
    "revision": "9ff1c53538ebad79b59624c385a7f8d6"
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
    "url": "assets/js/app.b6aa7ab4.js",
    "revision": "6cdc5b19fa8903c231f9a934dc687e0f"
  },
  {
    "url": "changelog.html",
    "revision": "4a7034795c85e166dfb6b3426e99df17"
  },
  {
    "url": "en/guide/index.html",
    "revision": "584b5a28ca953f31908c22146fd54cfa"
  },
  {
    "url": "en/index.html",
    "revision": "441734624a25197ac445c893acb14bf8"
  },
  {
    "url": "guide/about.html",
    "revision": "a897d75f699687afe6557958131b5db5"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "19e303cd121a054f093759933d054450"
  },
  {
    "url": "guide/config.html",
    "revision": "325be9651426d91abb6654608b41a713"
  },
  {
    "url": "guide/faq.html",
    "revision": "95055a213f3b933e04ed1ac7db871ca5"
  },
  {
    "url": "guide/index.html",
    "revision": "2ebbf94068f35aeef077eb56398d1cd5"
  },
  {
    "url": "guide/page.html",
    "revision": "51f307f7fb970ef50f3c863c7e346d15"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "00d0f46056a8a74ab0f7e9a14ab8e018"
  },
  {
    "url": "guide/Todo.html",
    "revision": "aa8db45b3899b6f899d8f63103b6a623"
  },
  {
    "url": "index.html",
    "revision": "2de77950e795bf312299174693f87818"
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
