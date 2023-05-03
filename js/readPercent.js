/*
 * @Author: yoren
 * @Date: 2023-04-21 17:24:00
 * @LastEditTime: 2023-04-21 17:24:00
 * @FilePath: \materiald:\黄轩宇\我的个人博客\source\js\readPercent.js
 * @Tips: 纵使前路黑暗，也有可以照亮你的星光，而你自身就是光
 */


function whenDOMReady() {
    // pjax加载完成（切换页面）后需要执行的函数和代码
    window.onscroll = percent;// 执行函数
    // 页面百分比
    function percent() {
        let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
            b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
            result = Math.round(a / b * 100), // 计算百分比
            up = document.querySelector("#go-up") // 获取按钮

        if (result <= 95) {
            up.childNodes[0].style.display = 'none'
            up.childNodes[1].style.display = 'block'
            up.childNodes[1].innerHTML = result;
        } else {
            up.childNodes[1].style.display = 'none'
            up.childNodes[0].style.display = 'block'
        }
    }
}

whenDOMReady() // 打开网站先执行一次
document.addEventListener("pjax:complete", whenDOMReady) // pjax加载完成（切换页面）后再执行一次

  // whenDOMReady函数外放一些打开网站之后只需要执行一次的函数和代码，比如一些监听代码。
  // 监听代码只需要执行一次即可，不需要每次加载pjax都执行，会出现一些Bug。至于为什么，我也不知道，可以自己试一下。