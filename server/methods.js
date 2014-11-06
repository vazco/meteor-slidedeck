Meteor.methods({
    reset: function () {
        if (this.userId) {
            App.Slides.update({}, {$set: {active: false}}, {multi: true});
        }
    },
    updateSlide: function (name) {
        check(name, String);
        if (this.userId) {
            Meteor.call('reset');
            App.Slides.update({template: name}, {$set: {active: true}});
        }
    },
    populate: function (names) {
        check(names, Array);
        if (this.userId) {
            App.Slides.remove({});
            names.forEach(function (name) {
                App.Slides.insert({template: name});
            });
        }
    },
    privateSlideshow: function (operation) {
        check(operation, String);
        var selector, modifier;
        if (operation === 'enable') {
            selector = {isPrivViewEnabled: false};
            modifier = {$set: {isPrivViewEnabled: true}};
        } else {
            selector = {isPrivViewEnabled: true};
            modifier = {$set: {isPrivViewEnabled: false}};
        }
        if (this.userId) {
            App.SlidesSettings.update(selector, modifier);
        }
    }
});