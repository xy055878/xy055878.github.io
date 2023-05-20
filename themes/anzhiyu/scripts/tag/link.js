/*
 * @Author: yoren
 * @Date: 2023-05-15 18:19:03
 * @LastEditTime: 2023-05-16 15:27:17
 * @FilePath: \hexo + anzhiyu博客\themes\anzhiyu\scripts\tag\link.js
 * @Tips: 纵使前路黑暗，也有可以照亮你的星光，而你自身就是光
 */
const urlFor = require("hexo-util").url_for.bind(hexo);
function link(args) {
  args = args.join(" ").split(",");
  let title = args[0];
  let sitename = args[1];
  let link = args[2];
  let imgUrl = args[3] || "";
  let isOutside = args[4] || "no";

  link = link.trim();

  // 获取网页favicon
  if (!imgUrl) {
    let urlNoProtocol = link.replace(/^https?\:\/\//i, "");
    imgUrl = "https://api.iowen.cn/favicon/" + urlNoProtocol + ".png";
    // 菜鸟教程
    if (urlNoProtocol.indexOf("runoob") != -1) {
      imgUrl = "https://cdn.staticaly.com/gh/xy055878/picGoDrawingBed@main/imgs/%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B.png";
    }
    // CSDN
    if (urlNoProtocol.indexOf("csdn") != -1) {
      imgUrl = "https://ts1.cn.mm.bing.net/th?id=ODLS.0b3ab3c6-5a37-48a2-9392-fd2793d6c3ba&w=32&h=32&qlt=95&pcl=fffffa&o=6&pid=1.2";
    }
  }
  if (isOutside === "yes") {
    imgUrl = "https://cdn.staticaly.com/gh/xy055878/picGoDrawingBed@main/imgs/linkT.png";
  }

  return `<div calss='anzhiyu-tag-link'><a class="tag-Link" target="_blank" href="${urlFor(link)}">
    <div class="tag-link-tips">${isOutside != "yes" ? "引用站外地址" : "站内地址"}</div>
    <div class="tag-link-bottom">
        <div class="tag-link-left" style="background-image: url(${imgUrl});"></div>
        <div class="tag-link-right">
            <div class="tag-link-title">${title}</div>
            <div class="tag-link-sitename">${sitename}</div>
        </div>
        <i class="anzhiyufont anzhiyu-icon-angle-right"></i>
    </div>
    </a></div>`;
}

hexo.extend.tag.register("link", link, { ends: false });
