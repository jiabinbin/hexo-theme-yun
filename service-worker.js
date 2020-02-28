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
    "revision": "a78c50cf557c36657ad7268c30eed30a"
  },
  {
    "url": "assets/css/0.styles.d2399aee.css",
    "revision": "40e7472dd01549a781e483ef47020064"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.66fb49a3.js",
    "revision": "4ac00d93beb48a41d946c51f97def8f5"
  },
  {
    "url": "assets/js/11.01a9f588.js",
    "revision": "6f9a9bb42b3acc3dfc928a9970e64f65"
  },
  {
    "url": "assets/js/12.bd3b3bfc.js",
    "revision": "3008dca1cb32d2894fcd417b9e41d207"
  },
  {
    "url": "assets/js/13.1e301f75.js",
    "revision": "7f4c91c1c8e59663e336d6001fe2d07c"
  },
  {
    "url": "assets/js/14.7c664dbf.js",
    "revision": "4fb455187f438c12dcbbcac17ea10b7e"
  },
  {
    "url": "assets/js/15.d63d841a.js",
    "revision": "310ec6f23bc5196dcc56cbfb62ae96b4"
  },
  {
    "url": "assets/js/16.7304a447.js",
    "revision": "e8de16c6514ac6b3ae8e9995743c594e"
  },
  {
    "url": "assets/js/17.4a6caf12.js",
    "revision": "86e881938c7d6248952f5f93325f51cb"
  },
  {
    "url": "assets/js/18.dda3f7a8.js",
    "revision": "087f5cfe4cc23f71650c3594cfbcbd02"
  },
  {
    "url": "assets/js/2.6bcba398.js",
    "revision": "d8b1babceb137990b983e0f4b4223619"
  },
  {
    "url": "assets/js/3.3db8a61e.js",
    "revision": "f352a80487d0c856774ffe936443f025"
  },
  {
    "url": "assets/js/4.a3951a7f.js",
    "revision": "72e264b255611b271363019b1b691d1e"
  },
  {
    "url": "assets/js/5.7c40eeda.js",
    "revision": "2cd0776caacc66c4a9f3d17cf3d53dfc"
  },
  {
    "url": "assets/js/6.0c2e3984.js",
    "revision": "5b0b9a05d67a84d076b8ecbfbc3a141d"
  },
  {
    "url": "assets/js/7.6fd5b4c3.js",
    "revision": "dbf467c0d81a30ea0568e1ee265a88d7"
  },
  {
    "url": "assets/js/8.51386fe2.js",
    "revision": "b6f323908a03a4f4c00be5e31fa4d955"
  },
  {
    "url": "assets/js/9.5c743ab1.js",
    "revision": "9187abc3bec8975f16543f8efdd7ca96"
  },
  {
    "url": "assets/js/app.2efedb5d.js",
    "revision": "1065f013692de1314304f449f3e98425"
  },
  {
    "url": "changelog.html",
    "revision": "03884709d42524d9eb677196c38484a3"
  },
  {
    "url": "en/guide/index.html",
    "revision": "d0ed74bb4eab4504b43b96e72295279c"
  },
  {
    "url": "en/index.html",
    "revision": "34f04c87203383f57ffc83791400ac0d"
  },
  {
    "url": "guide/about.html",
    "revision": "ddf2792cff8b88b77e85d1edd5689f2b"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "4e553cef5437357ecfb6c70650d2b5f8"
  },
  {
    "url": "guide/config.html",
    "revision": "b0b3e6b86ea63c1c49fa3baeb108afa7"
  },
  {
    "url": "guide/faq.html",
    "revision": "62beadcd1bd44a800daf1b708341c558"
  },
  {
    "url": "guide/index.html",
    "revision": "e00f30cb63b358b264bfa2f7f967e2e0"
  },
  {
    "url": "guide/page.html",
    "revision": "c3456028c6bdb5bcb7ae8873a12c5014"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "d197d55cdc4b37a25f403a4a38bcf32a"
  },
  {
    "url": "guide/Todo.html",
    "revision": "bf17997744b7251c14db192bcbe268b8"
  },
  {
    "url": "index.html",
    "revision": "4db2c5c9a75d309aa49904437924b1ca"
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
