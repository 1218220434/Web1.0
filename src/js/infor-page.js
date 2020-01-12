import '../less/infor-page.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';
import '../public/skill.js';


import { BASE_URL } from '../js/util.js';
import { USER_IMG } from '../js/util.js';
import { BASES_URL } from '../js/util.js';

// const BASE_URL = "http://192.168.110.8:8000/zjcx";
// const USER_IMG = "http://192.168.110.8:8000";
// 动态渲染
import { b } from '../js/ajax.js';

let _li = [...document.querySelectorAll(".left-nav li")];
let _sec = [...document.querySelectorAll(".right-main section")];
// 2. 定义变量记录上一次选中的下标，默认值为0
let last_sel_index = 0;
// 3. 遍历菜单项
_li.forEach(function(el) {
    // 4. 添加点击事件
    el.onclick = function() {
        // 5. 获取单击的当前菜单项的下标
        let index = _li.indexOf(this);
        // 6. 通过移除class实现移除上一次菜单项选中和内容显示的效果
        _sec[last_sel_index].classList.remove("com");
        // 7. 通过添加class实现本次菜单选中和内容显示的效果
        _sec[index].classList.add("com");
        // 8. 更新下标，便于下一次点击时移除本次设置的效果
        last_sel_index = index;
    }
});

// 请求个人信息
$.myAjaxGet(`/myinfo/`, function(rsp_data) {
    console.log(rsp_data)
        // 取出回传数据的地址填入数组

    let hobby1 = ""
    let hobby2 = ""

    let sexm = ""
    let is_vip = ""
    if (rsp_data.sex == 1) {
        sexm = "男"
    } else {
        sexm = "女"
    }
    if (rsp_data.hobby1 == 0) {
        hobby1 = "爱吃"
    } else if (rsp_data.hobby1 == 1) {
        hobby1 = "趣玩"
    } else if (rsp_data.hobby1 == 1) {
        hobby1 = "美景"
    } else {
        hobby1 = "好物"
    }
    if (rsp_data.hobby2 == 0) {
        hobby2 = "爱吃"
    } else if (rsp_data.hobby2 == 1) {
        hobby2 = "趣玩"
    } else if (rsp_data.hobby2 == 1) {
        hobby2 = "美景"
    } else {
        hobby2 = "好物"
    }
    if (rsp_data.is_vip) {
        is_vip = "尊贵的vip你可以为所欲为"
    } else {
        is_vip = "非vip,点击充值"
    }
    let hobby = hobby1 + " " + hobby2
    let vip = ""
    if (rsp_data.is_vip) {
        vip = "您是尊贵的会员，您当然可以为所欲为"
    } else {
        vip = "非vip,点击充值"
    }
    let inp = ` <form action="">
    <label for="rusername">昵称:</label>
    <input type="text" class="rusername" value=${rsp_data.username}><br>

    <label for="rtel">电话:</label>
    <input type="text" class="rtel" value=${rsp_data.phone}><br>

    <label for="reml">邮箱:</label>
    <input type="text" class="reml" value=${rsp_data.email}><br>

    <label for="sexm">性别:</label>
    <input type="text" class="sexm" value=${sexm}><br>

    <label for="hobby">爱好:</label>
    <input type="text" class="hobby" value=${hobby}><br>

    <label for="hobby">vip状态:</label>
    <input type="text" class="hobby" value=${vip}><br>
    
</form>
<div class="inforimg">
                <img src=${USER_IMG}${rsp_data.user_img} alt="" >
               
            </div>
`

    $(".myinfom").html(inp)


})

// 会员选择会员期限功能
let _onem = [...document.querySelectorAll(".onem")];
let _index = 0;
_onem.forEach(function(el) {
    // 4. 添加点击事件
    el.onclick = function() {
        // 5. 获取单击的当前菜单项的下标
        let index = _onem.indexOf(this);
        // 6. 通过移除class实现移除上一次菜单项选中和内容显示的效果
        _onem[_index].classList.remove("blue");
        // 7. 通过添加class实现本次菜单选中和内容显示的效果
        _onem[index].classList.add("blue");
        // 8. 更新下标，便于下一次点击时移除本次设置的效果
        _index = index;
    }
});

// 请求订单号

