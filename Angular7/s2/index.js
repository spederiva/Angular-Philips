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

    });