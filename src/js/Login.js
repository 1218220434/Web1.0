import '../less/Login.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';

//点击button按钮处理
// $("#denglubutton").click(function() {
//     $.post("login.json",
//         //发送给后端的数据
//         {
//             "name": $("#username").val(),
//             "password": $("#password").val()
//         },
//         //回调函数
//         function(data) {
//             var json = data[0];
//             if (json.success == 0) {
//                 $("#errormessage").text("用户名或密码错误");
//             } else if (json.success == 1) {
//                 window.location.href = "index.html";
//             }
//         }
//     )
// });

$(window).bind("load resize", function() {
    let screenDom = document.documentElement.clientWidth;
    $(".loSMA").css({
        "top": 150 - (1500 - screenDom) / 5,
        "right": 250 - (1500 - screenDom) / 3.125
    })
});

const BASE_URL = "http://192.168.7.5:8000/zjcx";


// 这里处理第一次跨域存储用户信息

$(".denglu").on("click", function() {
    console.log("不是第一次登录登录，三秒后进入主页")
    localStorage.setItem("user_img", "头像")
    setTimeout(function() {
            window.location.href = "/index.html";
        }, 2000)
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
        //         window.location.href = "../pages/myhobby-page.html";
        //         //存储头像备用
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


})