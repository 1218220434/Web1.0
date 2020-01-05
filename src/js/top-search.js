import '../less/top-search.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';


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