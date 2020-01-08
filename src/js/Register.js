import '../less/Register.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';

// 记录状态
var oUser = document.getElementById('user');
var oPass = document.getElementById('pass');
var oValidatePass = document.getElementById('validatePass');
var oPhoneNum = document.getElementById('phoneNum');
var oEmail = document.getElementById('email');
var oBtn = document.getElementById('btn');

// 域名
const BASE_URL = "http://192.168.7.5:8000/zjcx";


$(window).bind("load resize", function() {
    // 操作头部导航栏的自适应
    let screenDom = document.documentElement.clientWidth;



    $(".main-lg").css({
        "fontSize": screenDom / 90,
        "width": screenDom / 2.1,
        "height": screenDom / 1.5,
        "left": screenDom / 2.1,
        "top": 0
    })


    $(".inpnoml").css({
        "height": screenDom / 60,
        "width": screenDom / 2 / 2.3
    })
    $(".forminp").css({
        "height": screenDom / 3.1,
        "width": screenDom / 2.1 / 2
    })
    $(".imginp").css({
        "height": $(".forminp").height() + 30 + "px",
        "width": screenDom / 2.1 / 3.7
    })
    $(".box").css({
        "height": screenDom / 12,
        "width": screenDom / 12
    })

    $(".box input").css({
        "height": screenDom / 8,

    })
    $(".inpStyle").css({
        "fontSize": screenDom / 120,
    })
});
$(".close").on("click", function() {
    $(this).parent().removeClass("tipsgo")
})

//分布小开关，最后控制大开关
var u = false;
var p = false;
var p2 = false;
var ph = false;
var el = false;
var xy = false;

// 验证用户名
oUser.onblur = function() {
        // var sUser = oUser.value;
        var reg = /^[\u2E80-\u9FFF\w-]{4,20}$/;
        // console.log(sUser)
        if (reg.test(this.value)) {
            $(this).parent().next().removeClass("tips")
            u = true;
        } else if (oUser.value == "") {
            console.log()
            $(this).parent().parent().children().first().addClass("tipsgo")
            $(this).parent().parent().children().first().children().first().html("请输入一个账号")
            u = false;
        } else {
            $(this).parent().parent().children().first().addClass("tipsgo")
            $(this).parent().parent().children().first().children().first().html("请输入4~8位字母或数字")

            u = false;
        }
    }
    // 验证密码
oPass.onblur = function() {
        if (oPass.value == "") {
            $(this).parent().parent().children().first().addClass("tipsgo")
            $(this).parent().parent().children().first().children().first().html("密码不能为空")

            p = false;
        } else {

            var a = 0;
            var b = 0;
            var c = 0;
            var aReg = /\d/;
            if (aReg.test(this.value)) {
                a = 1;
            }
            var bReg = /[a-zA-Z]/;
            if (bReg.test(this.value)) {
                b = 1;
            }
            var cReg = /\W/;
            if (cReg.test(this.value)) {
                c = 1;
            }
            switch (a + b + c) {
                case 1:
                    $(this).parent().parent().children().first().addClass("tipsgo")
                    $(this).parent().parent().children().first().children().first().html("密码难度较低")

                    p = true;
                    break;
                case 2:
                    $(this).parent().parent().children().first().addClass("tipsgo")
                    $(this).parent().parent().children().first().children().first().html("密码难度中等")
                    p = true;
                    break;
                case 3:
                    $(this).parent().parent().children().first().addClass("tipsgo")
                    $(this).parent().parent().children().first().children().first().html("密码难度较高")
                    p = true;
                    break;
            }
        }
    }
    // 验证二次密码
oValidatePass.onblur = function() {
    if (this.value === oPass.value) {

        p2 = true;
    } else {
        $(this).parent().parent().children().first().addClass("tipsgo")
        $(this).parent().parent().children().first().children().first().html("密码不一致,请重新确认")

        p2 = false;
    }
}


// 验证手机号
oPhoneNum.onblur = function() {
    var reg = /^1[356789]\d{9}$/;
    if (reg.test(this.value)) {
        $(this).parent().next().removeClass("tips")
        ph = true;
    } else {
        $(this).parent().parent().children().first().addClass("tipsgo")
        $(this).parent().parent().children().first().children().first().html("请输入正确的手机号")

        ph = false;
    }
}
oEmail.onblur = function() {
    var reg = /^[a-z0-9]{3,15}@[a-z0-9]{2,9}\.[a-z]{2,3}$/;
    if (reg.test(this.value)) {

        el = true;
    } else {
        $(this).parent().parent().children().first().addClass("tipsgo")
        $(this).parent().parent().children().first().children().first().html("请输入正确的邮箱地址")
        el = false;
    }
}

// 勾选协议

var chkItem = $(".xieyi");
$(".xieyi").on('click', function() {
    if ($(chkItem).is(":checked")) {
        xy = true
    } else {
        xy = false
    }
});


// 上传头像
$(".onchangebtn").change(function() {
    imgPreview(this);

})

function imgPreview(fileDom) {
    // 判断是否支持FileReader 
    let reader = null;
    if (window.FileReader) {
        reader = new FileReader();
    } else {
        alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
        return;
    }
    // 获取选中的文件
    let file = fileDom.files[0];
    // 判断是否是图片类型
    let imageType = /^image\//;
    if (!imageType.test(file.type)) {
        alert("请选择图片！");
        return;
    }
    // 读取完成
    reader.onload = function(e) {
            // 图片路径设置为读取的图片
            // img.src = e.target.result;
            let box = document.querySelector(".box");
            // 回显图片
            box.style.backgroundImage = `url(${e.target.result})`;
            localStorage.setItem("user_img", e.target.result);

        }
        // 读取图片 => 将图片转换成base64
    reader.readAsDataURL(file);
}

// -0--------------------------------------------------------------------------

oBtn.onclick = function() {

    var oSex = $('input:radio[name="sex"]:checked').val();
    if (oSex == "男") {
        oSex = 1
    } else {
        oSex = 0
    }

    var formData = new FormData();

    let file = document.querySelector("#user_img").files[0];

    formData.append("user_img", file)
    formData.append("username", oUser.value)
    formData.append("password", oPass.value)
    formData.append("rep_password", oValidatePass.value)
    formData.append("sex", oSex)
    formData.append("phone", oPhoneNum.value)
    formData.append("email", oEmail.value)
        // var files = $('#user_img').prop('files');
        // var data = new FormData();
        // data.append('#user_img', files[0]);
    if (u && p && p2 && ph && el && xy) {
        // if (true) {
        console.log("发送请求中")
        $.ajax({
            url: `${BASE_URL}/register/`,
            type: "POST",
            // dataType: "json",
            processData: false,
            contentType: false,
            data: formData


        }).done(res => {
            console.log("注册成功")
        }).fail(err => {
            if (err.status == 401) {
                console.log(err.responseText )
            } else {
                $.each(err.responseJSON, function(key, values) {
                    console.log(key + "  字段的值存在错误  ", "  错误是 " + values)
                        // $(`[name="${key}"]`).addClass('input_error')
                        // $(`[name="${key}"]`).prop('placeholder', values[0].message)
                })
            }
        });
    } else {

        document.querySelector(".tipsc").classList.add("tipsgo")
        document.querySelector(".tipsc span").innerHTML = "请完善信息"

    }

}