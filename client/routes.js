//  Router config
Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFoundPage',
    loadingTemplate: 'loadingPage',
    templateNameConverter: 'camelCase',
    routeControllerNameConverter: 'camelCase'
});

// Router helper functions
Router.onBeforeAction(function () {
    var title = Session.get('siteTitle');
    if (title) {
        document.title = title;
    }
    // remove main menu
    $('.menu-wrap').removeClass('show-menu');
    $('.menu-wrap-overlay').removeClass('menu-overlay-show');

    // live slideshow reset - start from 0 screen
    Session.set('slide.count', 0);

    // private slideshow - start from the first slide
    Session.set('slide.priv.count', 1);

    this.next();
});

// Routes
Router.map(function() {
    this.route('index.view', {
        path: '/',
        onBeforeAction: function () {
            Session.set('siteTitle', 'Vazco SlideDeck!');
            this.next();
        }
    });
    this.route('live.view', {
        path: '/live',
        onBeforeAction: function () {
            Session.set('siteTitle', 'Vazco SlideDeck! - Live!');
            this.next();
        }
    });
    this.route('slideshow.view', {
        path: '/slideshow',
        onBeforeAction: function () {
            Session.set('siteTitle', 'Vazco SlideDeck! - Slideshow!');
            this.next();
        }
    });
    this.route('login.view', {
        path: '/login',
        onBeforeAction: function () {
            Session.set('siteTitle', 'Vazco SlideDeck! - Admin Login!');
            this.next();
        }
    });
});