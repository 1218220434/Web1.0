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