$(".sub").on("click", function() {

        console.log(typeof($(".blue").index() + 1))
        $.ajax({
            url: `${BASE_URL}/order/`,
            type: 'post',
            headers: {
                Authorization: 'Bearer' + ' ' + localStorage.getItem('pas')
            },
            data: {
                price: $(".blue").index() + 1,

            },
            cache: false,
            success: function(rsp_data) {
                // callback(rsp_data);
                localStorage.setItem("vip_id",rsp_data.vip_id)
                console.log(rsp_data)
                console.log(rsp_data.vip_id)
                let t = `  <h1>${rsp_data.vip_id}</h1>

                <p>${rsp_data.order_number}</p>
                <p>${rsp_data.vip_expiretime}</p>
                <p>${rsp_data.vip_createtime}</p>`
                $(".xuanran").html(t)
            },
            error: function(jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 400) {
                    formError(jqXHR)
                } else if (jqXHR.status == 401) {
                    $.ajax({
                        url: `${BASE_URL}/fresh/`,
                        type: 'post',
                        data: { 'refresh': localStorage.getItem('refresh') },
                        success: function(rsp_data) {
                            localStorage.setItem('access', rsp_data['access']);
                            $.myAjaxGet(`${BASE_URL}/login/`, function() {
                                console.log(rsp_data)
                            })
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            // window.location.href = projectName + '/polls/login.html'
                            console.log("到这儿了")
                        }
                    })
                }
            }
        })

    })
    // 确认支付请求支护宝链接
$(".payprice").on("click", function() {
    console.log()

    $.ajax({
        url: `${BASE_URL}/pay/${Number($(".xuanran h1").html())}`,
        type: 'get',
        headers: {
            Authorization: 'Bearer' + ' ' + localStorage.getItem('pas')
        },
        data: {
            vip_id: Number($(".xuanran h1").html()),

        },
        cache: false,
        success: function(rsp_data) {
            console.log(rsp_data)
            
            $(".zhihubaourl a").html(`<a href=${rsp_data.url} target="_blank">前往支付</a>`)
            $(".check").html(`查看是否支付成功`)

        },
        error: function(jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 400) {
                formError(jqXHR)
            } else if (jqXHR.status == 401) {
                $.ajax({
                    url: `${BASE_URL}/fresh/`,
                    type: 'post',
                    data: { 'refresh': localStorage.getItem('refresh') },
                    success: function(rsp_data) {
                        localStorage.setItem('access', rsp_data['access']);
                        $.myAjaxGet(`${BASE_URL}/login/`, function() {
                            console.log(rsp_data)
                        })
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        // window.location.href = projectName + '/polls/login.html'
                        console.log("到这儿了")
                    }
                })
            }
        }
    })

})

// 查看是否支付成功
$(".check").on("click",function(){
    $.ajax({
        url: `${BASE_URL}/pay/check/${localStorage.getItem('vip_id')}`,
        type: 'get',
        headers: {
            Authorization: 'Bearer' + ' ' + localStorage.getItem('pas')
        },
        data: {
            vip_id: `${localStorage.getItem('vip_id')}`,
    
        },
        cache: false,
        success: function(rsp_data) {
            localStorage.setItem("message",rsp_data.message)
            console.log("支付成功")
            if(rsp_data.message="支付成功"){
                console.log("成功了，自动刷新页面")
                window.location.href="../pages/infor-page.html"
            }else{
                console.log("还未支付")
            }
            
    
            $(".zhihubaourl a").attr("href",rsp_data.url).attr("target","_blank").html("前往支付")
            $(".check").html("查看支付状态")
    
    
        },
        error: function(jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 400) {
                formError(jqXHR)
            } else if (jqXHR.status == 401) {
                $.ajax({
                    url: `${BASE_URL}/fresh/`,
                    type: 'post',
                    data: { 'refresh': localStorage.getItem('refresh') },
                    success: function(rsp_data) {
                        localStorage.setItem('access', rsp_data['access']);
                        $.myAjaxGet(`${BASE_URL}/login/`, function() {
                            console.log(rsp_data)
                        })
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        // window.location.href = projectName + '/polls/login.html'
                        console.log("到这儿了")
                    }
                })
            }
        }
    })
})

if(localStorage.getItem('vip_id')){
    console.log("之前的订单支付成功了")
}else{
    console.log("之前的订单还未支付")
}


//查看我的动态点赞数
$.myAjaxGet(`/mydynamic/praise/`, function(rsp_data) {
    console.log(rsp_data)
        // 取出回传数据的地址填入数组
   let clike=""
   rsp_data.forEach(el=>{
       clike+=`<h1>点赞数：${el.praise_num}</h1>`
   })
   $(".mydinfo").html(clike)

})
