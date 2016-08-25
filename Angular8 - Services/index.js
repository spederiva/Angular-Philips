var app = angular.module("app", []);

app
    .config(function (StudentSrvProvider) {
        StudentSrvProvider.setList([{Id: 1}, {Id: 2}]);
    })

    .controller("mainCtrl", function (StudentSrv) {

        var students = StudentSrv.getStudents();

        console.log(StudentSrv.setList);

        console.log(students);

    })

    .provider('StudentSrv', function () {
        let _students = [];

        var getStudents = function () {
            return _students;
        };

        this.setList = function (list) {
            _students = list;
        };

        this.$get = function () {
            return {
                getStudents
            }
        }

    });
