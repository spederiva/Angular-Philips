var app = angular.module("app", []);

app
    .controller("mainCtrl", function ($scope, $rootScope) {


        // this.color = "yellow";


    })

    .directive('clock', function ($timeout) {
        return {

            scope: {
                format: '@'
            },

            restrict: 'EA',

            //require: 'ngModel',

            // replace: true,

            template: ` 
                        <div ng-bind="datetime|date:format">                            
                        </div>   
                        <h1>H: {{name}}</h1>
                        `,


            link: function (scope, elem, attr) {

                if (!scope.format) {
                    scope.format = 'MMMM d, y';
                }

                let update = function () {
                    $timeout(()=> {
                        scope.datetime = new Date();

                        update();
                    }, 1000);
                };

                update();
            },


            controller: function ($scope) {

                $scope.datetime = new Date();

                $scope.name = "Paul";

            },
            //controllerAs: 'myCtrl'


        }


    });