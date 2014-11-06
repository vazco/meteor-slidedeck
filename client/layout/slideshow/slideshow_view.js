// Copyright 2014, Vazco.eu.
// If you're searching for good Meteor developers, why not try guys who created this app?
// Contact us at http://vazco.eu

Template.slideshowView.helpers({
    template: function () {
        var obj = App.Slides.findOne({active: true});
        if (obj && obj.template) {
            return obj.template;
        } else {
            return 'stayTuned';
        }
    }
});

var showSlide = function (type) {
    if (Meteor.userId()) {
        var all = App.Slides.find().count();
        var current = Session.get('slide.count');
        if (type === 'next') {
            current = current + 1;
        } else {
            current = current - 1;
        }
        if (current > 0 && current <= all) {
            Session.set('slide.count', current);
            Meteor.call('updateSlide', 'vslide' + current);
        }
    }
};

Template.slideshowView.events({
    'click .next': function (e) {
        e.preventDefault();
        showSlide('next');
    },
    'click .prev': function (e) {
        e.preventDefault();
        showSlide('prev');
    }
});

Template.slideshowView.rendered = function () {
    if (Meteor.userId()) {
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
    }
};

Template.slideshowView.destroyed = function () {
    $(document).off('keydown');
    $(document).swipe('destroy');
};