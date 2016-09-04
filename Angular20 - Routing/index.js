var app = angular.module("app", []);

app
    .controller("mainCtrl", function ($location) {

        $location.path('/page1').search({'id': '123'});



    });