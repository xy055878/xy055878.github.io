"use strict";var precacheConfig=[["/404.html","dcfb5c6dfc69867fa0616be60413a7c8"],["/ExquisiteWallpaper/index.html","3fbe94f818754641b1af9a684e2908dc"],["/about/index.html","6c9535a6405a8fc6db434dff41bedf4e"],["/air-conditioner/index.html","cbd36bed6f6cb9a6263d64af44bae679"],["/album/index.html","4841102e54b82a6c34d38e7529a04dfb"],["/anzhiyu/random.js","fc3d2c8ed5755b6ce4770defb609a62f"],["/archives/2022/12/index.html","562087efd2496c9277ecff4f258acde7"],["/archives/2022/index.html","78f7098237277f345fbf5698607704c0"],["/archives/2023/01/index.html","9d4835152dec759a07349997c6579123"],["/archives/2023/02/index.html","8826e725d4e873f2a2ee1ff3bb8f6d2f"],["/archives/2023/03/index.html","ca199da26e8fd933d47d2e4b1b9b58b6"],["/archives/2023/04/index.html","055d248803ab76117035e51370c32e18"],["/archives/2023/05/index.html","9e5a7906d189973ca0bc2c1b934f3fe0"],["/archives/2023/index.html","b223065d472b434ff99a61d30021139a"],["/archives/2023/page/2/index.html","4019dcd0ad025ee70ccb6177e8760b91"],["/archives/index.html","2c843b42f47a2bd5c4415d44a1769854"],["/archives/page/2/index.html","9d44ebfddada7bf31c9444e58cf443cd"],["/categories/index.html","1904c84974b7cc5cd66f6e2f00a712d0"],["/categories/其他/index.html","4a788e6db2de3d056d84796257e37a74"],["/categories/前端/CSS/index.html","8f50899f934d404b799690cc6953999b"],["/categories/前端/HTML/index.html","af77d9c8879519b46e1b9a56c7b21e7e"],["/categories/前端/index.html","1f8be41051d9a435b94720f302be16f6"],["/categories/前端/案例/index.html","6cd072cd8e0a848208d61b700509ec19"],["/categories/数据库/MySQL/index.html","de0727f78098f99b5be8f2062a637322"],["/categories/数据库/index.html","3138eafdd0737990aa0c6ad9b3ceb6b9"],["/comments/index.html","44e1353e67849fc13c226aff4be4efb1"],["/css/custom.css","21ed6f9de02697990d77b5e2e9d28d28"],["/css/index.css","f11dcca3865327e1bf234c1fee79b014"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dailyPhoto/index.html","e0e24166ab8019b26dcb9d3fbd61fda2"],["/essay/index.html","62c375642ba08601cb745995c77e7c4b"],["/font/code.ttf","b06686925a0ce39e55db2ed8adf3cb10"],["/img/404.jpg","569c7962afb937ba6e3ccd21934b5e47"],["/img/404_1.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/default_cover.jpg","eed1d64e7f2f6ba5ab7acecb8c1a3f13"],["/img/fa.png","cb9c10f8462d3dbd834b5ab9d258f130"],["/img/favicon.png","deb7ee2aebaa3bf599ba7e87148ddaf8"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/128.png","9bab542ddd8e927e94f1b7d2c35a33e0"],["/img/siteicon/16.png","027061129f5bdcfba1198a49563511b6"],["/img/siteicon/32.png","cb9c10f8462d3dbd834b5ab9d258f130"],["/img/siteicon/48.png","e75567dfa60c16e37a405cf394ca9515"],["/img/siteicon/64.png","d6f80a34ffb56b11e7f690fe75de65d1"],["/img/siteicon/splashIcons/icon_1125x2436.png","b2f890d6b9fa042e9152585e17041e3f"],["/img/siteicon/splashIcons/icon_1136x640.png","671649cd535adfc4553411ca7a61b374"],["/img/siteicon/splashIcons/icon_1242x2208.png","eb5d45c9c5256b1f1fca13bec104b623"],["/img/siteicon/splashIcons/icon_1242x2688.png","604d3163e9277de0a352c0c7c185daeb"],["/img/siteicon/splashIcons/icon_1334x750.png","c0221818c38df6cc9480dcfb62dc96b1"],["/img/siteicon/splashIcons/icon_1536x2048.png","b4f17174bd61f4ac3d4dcaa42f3f444f"],["/img/siteicon/splashIcons/icon_1668x2224.png","97c4041d4e0e3c1fa1f677fbaf9011c3"],["/img/siteicon/splashIcons/icon_1668x2388.png","37c6c01618a42d1a3531724b5c38e2a3"],["/img/siteicon/splashIcons/icon_1792x828.png","bbb4168d1f66f974bbfdbb3f99fe4965"],["/img/siteicon/splashIcons/icon_2048x1536.png","5338f20ffa4939c21408ae286562fd1e"],["/img/siteicon/splashIcons/icon_2048x2732.png","707236819aee3816a27fb8898f09d9b9"],["/img/siteicon/splashIcons/icon_2208x1242.png","462945f6ef09e0a3188ddf14720762d6"],["/img/siteicon/splashIcons/icon_2224x1668.png","31f54cdd65a9bff95ce23cb8a3a506f7"],["/img/siteicon/splashIcons/icon_2388x1668.png","357fbba8fcba969b00334fbcc080c25b"],["/img/siteicon/splashIcons/icon_2436x1125.png","42697a2988bbc4cd36bd8ebfe082a335"],["/img/siteicon/splashIcons/icon_2688x1242.png","7ce3bd96e8933de6242ac212648cfa13"],["/img/siteicon/splashIcons/icon_2732x2048.png","f87f22a489511d9346b2696d1afc7050"],["/img/siteicon/splashIcons/icon_640x1136.png","441c175c92c4e99206d5f930882deb0a"],["/img/siteicon/splashIcons/icon_750x1334.png","b70cc0c5557f6451ea7fa494233373cc"],["/img/siteicon/splashIcons/icon_828x1792.png","c1305b7f1b6d0cb161e5d5c0dff1a520"],["/index.html","3d7c8ced40463d8cd4613d5f88802db9"],["/js/main.js","9b6e36c319fe86ee1e8bc540d09c2ddf"],["/js/search/algolia.js","dff0d830ab1d005f1eda1ea299c724cc"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","bd9f7c3f385d1a9a448243c0bf966625"],["/js/utils.js","bca5f3fbe0d71d1cc5c38a3511970e96"],["/js/workbox.js","64b0dad23dedf15b3025543e83062dcf"],["/link/index.html","edd13d24c70b9872f7175876f4e9f671"],["/music/index.html","ebe3a7e86c04c839098d031fbb548786"],["/page/2/index.html","c0d4937585a89716746aafe1f50b89c2"],["/posts/124020408.html","4a0fb94ee70924c5e1163bf1cb534af8"],["/posts/1436700789.html","c3d49b1b9aa52433d4b637b90c14d446"],["/posts/1849774907.html","6e205a0563e2d2e16be17ed351be8d85"],["/posts/1901878248.html","3b6f7bd6b2a61a379857052619c81620"],["/posts/242091884.html","172069c693bb197f5a93c6eea51a54f4"],["/posts/2516383961.html","63a4b15c795424efda33557a3fb84d91"],["/posts/2921331606.html","c63b76752a92d4499c21261fa05e2197"],["/posts/3459297216.html","6b1f142d2d139c512cb68130351580dc"],["/posts/3461054545.html","64c52006a3f6836265de8e881501bae9"],["/posts/3576320730.html","f5e572d7cbbb6e07770b57a5a06cb404"],["/posts/513978782.html","5d7005a75d5c2cac3a418349d59cb41d"],["/posts/697168895.html","1a6baf889b5d36104d12b29dc3e242ae"],["/posts/898434083.html","23046f145d2a9e90a8eaf3ef6d685ee9"],["/search.xml","440b142f0e590a71f2d06e135f723211"],["/sw-register.js","e226bdec03cf90209f43cd8a0528b02a"],["/tags/CSS开始/index.html","9cd75eb6d330aec4399c655bd68dbba6"],["/tags/HTML开始/index.html","b46c6438129c06be8a93572fcc7b7eb0"],["/tags/Markdown和hexo/index.html","ff53eb52ec8bfad51c0c676f22315383"],["/tags/hexo博客报错/index.html","8bb534ae6afaa0b2fc9456bcd0cfc131"],["/tags/index.html","3c6714414824bec8d8e826a9a4afb22f"],["/tags/代码块语言演示/index.html","8a1fcfb3cdb6cc6fd5af2bc2ff61cc04"],["/tags/关于CSS的闲言碎语/index.html","f7541518de087587bd4d09dec85066bb"],["/tags/前端案例/index.html","8afd7a3718faa4e61482bde38790eb2a"],["/tags/包含HTML5/index.html","b40c1b7e48e215018b87d2579ed2fa71"],["/tags/弹性布局案例/index.html","c04497140caefeff95c8f94b2f508e51"],["/tags/弹性盒/index.html","762f8bd2bff650d41516c0dc53f04033"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some((function(e){return n.match(e)}))},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),n.toString()},hashParamName=(addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],n=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,n,!1);return[r.toString(),c]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then((function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(n,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(n){return Promise.all(n.map((function(n){if(!t.has(n.url))return e.delete(n)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";!(t=urlsToCacheKeys.has(n))&&r&&(n=addDirectoryIndex(n,r),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(n)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)})))}})),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}((function(){return function e(t,n,r){function c(o,i){if(!n[o]){if(!t[o]){var s="function"==typeof require&&require;if(!i&&s)return s(o,!0);if(a)return a(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var u=n[o]={exports:{}};t[o][0].call(u.exports,(function(e){var n=t[o][1][e];return c(n||e)}),u,u.exports,e,t,n,r)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)c(r[o]);return c}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function a(e,t,n){var c=e.url,a=n.maxAgeSeconds,o=n.maxEntries,i=n.name,s=Date.now();return r("Updating LRU order for "+c+". Max entries is "+o+", max age is "+a),f.getDb(i).then((function(e){return f.setTimestampForUrl(e,c,s)})).then((function(e){return f.expireEntries(e,o,a,s)})).then((function(e){r("Successfully updated IDB.");var n=e.map((function(e){return t.delete(e)}));return Promise.all(n).then((function(){r("Done with cache cleanup.")}))})).catch((function(e){r(e)}))}function o(e){var t=Array.isArray(e);if(t&&e.forEach((function(e){"string"==typeof e||e instanceof Request||(t=!1)})),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,s=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||s.successResponses;return fetch(e.clone()).then((function(r){return"GET"===e.method&&n.test(r.status)&&c(t).then((function(n){n.put(e,r).then((function(){var r=t.cache||s.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=a.bind(null,e,t,n);i=i?i.then(r):r()}(e,n,r)}))})),r.clone()}))},openCache:c,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then((function(){return Promise.all([caches.open(e),caches.open(t)]).then((function(t){var n=t[0],r=t[1];return n.keys().then((function(e){return Promise.all(e.map((function(e){return n.match(e).then((function(t){return r.put(e,t)}))})))})).then((function(){return caches.delete(e)}))}))}))},cache:function(e,t){return c(t).then((function(t){return t.add(e)}))},uncache:function(e,t){return c(t).then((function(t){return t.delete(e)}))},precache:function(e){e instanceof Promise||o(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:o,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r)if(new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",c=1,a="store",o="url",i="timestamp",s={};t.exports={getDb:function(e){return e in s||(s[e]=function(e){return new Promise((function(t,n){var s=indexedDB.open(r+e,c);s.onupgradeneeded=function(){s.result.createObjectStore(a,{keyPath:o}).createIndex(i,i,{unique:!1})},s.onsuccess=function(){t(s.result)},s.onerror=function(){n(s.error)}}))}(e)),s[e]},setTimestampForUrl:function(e,t,n){return new Promise((function(r,c){var o=e.transaction(a,"readwrite");o.objectStore(a).put({url:t,timestamp:n}),o.oncomplete=function(){r(e)},o.onabort=function(){c(o.error)}}))},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise((function(r,c){var s=1e3*t,f=[],u=e.transaction(a,"readwrite"),d=u.objectStore(a);d.index(i).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-s>t.value[i]){var r=t.value[o];f.push(r),d.delete(r),t.continue()}},u.oncomplete=function(){r(f)},u.onabort=c})):Promise.resolve([])}(e,n,r).then((function(n){return function(e,t){return t?new Promise((function(n,r){var c=[],s=e.transaction(a,"readwrite"),f=s.objectStore(a),u=f.index(i),d=u.count();u.count().onsuccess=function(){var e=d.result;e>t&&(u.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var a=r.value[o];c.push(a),f.delete(a),e-c.length>t&&r.continue()}})},s.oncomplete=function(){n(c)},s.onabort=r})):Promise.resolve([])}(e,t).then((function(e){return n.concat(e)}))}))}}},{}],3:[function(e,t,n){function r(e){return e.reduce((function(e,t){return e.concat(t)}),[])}e("serviceworker-cache-polyfill");var c=e("./helpers"),a=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){c.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(c.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";c.debug("install event fired"),c.debug("creating cache ["+t+"]"),e.waitUntil(c.openCache({cache:{name:t}}).then((function(e){return Promise.all(o.preCacheItems).then(r).then(c.validatePrecacheInput).then((function(t){return c.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)}))})))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,c=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach((function(e,r){t[e.name]=n[r+1]}))}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),c=e("./helpers"),a=function(e,t){for(var n=e.entries(),r=n.next(),c=[];!r.done;){new RegExp(r.value[0]).test(t)&&c.push(r.value[1]),r=n.next()}return c},o=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach((function(e){o.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}})),o.prototype.add=function(e,t,n,a){var o;a=a||{},t instanceof RegExp?o=RegExp:o=(o=a.origin||self.location.origin)instanceof RegExp?o.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(o),e=e.toLowerCase();var i=new r(e,t,n,a);this.routes.has(o)||this.routes.set(o,new Map);var s=this.routes.get(o);s.has(e)||s.set(e,new Map);var f=s.get(e),u=i.regexp||i.fullUrlRegExp;f.has(u.source)&&c.debug('"'+t+'" resolves to same regex as existing route.'),f.set(u.source,i)},o.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,c=n.pathname;return this._match(e,a(this.routes,r),c)||this._match(e,[this.routes.get(RegExp)],t)},o.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var c=t[r],o=c&&c.get(e.toLowerCase());if(o){var i=a(o,n);if(i.length>0)return i[0].makeHandler(n)}}return null},o.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new o},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),c=e("../helpers");t.exports=function(e,t,n){return n=n||{},c.debug("Strategy: cache first ["+e.url+"]",n),c.openCache(n).then((function(t){return t.match(e).then((function(t){var a=n.cache||r.cache,o=Date.now();return c.isResponseFresh(t,a.maxAgeSeconds,o)?t:c.fetchAndCache(e,n)}))}))}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),c=e("../helpers");t.exports=function(e,t,n){return n=n||{},c.debug("Strategy: cache only ["+e.url+"]",n),c.openCache(n).then((function(t){return t.match(e).then((function(e){var t=n.cache||r.cache,a=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,a))return e}))}))}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),c=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise((function(a,o){var i=!1,s=[],f=function(e){s.push(e.toString()),i?o(new Error('Both cache and network failed: "'+s.join('", "')+'"')):i=!0},u=function(e){e instanceof Response?a(e):f("No result returned")};r.fetchAndCache(e.clone(),n).then(u,f),c(e,t,n).then(u,f)}))}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),c=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||r.successResponses,o=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return c.debug("Strategy: network first ["+e.url+"]",n),c.openCache(n).then((function(t){var i,s,f=[];if(o){var u=new Promise((function(a){i=setTimeout((function(){t.match(e).then((function(e){var t=n.cache||r.cache,o=Date.now(),i=t.maxAgeSeconds;c.isResponseFresh(e,i,o)&&a(e)}))}),1e3*o)}));f.push(u)}var d=c.fetchAndCache(e,n).then((function(e){if(i&&clearTimeout(i),a.test(e.status))return e;throw c.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")})).catch((function(r){return c.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then((function(e){if(e)return e;if(s)return s;throw r}))}));return f.push(d),Promise.race(f)}))}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),c=e("./router"),a=e("./helpers"),o=e("./strategies"),i=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:c,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],c=0,a=0,o="",f=t&&t.delimiter||"/";null!=(n=p.exec(e));){var u=n[0],d=n[1],h=n.index;if(o+=e.slice(a,h),a=h+u.length,d)o+=d[1];else{var l=e[a],b=n[2],m=n[3],g=n[4],x=n[5],v=n[6],w=n[7];o&&(r.push(o),o="");var y=null!=b&&null!=l&&l!==b,R="+"===v||"*"===v,E="?"===v||"*"===v,C=n[2]||f,k=g||x;r.push({name:m||c++,prefix:b||"",delimiter:C,optional:E,repeat:R,partial:y,asterisk:!!w,pattern:k?s(k):w?".*":"[^"+i(C)+"]+?"})}}return a<e.length&&(o+=e.substr(a)),o&&r.push(o),r}function c(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function a(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},s=(r||{}).pretty?c:encodeURIComponent,f=0;f<e.length;f++){var u=e[f];if("string"!=typeof u){var d,h=i[u.name];if(null==h){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(l(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var p=0;p<h.length;p++){if(d=s(h[p]),!t[f].test(d))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(d)+"`");o+=(0===p?u.prefix:u.delimiter)+d}}else{if(d=u.asterisk?a(h):s(h),!t[f].test(d))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+d+'"');o+=u.prefix+d}}else o+=u}return o}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function u(e){return e.sensitive?"":"i"}function d(e,t,n){l(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,c=!1!==n.end,a="",o=0;o<e.length;o++){var s=e[o];if("string"==typeof s)a+=i(s);else{var d=i(s.prefix),h="(?:"+s.pattern+")";t.push(s),s.repeat&&(h+="(?:"+d+h+")*"),a+=h=s.optional?s.partial?d+"("+h+")?":"(?:"+d+"("+h+"))?":d+"("+h+")"}}var p=i(n.delimiter||"/"),b=a.slice(-p.length)===p;return r||(a=(b?a.slice(0,-p.length):a)+"(?:"+p+"(?=$))?"),a+=c?"$":r&&b?"":"(?="+p+"|$)",f(new RegExp("^"+a,u(n)),t)}function h(e,t,n){return l(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}(e,t):l(e)?function(e,t,n){for(var r=[],c=0;c<e.length;c++)r.push(h(e[c],t,n).source);return f(new RegExp("(?:"+r.join("|")+")",u(n)),t)}(e,t,n):function(e,t,n){return d(r(e,n),t,n)}(e,t,n)}var l=e("isarray");t.exports=h,t.exports.parse=r,t.exports.compile=function(e,t){return o(r(e,t))},t.exports.tokensToFunction=o,t.exports.tokensToRegExp=d;var p=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then((function(){if(arguments.length<1)throw new TypeError;return e=e.map((function(e){return e instanceof Request?e:String(e)})),Promise.all(e.map((function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())})))})).then((function(r){if(r.some((function(e){return!e.ok})))throw new t("Incorrect response status");return Promise.all(r.map((function(t,r){return n.put(e[r],t)})))})).then((function(){}))},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)})),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdn.staticaly.com"});