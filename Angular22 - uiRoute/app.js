(function (angular) {
    var myApp = angular.module('uiRouterDemo', ['ui.router']);

    myApp.config(function ($stateProvider) {
        $stateProvider
            .state('Home', {
                url: '/Home',
                templateUrl: 'home.html'
            })
            .state('About', {
                url: '/About',
                templateUrl: 'about.html',
                controller: 'aboutController'
            })
            .state('Contact', {
                url: '/Contact',
                templateUrl: 'Contact.html',
                controller: 'contactController'
            })
            .state('ContactSpecific', {
                url: '/Contact/:id',
                templateUrl: 'Contact.html',
                controller: 'contactController'
            });
    });
})(window.angular);