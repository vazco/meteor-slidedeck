App = {};

App.Slides = new Mongo.Collection('slides');
App.SlidesSettings = new Mongo.Collection('settings');
App.SlidesStatic = new Mongo.Collection(null);

Meteor.startup(function () {
    if (Meteor.isClient) {
        var templatesArr = [], count = 0;
        if (_.isObject(Template)) {
            var templatesArr = Object.keys(Template).filter(function (tmplName) {
                var patt = new RegExp(/\bvslide\d+\b/g);
                var matches = patt.test(tmplName);
                return matches;
            });
        }
        Meteor.call('populate', templatesArr);
    }
});
