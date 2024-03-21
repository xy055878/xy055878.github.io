var posts=["posts/1730326755.html","posts/1070765575.html","posts/4229777803.html","posts/436947303.html","posts/2640001168.html","posts/2908052494.html","posts/3652600568.html","posts/1223133963.html","posts/359729899.html","posts/1074556107.html","posts/2291569139.html","posts/d50a.html","posts/124020408.html","posts/554392423.html","posts/2275170095.html","posts/1462565397.html","posts/1964551917.html","posts/2321053998.html","posts/2210618669.html","posts/3842406544.html","posts/40355252.html","posts/1346919559.html","posts/1802143498.html","posts/3678162647.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}var friend_link_list=[{name:"Hexo",hundredSuffix:"",link:"https://hexo.io/zh-tw/",avatar:"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg",descr:"快速、简单且强大的网站框架"},{name:"anzhiyu主题",link:"https://blog.anheyu.com/",avatar:"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg",descr:"生活明朗，万物可爱",siteshot:"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{name:"糖丸主页",link:"https://www.tany.top/",avatar:"https://pic.tany.top/imgs/Header.jpg",descr:"及时当勉，岁月不待。",siteshot:"https://pic.tany.top/imgs/202305051915674.png",color:"vip",tag:"Home"},{name:"安知鱼`Blog",hundredSuffix:"",link:"https://blog.anheyu.com/",avatar:"https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg",descr:"生活明朗，万物可爱"},{name:"张洪Heo",link:"https://blog.zhheo.com/",avatar:"https://bu.dusays.com/2022/12/28/63ac2812183aa.png",descr:"分享设计与科技生活"},{name:"guole's Blog",link:"https://guole.fun/",avatar:"https://tse1-mm.cn.bing.net/th/id/OIP-C.ob0ZnB6eeiLTNbFhWSd6AQAAAA?w=192&h=192&c=7&r=0&o=5&dpr=1.4&pid=1.7",descr:"保持理智，相信明天。"},{name:"Ethan.Tzy",link:"https://tzy1997.com/",avatar:"https://tse3-mm.cn.bing.net/th/id/OIP-C.0gxF6wlacVVPLen7jx20OwAAAA?w=189&h=196&c=7&r=0&o=5&dpr=1.4&pid=1.7",descr:"古今之成大事者，不惟有超世之才，亦必有坚忍不拔之志"},{name:"Fomalhaut🥝",link:"https://www.fomal.cc/",avatar:"https://tse3-mm.cn.bing.net/th/id/OIP-C.gGvI7FNEWn7TeFvVF8xc2wAAAA?w=190&h=190&c=7&r=0&o=5&dpr=1.4&pid=1.7",descr:"Future is now 🍭🍭🍭"},{name:"Ganzhe",link:"https://ganzhe2028.github.io",avatar:"https://tse4-mm.cn.bing.net/th/id/OIP-C.YqJHx_Ff9BbbJNQQWgU85gAAAA?w=190&h=190&c=7&r=0&o=5&dpr=1.4&pid=1.7",descr:"顺其自然，持之以恒"},{name:"米粒个人博客",link:"https://luomengguo.top/",avatar:"https://img01.anheyu.com/useruploads/128/2023/06/03/647b2d3308108.webp",descr:"追梦少年,敢干敢搏"},{name:"摸鱼星球",link:"https://moyustar.cn/",avatar:"https://moyustar.cn/icon.png",descr:"斯人若彩虹，遇见方知有",siteshot:"https://moyustar.cn/fengmian.png"},{name:"慕斯",link:"https://blog.dd.ac.cn/",avatar:"https://img02.dd.ac.cn//article/zll.png",descr:"风在迷茫中吹来夏天，少年借微光成长",siteshot:"https://img02.dd.ac.cn//article/siteshot.png"},{name:"冰梦",link:"https://bingmeng158.github.io",avatar:"https://bingmeng158.github.io/img/about.webp",descr:"未来可期，人间值得",siteshot:null},{name:"Leonus",link:"https://blog.leonus.cn/",avatar:"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5",descr:"进一寸有进一寸的欢喜。"},{name:"Plasmon222",link:"https://blog.loveak.top/",avatar:"https://bu.dusays.com/2023/05/12/645e45a3a55e1.jpg",descr:"✨行则将至，做则必成✨"},{name:"网址导航",link:"https://tzy1997.com/nav/index.html",avatar:"https://bu.dusays.com/2022/05/02/626f92e193879.jpg",descr:"唐先森的网址收藏"},{name:"程序员导航-CXY521",link:"https://cxy521.com/",avatar:"http://cxy521.com/static/img/logo.png",descr:"程序员一站式导航"},{name:"爱达杂货铺",link:"https://www.widiz.com/sites/7104.html",avatar:"https://www.widiz.com/wp-content/uploads/2021/06/minilogo.png",descr:"爱达杂货铺收集精品网络免费资源、包括免费视频、BT种子磁力搜索、网盘搜索、软件、网站和各类资源，欢迎前来探索。"},{name:"Pickfree",link:"http://www.pickfree.cn/",avatar:"https://ts2.cn.mm.bing.net/th?id=ODLS.0fab19a5-6d63-48e5-a4e7-341f01b2ba02&w=32&h=32&qlt=92&pcl=fffffa&o=6&pid=1.2",descr:"一个汇总免费资源的导航，主要面向创意工作者设计，搜集诸如免费商用图片、字体、音频、视频、素材等免版权网站"},{name:"学吧导航",link:"https://www.xue8nav.com/?ref=www.widiz.com",avatar:"https://tse3-mm.cn.bing.net/th/id/OIP-C.o2jNwOhfVGp1zwIkdMcriQHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.4&pid=1.7",descr:"超过四十万学习爱好者都在用的专业学习网址大全学霸导航，汇集了国内外优质的学习网站和平台"},{name:"设计站点",link:"https://www.jianshu.com/p/4b776fd8bdea?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation",avatar:"https://tse4-mm.cn.bing.net/th/id/OIP-C.cj1sQO4MdyWze5wogYyYXwHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.4&pid=1.7",descr:"简书-个人设计站点分享。"},{name:"Github",link:"https://github.com/",avatar:"https://ts4.cn.mm.bing.net/th?id=OIP.Es7M-SsF6JeUpTZy6RDJfwAAAA&w=80&h=80&o=6&dpr=2&pid=5.1",descr:"全球最大的面向开源及私有软件项目的托管平台。"},{name:"鱼聪明AI",link:"https://www.yucongming.com/",avatar:"data:image/png;base64,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",descr:"做您强大的AI助手"},{name:"浙江省等级考试",link:"https://crcs.zjzs.net/#/",avatar:"https://ts1.cn.mm.bing.net/th?id=ODLS.6fc9b428-e86f-43a2-8953-ece09670aef1&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"浙江省高校计算机/英语等级"},{name:"国家大学生就业服务平台",link:"https://www.ncss.cn/ncss/jydt/yw",avatar:"https://ts4.cn.mm.bing.net/th?id=ODLS.b243b2e6-92da-4a28-a5cf-ae9110872702&w=16&h=16&o=6&pid=1.2",descr:null},{name:"程序员鱼皮",link:"https://gitee.com/liyupi/projects",avatar:"https://foruda.gitee.com/avatar/1676989690111756581/1798405_yupi_1611646747.png!avatar200",descr:"大厂全栈开发"},{name:"千锋前端学习路线",link:"https://www.bilibili.com/read/cv17987101",avatar:"https://i2.hdslb.com/bfs/face/013eddf71a8a474e53acc258b4c69ecb7236ddcb.jpg@96w_96h_1c_1s_!web-avatar.webp",descr:"跟着路线图认真坚持学习从前端小白到大神不是梦，0基础看这一篇足矣！"},{name:"菜鸟教程",link:"https://www.runoob.com/",avatar:"https://ts1.cn.mm.bing.net/th?id=ODLS.cc1244f4-c576-40dc-8423-06895c0f5444&w=32&h=32&o=6&pid=13.1",descr:"提供了编程的基础技术教程, 介绍了HTML、CSS、Javascript、Python，Java，Ruby，C，PHP , MySQL等各种编程语言的基础知识。"},{name:"C语言中文网",link:"http://c.biancheng.net/css3/",avatar:"https://ts4.cn.mm.bing.net/th?id=ODLS.99e7f10a-eb9a-43e2-84b1-fb389786034c&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"知识全面，思路清晰。"},{name:"w3school 在线教程",link:"https://www.w3school.com.cn",avatar:"https://ts4.cn.mm.bing.net/th?id=ODLS.799550ba-ea8b-4c84-bd4e-daab61d8d1e8&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"从何入手？. 什么是一个 Web 建设者需要学习的知识呢？. W3School 将为您回答这个问题，在您成为专业 Web 开发者的路上助一臂之力。"},{name:"现代 JavaScript 教程",link:"https://zh.javascript.info/",avatar:"https://zh.javascript.info/img/favicon/apple-touch-icon-precomposed.png",descr:"以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识。"},{name:"Vue3+TS+Pinia+Vant的应用实战",link:"https://www.yuque.com/shuiruohanyu/yhrqug/dyp4p1",avatar:"https://ts4.cn.mm.bing.net/th?id=ODLS.f57ab655-b96a-49c8-993d-ba56f47c41d6&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"Vue+TS的小课笔记"},{name:"猿急送",link:"https://www.yuanjisong.com/job/shenzhen/zxfb/page24",avatar:"https://ts2.cn.mm.bing.net/th?id=ODLS.dad6b4b5-5b3f-407a-933a-05086034939d&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"一个专为创业公司提供互联网坐班兼职工程师的外包平台"},{name:"兔二工具",link:"https://www.amp360.net/",avatar:"https://tse4-mm.cn.bing.net/th/id/OIP-C.0IENizgfyPhiISwcfdLqoAHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",descr:"一个拥有很多工具的网站"},{name:"在线工具-你的工具箱",link:"https://tool.lu/",avatar:"https://tool.lu/favicon.ico",descr:"另一个拥有很多工具的网站"},{name:"ToolTT在线工具箱",link:"https://tooltt.com/",avatar:"https://tooltt.com/static/images/icon/tooltt.jpg",descr:"一个各种文件转化的工具箱"},{name:"JS在线编辑器",link:"http://jsrun.net/new",avatar:"data:image/png;base64,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",descr:"JS在线编辑器,JS在线运行,在线演示,调试测试代码"},{name:"Images Tool v3.0",link:"https://imagestool.com/webp2jpg-online/",avatar:"https://imagestool.com/webp2jpg-online/favicon.png",descr:"这是一个其他图片压缩网站"},{name:"Images Tool",link:"https://imagestool.com/zh_CN/compress-images.html",avatar:"https://imagestool.com/webp2jpg-online/favicon.png",descr:"这是一个gif图片压缩网站"},{name:"bgsub",link:"https://www.aigei.com/bgremover/",avatar:"https://ts4.cn.mm.bing.net/th?id=ODLS.ad0f0312-f028-4b23-9dd0-85eb345cc510&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"在线图片去底工具 - 将纯色背景的图片转换为背景透明的图片"},{name:"互联二维码",link:"https://www.hlcode.cn/?p=bd-cs-scmf-20220310-2&bd_vid=11734063912170230821",avatar:"https://ts1.cn.mm.bing.net/th?id=ODLS.e8fc81c9-0cf7-4132-9a54-fd10d9c1c915&w=32&h=32&o=6&pid=13.1",descr:"美化二维码、各种文件的二维码生成。"},{name:"Handraw",link:"https://handraw.top/",avatar:"https://img-blog.csdnimg.cn/20190927151117521.png?x-oss-process=image/resize,m_fixed,h_224,w_224",descr:"支持中文手绘效果和多画布能力的白板绘图工具。"},{name:"removeBg",link:"https://www.remove.bg/zh",avatar:"https://ts1.cn.mm.bing.net/th?id=ODLS.c8ccbdcc-a8b4-4097-bf55-443171740c46&w=32&h=32&qlt=95&pcl=fffffa&o=6&pid=1.2",descr:"图片背景消除"},{name:"shields.io数据牌",link:"https://shields.io/",avatar:"https://ts1.cn.mm.bing.net/th?id=ODLS.1d644b97-477d-4c0b-a57b-9f33b6d6dcfa&w=32&h=32&qlt=91&pcl=fffffa&o=6&pid=1.2",descr:"徽章制作工具，支持静态动态，各种样式尺寸颜色格式。"},{name:"Runway",link:"https://runwayml.com/",avatar:"https://ts3.cn.mm.bing.net/th?id=ODLS.ce078948-4461-4791-9afc-edebd777d7e4&w=16&h=16&o=6&pid=1.2",descr:"视频擦除"},{name:"I Love PDF",link:"https://www.ilovepdf.com/zh-cn",avatar:"https://www.ilovepdf.com/img/favicons-pdf/favicon-32x32.png",descr:"一个完全免费、便捷、强大的PDF在线工具"},{name:"PDF24 Tools",link:"https://tools.pdf24.org/zh/",avatar:"https://tools.pdf24.org/static/img/pageIcons/svg/default.svg?v=5cae54fd",descr:"免费且易于使用的在线PDF工具"},{name:"Kalvin在线工具",link:"http://patorjk.com/software/taag/#p=author&h=0&f=Doom&t=tany",avatar:"https://ts3.cn.mm.bing.net/th?id=ODLS.e081e190-74da-4aad-85ab-fa313cdb0613&w=16&h=16&o=6&pid=1.2",descr:"ASCII字符画|字符画生成器 -"},{name:"MotionGo",link:"http://motion.yoo-ai.com/",avatar:"data:image/jpeg;base64,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",descr:"AI自动生成PPT"},{name:"周报生成器",link:"https://weeklyreport.avemaria.fun/zh",avatar:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGNsYXNzPSIiPjxyZWN0IGlkPSJyNCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHJ4PSIxMjgiIGZpbGw9InVybCgjcjUpIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW9wYWNpdHk9IjEwMCUiIHBhaW50LW9yZGVyPSJzdHJva2UiPjwvcmVjdD48cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgZmlsbD0idXJsKCNyNikiIHJ4PSIxMjgiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogb3ZlcmxheTsiPjwvcmVjdD48Y2xpcFBhdGggaWQ9ImNsaXAiPjx1c2UgeGxpbms6aHJlZj0iI3I0Ij48L3VzZT48L2NsaXBQYXRoPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0icjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKDE4MCkiIHN0eWxlPSJ0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyOyI+PHN0b3Agc3RvcC1jb2xvcj0iIzVDNUM1QyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzBGMTAxNSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJyNiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyNTYpIHJvdGF0ZSg5MCkgc2NhbGUoNTEyKSI+PHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAiPjwvc3RvcD48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48c3ZnIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzUyIiBoZWlnaHQ9IjM1MiIgeD0iODAiIHk9IjgwIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgc3R5bGU9ImNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7Ij48cGF0aCBkPSJNMTMuOTk4IDQuMDg3SDIuMDAyTTkuNSAxMi4wODdoLTNNMTEuNSA4LjA4N2gtNyIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+PC9zdmc+PC9zdmc+",descr:"生成完整周报 →. 请勿上传过于隐私的工作内容"},{name:"Convertio",link:"https://convertio.co/zh/font-converter/",avatar:"https://ts1.cn.mm.bing.net/th?id=ODLS.50b62dd1-d049-4d8d-8478-e67cd22757a1&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"在线转换任何格式的字体文件"},{name:"FontConverter",link:"https://fontconverter.com/zh/",avatar:"https://fontconverter.com/images/fontconverter/logo.svg",descr:"此字体转换器允许您将许多字体格式（包括稀有格式）转换为当今最流行的格式，例如 TTF、OTF、WOFF 等。"},{name:"在线字体裁剪工具",link:"https://font-subset.disidu.com/",avatar:"https://ts3.cn.mm.bing.net/th?id=ODLS.ee35c39b-04f3-4ba8-860d-550247280b02&w=32&h=32&qlt=97&pcl=fffffa&o=6&pid=1.2",descr:"在线字体压缩工具"},{name:"狗屁不通文章生成器",link:"https://www.nuomitool.com/goupibutong-article-generator/",avatar:"https://ts2.cn.mm.bing.net/th?id=ODLS.0d073730-3be3-4cd7-afd6-d6184d433b33&w=16&h=16&o=6&pid=1.2",descr:"真的是狗屁不通，只能拿来搞笑，不信你试试。"},{name:"Flat UI Colors",link:"https://flatuicolors.com/",avatar:"https://ts2.cn.mm.bing.net/th?id=ODLS.c236ef7a-8329-4208-85b6-bce06ab1f618&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"采集了扁平化设计中最受欢迎的色彩，可以吸取复制任何你看中的色彩。"},{name:"Brand Colors",link:"https://brandcolors.net/",avatar:"https://ts1.cn.mm.bing.net/th?id=ODLS.0dae1a60-d0c5-4b60-a281-0a590b822e80&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"世界知名品牌颜色收集网，收录了世界最知名的品牌、企业公司、知名网站的颜色的色码。"},{name:"Can I use",link:"https://caniuse.com/",avatar:"https://ts3.cn.mm.bing.net/th?id=ODLS.a98ba153-f544-4921-a892-e4bcfda27feb&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"一个查询CSS、JS、HTML5、CSS、SVG在个中流行浏览器钟的特性和兼容性的网站。"},{name:"在线LaTex公式编辑器",link:"https://www.latexlive.com/",avatar:"https://ts1.cn.mm.bing.net/th?id=ODLS.2dc2c9ca-1f17-4e58-89cd-e1e03eacd775&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"颜值高、免费，支持自由快捷编辑、公式模板、图片识别。"},{name:"Table Generator",link:"https://www.tablesgenerator.com/",avatar:"https://ts4.cn.mm.bing.net/th?id=ODLS.8c144d86-f79e-4d4e-8f05-a37b93923494&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"快速生成LaTex表格"},{name:"MyScript",link:"https://webdemo.myscript.com/",avatar:"https://ts2.cn.mm.bing.net/th?id=ODLS.171fd647-d9ae-4064-a2f5-619ef927393d&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"手写公式识别"},{name:"Tables Generator",link:"https://www.tablesgenerator.com/",avatar:"https://ts4.cn.mm.bing.net/th?id=ODLS.8c144d86-f79e-4d4e-8f05-a37b93923494&w=16&h=16&o=6&pid=1.2",descr:"LaTeX 表格生成器"},{name:"万物皆可对比",link:"https://versus.com/cn",avatar:"https://tse4-mm.cn.bing.net/th/id/OIP-C.P0ueB9wmLTjAzG1lVh2HBAHaHa?w=184&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",descr:"从比较手机到比较 城市，脱去繁杂的营销外壳，呈现最真实的一面，让您轻松掌握一切资讯。"},{name:"亲戚计算器",link:"https://tool.lu/relationship/",avatar:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPuW3peWFtzwvdGl0bGU+CiAgICA8ZyBpZD0i5bel5YW3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5bel5YW3566xIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS4wMDAwMDAsIDE5LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjMjAyNDI1IiBvcGFjaXR5PSIwLjAxIiBwb2ludHM9IjAgMCA0NzMgMCA0NzMgNDczIDAgNDczIj48L3BvbHlnb24+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNTcuNjY2NjY3LDMxLjUzMzMzMzUgQzE0MC4yNTEyODgsMzEuNTMzMzMzNSAxMjYuMTMzMzMzLDQ1LjY1MTI4NzcgMTI2LjEzMzMzMyw2My4wNjY2NjY1IEwxMjYuMTMzMzMzLDE1Ny42NjY2NjcgQzEyNi4xMzMzMzMsMTc1LjA4MjA0NiAxNDAuMjUxMjg3LDE4OS4yIDE1Ny42NjY2NjcsMTg5LjIgTDMxNS4zMzMzMzMsMTg5LjIgQzMzMi43NDg3MTMsMTg5LjIgMzQ2Ljg2NjY2NywxNzUuMDgyMDQ2IDM0Ni44NjY2NjcsMTU3LjY2NjY2NyBMMzQ2Ljg2NjY2Nyw2My4wNjY2NjY1IEMzNDYuODY2NjY3LDQ1LjY1MTI4NzcgMzMyLjc0ODcxMiwzMS41MzMzMzM1IDMxNS4zMzMzMzMsMzEuNTMzMzMzNSBMMTU3LjY2NjY2NywzMS41MzMzMzM1IFogTTE1Ny42NjY2NjcsNjMuMDY2NjY2NSBMMzE1LjMzMzMzMyw2My4wNjY2NjY1IEwzMTUuMzMzMzMzLDE1Ny42NjY2NjcgTDE1Ny42NjY2NjcsMTU3LjY2NjY2NyBMMTU3LjY2NjY2Nyw2My4wNjY2NjY1IFogTTMxLjUzMzMzMzUsMjgzLjggTDMxLjUzMzMzMzUsNDI1LjcgQzMxLjUzMzMzMzUsNDM0LjQwNzY4OSAzOC41OTIzMTA1LDQ0MS40NjY2NjcgNDcuMyw0NDEuNDY2NjY3IEw0MjUuNyw0NDEuNDY2NjY3IEM0MzQuNDA3Njg5LDQ0MS40NjY2NjcgNDQxLjQ2NjY2Nyw0MzQuNDA3Njg5IDQ0MS40NjY2NjcsNDI1LjcgTDQ0MS40NjY2NjcsMjgzLjggQzQ0MS40NjY2NjcsMjc1LjA5MjMxMSA0MzQuNDA3Njg5LDI2OC4wMzMzMzMgNDI1LjcsMjY4LjAzMzMzMyBMNDcuMywyNjguMDMzMzMzIEMzOC41OTIzMTA1LDI2OC4wMzMzMzMgMzEuNTMzMzMzNSwyNzUuMDkyMzExIDMxLjUzMzMzMzUsMjgzLjggWiIgaWQ9IlNoYXBlIiBmaWxsPSIjMDA5QTYxIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMS41MzMzMzM1LDEyNi4xMzMzMzMgQzMxLjUzMzMzMzUsMTIxLjk1MTc1MyAzMy4xOTQ0NTk1LDExNy45NDE0NCAzNi4xNTEyODMsMTE0Ljk4NDYxNiBDMzkuMTA4MTA2NiwxMTIuMDI3NzkzIDQzLjExODQyLDExMC4zNjY2NjcgNDcuMywxMTAuMzY2NjY3IEw0MjUuNywxMTAuMzY2NjY3IEM0MjkuODgxNTgsMTEwLjM2NjY2NyA0MzMuODkxODkzLDExMi4wMjc3OTMgNDM2Ljg0ODcxNywxMTQuOTg0NjE2IEM0MzkuODA1NTQxLDExNy45NDE0NCA0NDEuNDY2NjY3LDEyMS45NTE3NTMgNDQxLjQ2NjY2NywxMjYuMTMzMzMzIEw0NDEuNDY2NjY3LDIzNi41IEM0NDEuNDY2NjY3LDI0NS4yMDc2ODkgNDM0LjQwNzY4OSwyNTIuMjY2NjY3IDQyNS43LDI1Mi4yNjY2NjcgTDQ3LjMsMjUyLjI2NjY2NyBDMzguNTkyMzEwNSwyNTIuMjY2NjY3IDMxLjUzMzMzMzUsMjQ1LjIwNzY4OSAzMS41MzMzMzM1LDIzNi41IEwzMS41MzMzMzM1LDEyNi4xMzMzMzMgWiIgaWQ9IlBhdGgiIGZpbGw9IiNGRkFBNDQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE3My40MzMzMzMsMjM2LjUgQzE3My40MzMzMzMsMjI3Ljc5MjMxMSAxODAuNDkyMzExLDIyMC43MzMzMzMgMTg5LjIsMjIwLjczMzMzMyBMMjgzLjgsMjIwLjczMzMzMyBDMjkyLjUwNzY4OSwyMjAuNzMzMzMzIDI5OS41NjY2NjcsMjI3Ljc5MjMxMSAyOTkuNTY2NjY3LDIzNi41IEwyOTkuNTY2NjY3LDI4My44IEMyOTkuNTY2NjY3LDI5Mi41MDc2ODkgMjkyLjUwNzY4OSwyOTkuNTY2NjY3IDI4My44LDI5OS41NjY2NjcgTDE4OS4yLDI5OS41NjY2NjcgQzE4MC40OTIzMTEsMjk5LjU2NjY2NyAxNzMuNDMzMzMzLDI5Mi41MDc2ODkgMTczLjQzMzMzMywyODMuOCBMMTczLjQzMzMzMywyMzYuNSBMMTczLjQzMzMzMywyMzYuNSBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",descr:"快速简单的查询家庭亲戚称呼"},{name:"IT DOG",link:"https://www.itdog.cn/ping/",avatar:"https://ts1.cn.mm.bing.net/th?id=ODLS.0de75510-4391-48a1-9ac1-dc793a19a2b2&w=32&h=32&qlt=94&pcl=fffffa&o=6&pid=1.2",descr:"网站速度检测"},{name:"wikihow(中文版)",link:"https://zh.wikihow.com/%E9%A6%96%E9%A1%B5",avatar:"https://ts3.cn.mm.bing.net/th?id=ODLS.4fbb2291-9e91-4766-ac3f-43903952796a&w=32&h=32&o=6&pid=13.1",descr:"一个可以学很多生活常识的网站"},{name:"逗比拯救世界",link:"https://www.dbbqb.com/",avatar:"https://www.dbbqb.com/favicon.ico",descr:"专业的表情包搜索网站"},{name:"8个高清二次元&动漫壁纸网站推荐",link:"https://zhuanlan.zhihu.com/p/80975528",avatar:"https://ts4.cn.mm.bing.net/th?id=ODLS.9882fc6b-c6e0-4e80-808f-2f15e1d990f0&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"今天再分享些「高清二次元&动漫壁纸网站」，2K~8"},{name:"极简壁纸",link:"https://bz.zzzmh.cn/index#anime",avatar:"https://ts1.cn.mm.bing.net/th?id=ODLS.058e9e81-6856-4546-a8c7-485faeba2073&w=16&h=16&o=6&pid=1.2",descr:"网站相当简洁干净，用户体验很不错。"},{name:"iconfont",link:"https://www.iconfont.cn/",avatar:"https://pic.tany.top/imgs/DM_20230507173151_001.svg",descr:"阿里妈妈MUX倾力打造的矢量图标管理、交流平台"},{name:"安知鱼图标库",link:"https://www.iconfont.cn/collections/detail?cid=44481",avatar:"https://pic.tany.top/imgs/DM_20230507173151_001.svg",descr:"安知鱼-阿里图标库"},{name:"字体天下",link:"https://www.fonts.net.cn",avatar:"https://ts4.cn.mm.bing.net/th?id=ODLS.a486db20-b43a-474f-874f-0188ecaf172b&w=32&h=32&o=6&pid=13.1",descr:"提供中文字体、手写字体、英文字体、图形字体等各种字体的高速免费下载和在线预览服务"},{name:"QQ音乐",link:"https://y.qq.com/n/ryqq/category?t1=3418",avatar:"https://ts2.cn.mm.bing.net/th?id=ODLS.07d947f8-8fdd-4949-8b9a-be5283268438&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",descr:"分类歌单-千万正版音乐海量无损曲库新歌热歌天天畅听。"},{name:"EmojiAll",link:"https://www.emojiall.com/zh-hans/all-emojis?type=normal",avatar:"https://ts3.cn.mm.bing.net/th?id=ODLS.9481e640-a751-4e35-a176-8e16499a8f60&w=32&h=32&o=6&pid=13.1",descr:"基础Emoji(1879)"},{name:"EmojiXD",link:"https://emojixd.com/",avatar:"https://ts3.cn.mm.bing.net/th?id=ODLS.8aa2c996-d09e-4fb6-94a5-94226528e829&w=32&h=32&o=6&pid=13.1",descr:"🤣 Emoji表情大全，颜文字百科 💌"},{name:"书签地球",link:"https://www.bookmarkearth.com/",avatar:"https://tse4-mm.cn.bing.net/th/id/OIP-C.CzVWzCI-f3UG0xXpKnIwGgHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",descr:"一个充满干货的导航站点，收录了广大网友自发上传的地址书签"},{name:"特殊字符",link:"https://cn.piliapp.com/symbol/",avatar:"https://assets.piliapp.com/s3pxy/favicon.ico",descr:"这些特殊符号是真实的文字和可复制并粘贴到任何地方，比如像微软的Word，脸谱，微博，HTML或博客。"},{name:"Google Earth",link:"https://www.google.com/intl/zh-CN/earth/",avatar:"https://www.gstatic.com/earth/00-favicon.ico",descr:"世界上最详尽的地球仪"},{name:"方糖",link:"https://www.iftft.com",avatar:"https://img02.anheyu.com/adminuploads/1/2022/11/05/63667aafb06ea.png!linkavatar",descr:"方糖（FangTang）世界",siteshot:"https://img02.anheyu.com/adminuploads/1/2022/11/05/636679e6beae7.webp"}],refreshNum=1;function friendChainRandomTransmission(){const t=Math.floor(Math.random()*friend_link_list.length),{name:a,link:n}=friend_link_list.splice(t,1)[0];Snackbar.show({text:"点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「"+a+"」",duration:8e3,pos:"top-center",actionText:"前往",onActionClick:function(t){t.style.opacity=0,window.open(n,"_blank")}})}function addFriendLinksInFooter(){var t=document.getElementById("footer-random-friends-btn");if(!t)return;t.style.opacity="0.2",t.style.transitionDuration="0.3s",t.style.transform="rotate("+360*refreshNum+++"deg)";const a=[];let n=0;for(;friend_link_list.length&&n<3;){const t=Math.floor(Math.random()*friend_link_list.length),{name:c,link:i,avatar:A}=friend_link_list.splice(t,1)[0];a.push({name:c,link:i,avatar:A}),n++}let c=a.map((({name:t,link:a})=>"<a class='footer-item' href='"+a+"' target='_blank' rel='noopener nofollow'>"+t+"</a>")).join("");c+="<a class='footer-item' href='/link/'>更多</a>",document.getElementById("friend-links-in-footer").innerHTML=c,setTimeout((()=>{t.style.opacity="1"}),300)}