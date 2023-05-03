/*
 * @Author: yoren
 * @Date: 2022-12-26 13:46:52
 * @LastEditTime: 2023-04-21 19:10:35
 * @FilePath: \materiald:\黄轩宇\我的个人博客\source\js\footer_beautify.js
 * @Tips: 纵使前路黑暗，也有可以照亮你的星光，而你自身就是光
 */
var now = new Date;

function createtime() {
    now.setTime(now.getTime() + 1e3);
    var e = new Date("2022/12/24 00:00:00"),
        t = Math.trunc(234e8 + (now - e) / 1e3 * 17),
        a = (t / 1496e5).toFixed(6),
        r = new Date("2022/12/24 00:00:00"),
        n = (now - r) / 1e3 / 60 / 60 / 24,
        o = Math.floor(n),
        i = (now - r) / 1e3 / 60 / 60 - 24 * o,
        s = Math.floor(i);
    1 == String(s).length && (s = "0" + s);
    var l = (now - r) / 1e3 / 60 - 1440 * o - 60 * s,
        c = Math.floor(l);
    1 == String(c).length && (c = "0" + c);
    var d = (now - r) / 1e3 - 86400 * o - 3600 * s - 60 * c,
        g = Math.round(d);
    1 == String(g).length && (g = "0" + g);
    let b = "";
    b = s < 18 && s >= 9 ?
        `<img class='boardsign' src='/images/daytime.svg' title='什么时候能够实现财富自由呀~'> 本站已稳定运行 ${o} 天 ${s} 小时 ${c} 分 ${g} 秒 <img class='boardsign' src='/images/aixin.svg'>` :
        `<img class='boardsign' src='/images/night.svg' title='下班了就该开开心心地玩耍~'> 本站已稳定运行 ${o} 天 ${s} 小时 ${c} 分 ${g} 秒 <img class='boardsign' src='/images/aixin.svg'>`,
        document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = b)
        // <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀
        // <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀
}
/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */


setInterval((() => {
    createtime()
}), 1e3);

