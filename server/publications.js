Meteor.publish('slides', function () {
    return App.Slides.find({});
});

Meteor.publish('settings', function () {
    return App.SlidesSettings.find({});
});