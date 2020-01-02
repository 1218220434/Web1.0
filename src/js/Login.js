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
})