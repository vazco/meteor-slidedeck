// local collection methods - only client
Meteor.methods({
    populate: function (names) {
        check(names, Array);
        App.SlidesStatic.remove({});
        names.forEach(function (name) {
            App.SlidesStatic.insert({template: name});
        });
    }
});