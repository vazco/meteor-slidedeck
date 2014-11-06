Template.loginView.events({
    'submit #login-form': function (e, tmpl) {
        e.preventDefault();
        var loginVal = tmpl.$('.login-input').val();
        var passwordVal = tmpl.$('.password-input').val();
        if (_.isString(loginVal) && _.isString(passwordVal)) {
            Meteor.loginWithPassword(loginVal, passwordVal, function (err) {
                if (err) {
                    console.log(err.message);
                } else {
                    var templatesArr = [], count = 0;
                    if (_.isObject(Template)) {
                        var templatesArr = Object.keys(Template).filter(function (tmplName) {
                            var patt = new RegExp(/\bvslide\d+\b/g);
                            var matches = patt.test(tmplName);
                            return matches;
                        });
                    }
                    Meteor.call('populate', templatesArr);
                    Router.go('/')
                }
            })
        }
    }
});