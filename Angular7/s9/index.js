var app = angular.module("app", []);

app
    .controller("mainCtrl", function ($scope, students) {
        $scope.xxx = 'xxx';
        $scope.mylist = [{
            zip: 123,
            fname: 'controller'
        }];

        students.get()
            .then(resp=> {
                $scope.students = 'resp.data';
            });

        $scope.doSomething = function (foo) {
            console.log(222, foo);
        }
    })

    .service("students", function ($http) {

        this.get = ()=> {
            return $http.get("../_data/data.json");
        }

    })

    .directive('ownTable', function ($compile) {
        return {
            scope: {
                myonclick: '&'
            },

            template: '<h1>xxx: {{xxx}}</h1><button ng-click="myonclick({foo:xxx})">Do!</button>',

            link: function (scope, el, at) {
                scope.xxx = 'sebas';
                // scope.list = [{
                //     zip: 111,
                //     fname: 'xxx'
                // }];
                // console.log(scope.list)


                // scope.$watch('list', function (newlist) {
                //     console.log(newlist);
                // })
            }
        }
    })