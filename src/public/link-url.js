// 导航栏链接
// logo跳index页
const myurl = 'http://127.0.0.1:8081'
// const myurl = 'http://192.168.7.8:8081'
$(".logo").click(function() {
    if (location.href.indexOf('static') > 0) {
        console.log("ture")
        location.href = `${myurl}/index.html`;
    }

});
// 四个按钮分别跳转
$(".nav li:eq(0)").click(function() {
    if (location.href.indexOf('static') > 0) {
        console.log("ture")
        location.href = `${myurl}/index.html`;
    }

});
$(".nav li:eq(1)").click(function() {
    if (location.href = `${myurl}/static/pages/share-page.html`) {
        location.href = '#';
    } else {
        location.href = `${myurl}/static/pages/share-page.html`;
    }

});
$(".nav li:eq(2)").click(function() {
    if (location.href = `${myurl}/static/pages/video-page.html`) {
        location.href = '#';
    } else {
        location.href = `${myurl}/static/pages/video-page.html`;
    }
});
$(".nav li:eq(3)").click(function() {
    if (location.href = `${myurl}/static/pages/top-search.html`) {
        location.href = '#';
    } else {
        location.href = `${myurl}/static/pages/top-search.html`;
    }
});
$(".nav li:eq(4)").click(function() {
    if (location.href = `${myurl}/static/pages/home-page.html`) {
        location.href = '#';
    } else {
        location.href = `${myurl}/static/pages/home-page.html`;
    }
});
// 登录注册的跳转
$(".logined li:eq(0)").click(function() {
    if (location.href = `${myurl}/static/pages/login.html`) {
        location.href = '#';
    } else {
        location.href = `${myurl}/static/pages/login.html`;
    }
});
$(".logined li:eq(1)").click(function() {
    if (location.href = `${myurl}/static/pages/register.html`) {
        location.href = '#';
    } else {
        location.href = `${myurl}/static/pages/register.html`;
    }
});