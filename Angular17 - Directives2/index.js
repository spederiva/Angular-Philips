var app = angular.module("app", []);

app
    .controller("mainCtrl", function ($scope, $rootScope) {


        // this.color = "yellow";



    })

    .directive('buttonColor', function () {
        return {

            scope: {
                color: '@'
            },

            restrict: 'EA',

            // replace: true,

            template: `<h1>Hello World</h1><input type="button" value="color Text">`,


            // compile:function (elem, attr) {
            //
            //     elem.html('Hello');
            //
            // },


            link:function (scope, elem, attr) {

                console.log(scope.color);

                let h1 = elem.find('h1');
                let btn = elem.find('input');

                btn.on('click', function(){
                    h1.css({backgroundColor: scope.color});
                })

            },


            controller: function ($scope) {



            },
            //controllerAs: 'myCtrl'


        }
    });