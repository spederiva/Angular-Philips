var app = angular.module("app", [
    'ngMessages'
]);

app
    .controller("mainCtrl", function ($scope) {

        $scope.doSubmit = function () {
            console.log($scope.fff);
        }

    })

    .directive('uppercase', function () {
        return {
            require: 'ngModel',
            link: function (scope, elem, attr, modelCtrl) {
                console.log(scope.fff)

                // elem.on('keyup', (e)=> {
                //     console.log(scope.fff)
                //
                //     scope.$apply(function () {
                //
                //         scope.fff = scope.fff.toUpperCase();
                //     })
                // });

                modelCtrl.$parsers.push(function(input) {
                    return input ? input.toUpperCase() : "";
                });
            }
        }
    })