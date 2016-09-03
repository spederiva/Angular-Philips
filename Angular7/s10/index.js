var app = angular.module("app", ['ngRoute']);

app
    .config(function($routeProvider){

        $routeProvider
            .when('/home', {
                templateUrl: 'home.html'
            })
            .when('/home/:id', {
                templateUrl: 'home.html',
                controller: 'homeCtrl'
            })
            .when('/about', {
                templateUrl: 'about.html'
            })
            .otherwise({
                redirectTo: '/home'
            })

    })

    .controller("mainCtrl", function ($scope, students, $location) {
        //$location.path('/page1').search({'id': '123'});


    })

    .controller("homeCtrl", function ($scope, $routeParams) {
        //$location.path('/page1').search({'id': '123'});

        console.log($routeParams)

    })

    .service("students", function ($http) {

        this.get = ()=> {
            return $http.get("../_data/data.json");
        }

    })

