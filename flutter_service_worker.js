'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7399ec133f9ef326e2d5868f29f0a13d",
"assets/AssetManifest.json": "12cc0d85f7ebc3deb687bc61c551589f",
"assets/assets/Icons/btn_cancel.png": "1af64ed8da1ee58ba7db7a9ecbcedf01",
"assets/assets/Icons/btn_delete.png": "14694d98915798b8e7e4444763ea5cbb",
"assets/assets/Icons/btn_edit.png": "bca66519eb9c0e4ea6efb64e985629e8",
"assets/assets/Icons/btn_make.png": "9960ed3ccefd033e130a1a4ff845cb36",
"assets/assets/Icons/btn_minus.png": "206d9bf6194ddce6ed4a13412c6cf8dd",
"assets/assets/Icons/chat_bg.png": "551777757a6925f74e363bbd989923bc",
"assets/assets/Icons/facebookLogo.png": "e5fa81c7af051e006de1c3da8593a80e",
"assets/assets/Icons/googleLogo.png": "206438fa5bf135a3ed09d9ac810a5bb4",
"assets/assets/Icons/icon_alarm.png": "32e97cc47eb3047019f6423466246e6e",
"assets/assets/Icons/icon_apple.png": "ad0783504a2b2c8466b00bb9d1e81f6d",
"assets/assets/Icons/icon_backup.png": "eac267b7fb31146550fee3935333eac0",
"assets/assets/Icons/icon_back_g.png": "f9f714c2de92a143bfc2509361913900",
"assets/assets/Icons/icon_back_wh.png": "6995f02821827c7eb9763c5750c4db62",
"assets/assets/Icons/icon_chat.png": "7ed224eb0d57bbb79fbf906cfcededeb",
"assets/assets/Icons/icon_chat_on.png": "2091ee67cd1175e63870237c7fe5c97c",
"assets/assets/Icons/icon_chat_set.png": "e32d652eb429f3081bbbb459887077c4",
"assets/assets/Icons/icon_check.png": "f41c68133454373e88636a5a1256ee6f",
"assets/assets/Icons/icon_comment.png": "7bf0744ecd57c99372ea435a31cfd78d",
"assets/assets/Icons/icon_community.png": "1a7cdb62bdf7b7022a4be32370c57466",
"assets/assets/Icons/icon_community_on.png": "2ca1716acc5350c947e670b16880636c",
"assets/assets/Icons/icon_delete.png": "7af730e15654b6a91390adedf78ebce1",
"assets/assets/Icons/icon_facebook.png": "f92bf7235caf2e4bdd20ed680f799f35",
"assets/assets/Icons/icon_google.png": "5321cd0290aa3a44f5d515fe408565c8",
"assets/assets/Icons/icon_home.png": "b2ae3fc5bdffd22eb1877cf382d951e1",
"assets/assets/Icons/icon_home_on.png": "c903eed2debbf6ab774e5b6fe51d2d9c",
"assets/assets/Icons/icon_lock.png": "b08bfdba29554d21f185075375a4a01b",
"assets/assets/Icons/icon_logout.png": "a82258c51965f8cd50e0a68b2ef6180a",
"assets/assets/Icons/icon_menu.png": "6caa0804ebc851162578d24aed850a97",
"assets/assets/Icons/icon_menu_dot.png": "507ac1c2056cee4873b2c82eb6e5f667",
"assets/assets/Icons/icon_minus.png": "b50a6560b34014a28b814e4bac6756f6",
"assets/assets/Icons/icon_photo.png": "d2d3d733f6f6615ae3440348dc5f3c5d",
"assets/assets/Icons/icon_pin.png": "6a34aea8530efc41b2d1819c84cb7d4b",
"assets/assets/Icons/icon_plus.png": "8d2ae534b2b37c799ec627292d3845d0",
"assets/assets/Icons/icon_plus_g.png": "64e04afeb2565bacd754a4b65a287a69",
"assets/assets/Icons/icon_profile.png": "8d9659fe23301574b73a30b48fa4638e",
"assets/assets/Icons/icon_profile_on.png": "52704831eb3219d9e058b0006abed089",
"assets/assets/Icons/icon_pw.png": "8847077f499018844d7daedba6be837b",
"assets/assets/Icons/icon_search.png": "f2733fb46c1bbe7b3dc32e5864716f3d",
"assets/assets/Icons/icon_send.png": "b48eb796eca5c55dbff362f4a42908f3",
"assets/assets/Icons/icon_theme.png": "38fbe9bfc5ec6e83e506bff0cb87ed17",
"assets/assets/Icons/icon_view.png": "bf1c560c9e7e4e17433498aea6d15769",
"assets/assets/Icons/icon_view_wh.png": "17a6c35a6365c5204dc63787d30c32b9",
"assets/assets/Icons/profile_back.png": "d7c0cd993994a6a422e3312655e2155f",
"assets/assets/Icons/profile_empty.png": "5b8e4ca6249d3dd8cb1f8d74bb087ca9",
"assets/assets/Icons/toggle_no.png": "030957794d9417d8c81a3d577ebf7842",
"assets/assets/Icons/toggle_off.png": "9ba762288597174cf2fdd02c2e7331f1",
"assets/assets/Icons/toggle_off_wh.png": "2da38072a122df1393b6b6672bd67409",
"assets/assets/Icons/toggle_on.png": "3dfd38ed56ad9f074829491ecd5fd7e5",
"assets/assets/Icons/toggle_on_wh.png": "a8b0cf1272b8650f62e36e0a8e5b3500",
"assets/assets/login/splash.gif": "7847e215214972c05a4677bbce7b1d58",
"assets/font/NotoSansKR-Black.otf": "05c077164c27fa722dcafe63ed38355e",
"assets/font/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/font/NotoSansKR-Light.otf": "e914a10a1bd0088fb8f743fc7569749f",
"assets/font/NotoSansKR-Medium.otf": "32666ae307200b0bcab5553590672bb1",
"assets/font/NotoSansKR-Regular.otf": "210989664066c01d8ffdbdf56bb773cd",
"assets/font/NotoSansKR-Thin.otf": "277434d967d5f33b857fc3f2dbaff15b",
"assets/FontManifest.json": "15a3aa95414da0b2ca8f55320da6745d",
"assets/fonts/MaterialIcons-Regular.otf": "8229de9b5813e399010d7729b0eea631",
"assets/NOTICES": "0529bd8c11f9f5e2209db572c637b291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cb58baa2cc7fd011afe68d35409a63a9",
"/": "cb58baa2cc7fd011afe68d35409a63a9",
"main.dart.js": "1426b332c34b81dc3a79dc1d841e81a5",
"manifest.json": "fea8eed74bf0a47c8f6341c84411d664",
"splash/img/dark-1x.gif": "196a9292f0c45949320e9fcd2a8ff418",
"splash/img/dark-2x.gif": "e6c5c78f79add74f6882eb5523b30b15",
"splash/img/dark-3x.gif": "2609bcbc99c0ae028059a03a38226e3d",
"splash/img/dark-4x.gif": "782652a27208409d35677701a8e1b639",
"splash/img/light-1x.gif": "196a9292f0c45949320e9fcd2a8ff418",
"splash/img/light-2x.gif": "e6c5c78f79add74f6882eb5523b30b15",
"splash/img/light-3x.gif": "2609bcbc99c0ae028059a03a38226e3d",
"splash/img/light-4x.gif": "782652a27208409d35677701a8e1b639",
"version.json": "22e62c2d880bf93eb5e515c25e21ff28"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
