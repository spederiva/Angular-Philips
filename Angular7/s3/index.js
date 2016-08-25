var app = angular.module("app", [
    'ngMessages'
]);

app
    .controller("mainCtrl", function ($scope) {

        $scope.doSubmit = function () {
            console.log($scope.myForm);
            console.log($scope.person);
            console.log($scope.person.name);
        }

    })
    .directive('ownList', function () {
        return {
            compile: function (elem, attr) {
                console.log(elem);
            }
        }
    })

    .directive('clock', function ($timeout, dateFilter) {
        return {
            scope: {
                format: '='
            },

            template: '<div>Now is: <div ng-bind="now" ></div></div>',

            link: function (scope, elem, attr) {
                //scope.now = new Date();
                let format = scope.format || 'medium';


                let updateScope = function () {
                    scope.now = dateFilter(new Date(), format);
                };

                let updateClock = function () {
                    $timeout(function () {
                        updateScope();

                        updateClock();
                    }, 1000);
                };

                scope.$watch("format", function (newFormat) {
                    format = newFormat;
                });

                updateScope();
                updateClock();
            }
        }
    })