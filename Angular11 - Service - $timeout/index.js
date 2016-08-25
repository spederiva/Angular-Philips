var app = angular.module("app", []);

app
    .controller("mainCtrl", function ($scope, $log, $timeout) {

        this.now = new Date();

        $timeout(()=> {
            $log.log(this.now);

            this.now = new Date();

            $log.log(this.now);

            //$scope.$applyAsync();
        }, 1000);


        this.doSomething = function () {
            //this.now += "x";


        }

    });