var app = angular.module("app", []);

app
    // .config(function (StudentSrvProvider) {
    //     StudentSrvProvider.setList([{Id: 1}, {Id: 2}]);
    // })

    .controller("mainCtrl", function ($log, StudentSrv) {
        $log.log("Creating MainCtrl");

        var students = StudentSrv.getStudents();

        students.then(function(resp){

            console.log(resp.data);

        });

        console.log(students);

    })

    .factory('StudentSrv', function ($http) {
        let getStudents = function(){
            return $http.get('../_data/data.json');
        }


        return{
            getStudents
        }

    });

// .provider('StudentSrv', function () {
//     let _students = [];
//
//     var getStudents = function () {
//         return _students;
//     };
//
//     this.setList = function (list) {
//         _students = list;
//     };
//
//     this.$get = function () {
//         return {
//             getStudents
//         }
//     }
//
// });
