import '../less/share-page.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';


autodivheight();

function autodivheight() { //函数：获取尺寸
    //获取浏览器窗口高度
    var winHeight = 0;
    if (window.innerHeight) {
        winHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
    }
    //通过深入Document内部对body进行检测，获取浏览器窗口高度
    if (document.documentElement && document.documentElement.clientHeight) {
        winHeight = document.documentElement.clientHeight;
    }
    //DIV高度为浏览器窗口的高度
    //document.getElementById("test").style.height= winHeight +"px";
    //DIV高度为浏览器窗口高度的一半
    document.querySelector(".plate").style.height = winHeight / 0.55 + "px";
}
window.onresize = autodivheight; //浏览器窗口发生变化时同时变化DIV高度

$(window).bind("load resize", function() {
    let screenDom = document.documentElement.clientWidth;
    $("main p").css("fontSize", screenDom / 120)
    $("h4").css("fontSize", screenDom / 100)
    $(".iconfont.big").css("fontSize", screenDom / 40)
    $(".iconfont.small").css("fontSize", screenDom / 80)


});