var app = angular.module("app", []);

let mainCtrl = function ($scope, srv) {
    let person = srv.getPerson();

    $scope.fistName = person.name;

    $scope.isShow = false;

    $scope.setName = function () {
        $scope.fistName = "Little Haim";
    };

    $scope.showPersonTail = function () {
        $scope.isShow = true;
    };


    $scope.getPropertyNoExists = function () {
        alert($scope.propertyNoExists);
    }

};
mainCtrl.$inject = ['$scope', 'personSrv'];

app
    .controller("mainCtrl", mainCtrl)

    .controller("personTail", ['$scope', function ($scope) {

        $scope.person = {
            name: "Paul"
        };
    }]);


app.service("personSrv", function () {

    this.getPerson = function () {
        return {name: 'Haim'};
    }

});