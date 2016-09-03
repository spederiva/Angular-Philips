var app = angular.module("app", [
    'ngMessages'
]);

app
    .controller("mainCtrl", function ($scope) {


        this.submitForm = function () {
            console.log($scope.myForm.$valid)

            $scope.myForm.$setSubmitted(true);
            $scope.myForm.$setDirty();
            $scope.myForm.$setValidity();

            $scope.myForm.name.$setDirty();

        }

    });