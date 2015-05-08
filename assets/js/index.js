/**
 * Created by Jordan on 5/8/2015.
 */

angular.module('warperLanding', [])
    .controller('HomeController', ['$http', function ($http) {
        var home = this;
        home.i18n = {};
        home.submitted = false;

        home.submitNewsletter = function () {
            $http.post('/newsletter', { email: home.newsletterEmail })
                .success(function () {
                    home.submitted = true;
                })
        };

        var locale = navigator.language === 'fr' ? 'fr' : 'en';
        $http.get('/assets/i18n/' + locale + '.json')
            .success(function (data) {
                home.i18n = data;
            });
    }]);