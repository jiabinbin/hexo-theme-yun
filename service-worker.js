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
    "revision": "35447d3ebfc87636849a4343348dceb1"
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
    "url": "assets/js/10.4856de43.js",
    "revision": "f0866fbdc885382a9453f3cfb7423501"
  },
  {
    "url": "assets/js/11.38d981e0.js",
    "revision": "b00f74652fa2e2b5dbd9b620b4c7721f"
  },
  {
    "url": "assets/js/12.ebe03d4f.js",
    "revision": "3ddab8c0defeed8f07939b50ce670c19"
  },
  {
    "url": "assets/js/13.8237a7c3.js",
    "revision": "051d8b20295ccd869d95e87feccbb8c3"
  },
  {
    "url": "assets/js/14.92f6389c.js",
    "revision": "eda33854b382577bec2602f1eafeff95"
  },
  {
    "url": "assets/js/15.bd300823.js",
    "revision": "8464e22c5308051218a0e0fbfafea4b6"
  },
  {
    "url": "assets/js/16.a3792da2.js",
    "revision": "84b9fc507bc3d839c6aeba0d04aa7c8b"
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
    "url": "assets/js/6.dcdd47dc.js",
    "revision": "6811060234cbecb2dcb7c275ba9e4806"
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
    "url": "assets/js/app.b663e7e6.js",
    "revision": "ce95dc5f7d1db0fa4f1851cb31ac5bc8"
  },
  {
    "url": "changelog.html",
    "revision": "99ecac1c7d3039d9f7e40f75ecb32f3f"
  },
  {
    "url": "en/guide/index.html",
    "revision": "b78587103d49acb87ad551b251080229"
  },
  {
    "url": "en/index.html",
    "revision": "41fe7c86c6afdd40073dd33a4214d2cb"
  },
  {
    "url": "guide/about.html",
    "revision": "378ee89a510f5b5f72162790098bb4b1"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "4f032b363dbc0edfccb860ebbf9d0946"
  },
  {
    "url": "guide/config.html",
    "revision": "dc3fb90c3b057ff09f3a87f9647df407"
  },
  {
    "url": "guide/faq.html",
    "revision": "ec87611a0d3064af37704aebeb2b60b2"
  },
  {
    "url": "guide/index.html",
    "revision": "6352b05d7f62d865108c44f2b97e64e6"
  },
  {
    "url": "guide/page.html",
    "revision": "8624465980d5b0b7af8c8a603c021efb"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "44fd116331067fb81bc0ea98e04eb07c"
  },
  {
    "url": "guide/Todo.html",
    "revision": "83924c4dce60157dc2f1e02e57e6df29"
  },
  {
    "url": "index.html",
    "revision": "41aa1ed08f67113e77c8f516d03f7ed5"
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
