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



// $(".upbtn").click(function() {
//     uploadImage();
// })

function uploadImage() {
    let file = document.querySelector("input").files[0];
    if (!file) {
        alert("点击上方方框选择图片！");
        return;
    }
    let formData = new FormData();
    formData.append("photo", file);
    // ajax
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8800/up_image", true);
    xhr.send(formData);
    xhr.onload = function(res) {
        console.log(res);
    }
}

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
            $(this).parent().next().addClass("tips")
            $(this).parent().next().html("请输入一个账号")
            u = false;
        } else {
            $(this).parent().next().html("账号由4~8位字母、数字、下划线组成")
            u = false;
        }
    }
    // 验证密码
oPass.onblur = function() {
        if (oPass.value == "") {
            $(this).parent().next().addClass("tips")
            $(this).parent().next().html("密码不能为空")
            p = false;
        } else {
            $(this).parent().next().removeClass("tips")
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
                    $(this).parent().next().addClass("tips2")
                        .html("密码难度较低")
                    p = true;
                    break;
                case 2:
                    $(this).parent().next().addClass("tips2")
                        .html("密码难度中等")
                    p = true;
                    break;
                case 3:
                    $(this).parent().next().addClass("tips2")
                        .html("密码难度较高")
                    p = true;
                    break;
            }
        }
    }
    // 验证二次密码
oValidatePass.onblur = function() {
    if (this.value === oPass.value) {
        $(this).parent().next().removeClass("tips")
        p2 = true;
    } else {
        $(this).parent().next().addClass("tips").html("密码不一致,请重新确认")
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
        $(this).parent().next().addClass("tips").html("手机号输入错误")
        ph = false;
    }
}
oEmail.onblur = function() {
    var reg = /^[a-z0-9]{3,15}@[a-z0-9]{2,9}\.[a-z]{2,3}$/;
    if (reg.test(this.value)) {
        $(this).parent().next().removeClass("tips")
        el = true;
    } else {
        $(this).parent().next().addClass("tips").html("邮箱输入错误")
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
// 刷新或者关闭浏览器后清空浏览器缓存
window.localStorage.clear()
    // -0--------------------------------------------------------------------------
const BASE_URL = "http://192.168.7.5:8000/zjcx";
oBtn.onclick = function() {

    var oSex = $('input:radio[name="sex"]:checked').val();
    if (oSex == "男") {
        oSex = "男"
    } else {
        oSex = "女"
    }

    if (u && p && p2 && ph && el && xy) {
        console.log({
                user_img: localStorage.getItem("user_img"),
                username: oUser.value,
                password: oPass.value,
                sex: oSex,
                phone: oPhoneNum.value,
                email: oEmail.value,
            })
            // fetch(`${BASE_URL}/register/`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         username: oUser.value,
            //         password: oPass.value,
            //         sex: oSex.value,
            //         phone: oPhoneNum.value,
            //         email: oEmail.value,
            //     })
            // }).then(res => {
            //     return res.json();
            // }).then(data => {
            //     // console.log(data);
            //     if (data.data == "注册成功") {
            //         window.location.href = "../index.html";
            //     } else if (data.data == "用户已存在") {
            //         console.log("用户不存在")
            //     } else {
            //         console.log("服务繁忙，请稍后")
            //     }
            // });
    } else {
        alert("请填写完整信息")
    }

}