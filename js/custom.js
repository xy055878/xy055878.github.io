/*
 * @Author: yoren
 * @Date: 2023-04-29 13:39:48
 * @LastEditTime: 2023-04-29 19:16:38
 * @FilePath: \materiald:\黄轩宇\hexo + butterfly博客\source\js\custom.js
 * @Tips: 纵使前路黑暗，也有可以照亮你的星光，而你自身就是光
 */
// 给你的博客加一个优雅的音乐界面
var anzhiyu = {
    // 音乐节目切换背景
    changeMusicBg: function (isChangeBg = true) {
      if (window.location.pathname != "/music/") {
        return;
      }
      const anMusicBg = document.getElementById("an_music_bg");
  
      if (isChangeBg) {
        // player listswitch 会进入此处
        const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
        anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
      } else {
        // 第一次进入，绑定事件，改背景
        let timer = setInterval(() => {
          const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
          // 确保player加载完成
          console.info(anMusicBg);
          if (musiccover) {
            clearInterval(timer);
            anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
            // 绑定事件
            anzhiyu.addEventListenerChangeMusicBg();
  
            // 暂停nav的音乐
            if (
              document.querySelector("#nav-music meting-js").aplayer &&
              !document.querySelector("#nav-music meting-js").aplayer.audio.paused
            ) {
              anzhiyu.musicToggle();
            }
          }
        }, 100);
      }
    },
    addEventListenerChangeMusicBg: function () {
      const anMusicPage = document.getElementById("anMusic-page");
      const aplayerIconMenu = anMusicPage.querySelector(".aplayer-info .aplayer-time .aplayer-icon-menu");
  
      anMusicPage.querySelector("meting-js").aplayer.on("loadeddata", function () {
        anzhiyu.changeMusicBg();
        console.info("player loadeddata");
      });
  
      aplayerIconMenu.addEventListener("click", function () {
        document.getElementById("menu-mask").style.display = "block";
        document.getElementById("menu-mask").style.animation = "0.5s ease 0s 1 normal none running to_show";
      });
  
      document.getElementById("menu-mask").addEventListener("click", function () {
        if (window.location.pathname != "/music/") return;
        anMusicPage.querySelector(".aplayer-list").classList.remove("aplayer-list-hide");
      });
    },
  };
  
  // 调用
  anzhiyu.changeMusicBg(false);

  // 网站恶搞标题
  //动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '👀跑哪里去了~';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '🐖抓到你啦～';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});

// fps显示

document.addEventListener('pjax:complete', fps);
document.addEventListener('DOMContentLoaded', fps);
function fps(){
// if(window.localStorage.getItem("fpson")=="1"){ 
//如果要使博客设置上面的设置项能生效，就把上面一行取消注释
var rAF = function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
}();
var frame = 0;
var allFrameCount = 0;
var lastTime = Date.now();
var lastFameTime = Date.now();
var loop = function () {
    var now = Date.now();
    var fs = (now - lastFameTime);
    var fps = Math.round(1000 / fs);
 
    lastFameTime = now;
    // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS
    allFrameCount++;
    frame++;
 
    if (now > 1000 + lastTime) {
        var fps = Math.round((frame * 1000) / (now - lastTime));
        if(fps<=6){
            var kd=`<span style="color:#bd0000">卡成ppt</span>`
        }
        else if(fps<=10){
            var kd=`<span style="color:red">电竞级帧率</span>`
        }
        else if(fps<=14){
            var kd=`<span style="color:yellow">难受</span>`
        }
        else if(fps<24){
            var kd=`<span style="color:orange">卡</span>`
        }
        else if(fps<=40){
            var kd=`<span style="color:green">...</span>`
        }
        else{
            var kd=`<span style="color:#425aef">正常</span>`
        }
        document.getElementById("fps").innerHTML=`FPS:${fps} ${kd}`;
        frame = 0;
        lastTime = now;
    };
 
    rAF(loop);
}

loop();
// }
// else{$("#fps").hide()}

//如果要使博客设置上面的设置项能生效，就把上面两行取消注释
}


