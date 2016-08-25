var app = angular.module("app", []);

app
    .controller("mainCtrl", function ($scope, $rootScope) {

        $scope.isShow = false;

        $rootScope.name = "Haim";

        $scope.setName = function () {
            $scope.fistName = "Little Haim";
        };

        $scope.showPersonTail = function(){
            $scope.isShow = true;
        };


        $scope.getPropertyNoExists = function(){
            alert($scope.propertyNoExists);
        }

    })
    .controller("personTail", function ($scope) {
        // alert('personTail');

        $scope.person = {
            name: "Paul"
        };
    });