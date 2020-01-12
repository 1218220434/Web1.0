import { BASE_URL } from '../js/util.js';
import { USER_IMG } from '../js/util.js';

// 导航栏切换样式改变
$(document).ready(function() {
    $(".nav li").mouseenter(function() {
        $(this).addClass("orange")
    });
    $(".nav li").mouseleave(function() {
        $(this).removeClass("orange")
    });
});

$(window).bind("load resize", function() {
    let screenDom = document.documentElement.clientWidth;
    $(".logined li").css("width", screenDom / 20)

    if (screenDom < 1000) {
        $(".banner").css("width", "100%")
        $(".nav li").css("width", screenDom / 8)
        $(".logo img").css("width", screenDom / 7)
        $("header").css("fontSize", screenDom / 110)

        $(".nav li").css("height", $(".logo img").height())
            .css("line-height", $(".logo img").height() + "px");

    } else {
        $(".banner").css("width", "74%")
        $(".nav li").css("width", screenDom / 12)
        $(".logo img").css("width", screenDom / 11)
        $("header").css("fontSize", screenDom / 110)
        $(".nav li").css("height", $(".logo img").height())
            .css("line-height", $(".logo img").height() + "px");
    }
});

// 判断登录后是否存储了username
if (localStorage.getItem("user")) {
    $(".logined div").attr("style","z-index:1000 !important")
    $(".user-namec").html(localStorage.getItem("name"))
    $(".myuser-img").fadeIn()
    $(".myuser-img").attr("src", USER_IMG + localStorage.getItem("user"))
    $(".logined li:eq(0)").hide().next().hide().next().hide()

}
//点击头像查看功能
$(".myuser-img").on("click", function() {
    $(".user-mesge").slideToggle()
})

//注销
$(".user-address li:eq(3)").on("click", function() {
    $(".logined li:eq(0)").fadeIn().next().fadeIn().next().fadeIn()
    $(".user-namec").fadeOut()
    $(".myuser-img").fadeOut()
    $(".myuser-img").hide()
    $(".user-mesge").fadeOut()
    localStorage.clear();
})