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
    // $(window).bind("load resize",function(){
    //     2     document.documentElement.clientWidth >= 600 ? console.log("hello") : console.log("xiaoyu600")
    //     3     });
    //     4     //第二种
    //     5     $(window).bind("load resize",function(){
    //     6      if(document.documentElement.clientWidth >= 600) console.log("hello111")
    //     7     });