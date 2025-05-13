'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a227d42afbcc590b4e949075cde4a5b6",
".git/config": "72696c950b652fc91ea8f5d33fa2a658",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dd7d12f72551e4c34fe4ee526f20d1aa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7f68072b22cbf1001a1b77e450a0d63c",
".git/logs/refs/heads/main": "45ebd3f00ae54693d444bf19ac8622e9",
".git/logs/refs/remotes/origin/main": "02e75acf8cad4d9a456f3c3b45ff8d8c",
".git/objects/00/5bde4f96b7ab8ed7e625456a4e91d7d323f41c": "5d04a7acbc82243a8491c13c22380dfb",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/01/8f71d09db05b66122459987a481dc2c7ad83c3": "3047b60bbd6e071e5c69a97ca5705129",
".git/objects/01/e2c5ca4ef355dddd34c1a61903ed1610d013bc": "b917b5c1b2a4831856cb045548738c3a",
".git/objects/02/50c61fea6ef4a8aea5d95b22703ad2f3bf9ede": "e003d5bbb50342436b4d704b92a8c8a6",
".git/objects/03/89d908ce1fb3fa74aaca00174368956eb2a3af": "aaec439fd8befa2ceecfc21fffb3863e",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/15/f19831e382cbe4310101a9fd2c2a681b75bb9f": "457e66c7c035743a7f9ba2496648c74e",
".git/objects/1c/2df287b51503eb907ad643fde4aaa7f274cb33": "a302ee1d9f4a5eb765b7a73c5ae6fa44",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/4374f6cf8613a1bc51014377fad270381432dd": "1c36b706a6cbdb4fd16bcef1d0e01184",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/23/a7d9c2e22ee07512dc179207a9376817868fa5": "9a0a8c22ca450233b601006e2ddc34f3",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/27/e66855a96414f897fc782c8c89274de0012e2b": "b66cdf7e2aa277d94cd4cdce43d06aa8",
".git/objects/2c/929b32486ee70cdc5c7a34417bfdf51da2fc3d": "a2eb9a68e758818a474cea7939a94aa3",
".git/objects/2e/9ef70e20af452fc337b913e235b48cab0bf269": "e95f3d6d76e85b7ae3c1154bf52e4853",
".git/objects/2e/faa50e11886c912dd3be79fb0cc236add7df28": "d85ab02b8b3e0f2e6e62a0c88f3331d8",
".git/objects/30/7431e6e760dd29948c68928585a99f463377f3": "c2cac48292957d5dec4aaf3ed99c8fc2",
".git/objects/34/e8b829bd0b69cc101bc273dff03f19b55e44cb": "4bc7380f733b423c495efd1d969c3b94",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3d/8d71a1c3c2a411dccf3df0a6da959b97747fd7": "c12d26bcd1878ac40e1aa1b00c755259",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4d/836c17b217c12bce33e4c6bbb77c6280396af4": "acdec64cb89f60219fbc0fa80787d523",
".git/objects/4d/940549cfc2cb6f2332fa8c8cd9e76d9d316004": "70544ea6cc4c337a290eb0e0a182cedf",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/cca079d0ff7d578b0959869e7429cfb6561de2": "a784b4a3c135a47ef50eaa03cf1c105f",
".git/objects/5a/56e8b1b0ff77a8238817230b04c73c385716d4": "5e25efea5e5c5ed0a461d6e79919f67d",
".git/objects/5b/74cd3865dcec8929925aaf46b7d462dd255ca3": "86f1d3b8a8ad9c8336e6be8550e3ebeb",
".git/objects/5b/c5786fb3a29939a206b3ad621a74445b19f60d": "bedca7a02bf1bd811bbb0f7fdbb3a209",
".git/objects/62/78f71d8112be471a84b0d80fd5f966b25f6691": "7ab7ee8499a1bdb369d958a34ae6b51d",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6f/cb1294fd6d00741baf92932076af1c29e2e5d1": "a50c474bfff4a2ac9f3e508de606614b",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/80/f626c05d62868e91472dfaaed8d360cffa5a6c": "0175bed06ddfb8693f29c53d14579382",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/85/37ec5bb0aeba77e4d5b15bb891143a570f9443": "21e31e44b28b2822b0bbf0f8a815b01c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/ceed349e213f383b52a376706ca816193cc048": "6afaf2d65cbffd6472be89868252b8cb",
".git/objects/9c/e29beda63da09d456afe9a1f98c9203cbfad9e": "67c632e409a61ccd3b917298580c3852",
".git/objects/9d/122728b42f29762a5317ed24a207c702eefe94": "905069b1ac8eab90b44d697bf9abb414",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a3/790266d938594bad5b92413fd4b65e67e8d462": "1041e36eaecbad93163d1265c70bf4c8",
".git/objects/a4/8f5ffbbc697212ead64533ebc391572412e61c": "268e0bfec8f7397ab82e3b6e69afbf8f",
".git/objects/a6/53271b1367b250dd4bb0f7ae4d8dc475d9a0ab": "84d0ba495bf1304a79b690beb2a7d012",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ab/bb6c07446c72a50b80769afc5976f52a5d2d44": "7685927f26e790809c8474302e4fffd5",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/1ec94ee2fadba79ff623d5f31c68fa899dfe6d": "1c8028c959d2a0f8214559efb1626884",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/cc0215b6de0097590bb1095615608abd7e9954": "cd406d3c8d2c23d4f4c0171da58c91e2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/c89f687d01bfecaecc6037992f09555a4ca960": "baa01c87aeb2ccb231ab41b0b80bf2f9",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/be/a72af57e2d3f63687fc18801dbb273474ee58c": "6bb27233e49af8c5bb994f5d99aeded2",
".git/objects/c5/ee5c77a1eaa6188e2d9468841ec852354cb2d8": "66feb9d009a0c66de5ee777bcdbbf61c",
".git/objects/c9/f7ef53f8a2fe0767d639a926894681d82b05d1": "47b3932a5963cb7a870882e777e09855",
".git/objects/ce/b3f827808c38097be254559b08ae2fe7137077": "277d8f30320f275a98097c9051fdd118",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/e3/493bcbcaf84358ba832a29262391d138fe8499": "d5c132dc3216cbbcee22f3ab56829a0e",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/ebd22175eb1a13c526b7021ee734cd102ceead": "f2dbd863d298db4a106f8816213a720b",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f1/bd77ecbcc551c2fb8dbe207947d9f206ba0802": "1713984b9458eb6be48689e140ca8b14",
".git/refs/heads/main": "101cf06e792ee4e082cae36209d0cd9c",
".git/refs/remotes/origin/main": "f7e0b4017b648413c6489ce0728d5108",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.bin": "13321ad5764f3d6e2815ffc7513c54f8",
"assets/AssetManifest.bin.json": "7f72d86b62324cb48a48f33c6cc8c041",
"assets/AssetManifest.json": "45411404182ccf178cde60b359d7d57f",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/mail.png": "678afb7161c79c9d559899bdefe94296",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/velog.svg": "3f4d5772e8d321add1618bc4373fbf92",
"assets/assets/images/%25EB%25AF%25BC%25EC%2582%25AC%25EC%259A%25B1.jpg": "0acf463971c5038adeb6e26bbd526f42",
"assets/assets/images/human.png": "9a9eb9f63242eb310f0cdd2d0925b8d8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "c611c35c5c1e99563e6b9b88b75a5f50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "c42f4a08e67c4a85a5e04ab30e3a9b6c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7f09e653f6d79e639bbd9e8e4c9b50a2",
"/": "7f09e653f6d79e639bbd9e8e4c9b50a2",
"main.dart.js": "d952c055123b7329b569fad8b5b60e23",
"manifest.json": "14533758d5adebb52c270151b0335f00",
"README.md": "964f665d8cda230a61f66a44d2ff574d",
"version.json": "1ac57eb0214a8f5216f1da7dd479b33f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
