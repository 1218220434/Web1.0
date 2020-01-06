$(window).bind("load resize", function() {
    let screenDom = document.documentElement.clientWidth;
    let _aw1 = 10,
        _aw2 = 4,
        _af = 80,
        _imgw = 60,
        _imgw2 = 12,
        _pf = 65
    $(".f-one a").css({
        "width": screenDom / _aw1,
        "font-size": screenDom / _af,
    })
    $(".f-two a").css({
        "width": screenDom / _aw2,
        "font-size": screenDom / _af,
    })
    $(".f-two span").css({
        "width": screenDom / _aw2,
        "font-size": screenDom / _af,
    })
    $(".f-two img").css({
        "width": screenDom / _imgw,

    })
    $(".f-thr img").css({
        "width": screenDom / _imgw2,
    })
    $(".foot p").css({
        "font-size": screenDom / _pf,
    })
    $(".bor").css({
        "width": screenDom / 15,
    })
    $(".bororg").css({
        "width": screenDom / 50,
    })

    if (screenDom < 1000) {
        $(".foot").css({
            "height": screenDom / 4,

        })
        $(".foot").css("width", "100%")

    } else {
        $(".foot").css({
            "height": screenDom / 6.5,
        })
        $(".foot").css("width", "74%")
    }



})