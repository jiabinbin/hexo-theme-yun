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
    "revision": "25dd505579d9a6bdfd8b1056fa4341cd"
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
    "url": "assets/js/14.1166064b.js",
    "revision": "34191ad883bb07d91f191b6b6ca2118d"
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
    "url": "assets/js/app.edb6e9ef.js",
    "revision": "ae81d3dae3e692854a2bddada0bfea4f"
  },
  {
    "url": "changelog.html",
    "revision": "46c8e41550f4db279eee78f75f9c46be"
  },
  {
    "url": "en/guide/index.html",
    "revision": "c836980950927f26532c8581c1c97c11"
  },
  {
    "url": "en/index.html",
    "revision": "ed7efe8ffc269349867ddade684a93cd"
  },
  {
    "url": "guide/about.html",
    "revision": "1e2024607efd03d0ac739c3b416056d5"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "005ebb0069ccc5ac93f9b5708d3fd2c6"
  },
  {
    "url": "guide/config.html",
    "revision": "1596f76b90e625f427022279b12615dc"
  },
  {
    "url": "guide/faq.html",
    "revision": "df9ab26eb4ca9c7f0719c5c58fe15259"
  },
  {
    "url": "guide/index.html",
    "revision": "ddceb69c18c1de43bed0c511f2e8defa"
  },
  {
    "url": "guide/page.html",
    "revision": "ff841d3719df2ab7224de523f430ef36"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "506bb4157b633d9c277f1d4583e1d8ec"
  },
  {
    "url": "guide/Todo.html",
    "revision": "0d6249ee2657b1c6eb7a3247af26f2b6"
  },
  {
    "url": "index.html",
    "revision": "fcce951a27ab3ce5853afb6f400c4b7a"
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
