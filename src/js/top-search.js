import '../less/top-search.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';
const _url = "http://127.0.0.1:8081/static/images/"
let topArr = [{
        user_img: `${_url}IMG_0642@2x.png`,
        name: "鲨鲨食物日记",
        info: "匠欣 · 专业西餐厅，做精致的猪猪女孩",

        photo: `${_url}1(1).png`,
        address: "高新区交子大道233号1层",
        addconX: 104.064482,
        addconY: 30.587915
    }, {
        user_img: `${_url}IMG_0642@2x.png`,
        name: "终身幸福",
        info: "不是所以餐厅都能叫做”私房菜“",
        photo: `${_url}1(2).png`,
        address: "高原一路15号7322厂院内",
        addconX: 104.064042,
        addconY: 30.630206
    }]
    // var _konstr = ""
    // topArr.forEach(el => {
    //     _konstr += ` <li><img src="../images/动态背景.png" alt="" class="theba">
    //                     <div class="infoab flex-c">
    //                         <img src=${el.user_img} alt="">
    //                         <div class="artic">
    //                             <p>${el.name}</p>
    //                             <p>${el.info}</p>
    //                             <p data-ACGX=${el.addconX} data-ACGX=${el.addconY}><img src="../images/图标/地址2.png" alt="" class="infoaddress"> ${el.address}</p>
    //                         </div>
    //                         <img src=${el.photo} alt="">
    //                     </div>
    //                 </li>
    //                 <div class="info-one"></div>`

// })
// $(".theTop-info").html(_konstr)

$(".theTop-info li").on("click", function() {
    $(this).next().slideToggle()
})


$(window).bind("load resize", function() {
    let screenDom = document.documentElement.clientWidth;
    $(".theTop-right").css({

        "width": (1 - screenDom / 1900) * 10 + 30 + "%",
    }).prev().css({
        "width": (1 - ($(".theTop-right").width() / screenDom)) * 99.8 + "%",
    })

    $(".top-map").css({

        "fontSize": screenDom / 110,
    })
})

let topArr = [{
    user_img: "",
    name: "鲨鲨食物日记",
    info: "匠欣 · 专业西餐厅，做精致的猪猪女孩",
    photo: "",
    address: "高新区交子大道233号1层",
    addcon: "104.064482,30.587915"

}]




// 百度地图API功能
var map = new BMap.Map("allmap"); // 创建Map实例
map.centerAndZoom("成都市天府三街天府软件园", 16); // 初始化地图,用城市名设置地图中心点
map.enableScrollWheelZoom(); // 缩放功能

var geoc = new BMap.Geocoder();

map.addEventListener("click", function(e) {
    var what = e.point.lng + "," + e.point.lat
    console.log(what);
    console.log(e.point.lng)
    console.log(e.point.lat)

    var _point = new BMap.Point(e.point.lng, e.point.lat);

    var marker = new BMap.Marker(_point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中


    //    定位控件
    var pt = e.point;
    geoc.getLocation(pt, function(rs) {
        //addressComponents对象可以获取到详细的地址信息
        var addComp = rs.addressComponents;
        var site = addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
        //将对应的HTML元素设置值
        console.log(site)
    });

});