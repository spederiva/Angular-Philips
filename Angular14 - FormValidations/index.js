var app = angular.module("app", []);

app
    .controller("mainCtrl", function ($scope, $rootScope) {

        $scope.doSubmit = function () {

            if($scope.myForm.$valid) {
                console.log($scope.person);
            } else{
                alert('Form Error!');
            }


        }

    });