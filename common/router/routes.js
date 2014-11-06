Router.map(function() {
    this.route('index.view', {
        path: '/',
        onBeforeAction: function () {
            if (Meteor.isClient) {
                Session.set('siteTitle', 'Vazco SlideDeck!');
            };
            this.next();
        }
    });
    this.route('slideshow.view', {
        path: '/slideshow',
        onBeforeAction: function () {
            if (Meteor.isClient) {
                Session.set('siteTitle', 'Vazco SlideDeck! - Slideshow!');
            };
            this.next();
        }
    });
    this.route('priv.slideshow.view', {
        path: '/priv-slideshow',
        onBeforeAction: function () {
            var settings = App.SlidesSettings.findOne();
            if (settings && settings.isPrivViewEnabled) {
                if (Meteor.isClient) {
                    Session.set('siteTitle', 'Vazco SlideDeck! - Private Slideshow!');
                };
                this.next();
            } else {
                Router.go('/');
            }
        }
    });
    this.route('login.view', {
        path: '/login',
        onBeforeAction: function () {
            if (Meteor.isClient) {
                Session.set('siteTitle', 'Vazco SlideDeck! - Admin Login!');
            };
            this.next();
        }
    });
});