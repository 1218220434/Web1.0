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
        console.log(data_ste)
        strs = data_ste.split(","); //字符分割
        console.log(strs)
        let ha1 = strs[0]
        let hai2 = strs[1]
            // 选择好分类后第二次提交至后台存储
        console.log("爱好一:" + ha1);
        console.log("爱好二:" + hai2);

        $.ajax({
            url: `${BASE_URL}/login/`,
            type: 'post',
            // headers: {
            //     Authorization: 'Bearer ' + localStorage.getItem('access')
            // },
            data: {
                hobby1: ha1,
                hobby2: hai2
            },
            cache: false,
            success: function(rsp_data) {

                console.log(rsp_data)
                setTimeout(function() {
                    window.location.href = "../pages/myhobby-page.html";
                }, 200)

            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 400) {
                    formError(jqXHR)
                } else if (jqXHR.status == 401) {
                    $.ajax({
                        url: api_host + '/system_user/refresh/',
                        type: 'post',
                        data: { 'refresh': localStorage.getItem('refresh') },
                        success: function(rsp_data) {
                            localStorage.setItem('access', rsp_data['access']);
                            $.myAjaxGet(url, callback)
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            window.location.href = projectName + '/polls/login.html'
                        }
                    })
                }
            }
        })

        // window.location.href = `${myurl}/index.html`;

    })
})