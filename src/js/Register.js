import '../less/Register.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';
// 上传头像
$(".onchangebtn").click(function() {
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
        }
        // 读取图片 => 将图片转换成base64
    reader.readAsDataURL(file);
}
$(".upbtn").click(function() {
    uploadImage();
})

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
// 记录状态
var oUser = document.getElementById('user');




var oPass = document.getElementById('pass');
var oValidatePass = document.getElementById('validatePass');
var oPhoneNum = document.getElementById('phoneNum');
var oEmail = document.getElementById('email');
var oBtn = document.getElementById('btn');



var u = p = p2 = ph = el = false;

var oPass = document.getElementById('pass');
var oValidatePass = document.getElementById('validatePass');
var oPhoneNum = document.getElementById('phoneNum');
var oEmail = document.getElementById('email');
var oBtn = document.getElementById('btn');

var u = p = p2 = ph = el = false;

oUser.onblur = function() {
    // var sUser = oUser.value;
    var reg = /^[\u2E80-\u9FFF\w-]{4,20}$/;
    // console.log(sUser)
    if (reg.test(this.value)) {
        this.nextElementSibling.innerHTML = "";
        u = true;
    } else {
        this.nextElementSibling.innerHTML = "用户名仅支持中文、字母、数字、“-”“_”的组合，4-20个字符";
        u = false;
    }
}

oPass.onblur = function() {
    var a = b = c = 0;
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
            this.nextElementSibling.innerHTML = "简单";
            break;
        case 2:
            this.nextElementSibling.innerHTML = "一般";
            break;
        case 3:
            this.nextElementSibling.innerHTML = "困难";
            break;
    }
    p = true;

    // 记录状态
    let _isLogin = true;

    if (this.value === oValidatePass.value) {
        oValidatePass.nextElementSibling.innerHTML = "";
        p2 = true;
    } else {
        oValidatePass.nextElementSibling.innerHTML = "不一致"
        p2 = false;
    }
}

oUser.onblur = function() {

    // var u = p = p2 = ph = el = false;
    var u = false;
    var p = false;
    var p2 = false;
    var ph = false;
    var el = false;
    oUser.onblur = function() {

        // var sUser = oUser.value;
        var reg = /^[\u2E80-\u9FFF\w-]{4,20}$/;
        // console.log(sUser)
        if (reg.test(this.value)) {
            this.nextElementSibling.innerHTML = "";
            u = true;
        } else {
            this.nextElementSibling.innerHTML = "用户名仅支持中文、字母、数字、“-”“_”的组合，4-20个字符";
            u = false;
        }
    }

    oPass.onblur = function() {
        var a = b = c = 0;
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
                this.nextElementSibling.innerHTML = "简单";
                break;
            case 2:
                this.nextElementSibling.innerHTML = "一般";
                break;
            case 3:
                this.nextElementSibling.innerHTML = "困难";
                break;
        }
        p = true;

        // 记录状态
        let _isLogin = true;

        if (this.value === oValidatePass.value) {
            oValidatePass.nextElementSibling.innerHTML = "";
            p2 = true;
        } else {
            oValidatePass.nextElementSibling.innerHTML = "不一致"
            p2 = false;
        }
    }

    oValidatePass.onblur = function() {
        if (this.value === oPass.value) {
            this.nextElementSibling.innerHTML = "";
            p2 = true;
        } else {
            this.nextElementSibling.innerHTML = "不一致";
            p2 = false;
        }
    }

    oPhoneNum.onblur = function() {
        var reg = /^1[356789]\d{9}$/;
        if (reg.test(this.value)) {
            this.nextElementSibling.innerHTML = "";
            ph = true;
        } else {
            this.nextElementSibling.innerHTML = "手机号输入错误";
            ph = false;
        }
    }
    oEmail.onblur = function() {
        var reg = /^[a-z0-9]{3,15}@[a-z0-9]{2,9}\.[a-z]{2,3}$/;
        if (reg.test(this.value)) {
            this.nextElementSibling.innerHTML = "";
            el = true;
        } else {
            this.nextElementSibling.innerHTML = "邮箱输入错误";
            el = false;
        }
    }

    // // 勾选协议
    // function isaccepted(){
    //     if(document.getElementById("check_id").checked==true){
    //         document.getElementById("submit").disabled = false;
    //     }else{
    //         document.getElementById("submit").disabled = true;
    //     }
    // }


    // -0--------------------------------------------------------------------------

    if (window.localStorage.userArr) { //判断是否存在
        var array = JSON.parse(window.localStorage.userArr);
    } else {
        array = []; //创建一个新数组
    }


    oBtn.onclick = function() {
        var useval = oUser.value;
        var passval = oPass.value;
        for (var i = 0; i < array.length; i++) {
            //判断是否有相同账号
            if (useval == array[i].useval) {
                alert("该账号已存在");
                return;
            }
        }
        //创建对象

        if (u && p && p2 && ph && el) {
            alert("注册成功")
            var obj = {
                useval: useval,
                passval: passval,
                score: 0
            }
            array.push(obj);
            window.localStorage.userArr = JSON.stringify(array);
            window.location.href = "./login.html";
        } else {
            alert("请填写完整信息")
        }

    }
}