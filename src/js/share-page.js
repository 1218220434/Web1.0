import '../less/share-page.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';
import '../public/skill.js';
import '../js/index-ajax.js';





//随浏览器变化而变化
$(window).bind("load resize", function() {
    let screenDom = document.documentElement.clientWidth;
    $("main p").css("fontSize", screenDom / 120)
    $("h4").css("fontSize", screenDom / 100)
    $(".iconfont.big").css("fontSize", screenDom / 40)
    $(".iconfont.small").css("fontSize", screenDom / 80)
    $("p.location").css("fontSize", screenDom / 150)
    $(".box").css("height", screenDom / 3.5)
    $(".bigbox").css("height", ($(".box").height() + 40) * 3.08)
    $(".content").css("height", $(".bigbox").height() + 70)
});
//选项卡变换内容
let menu_items = [...document.querySelectorAll(".tab .select")];
let ct_items = [...document.querySelectorAll(".content .plate")];
// 2. 定义变量记录上一次选中的下标，默认值为0
let last_sel_index = 0;
// 3. 遍历菜单项
menu_items.forEach(function(menu_item) {
    // 4. 添加点击事件
    menu_item.onclick = function() {
        // 5. 获取单击的当前菜单项的下标
        let index = menu_items.indexOf(this);
        // 6. 通过移除class实现移除上一次菜单项选中和内容显示的效果
        ct_items[last_sel_index].classList.remove("show");
        // 7. 通过添加class实现本次菜单选中和内容显示的效果
        ct_items[index].classList.add("show");
        // 8. 更新下标，便于下一次点击时移除本次设置的效果
        last_sel_index = index;
    }
});
//选项卡变色
$(".tabControl .tab .select").click(function() {
    $(this).addClass("show-c").siblings().removeClass("show-c");
}).first().trigger("click");

//发布框
$(".displayer span").click(function() {
    $(".displayer").animate({ height: "410px", width: "430px" });
    $(".displayer span").hide();
    $(".publish").fadeIn("slow");
})
$("#affirm").click(function() {
    $(".publish").fadeOut("fast");
    setTimeout(function() {
        $("#headline").val("");
        $(".publish textarea").val("");
        $(".displayer").removeAttr("style");
        $(".displayer span").show();
    }, 500);
    alert("发布成功!")
})
$(".publish .cancel").click(function() {
        $(".publish").fadeOut("fast");
        setTimeout(function() {
            $("#headline").val("");
            $(".publish textarea").val("");
            $(".displayer").removeAttr("style");
            $(".displayer span").show();
        }, 600);
    })
    //插入图片
$(".onchangebtn").change(function() {
    imgPreview(this);
})


function imgPreview(fileDom) {
    // 判断是否支持FileReader 
    let reader = null;
    if (window.FileReader) {
        reader = new FileReader();
    } else {
        alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
        return;
    }
    // 获取选中的文件
    let file = fileDom.files[0];
    // 判断是否是图片类型
    let imageType = /^image\//;
    if (!imageType.test(file.type)) {
        alert("请选择图片！");
        return;
    }
    // 读取完成
    reader.onload = function(e) {
            // 图片路径设置为读取的图片
            // img.src = e.target.result;
            let box = document.querySelector(".case");
            $(".case").css("backgroundImage")
                // 回显图片
            box.style.backgroundImage = `url(${e.target.result})`;

        }
        // 读取图片 => 将图片转换成base64
    reader.readAsDataURL(file);
}
//地图功能实现
var site = ""
    // var _af = document.querySelector(".af")
    // _af.onclick = function () {
    //     document.querySelector("#allmap").classList.add("op")
    // } 
$(".af").click(function() {
    $(this).next().show();
    $("#allmap").fadeIn(300);
})
$(".map-quit").click(function() {
        $(".map-mask").fadeOut(300);
    }) 

// 百度地图API功能

var map = new BMap.Map("allmap"); // 创建Map实例
map.centerAndZoom("成都市高新区锦城大道758", 17); // 初始化地图,用城市名设置地图中心点
map.enableScrollWheelZoom(); // 缩放功能
var geoc = new BMap.Geocoder();
map.addEventListener("click", function(e) {
    var site = ""
        // var what = e.point.lng + "," + e.point.lat
    var _point = new BMap.Point(e.point.lng, e.point.lat);
    var marker = new BMap.Marker(_point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    //    定位控件
    var pt = e.point;
    geoc.getLocation(pt, function(rs) {
        //addressComponents对象可以获取到详细的地址信息
        var addComp = rs.addressComponents;
        site = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
        //将对应的HTML元素设置值
        console.log(addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber)
    });
    setTimeout(function() {
        console.log(site)
    }, 200)
});