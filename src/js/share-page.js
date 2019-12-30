import '../less/share-page.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';

$("h1").on("click", function() {
    $(this).hide()
    location.href = "../../index.html"
})