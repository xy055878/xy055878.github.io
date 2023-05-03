/*
 * @Author: yoren
 * @Date: 2023-04-26 19:25:34
 * @LastEditTime: 2023-05-03 18:47:35
 * @FilePath: \materiald:\黄轩宇\hexo + butterfly博客\source\js\dhl.js
 * @Tips: 纵使前路黑暗，也有可以照亮你的星光，而你自身就是光
 */




function whenDOMReady() {
  // pjax加载完成（切换页面）后需要执行的函数和代码
  // js有一个小问题：就是只要鼠标滚动不论哪里都会响应，即便你滚动的是子元素

  // 2022.9.11 已修复，需要jq，请自行引入

  document.getElementById("name-container").setAttribute("style", "display:none");

  var position = $(window).scrollTop();

  $(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll > position) {


      document.getElementById("name-container").setAttribute("style", "");
      document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");

    } else {
      document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
      document.getElementById("name-container").setAttribute("style", "display:none");
    }

    position = scroll;

  });

  function scrollToTop() {
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
    document.getElementById("name-container").setAttribute("style", "display:none");
    btf.scrollToDest(0, 500);
  }

  // 修复没有弄右键菜单的童鞋无法回顶部的问题

  document.getElementById("page-name").innerText = document.title.split(" | 时光の荏苒ฅ")[0];

  if (document.getElementById("page-name").innerText == '时光の荏苒ฅ') {
    document.getElementById("page-name").innerText = '⚜️微微风簇浪，散作满河星☄️'
  }


  /*这里是去掉你的网站全局名称的设置，如果你不需要去掉，你可以写成：
  
  或者把你的网站的分隔符和全局网站名称加上去*/

}

whenDOMReady() // 打开网站先执行一次
document.addEventListener("pjax:complete", whenDOMReady) // pjax加载完成（切换页面）后再执行一次

// whenDOMReady函数外放一些打开网站之后只需要执行一次的函数和代码，比如一些监听代码。
// 监听代码只需要执行一次即可，不需要每次加载pjax都执行，会出现一些Bug。至于为什么，我也不知道，可以自己试一下。