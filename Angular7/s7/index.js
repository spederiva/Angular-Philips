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

    })

    .service("students", function ($http) {

        this.get = ()=> {
            return $http.get("../_data/data.json");
        }

    })

    .directive('ownTable', function ($compile) {
        return {
            scope: {
                _xxx: '=',
                mylist: '=',
                // list: '='
            },

            compile: function (elem, attr) {
                let html = '';
                // html += '<table border="1">';
                // html += '<tr>';
                // html += '<th>Id</th>';
                // html += '<th>Name</th>';
                // html += '</tr>';
                //
                // html += '<tr ng-repeat="s in mylist">';
                // html += '<td>x{{s.zip}}</td>';
                // html += '<td>{{s.fname}}</td>';
                // html += '</tr>';
                //
                // html += '</table>';

                html += '<h1>xxx: {{xxx}}</h1>';
                html += '<h1>{{students}}</h1>';

                elem.append(html);

                return function (scope, el, at) {
                    console.log(scope.mylist)

                    //scope.xxx = 'sebas';
                    scope.list = [{
                        zip: 111,
                        fname: 'xxx'
                    }];
                    console.log(scope.list)

                    // scope.$watch('list', function (newlist) {
                    //     console.log(newlist);
                    // })
                }
            },

            // link:function (scope, el, at) {
            //     scope.xxx = 'sebas';
            //     scope.list = [{
            //         zip:111,
            //         fname:'xxx'
            //     }];
            //     console.log(scope.list)
            //
            //     // scope.$watch('list', function (newlist) {
            //     //     console.log(newlist);
            //     // })
            // }
        }
    })