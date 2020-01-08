import '../less/video-page.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';

$(document).ready(function () {
    $(window).bind("load resize", function () {
        let screenDom = document.documentElement.clientWidth;
        $(".ban").css("height", screenDom / 3.42)
        $(".bout").css(
            {
                "fontSize": screenDom / 130,
                "width": (380 + (1900 - screenDom) / 15)
            })
        $("h4").css("fontSize", screenDom / 90)
        $(".iconfont.big").css("fontSize", screenDom / 40)
        $(".wenzi").css(
            {
                "fontSize": screenDom / 85,

            })
        $(".wenzi.big").css(
            {
                "fontSize": screenDom / 80,

            })

        $(".bbox h1").css(
            {
                "fontSize": screenDom / 55
            })

        $(".picture .small img").css("height",$(".picture .big img").height()/3 - 8)
        $(".bbox .info").css("width", $(".bbox img").width())
        $(".bbox").css("height", screenDom / 5.08)
        $(".bag").css("height", $(".bbox").height() * 3 + 60)
        $("main").css("height", $(".ban").height() + $(".tab").height() + $("#content .m-content").height())
        $(".player").css("width",$(".picture .big").width() / 3.8)


    });

    //选项卡
    let menu_items = [...document.querySelectorAll(".tab .select")];
    let ct_items = [...document.querySelectorAll("#content .m-content")];
    let tp_items = [...document.querySelectorAll(".ban .bann")]
    console.log(ct_items)

    // 2. 定义变量记录上一次选中的下标，默认值为0
    let last_sel_index = 0;
    // 3. 遍历菜单项
    menu_items.forEach(function (menu_item) {
        // 4. 添加点击事件
        menu_item.onclick = function () {
            // 5. 获取单击的当前菜单项的下标
            let index = menu_items.indexOf(this);

            // 6. 通过移除class实现移除上一次菜单项选中和内容显示的效果
            ct_items[last_sel_index].classList.remove("show");
            tp_items[last_sel_index].classList.remove("show");
            console.log(tp_items[index]) 

            // 7. 通过添加class实现本次菜单选中和内容显示的效果
            ct_items[index].classList.add("show");
            tp_items[index].classList.add("show");

            // 8. 更新下标，便于下一次点击时移除本次设置的效果
            last_sel_index = index;

        }
    });
    //选项卡点击切换颜色
    $(".tab .select").click(function () {
        $(this).addClass("white")
        $(this).siblings().removeClass("white")
    });
    //鼠标经过展示信息
    $(".bbox").hover(function () {
            $(this).children(".info").slideToggle("slow")
        })
    //点击按钮视频播放
    $(".player").click(function(){
        $(this).next().show();
        $(".videos").fadeIn(300);

    })
    $(".mask .quit").click(function(){
        $(".mask").fadeOut(300);
    })
    console.log("1")
    


});

