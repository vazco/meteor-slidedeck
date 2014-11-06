// Copyright 2014, Vazco.eu.
// If you're searching for good Meteor developers, why not try guys who created this app?
// Contact us at http://vazco.eu
//
// Momentum Plugin based on the core momentum package plugin
//


var vazcoSideToSide = function(fromX, toX) {
    return function(options) {
        options = _.extend({
            duration: 1000,
            delay: 600,
            easing: 'ease-in-out'
        }, options);

        return {
            insertElement: function(node, next, done) {
                var $node = $(node);
                $node
                    .css('transform', 'translateX(' + fromX + ')')
                    .insertBefore(next)
                    .velocity({
                        translateX: [0, fromX]
                    }, {
                        delay: options.delay,
                        easing: options.easing,
                        duration: options.duration,
                        queue: false,
                        complete: done
                    });
            },
            removeElement: function(node, done) {
                var $node = $(node);
                $node
                    .velocity({
                        translateX: [toX]
                    }, {
                        duration: options.duration,
                        easing: options.easing,
                        complete: function() {
                            $node.remove();
                            done();
                        }
                    });
            }
        }
    }
}

Momentum.registerPlugin('vazco-right-to-left', vazcoSideToSide('200%', '-200%'));
Momentum.registerPlugin('vazco-left-to-right', vazcoSideToSide('-200%', '200%'));
