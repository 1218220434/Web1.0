import '../less/reset.less';
import '../less/share-page.less';

$("h1").on("click", function() {
    $(this).hide()
    location.href = "../../index.html"
})