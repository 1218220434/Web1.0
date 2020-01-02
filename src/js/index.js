import '../less/index.less';
import '../less/reset.less';
import '../public/link-url.js';
import '../public/header.less';
import '../public/header.js';
import '../public/footer.less';
import '../public/footer.js';
import '../js/index-ajax.js';


import Swiper from "swiper";
import "swiper/css/swiper.css";

import echarts from 'echarts';

// 轮播图
let mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    // 自动播放
    autoplay: true,
    // 切换效果
    effect: 'coverflow',
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

$(window).bind("load resize", function() {
    let screenDom = document.documentElement.clientWidth;
    $(".search").css({ "top": screenDom / 2.95, "height": 30 + screenDom / 95 })
    $(".search input").css({ "height": 30 + screenDom / 95 })
    $(".search img").css({ "height": 30 + screenDom / 95 })

    $(".bout").css("fontSize", screenDom / 130).css("width", (380 + (1900 - screenDom) / 15))


    if (screenDom < 1100) {
        $(".the-d").attr("class", "flex-d the-d")
        $(".flex-d li").css("width", 370 + screenDom / 5)
        console.log($(".flex-d li").width())
        $(".flex-d li .impholi").css("width", 200 + screenDom / 20)
    } else {
        $(".the-d").attr("class", "wrper the-d")
        $(".the-d li").removeAttr("style");
        $(".the-d li .impholi").css("width", $(".the-d li").width());
    }

});