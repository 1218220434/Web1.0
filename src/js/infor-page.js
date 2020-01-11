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
import {BASES_URL}from '../js/util.js';

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

$.myAjaxGet(`/myinfo/`,  function (rsp_data)  {
    console.log(rsp_data)
    // 取出回传数据的地址填入数组
    
    let hobby1=""
    let hobby2=""
    
    let sexm=""
    let is_vip=""
    if(rsp_data.sex==1){
        sexm="男"
    }else{
        sexm="女"
    }
            if(rsp_data.hobby1==0){
                hobby1="爱吃"
            }else if(rsp_data.hobby1==1){
                hobby1="趣玩"
            }else if(rsp_data.hobby1==1){
                hobby1="美景"
            }else{
                hobby1="好物"
            }
            if(rsp_data.hobby2==0){
                hobby2="爱吃"
            }else if(rsp_data.hobby2==1){
                hobby2="趣玩"
            }else if(rsp_data.hobby2==1){
                hobby2="美景"
            }else{
                hobby2="好物"
            }
            if(rsp_data.is_vip){
                is_vip="尊贵的vip你可以为所欲为"
            }else{
                is_vip="非vip,点击充值"
            }
            let hobby=hobby1+" "+hobby2
   
    let  inp=` <form action="">
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
    <input type="text" class="hobby" value="非vip,点击充值"><br>
    
</form>
<div class="inforimg">
                <img src=${USER_IMG}${rsp_data.user_img} alt="" >
               
            </div>
`
       
$(".myinfom").html(inp)

   
})