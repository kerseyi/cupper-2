/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","70d06d0db8a562459f485096dc3d49e5"],["browserconfig.xml","92828d62de7f323d11563be3eef26828"],["categories/index.html","88fe278b7e5b578482e628e8f2c9972d"],["categories/index.xml","614fee6d6f6e8f1e11edf3c04050d129"],["css/bootstrap.min.css","354427046824973d20e1fc26926bc87e"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/images/arrow_effect.svg","f1f3ac91665d7427c39a7ab4b551cf31"],["css/images/icon-tick.svg","4bab0777ae9f5081c7f29a0d1175c6b1"],["css/images/stripe.svg","ef03fea85121c7139ec140cd9a60d102"],["css/prism.css","29baa5a500c002b18f0b116481ba3a59"],["css/styles.css","d31239da7a81730d34f8df24962657d0"],["images/android-chrome-192x192.png","9a5217d9c2f558dc27e10c9bd1df277f"],["images/android-chrome-512x512.png","824a93b245c640f71a97cfda02754811"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-512x512.png","42d6b28cc7eb41810a5392c81368340a"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-precomposed.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-icon.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-touch-icon-114x114.png","95804b2192b0cea406b54cb31345c47d"],["images/apple-touch-icon-120x120.png","b5da0625c9e876bdf9768875f7dd9cca"],["images/apple-touch-icon-144x144.png","976151c9ecd72311dc6024917292209d"],["images/apple-touch-icon-152x152.png","8bd6a2e592c1c8463b5205ba8436227e"],["images/apple-touch-icon-180x180.png","56a93f4271dea903196794095e9f9ccc"],["images/apple-touch-icon-57x57.png","977183ab3bfb98da8d79e025f1cb4946"],["images/apple-touch-icon-60x60.png","55e9e05103a9b472a52f4c572a73b2b2"],["images/apple-touch-icon-72x72.png","1ef87a2887baab846f2501beb27445ee"],["images/apple-touch-icon-76x76.png","769826cd7526df4db7f4ba1a820158bd"],["images/apple-touch-icon.png","1302237db2a4e977caa7b3b45bc09f28"],["images/bad_design_system.png","9c0e87a34e7d842b0e2831dc947249aa"],["images/browser-chrome-android.svg","a32653815f36daa0d6877798cdfd1dfa"],["images/browser-chrome.svg","86ab1442e7d0796694b584a73488257e"],["images/browser-edge.svg","fd4ab69a946b62784f153b4f729892d9"],["images/browser-firefox-android.svg","5ec1ad3491aad31ac93d5a4fc72c98b7"],["images/browser-firefox.svg","4064d8ab30c474f254a27e4d06b0062f"],["images/browser-ie.svg","c9a6382f7e0f27462dee1cf1699a78aa"],["images/browser-opera.svg","650571954d8269dc63d0679a9deaaa42"],["images/browser-safari-ios.svg","ebcf653ca8f53fd1824969a7fb281c69"],["images/browser-safari.svg","16546b0bcadfc60d4cb71ab9a58fbf19"],["images/browserconfig.xml","68c9044fa4a08749efb85bb2a4edaede"],["images/favicon-16x16.png","6a3dc293d1c5cbf767520505d65477c9"],["images/favicon-32x32.png","767567160e0d1d84a969d9715e46f465"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","d8a88e4942c8f5e58143f1d941303db6"],["images/icon-info.svg","d194a783f7ae013633c3962309dc9fa8"],["images/icon-tag.svg","92da070a2ceacf6dc3c7c6a5e831e5b8"],["images/icon-warning.svg","cc46e345dcb26154c0e7966ea974f19c"],["images/logo.svg","d26b396eee5e971723a225ac8fcd833f"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/mstile-150x150.png","28c8988c9be55c9c9708064a724831b9"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/safari-pinned-tab.svg","75633391e835c2840ae22e928c0e3aef"],["images/samsung_homescreen.jpg","4462178424f5ce79b5757748ba5f1ec4"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["images/site.webmanifest","22a36b7df2717d75493d9174d28391be"],["index.html","4f53f0bc71d4388ee73ca5cc6f0c8012"],["index.xml","1ded0214125ccbcb60ccee72dfbb617d"],["js/bootstrap.bundle.min.js","466c216e1c6a72bd97f85d00d63efa1c"],["js/dom-scripts.js","65957d64a520ef783c8c8ee7c4e2a676"],["js/jquery.slim.min.js","9e73c6c1b301724565d9937bf8e564a5"],["js/prism.js","e074739e4c2f0feac0b8f349f50f156b"],["js/service-worker-registration.js","a1f2a1b06947660067fda855876f33c5"],["manifest.json","8496c424d9780742d62dca9711f134dd"],["patterns/aria/index.html","2321b90cc92de9ffb3d59181fc39de95"],["patterns/aria/index.xml","d89900b3ec1f109ee96ae118c9cce034"],["patterns/aria/name/index.html","c3ff0516f5c33368a1b896de43dc1604"],["patterns/aria/name/index.xml","b4f5b4d03a757335282677425bf099d0"],["patterns/aria/name/name/index.html","7885085f0fd825c28aa20b5b43c95a0b"],["patterns/aria/name/name2/index.html","1be70d5f4a91fb57c51ab60cf1b3c706"],["patterns/aria/roles/application/index.html","7abee8a0128e89c801697a43c16fe7e6"],["patterns/aria/roles/index.html","890048f7de1a8830c91c0787c8a9c13f"],["patterns/aria/roles/index.xml","cd47da5ad4157550a5290cac5484100c"],["patterns/aria/roles/rolesstatesproperties/index.html","ab992fce6e81cdbe865c5f11bd1144d0"],["patterns/code-patterns/accordion/index.html","c14a0ce0107574bddb6a98d23b094653"],["patterns/code-patterns/alerts/index.html","c43f516e9136f119c1185dc98a749584"],["patterns/code-patterns/carousel/index.html","b0707a89d90306b23ac7db2b0c2a6252"],["patterns/code-patterns/datepicker/index.html","d08ee067e38867121a4c576557bdcfbc"],["patterns/code-patterns/expandable-sections/index.html","b99ac42513f70a47380b5d11f0138713"],["patterns/code-patterns/index.html","090cd51cee94c6f0b6d321d4980361c7"],["patterns/code-patterns/index.xml","c527624e5a6c8bab1cc5ede427b6fbb9"],["patterns/code-patterns/menus/index.html","6aa71a1d00a8a7035fa773c8eb9561ae"],["patterns/code-patterns/modal/index.html","f28ad3049413889748c211a200ab5dc3"],["patterns/code-patterns/skiplink/index.html","d1a14d3f4a4b6227c34c3470a77489c5"],["patterns/code-patterns/sort-table/index.html","1a41d2b75c4387061d7027c12fc32763"],["patterns/code-patterns/tables/index.html","e7eafcefcbf1cd088d2f9aeca0be5d92"],["patterns/code-patterns/tooltips/index.html","a940e1cb70d152892f965c3cb2b6325a"],["patterns/index.html","a2ca2664d65de78eb47700818644956e"],["patterns/index.xml","d206f7cbae1fbf76ade8b0cac93c7d42"],["patterns/reference/alttext/index.html","b07e0c6a8394ac70d42461090ee5cdca"],["patterns/reference/aria/index.html","5e4c2c1a017b350934f939d37fc33ed9"],["patterns/reference/color/index.html","512abf18510790a594529556321c7412"],["patterns/reference/dev_resources/index.html","f7ecd1301ea3ac12c749aed517ce3bf9"],["patterns/reference/index.html","8f9b12d17ebfbc8030566f5e81bbb124"],["patterns/reference/index.xml","13a3309761e3f338752373017770f74a"],["patterns/reference/nav/index.html","58e447d17e40b1b2108397863d55eeea"],["patterns/reference/notifications/index.html","5f81727645e7fee164932bda66a6801c"],["patterns/reference/plugins/index.html","774b8c20ca1677ee65ef0d90d24ddfcc"],["patterns/reference/sr/index.html","93a70d588185664ace5b447a143b44e3"],["patterns/w3c/atag2/index.html","beb92d55caed2c3ddb00fe0b2f3996ad"],["patterns/w3c/index.html","7d491426ce60d090109083f53126d4dc"],["patterns/w3c/index.xml","afc05f361b93a063a43e6702083ffab5"],["patterns/w3c/wcagquickref/index.html","b8f4ebf9fe60a62e88a574dabec79543"],["patterns/wcag/index.html","e53ca1b26b016320ea0cf5aea7bffcb2"],["patterns/wcag/index.xml","e622ef38a7531dad3c89e143be1e2111"],["patterns/wcag/wcagquickref/index.html","f026376518f35920cbbb0f0a5e98046d"],["print-version/index.html","2443c905d7655fd0879a40c22c831a45"],["sitemap.xml","4544808d56418a6385ce9f6a9dc93ffa"],["tags/accordion-menu-toggle-expand/index.html","e9e9b654935eec36bc6dd257a0f16a8a"],["tags/accordion-menu-toggle-expand/index.xml","6a2d319edad18ba43aea1f770cfbaa9e"],["tags/datepicker-skip-link/index.html","8a758660cacd06d63e8ee3d12a07a357"],["tags/datepicker-skip-link/index.xml","433c5b58a14fab5066e82a77486326c0"],["tags/datepicker/index.html","e6379858c473461294f9c79231aba927"],["tags/datepicker/index.xml","e5973faa3107983cadcd4e886caac141"],["tags/index.html","7c5d3c6fa9379ad9c1c3be933e8a2861"],["tags/index.xml","e1351d663f3ff48c4abf9c473f0df1e5"],["tags/markdown/index.html","cfdbe1bfc43b2a038589723015a2c92a"],["tags/markdown/index.xml","cfbed438bf664db2c3c8b8fc31fc45b4"],["tags/menu-toggle-expand/index.html","cf9c3245d7a05a3a2c149d4a97ab91a9"],["tags/menu-toggle-expand/index.xml","34a794e9fbd211019209bd9b455bf562"],["tags/metadata/index.html","b33f4cbd73d562f90cf9453e6e2dffff"],["tags/metadata/index.xml","35f0440ee447702b107c312942aba57b"],["tags/modal-popup/index.html","b6b92750053e1622ef9a89b256812329"],["tags/modal-popup/index.xml","77ac21f23ad226ffdd61025543ef8488"],["tags/navigation-skip-link/index.html","97f8829cd722bcce61bb29f00bc8f019"],["tags/navigation-skip-link/index.xml","944e55bf9eced6fd42fcfd564041d1c9"],["tags/slider-carousel/index.html","fcdd6f2e1c1c525c01cac7b46eab2d57"],["tags/slider-carousel/index.xml","24f3a546778f3eb55cfa3c2d1bfb4bea"],["tags/table-grid-sorting/index.html","25530588fc36e527e561535bd7a60900"],["tags/table-grid-sorting/index.xml","0c024f40aba98ca86ceea81beee6bc67"],["tags/table/index.html","75fbdf35f47d29889e5ee93e5a68f7f3"],["tags/table/index.xml","3e259406bb0041166b6e84d9ff260fb2"],["tags/tooltips/index.html","bbb3bf8240142fb5e745d194da7b9901"],["tags/tooltips/index.xml","0adbce98784a4b581451dbe2dc453dac"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







