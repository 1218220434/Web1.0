import '../less/Login.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';

//点击button按钮处理
$("#denglubutton").click(function(){
    $.post("login.json",
        //发送给后端的数据
        {
            "name":$("#username").val(),
            "password":$("#password").val()
        },
        //回调函数
        function(data){
            var json=data[0];
            if(json.success == 0){
                $("#errormessage").text("用户名或密码错误");
            }
            else if(json.success== 1){
                window.location.href="index.html";
            }
        }
    )
});

$(window).bind("load resize", function() {
    let screenDom = document.documentElement.clientWidth;
    $(".main-bg").css("top", screenDom / 80)
        .css("right", screenDom / 30)
        
});
// $(window).bind("load resize", function() {
//     let screenDom = document.documentElement.clientWidth;
//     $(".beijin").css("top", screenDom / 10)
//         .css("left", screenDom / 1)
//         .css("width", screenDom / 3)
// });
// $(window).bind("load resize", function() {
//     let screenDom = document.documentElement.clientWidth;
//     $(".main-lg").css("top", screenDom / 35)
//         .css("left", screenDom / 7)
//         .css("width", screenDom / 2)
//         .css("height", screenDom / 6)
// });
// $(window).bind("load resize", function() {
//     let screenDom = document.documentElement.clientWidth;
//     $(".red").css("top", screenDom / 40)
//         .css("left", screenDom / 45)
//         .css("width", screenDom / 7)
//         .css("height", screenDom /72)
// });

// // $(window).bind("load resize", function() {
// //     let screenDom = document.documentElement.clientWidth;
// //     $(".zhuche").css("top", screenDom / 70)
// //         .css("left", screenDom / 65)
// //         .css("width", screenDom / 15)
// // });
// $(window).bind("load resize", function() {
//     let screenDom = document.documentElement.clientWidth;
//     $(".denglu").css("top", screenDom / 95)
//         .css("left", screenDom / 5)
//         .css("width", screenDom / 7)
//         .css("height", screenDom /72)
// });