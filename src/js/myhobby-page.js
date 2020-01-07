import '../less/myhobby-page.less';
import '../less/reset.less';
import '../public/link-url.js';

const myurl = 'http://127.0.0.1:8081'

$(window).bind("load resize", function() {
    let screenDom = document.documentElement.clientWidth;

    $(".one").css({
        "top": screenDom / 18.75,
        "left": screenDom / 10,
        "width": screenDom / 7.5,
        "height": screenDom / 7.5,
        "font-size": screenDom / 30,
    }).children().css("lineHeight", screenDom / 7.5 * 0.8 + "px")
    $(".two").css({
        "top": screenDom / 15,
        "left": screenDom / 3,
        "width": screenDom / 6,
        "height": screenDom / 6,
        "font-size": screenDom / 20,
    }).children().css("lineHeight", screenDom / 6 * 0.8 + "px")
    $(".thr").css({
        "top": screenDom / 10,
        "left": screenDom / 1.875,
        "width": screenDom / 7.5,
        "height": screenDom / 7.5,
        "font-size": screenDom / 30,
    }).children().css("lineHeight", screenDom / 7.5 * 0.8 + "px")
    $(".for").css({
        "top": screenDom / 15,
        "left": screenDom / 1.43,
        "width": screenDom / 8.82,
        "height": screenDom / 8.82,
        "font-size": screenDom / 30,
    }).children().css("lineHeight", screenDom / 8.82 * 0.8 + "px")
    $(".fiv").css({
        "top": screenDom / 6,
        "left": screenDom / 5,
        "width": screenDom / 6.81,
        "height": screenDom / 6.81,
        "font-size": screenDom / 30,
    }).children().css("lineHeight", screenDom / 6.81 * 0.8 + "px")
    $(".six").css({
        "top": screenDom / 3.625,
        "left": screenDom / 12.5,
        "width": screenDom / 7.5,
        "height": screenDom / 7.5,
        "font-size": screenDom / 30,
    }).children().css("lineHeight", screenDom / 7.5 * 0.8 + "px")
    $(".sen").css({
        "top": screenDom / 3.63,
        "left": screenDom / 3.23,
        "width": screenDom / 6.81,
        "height": screenDom / 6.81,
        "font-size": screenDom / 30,
    }).children().css("lineHeight", screenDom / 6.81 * 0.8 + "px")
    $(".eit").css({
        "top": screenDom / 4.25,
        "left": screenDom / 2.14,
        "width": screenDom / 6,
        "height": screenDom / 6,
        "font-size": screenDom / 20,
    }).children().css("lineHeight", screenDom / 6 * 0.8 + "px")
    $(".nie").css({
        "top": screenDom / 3.33,
        "left": screenDom / 1.5,
        "width": screenDom / 6.81,
        "height": screenDom / 6.81,
        "font-size": screenDom / 30,
    }).children().css("lineHeight", screenDom / 6.81 * 0.8 + "px")
    $(".sub").css({
        "top": screenDom / 2.3,
        "left": screenDom / 2.4,

    }).children().first().css({

        "width": screenDom / 7,
        "height": screenDom / 50,
    })
    let thestr = ""
    let data_ste = ""

    $(".cc").on("click", function() {
        data_ste += $(this).attr("data-ste") + ","
        thestr += $(this).html() + " "
        $(".sub").children().first().val(thestr)
    })
    $(".sub p").on("click", function() {

        var strs = new Array(); //定义一数组
        strs = data_ste.split(","); //字符分割
        let ha1 = strs[0]
        let hai2 = strs[1]
            // 选择好分类后第二次提交至后台存储
        console.log(ha1);
        console.log(hai2);

        window.location.href = `${myurl}/index.html`;

    })
})