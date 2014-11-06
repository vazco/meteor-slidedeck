Template.mainMenu.events({
    'click .js-logout': function (e) {
        e.preventDefault();
        Meteor.call('reset');
        Meteor.logout(function () {
            Router.go('/');
        });
    },
    'click .js-enable-priv-slideshow': function () {
        if (Meteor.userId()) {
            Meteor.call('privateSlideshow', 'enable');
        }
    },
    'click .js-disable-priv-slideshow': function () {
        if (Meteor.userId()) {
            Meteor.call('privateSlideshow', 'disable');
        }
    }
});

Template.mainMenu.helpers({
    isPrivViewEnabled: function () {
        var settings = App.SlidesSettings.findOne();
        return settings && settings.isPrivViewEnabled;
    }
});