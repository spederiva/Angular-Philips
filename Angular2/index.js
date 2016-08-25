var app = angular.module("app", []);

app
    .controller("mainCtrl", function ($scope) {
        $scope.now = new Date();

        $scope.isShow = false;

        $scope.setName = function () {
            $scope.fistName = "Little Haim";
        };

        $scope.showPersonTail = function () {
            $scope.isShow = true;
        };

        $scope.hidePersonTail = function () {
            $scope.isShow = false;
        };

    })
    .controller("personTail", function ($scope) {
        alert('personTail');

        $scope.person = {
            name: "Paul"
        };
    });