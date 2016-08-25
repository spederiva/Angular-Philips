var app = angular.module("app", []);

app
    .config(function ($httpProvider) {
        $httpProvider.useLegacyPromiseExtensions(false);
    })

    .controller("mainCtrl", function ($log, StudentSrv) {
        //var self = this;

        $log.log("Creating MainCtrl");

        this.greeting = "Hello";

        console.log("controller", this);

        StudentSrv.getStudents()
            .then((resp) => {

                console.log("into then", this);

                alert(this.greeting);


                this.firstRow = resp.data[0];

                $log.log(resp.data[0]);

            })
        // .catch(function(e){
        //     $log.log('somethging wrong');
        // })


    })

    .factory('StudentSrv', function ($http) {
        let getStudents = function () {
            return $http.get('../_data/data.json');
        };


        return {
            getStudents
        }

    });