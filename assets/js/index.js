/**
 * Created by Jordan on 5/8/2015.
 */

angular.module('warperLanding', [])
    .controller('HomeController', ['$http', function ($http) {
        var home = this;
        home.i18n = {};

        home.submitted = false;
        home.conflict = false;

        home.submitNewsletter = function () {
            $http.post('/newsletter', { email: home.newsletterEmail })
                .success(function () {
                    home.submitted = true;
                })
                .error(function (data, status) {
                    if (status === 409) {
                        home.submitted = true;
                        home.conflict = true;
                    }
                });
        };

        var locale = navigator.language === 'fr' ? 'fr' : 'fr';
        $http.get('/assets/i18n/' + locale + '.json')
            .success(function (data) {
                home.i18n = data;
            });
    }]);