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
    "revision": "a0389875bc9c62b5e1c47cf09d7b1c00"
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
    "url": "assets/js/app.df0a37cc.js",
    "revision": "558755b53efde244153f536a25096564"
  },
  {
    "url": "changelog.html",
    "revision": "62d07c5076e39578cf704e3260875687"
  },
  {
    "url": "en/guide/index.html",
    "revision": "5ec5b5e8200b0ab4f39a95a791ac184f"
  },
  {
    "url": "en/index.html",
    "revision": "5d432399d6f3303dd1d949c24ff745b4"
  },
  {
    "url": "guide/about.html",
    "revision": "79b1f597651443ab0a6b1db2ee7eb81a"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "76fd93c9a478da003265bf1f0596952e"
  },
  {
    "url": "guide/config.html",
    "revision": "a5f24a5197f8f0f9729d1b107286897c"
  },
  {
    "url": "guide/faq.html",
    "revision": "b013ef521573af8b2d48189dfc263ebe"
  },
  {
    "url": "guide/index.html",
    "revision": "651fda2719d0caf14ef0f42457f03926"
  },
  {
    "url": "guide/page.html",
    "revision": "032c4e7ce7ae3f5a9461b53fadbf7bb6"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "cdff5472decbb66f7fcdcdf1ca0e2c81"
  },
  {
    "url": "guide/Todo.html",
    "revision": "bf2771fdffbf0fadfb9b4448f54271c4"
  },
  {
    "url": "index.html",
    "revision": "951eab4ffc1ae362f188237f440f44b6"
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
