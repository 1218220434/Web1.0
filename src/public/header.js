// 导航栏切换样式改变
$(document).ready(function() {
    $(".nav li").mouseenter(function() {
        $(this).addClass("orange")
    });
    $(".nav li").mouseleave(function() {
        $(this).removeClass("orange")
    });
});