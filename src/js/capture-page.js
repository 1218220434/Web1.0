import '../less/capture-page.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';
import '../public/skill.js';
import '../css/lgallery.min.css';
import './lgallery.min.js';
import { run } from './lgallery.min.js'
run();
// Slow scrolling
// initLG();
function slowScrolling() {
    let anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault()

            let blockID = anchor.getAttribute('href')

            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
};
slowScrolling()

// Init LGallery