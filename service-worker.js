if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const d=e=>a(e,r),b={module:{uri:r},exports:n,require:d};i[r]=Promise.all(s.map((e=>b[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/custom.css",revision:"0a7a0c2570a599cbfdef7096a9ff14ee"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"34720b739af8675188ce9d6d73bf37aa"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"792deaf217a65b778ba518e9335f023c"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/custom.js",revision:"de4ed00e47837bd41fbdcb4933aa8ad5"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"cfa47a86f9ae79d6d2ba165d33fdd9d0"},{url:"js/welcome.js",revision:"4cc04f6bbaf8398e962514577abe496a"},{url:"anzhiyu/random.js",revision:"4e78be89fc948d7d50a94452e51460f5"},{url:"img/404_1.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/404.jpg",revision:"569c7962afb937ba6e3ccd21934b5e47"},{url:"img/512.png",revision:"39c02b0cb0a14aaabc88be500da92523"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/default_cover.jpg",revision:"eed1d64e7f2f6ba5ab7acecb8c1a3f13"},{url:"img/essay_bg.png",revision:"cb29d80c9ecef3e4e219d7b45c6a71d2"},{url:"img/fa.png",revision:"cb9c10f8462d3dbd834b5ab9d258f130"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/128.png",revision:"9bab542ddd8e927e94f1b7d2c35a33e0"},{url:"img/siteicon/16.png",revision:"027061129f5bdcfba1198a49563511b6"},{url:"img/siteicon/32.png",revision:"cb9c10f8462d3dbd834b5ab9d258f130"},{url:"img/siteicon/48.png",revision:"e75567dfa60c16e37a405cf394ca9515"},{url:"img/siteicon/64.png",revision:"d6f80a34ffb56b11e7f690fe75de65d1"},{url:"img/siteicon/apple-icon-180.png",revision:"66d776e4bbd0cf9362d576dc8abb59ae"},{url:"img/siteicon/imgsiteiconmanifest-icon-192.maskable.png",revision:"aa53aed23e4ce4e83eedfd02fd3b4dc7"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"aa53aed23e4ce4e83eedfd02fd3b4dc7"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"39c02b0cb0a14aaabc88be500da92523"},{url:"manifest.json",revision:"663e376de512b936626ffb671d0713f4"},{url:"/",revision:"index-20240324052312184"},{url:"music/",revision:"music-20240324052312184"},{url:"about/",revision:"about-20240324052312184"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));