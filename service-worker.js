if(!self.define){let i,e={};const c=(c,s)=>(c=new URL(c+".js",s).href,e[c]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=c,i.onload=e,document.head.appendChild(i)}else i=c,importScripts(c),e()})).then((()=>{let i=e[c];if(!i)throw new Error(`Module ${c} didn’t register its module`);return i})));self.define=(s,n)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let a={};const r=i=>c(i,o),d={module:{uri:o},exports:a,require:r};e[o]=Promise.all(s.map((i=>d[i]||r(i)))).then((i=>(n(...i),a)))}}define(["./workbox-c2bc8b5b"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"css/custom.css",revision:"4efa896d48ddb321b7d1998455e7ef18"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"48b0689a8e520050022a90f2f8dddd96"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"2465d8216c7a6c70c6544ddb9a301414"},{url:"js/custom.js",revision:"de4ed00e47837bd41fbdcb4933aa8ad5"},{url:"js/main.js",revision:"1fe0e3cf6ccf490324e4884a0d3190be"},{url:"js/search/algolia.js",revision:"cdb2dcd4b387fbb5ea25ff877fb946c6"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"12485451140d8683aa87e718f459b4c9"},{url:"js/welcome.js",revision:"d4371354468783d64e0f3dc72e54f102"},{url:"anzhiyu/random.js",revision:"168ecdcd5f2c7965f21e1862bdee52c4"},{url:"img/404_1.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/404.jpg",revision:"569c7962afb937ba6e3ccd21934b5e47"},{url:"img/512.png",revision:"39c02b0cb0a14aaabc88be500da92523"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/default_cover.jpg",revision:"eed1d64e7f2f6ba5ab7acecb8c1a3f13"},{url:"img/essay_bg.png",revision:"cb29d80c9ecef3e4e219d7b45c6a71d2"},{url:"img/fa.png",revision:"cb9c10f8462d3dbd834b5ab9d258f130"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/favicon.png",revision:"deb7ee2aebaa3bf599ba7e87148ddaf8"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/128.png",revision:"9bab542ddd8e927e94f1b7d2c35a33e0"},{url:"img/siteicon/16.png",revision:"027061129f5bdcfba1198a49563511b6"},{url:"img/siteicon/32.png",revision:"cb9c10f8462d3dbd834b5ab9d258f130"},{url:"img/siteicon/48.png",revision:"e75567dfa60c16e37a405cf394ca9515"},{url:"img/siteicon/64.png",revision:"d6f80a34ffb56b11e7f690fe75de65d1"},{url:"img/siteicon/apple-icon-180.png",revision:"66d776e4bbd0cf9362d576dc8abb59ae"},{url:"img/siteicon/imgsiteiconmanifest-icon-192.maskable.png",revision:"aa53aed23e4ce4e83eedfd02fd3b4dc7"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"aa53aed23e4ce4e83eedfd02fd3b4dc7"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"39c02b0cb0a14aaabc88be500da92523"},{url:"img/siteicon/splashIcons/icon_1125x2436.png",revision:"b2f890d6b9fa042e9152585e17041e3f"},{url:"img/siteicon/splashIcons/icon_1136x640.png",revision:"671649cd535adfc4553411ca7a61b374"},{url:"img/siteicon/splashIcons/icon_1242x2208.png",revision:"eb5d45c9c5256b1f1fca13bec104b623"},{url:"img/siteicon/splashIcons/icon_1242x2688.png",revision:"604d3163e9277de0a352c0c7c185daeb"},{url:"img/siteicon/splashIcons/icon_1334x750.png",revision:"c0221818c38df6cc9480dcfb62dc96b1"},{url:"img/siteicon/splashIcons/icon_1536x2048.png",revision:"b4f17174bd61f4ac3d4dcaa42f3f444f"},{url:"img/siteicon/splashIcons/icon_1668x2224.png",revision:"97c4041d4e0e3c1fa1f677fbaf9011c3"},{url:"img/siteicon/splashIcons/icon_1668x2388.png",revision:"37c6c01618a42d1a3531724b5c38e2a3"},{url:"img/siteicon/splashIcons/icon_1792x828.png",revision:"bbb4168d1f66f974bbfdbb3f99fe4965"},{url:"img/siteicon/splashIcons/icon_2048x1536.png",revision:"5338f20ffa4939c21408ae286562fd1e"},{url:"img/siteicon/splashIcons/icon_2048x2732.png",revision:"707236819aee3816a27fb8898f09d9b9"},{url:"img/siteicon/splashIcons/icon_2208x1242.png",revision:"462945f6ef09e0a3188ddf14720762d6"},{url:"img/siteicon/splashIcons/icon_2224x1668.png",revision:"31f54cdd65a9bff95ce23cb8a3a506f7"},{url:"img/siteicon/splashIcons/icon_2388x1668.png",revision:"357fbba8fcba969b00334fbcc080c25b"},{url:"img/siteicon/splashIcons/icon_2436x1125.png",revision:"42697a2988bbc4cd36bd8ebfe082a335"},{url:"img/siteicon/splashIcons/icon_2688x1242.png",revision:"7ce3bd96e8933de6242ac212648cfa13"},{url:"img/siteicon/splashIcons/icon_2732x2048.png",revision:"f87f22a489511d9346b2696d1afc7050"},{url:"img/siteicon/splashIcons/icon_640x1136.png",revision:"441c175c92c4e99206d5f930882deb0a"},{url:"img/siteicon/splashIcons/icon_750x1334.png",revision:"b70cc0c5557f6451ea7fa494233373cc"},{url:"img/siteicon/splashIcons/icon_828x1792.png",revision:"c1305b7f1b6d0cb161e5d5c0dff1a520"},{url:"manifest.json",revision:"663e376de512b936626ffb671d0713f4"},{url:"/",revision:"index-20230730060518435"},{url:"music/",revision:"music-20230730060518435"},{url:"about/",revision:"about-20230730060518435"}],{}),i.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new i.CacheFirst,"GET")}));