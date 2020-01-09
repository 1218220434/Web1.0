import '../less/share-page.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';


$(document).ready(function () {


    //随浏览器变化而变化
    $(window).bind("load resize", function () {
        let screenDom = document.documentElement.clientWidth;
        $("main p").css("fontSize", screenDom / 120)
        $("h4").css("fontSize", screenDom / 100)
        $(".iconfont.big").css("fontSize", screenDom / 40)
        $(".iconfont.small").css("fontSize", screenDom / 80)
        $("p.location").css("fontSize", screenDom / 150)
        $(".box").css("height", screenDom / 3.5)
        $(".bigbox").css("height", ($(".box").height() + 40) * 3.08)
        $(".content").css("height", $(".bigbox").height() + 70)
        $("textarea").css("width", $(".details").width())
        $("textarea").css("height", $(".details").height())
    });
    //选项卡
    let menu_items = [...document.querySelectorAll(".tab .select")];
    let ct_items = [...document.querySelectorAll(".content .plate")];

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
            // 7. 通过添加class实现本次菜单选中和内容显示的效果
            ct_items[index].classList.add("show");
            // 8. 更新下标，便于下一次点击时移除本次设置的效果
            last_sel_index = index;
        }
    });
    // //设置发布框变换
    // $("#pub").click(function () {
    //     $(".publish").animate({ height: "300px", width: "550px" });
    //     $(".anniu").fadeIn("slow");
    //     $(".photo").fadeIn("slow");
    // });
    // $(".anniu button").click(function () {
    //     $(".anniu").fadeOut("fast");
    //     $(".photo").fadeOut("fast");

    //     setTimeout(function () {
    //         $(".publish").removeAttr("style");
    //         $("#pub").val("");
    //     }
    //         , 200)
    // })
    // //发布成功
    // $("#affirm").click(function () {
    //     alert("发布成功！")
    // })
    // //插入图片


    $(".tabControl .tab .select").click(function () {
        $(this).addClass("show-c").siblings().removeClass("show-c");
    }).first().trigger("click");

    //发布框
    $(".displayer").click(function () {
        $(this).fadeOut("slow")
        $(".publish").slideDown("slow");
    })
    // $("#pub").click(function () {
    //     $(".publish").animate({ height: "300px", width: "550px" });
    //     $(".anniu").fadeIn("slow");
    //     $(".photo").fadeIn("slow");
    // });
});
