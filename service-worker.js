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
    "revision": "06936c63e26741185f5438ce1b474878"
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
    "url": "assets/js/16.e7ab62a4.js",
    "revision": "bf8465bc0bdda1bd3527332384e235d1"
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
    "url": "assets/js/app.49a96cd2.js",
    "revision": "a33ca7e913e9a594ac65f4a46a4dadac"
  },
  {
    "url": "changelog.html",
    "revision": "058340a719308969b853c1e2ceacdbba"
  },
  {
    "url": "en/guide/index.html",
    "revision": "5c22a4e225807cfdd593b8a81b77ef50"
  },
  {
    "url": "en/index.html",
    "revision": "1d76487802cbd9a30ac144285a323296"
  },
  {
    "url": "guide/about.html",
    "revision": "7cea724c68071a00dcce2b184a1e14f8"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "13174d3f42c6b34a0f573abda43a65b8"
  },
  {
    "url": "guide/config.html",
    "revision": "c52a4b474f78e86b080dd3c60a193174"
  },
  {
    "url": "guide/faq.html",
    "revision": "49f46d933e144c8048e219a1b82844c3"
  },
  {
    "url": "guide/index.html",
    "revision": "eca0e15116acdb936835fc6a4a460e0b"
  },
  {
    "url": "guide/page.html",
    "revision": "5bc31339a973b530bcb7b7dde23167f9"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "631d28b597a5e228348ec9af0745e365"
  },
  {
    "url": "guide/Todo.html",
    "revision": "22647c662c4326a2e408de196ee38b9f"
  },
  {
    "url": "index.html",
    "revision": "f670078adff71e6648672356dfbefe20"
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
