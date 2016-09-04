var app = angular.module("app", [
    'ngMessages'
]);

app
    .controller("mainCtrl", function ($scope, $rootScope) {

        $scope.doSubmit = function () {
            angular.forEach($scope.myForm.$error.required, function(i){
                i.$setDirty();
                i.$setTouched();
            });

            //$scope.myForm.$error.required.forEach(f=>f.$setDirty());

            if($scope.myForm.$valid) {
                console.log($scope.person);
            } else{
                alert('Form Error!');
            }


        }

    });