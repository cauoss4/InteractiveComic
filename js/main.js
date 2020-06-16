$(document).ready(function () {

    var side_nav = document.querySelector('.sidebar-container');
    var docs_nav = document.querySelector('.docs-nav');
    var header = document.querySelector('.res-header');
    var bd = document.body;

    var navigationToggle = function (e) {

        var target = e.target;

        if (target.tagName.toLowerCase() === 'nav') {
            $(target).toggleClass('open');
        }
    };

    if (side_nav) {
        side_nav.addEventListener('click', navigationToggle, false);
    }
    if (docs_nav) {
        docs_nav.addEventListener('click', navigationToggle, false);
    }
    // fix height sidebar navigation for small devices - header has relative position
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w < 968) {

        var setStyleTop = function (el, value) {
            if (el) {
                el.style.top = value + 'px';
                el.style.height = 'calc(100% - ' + value + 'px)';
            }
        };

        var side_nav_fix_height = function () {
            scrollEl = bd.scrollTop === 0 ? document.querySelector('html') : bd;

            if (scrollEl.scrollTop > header.offsetHeight) {
                setStyleTop(side_nav, 0);
                setStyleTop(docs_nav, 0);
            } else if (scrollEl.scrollTop < (header.offsetHeight)) {
                setStyleTop(side_nav, header.offsetHeight - scrollEl.scrollTop);
                setStyleTop(docs_nav, header.offsetHeight - scrollEl.scrollTop);
            }
        };
        side_nav_fix_height();
        window.addEventListener('scroll', function (e) {
            side_nav_fix_height();
        }, false);
    }

    // tracking events analytics
    var trackEvent = document.querySelectorAll('.track-event');
    var buyNowEvent = document.querySelectorAll('.btn-buy');

    for (var i = 0; i < trackEvent.length; i++) {
        trackEvent[i].addEventListener('click', function (e) {
            _gaq.push(['_trackEvent', 'download', trackEvent.innerHTML]);
        }, false);
    }
    ;
    for (var j = 0; j < buyNowEvent.length; j++) {
        buyNowEvent[j].addEventListener('click', function (e) {
            _gaq.push(['_link', 'https://jointjs.com/store']);
        }, false);
    }
    ;
});
