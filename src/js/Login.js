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
    $(".main-bg").css("top", screenDom / 80)
        .css("right", screenDom / 30)

});

const BASE_URL = "http://192.168.7.5:8000/zjcx";


// 这里处理第一次跨域存储用户信息

$(".denglu").on("click", function() {
    console.log($("#usero").val(), $("#pass").val())
    $.ajax({
        url: `${BASE_URL}/login/`,
        type: "POST",
        dataType: "json",
                     // contentType:'application/json',
        data: {
            username: $("#usero").val(),
            password: $("#pass").val()
        },
    }).done(res => {
        console.log('登陆成功，即将跳转首页')
        window.location.href = "/index.html";
        return res.json();
    }).fail(err => {
        if (err.status == 401) {
            console.log("账号或者密码错误")
        } else { console.log(err.responseText) }
    });

    // fetch(`${BASE_URL}/login`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         loguser: loguser.value,
    //         logpawo: logpawo.value,
    //     })
    // }).then(res => {
    //     return res.json();
    // }).then(data => {
    //     console.log(data);
    //     if (data.code == 200) {
    //     } else if (data.data == "用户不存在") {
    //         console.log("用户不存在")
    //     } else {
    //         console.log("服务繁忙，请稍后")
    //     }
    // });
})