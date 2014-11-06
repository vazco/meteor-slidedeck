Meteor.startup(function () {
    if (typeof Meteor.settings !== 'undefined' && !_.isEmpty(Meteor.settings) && !Meteor.users.find().count()) {
        Accounts.createUser({
            username: Meteor.settings.admin.username || 'admin',
            email: Meteor.settings.admin.email,
            password: Meteor.settings.admin.password
        });

    }
    if (!App.SlidesSettings.find().count()) {
        App.SlidesSettings.insert({isPrivViewEnabled: false});
    }
});