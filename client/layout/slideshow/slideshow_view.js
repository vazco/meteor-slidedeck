// Copyright 2014, Vazco.eu.
// If you're searching for good Meteor developers, why not try guys who created this app?
// Contact us at http://vazco.eu

Template.slideshowViewOn.helpers({
    template: function () {
        var settings = App.SlidesSettings.findOne();
        if (settings && settings.isPrivViewEnabled) {
            var obj = App.SlidesStatic.findOne({active: true}) || App.SlidesStatic.findOne({});
            if (obj && obj.template) {
                return obj.template;
            }
        }
    }
});

var resetStatic = function () {
    App.SlidesStatic.update({}, {$set: {active: false}}, {multi: true});
};

var updateSlideStatic = function (name) {
    check(name, String);
    resetStatic();
    App.SlidesStatic.update({template: name}, {$set: {active: true}});
};

var showSlide = function (type) {
    var all = App.SlidesStatic.find().count();
    var current = Session.get('slide.priv.count');
    if (type === 'next') {
        current = current + 1;
    } else {
        current = current - 1;
    }
    if (current > 0 && current <= all) {
        Session.set('slide.priv.count', current);
        updateSlideStatic('vslide' + current);
    }
};

Template.slideshowViewOn.events({
    'click .next': function (e) {
        e.preventDefault();
        showSlide('next');
    },
    'click .prev': function (e) {
        e.preventDefault();
        showSlide('prev');
    }
});

Template.slideshowViewOn.rendered = function () {
    $(document).on('keydown', function (e) {
        if (e.keyCode == '37' || e.keyCode == '8') {
            e.preventDefault();
            showSlide('prev');
        }
        else if (e.keyCode == '39' || e.keyCode == '32') {
            e.preventDefault();
            showSlide('next');
        }
    });
    $(document).swipe('destroy');
    $(document).swipe({
        fallbackToMouseEvents: false,
        //Generic swipe handler for all directions
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            // direction - up, down, right, left
            if (direction === 'left') {
                showSlide('next');
            }
            if (direction === 'right') {
                showSlide('prev');
            }
        },
        //Default is 75px
        threshold: 35
    });
};

Template.slideshowViewOn.destroyed = function () {
    $(document).off('keydown');
    $(document).swipe('destroy');
};