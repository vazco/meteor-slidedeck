Template.mainLayout.events({
    'click #full-screen-button': function (e) {
        e.preventDefault();
        if (screenfull.enabled) {
            screenfull.request();
        } else {
            // Ignore or do something else
        }
    },
    'click .menu-button': function (e) {
        e.preventDefault();
        $('.menu-wrap').addClass('show-menu');
        $('.menu-wrap-overlay').addClass('menu-overlay-show');
    },
    'click .menu-wrap-overlay, click .close-menu-button': function (e) {
        e.preventDefault();
        $('.menu-wrap').removeClass('show-menu');
        $('.menu-wrap-overlay').removeClass('menu-overlay-show');
    }
});