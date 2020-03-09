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
    "revision": "8d93b3efa2c854d3467844ae06f2aaf6"
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
    "url": "assets/js/app.5e80b61a.js",
    "revision": "d5c51adcf98fb3e536af56e8fdb39026"
  },
  {
    "url": "changelog.html",
    "revision": "b958864ad79122a9f0f660a65ca10b64"
  },
  {
    "url": "en/guide/index.html",
    "revision": "24a65635d94f0c723137853099be9685"
  },
  {
    "url": "en/index.html",
    "revision": "c350579e98ee9975d1c545046fa778bc"
  },
  {
    "url": "guide/about.html",
    "revision": "0de9df9433eda202d27660b4bde08f09"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "228d08c811c28d093bf631ec3c1a38ea"
  },
  {
    "url": "guide/config.html",
    "revision": "d27513e154a3345e8c0028602cba3e34"
  },
  {
    "url": "guide/faq.html",
    "revision": "5d9e859ccd1f85dc4fbf6de65d72843d"
  },
  {
    "url": "guide/index.html",
    "revision": "867752f15c3185e92337ee82407ea4af"
  },
  {
    "url": "guide/page.html",
    "revision": "efb000700d77b0f07783bed7e1852456"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "36f4d5341c44a8961af7b5ffe2665954"
  },
  {
    "url": "guide/Todo.html",
    "revision": "38f24044b0833c61406427b1cdb2204f"
  },
  {
    "url": "index.html",
    "revision": "bdf743a272c8397400d952186a3e73f6"
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
