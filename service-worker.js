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
    "revision": "abbb91f7441a0e03dcabb77076721c98"
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
    "url": "assets/js/11.38d981e0.js",
    "revision": "b00f74652fa2e2b5dbd9b620b4c7721f"
  },
  {
    "url": "assets/js/12.59d500d4.js",
    "revision": "3008dca1cb32d2894fcd417b9e41d207"
  },
  {
    "url": "assets/js/13.17e8123a.js",
    "revision": "c54a35141357755adc79ab0a664eb7ef"
  },
  {
    "url": "assets/js/14.e7e65fec.js",
    "revision": "6d5ea94b7dfdd7b9c6e270c88356e1c4"
  },
  {
    "url": "assets/js/15.bd300823.js",
    "revision": "8464e22c5308051218a0e0fbfafea4b6"
  },
  {
    "url": "assets/js/16.ee6f5cd2.js",
    "revision": "99435f900ec52fd87c0910e38d7e33a6"
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
    "url": "assets/js/app.45907d58.js",
    "revision": "1309df0348add10427b067403a095089"
  },
  {
    "url": "changelog.html",
    "revision": "50468c4154e6def5f45fe6e477ae26c0"
  },
  {
    "url": "en/guide/index.html",
    "revision": "ac616d38d0261db7d5b5e89a2fa2dacb"
  },
  {
    "url": "en/index.html",
    "revision": "53743ffe4b135b9d6f807d4801e49f7b"
  },
  {
    "url": "guide/about.html",
    "revision": "6872278fb3be1f72b5f423e9bd4ed318"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "7a096a380279afde57c536afb5d9c734"
  },
  {
    "url": "guide/config.html",
    "revision": "3f16a7d6df6744b8f048d358ad793d19"
  },
  {
    "url": "guide/faq.html",
    "revision": "cd5314712f9f187256fb54061fa1e068"
  },
  {
    "url": "guide/index.html",
    "revision": "0490833ee37f7e956fd104cf145be6b5"
  },
  {
    "url": "guide/page.html",
    "revision": "d739462b635d8f2d38aed582476dda09"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "e84c459105d46df76e7fb160f58bd27f"
  },
  {
    "url": "guide/Todo.html",
    "revision": "c9f2ed18ec1738d54d180fbd14d84d28"
  },
  {
    "url": "index.html",
    "revision": "b4f8110b3552754358ffef19abff5f2c"
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
