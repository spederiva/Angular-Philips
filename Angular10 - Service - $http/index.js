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

        let refreshList = function (fieldName) {
            StudentSrv.getStudents()
                .then((resp) => {

                    console.log("into then", this);

                    alert(this.greeting);


                    this.firstRow = resp.data[0];

                    $log.log(resp.data[0]);

                })
        }

        // .catch(function(e){
        //     $log.log('somethging wrong');
        // })

        this.orderBy = function () {
            refreshList('fname');
        }

        refreshList();
    })

    .factory('StudentSrv', function ($http, $q, $filter) {
        let _list = undefined;

        let getStudents = function () {
            if (_list) {
                return _getPromise();
            }

            return _getByHttp();
        };

        let _getByHttp = function (fieldName) {
            return $http.get('../_data/data.json')
                .then((resp)=> {
                    _list = resp.data;
                })
        };

        let _getPromise = function () {
            return $q(function (resolve, reject) {

            });
        };


        return {
            getStudents
        }

    });