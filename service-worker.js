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
    "revision": "097d82b9bca522c490803414408fbf06"
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
    "url": "assets/js/app.37930266.js",
    "revision": "2b9153e1699614b726b8b50c9a0c9160"
  },
  {
    "url": "changelog.html",
    "revision": "fb531989d8c717e881852d5ab3423cdb"
  },
  {
    "url": "en/guide/index.html",
    "revision": "7c0262898e1d383f85f336b664dcb7a7"
  },
  {
    "url": "en/index.html",
    "revision": "897faf41f706bafa0913e8f135e6dfcf"
  },
  {
    "url": "guide/about.html",
    "revision": "6e51f1a2e3dcef81f522f6895de570d7"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "672ae98e1a2bb7669e47e9ebde975b4a"
  },
  {
    "url": "guide/config.html",
    "revision": "0fdd927f0641e1f4305d7fb987a3aec1"
  },
  {
    "url": "guide/faq.html",
    "revision": "7ca87992d3103d3529d6dbeacb67376d"
  },
  {
    "url": "guide/index.html",
    "revision": "684ec637cff2403682b961b9d9cb903e"
  },
  {
    "url": "guide/page.html",
    "revision": "729139110f7d49194bb0c8a7808ba395"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "e5948b613d86e354c4fba8297d22b16c"
  },
  {
    "url": "guide/Todo.html",
    "revision": "eb95651c9df267b9fd9761cdfd84463b"
  },
  {
    "url": "index.html",
    "revision": "842716c1ae7f51df4af410cc4632360b"
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
