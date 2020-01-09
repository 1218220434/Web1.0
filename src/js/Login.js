import '../less/Login.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';

import { b } from "../js/ajax.js";

$(window).bind("load resize", function() {
    let screenDom = document.documentElement.clientWidth;
    $(".loSMA").css({
        "width": screenDom / 2.66,

        "top": 150 - (1500 - screenDom) / 5,
        "right": 250 - (1500 - screenDom) / 3.125
    })

    $(".someinp input").css({
        "width": screenDom / 6.6,


    })
});

const BASE_URL = "http://192.168.7.5:8000/zjcx";


// 这里处理第一次跨域存储用户信息

$(".denglu").on("click", function() {

        $.ajax({
            url: `${BASE_URL}/login/`,
            type: 'post',
            // headers: {
            //     Authorization: 'Bearer ' + localStorage.getItem('access')
            // },
            data: {
                username: $("#usernamelo").val(),
                password: $("#passwordlo").val()
            },
            cache: false,
            success: function(rsp_data) {
                // callback(rsp_data);
                console.log(rsp_data)
                console.log("该用户的名字是：" + rsp_data.username)
                console.log("该用户的头像是：" + rsp_data.user_img)
                console.log("该用户的头像是：" + rsp_data.hobby1)
                    // 存储密钥
                localStorage.setItem("pas", rsp_data.access)
                localStorage.setItem("name", rsp_data.username)
                localStorage.setItem("user", rsp_data.user_img)

                if (rsp_data.hobby1 == "None") {
                    $(".tipsc").addClass("tipsgo")
                    $(".tipsc").children().first().html("登录成功！请选择爱好")

                    setTimeout(function() {

                        window.location.href = "../pages/myhobby-page.html";
                    }, 1000)
                } else {
                    $(".tipsc").addClass("tipsgo")
                    $(".tipsc").children().first().html("登录成功！")
                    setTimeout(function() {
                        window.location.href = "/index.html";
                    }, 1000)
                }
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
    })
    // console.log("不是第一次登录登录，三秒后进入主页")
    // localStorage.setItem("user_img", "头像")
    // setTimeout(function() {
    //     window.location.href = "/index.html";
    // }, 2000)
    // console.log($("#usero").val(), $("#pass").val())
    // $.ajax({
    //     url: `${BASE_URL}/login/`,
    //     type: "POST",
    //     dataType: "json",
    //                  // contentType:'application/json',
    //     data: {
    //         username: $("#usernamelo").val(),
    //         password: $("#passwordlo").val()
    //     },
    // }).done(res => {
    //     console.log('登陆成功，即将跳转首页')

//     if (res.code = 0) {
//         console.log("第一次登录,进入爱好选择")
//         setTimeout(function() {
//                 window.location.href = "/index.html";
//             }, 2000)
//             //存储头像备用
//         localStorage.setItem("user_img", "头像")
//     } else {
//         console.log("不是第一次登录登录，三秒后进入主页")
//         localStorage.setItem("user_img", "头像")
//         setTimeout(function() {
//             window.location.href = "/index.html";
//         }, 2000)

//     }

//     return res.json();
// }).fail(err => {
//     if (err.status == 401) {
//         console.log("账号或者密码错误")
//     } else { console.log(err.responseJSON) }
// });