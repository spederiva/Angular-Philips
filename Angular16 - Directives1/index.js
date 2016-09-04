var app = angular.module("app", []);

app
    .controller("mainCtrl", function ($scope, $rootScope) {


        this.name = "Haim";
        this.x = "Haim";
        this.y = "Haim";
        this.u = "Haim";
        this.p = "Haim";

        this.getName = function () {
            console.log(this.name);

            return this.name;
        }

        this.sayHello = function (lastName) {
            alert('hello ' + lastName);
        }


    })

    .directive('helloWorld', function () {
        return {

            scope: {
                firstName: '=',
                doOnClick: '&'
            },

            restrict: 'EA',

            // replace: true,

            transclude: true,


            template: `<h1>Hello {{firstName}}!</h1>
                            <input ng-model="firstName" />
                            <input ng-model="lastName" placeholder="lastName" />
                            <button ng-click="_sayHello()">Say Hello</button>
                            <ng-transclude></ng-transclude>`,
            //templateUrl: './helloWorld.html',

            // compile:function () {
            //
            // },
            //
            // link:function () {
            //
            // },
            //

            controller: function ($scope) {
                //$scope.firstName = "Paul" + Date.now();

                //console.log($scope.firstName);

                //console.log($scope.getName())

                $scope._sayHello = function () {


                    $scope.doOnClick({
                        lastName: $scope.lastName
                    });

                }


            },
            //controllerAs: 'myCtrl'


        }
    })

    .directive('helloWorld2', function () {
        return {

            scope: {
                firstName: '@'
            },

            restrict: 'EA',

            // replace: true,

            transclude: true,


            template: '<h1>Hello {{firstName}}!</h1> <input ng-model="firstName" /> <ng-transclude></ng-transclude>',
            //templateUrl: './helloWorld.html',

            // compile:function () {
            //
            // },
            //
            // link:function () {
            //
            // },
            //

            controller: function ($scope) {
                //$scope.firstName = "Paul" + Date.now();

                //console.log($scope.firstName);

                //console.log($scope.getName())
            },
            //controllerAs: 'myCtrl'


        }
    });