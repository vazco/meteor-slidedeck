Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFoundPage',
    loadingTemplate: 'loadingPage',
    templateNameConverter: 'camelCase',
    routeControllerNameConverter: 'camelCase'
});

// helper functions
if (Meteor.isClient) {
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
}