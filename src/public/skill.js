$(document).ready(function() {

    var array = {
        // 滚动于什么位置展开回顶按钮
        px: 150,
        // 回顶时间
        time: 1000,
        // 回到什么位置
        pos: 0
    }
    var $backToTop = $(".back-to-top");
    /* 隐藏回顶部按钮 */
    $backToTop.hide()

    $(window).on('scroll', function() {

        if ($(this).scrollTop() > array.px) { /* 返回顶部按钮将在用户向下滚动100像素后出现 */
            $backToTop.fadeIn();

        } else {
            $backToTop.fadeOut();

        }
    });

    $backToTop.on('click', function(e) {
        $("html, body").animate({ scrollTop: array.pos }, array.time);
    });
})