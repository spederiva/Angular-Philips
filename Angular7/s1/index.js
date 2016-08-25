var app = angular.module("app", []);

app
    .controller("mainCtrl", function ($scope, students) {

        students.get()
            .then(resp=> {
                $scope.students = resp.data;
            });

        $scope.getData = function () {
            students.get2()
                .then(resp=> {
                    $scope.students = resp.data;
                });
        }

    })

    .service("students", function ($http) {

        this.get = ()=> {
            return $http.get("data.json");
        }

        this.get2 = ()=> {
            return $http.get("dataa.json");
        }

    })

    .config(function ($httpProvider) {
        console.log($httpProvider.useLegacyPromiseExtensions(false));
    })

    .run(function ($http, $cacheFactory) {
        $http.defaults.cache = $cacheFactory('data.json');

    })

    .filter('translateState', function () {
        var states = {
            'CA': 'California',
            'DA': 'Da',
            'UT': 'Utah'
        };

        return function (text) {
            return states[text] || text;
        }
    });