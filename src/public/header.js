const USER_IMG = "http://192.168.7.5:8000/media/";

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
    $(".user-namec").html(localStorage.getItem("name"))
    $(".user-img").fadeIn()
    $(".user-img").attr("src", USER_IMG + localStorage.getItem("user"))
    $(".logined li:eq(0)").hide().next().hide().next().hide()

}
//点击头像查看功能
$(".user-img").on("click", function() {
    $(".user-mesge").slideToggle()
})

//注销
$(".user-address li:eq(3)").on("click", function() {
    $(".logined li:eq(0)").fadeIn().next().fadeIn().next().fadeIn()
    $(".user-namec").fadeOut()
    $(".user-img").fadeOut()
    $(".user-mesge").fadeOut()
    localStorage.clear();
})