import '../less/index.less';
import '../less/reset.less';
import '../public/link-url.js';
import '../public/header.less';
import '../public/header.js';
import '../public/footer.less';
import '../public/footer.js';
import '../public/skill.js';
import '../js/index-ajax.js';

import { BASE_URL } from '../js/util.js';
import { USER_IMG } from '../js/util.js';


import Swiper from "swiper";
import "swiper/css/swiper.css";
import { b } from '../js/ajax.js';


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
    // 监听页面宽度的函数
$(window).bind("load resize", function() {
    // 操作头部导航栏的自适应
    let screenDom = document.documentElement.clientWidth;


    // 操作动态栏的页面自适应
    if (screenDom < 1100) {
        $(".the-d").attr("class", "flex-d the-d")


        $(".the-d li .user-img").removeAttr("style");

        $(".flex-d li").css({
            "width": 370 + screenDom / 5,
            "height": $(".flex-d li .impholi").height()
        })
        $(".flex-d li .user-art").css("fontSize", screenDom / 60)
        $(".flex-d li span").css("fontSize", screenDom / 40)
        $(".ajax").css("height", $(".flex-d").height())
        $(".flex-d li .impholi").css("width", 150 + screenDom / 20)

    } else {
        $(".the-d").attr("class", "wrper the-d");
        $(".the-d li .user-img").css("top", (screenDom - 1100) / 4.48 + 180);
        $(".the-d li").removeAttr("style");


        $(".the-d li .user-art").css("fontSize", screenDom / 110)
        $(".the-d li span").removeAttr("style");
        $(".the-d li ").css("height", (screenDom - 1100) / 4.375 + 340);
        $(".ajax").css("height", $(".the-d").height())
        $(".the-d li .impholi").css("width", $(".the-d li").width());
    }
    $(".search").css({
        "width": screenDom / 2,
        "top": screenDom / 2.95,
        "height": 42 + screenDom / 95
    })
    $(".search input").css({
        "height": 42 + screenDom / 95,
        "width": screenDom / 2.4
    })
    $(".search img").css({
        "width": 42 + screenDom / 96,
        "height": 42 + screenDom / 95
    })

    $(".bout").css({
        "fontSize": screenDom / 130,
        "width": (380 + (1900 - screenDom) / 15)
    })

});

// 操作三条分类框的页面自适应
$(window).bind("load resize", function() {
    let screenDom = document.documentElement.clientWidth;
    let _h1f = 60,
        _h2f = 65,
        _pf = 80
    $(".todayone-p h1").css({
        "width": screenDom / _h1f,
        "font-size": screenDom / _h1f,
    })
    $(".todayone-p h2").css({
        "width": screenDom / _h2f,
        "font-size": screenDom / _h2f,
    })
    $(".todayone-p p").css({
        "width": screenDom / _pf,
        "font-size": screenDom / _pf,
    })
    let _h1ft = 60,

        _pft = 80

    $(".todaytwo-p h1").css({
        "width": screenDom / _h1ft,
        "font-size": screenDom / _h1ft,
    })

    $(".todaytwo-p p").css({
        "width": screenDom / _pft,
        "font-size": screenDom / _pft,
    })

    let _h1fth = 60,

        _pfth = 80

    $(".todaythr-p h1").css({
        "width": screenDom / _h1fth,
        "font-size": screenDom / _h1fth,
    })

    $(".todaythr-p p").css({
        "width": screenDom / _pfth,
        "font-size": screenDom / _pfth,
    })
    $(".vid").css({
        "height": $(".vid img").height()
    })
    $(".cover").css({
        "height": $(".vid img").height()
    })

    $(".vid video").css({
        "height": $(".vid img").height()
    })
    $(".cover").click(function() {
        $(".cover img").fadeOut(200);
        $("#movie").fadeIn(300);
        $("#movie").get(0).play();


    });
    //点击改变图片路径
    $(".sen-logo ul li img").on("click",function(){
        $(".cover .bh").attr("src",$(this).attr("src"))
        console.log($(this))
    })
    console.log($(".vid .cover .bh"))
})

// $(".wrper li").on("click", function() {
//     window.location.href = "../static/pages/share-page.html";
// })

// $(".sen-logo").on("click", function() {
//     window.location.href = "../static/pages/video-page.html";
// })


$.myAjaxGet(`/myinfo/`, function(rsp_data) {
    console.log(rsp_data)
        // 取出回传数据的地址填入数组




})