var app = angular.module("app", []);

app
    .controller("mainCtrl", function ($scope, $rootScope) {

        this.format = 'medium';

        console.log(this.format);

        $scope.$watch(
            function () {
                console.log(this);

                return this.format;
            }.bind(this), function (newFormat) {

                console.log('format was changed');

            })


    })

    .directive('clock', function ($timeout, $filter) {
        return {

            scope: {
                format: '@'
            },

            restrict: 'EA',

            // replace: true,

            template: ` 
                        <div ng-bind="datetime">                            
                        </div>                        
                        `,


            link: function (scope, elem, attr) {

                if (!scope.format) {
                    scope.format = 'MMMM d, y';
                }

                let update = function () {
                    // $timeout(()=> {
                    //     scope.datetime = formatDateTime(new Date(), scope.format);
                    //
                    //     update();
                    // }, 1000);
                };

                let formatDateTime = function (datetime, format) {
                    return $filter('date')(datetime, format);
                };

                scope.datetime = formatDateTime(new Date(), scope.format);

                scope.$watch('format', function (newFormat) {
                    scope.datetime = formatDateTime(new Date(), newFormat);
                });

                update();
            },


            controller: 'clockCtrl'
            // controller: function ($scope) {
            //
            //     $scope.datetime = new Date();
            //
            // },
            //controllerAs: 'myCtrl'


        }


    })
    .controller('clockCtrl', function ($scope) {

    });