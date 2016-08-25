class PersonSrv {
    constructor() {
        this.people = [
            {name: 'Haim', age: 23},
            {name: 'David', age: 25},
            {name: 'Moshe', age: 45},
            {name: 'Lev', age: 40},
        ];

    }

    getList() {
        return this.people;
    }

    getPerson(name) {
        return this.people.find((p)=>p.name === name);
    }
}

class StudentSrv extends PersonSrv {
    constructor() {
        this.people = [
            {name: 'Haim', age: 23, avarage: 88},
            {name: 'David', age: 25, avarage: 58},
            {name: 'Moshe', age: 45, avarage: 38},
            {name: 'Lev', age: 40, avarage: 98},
        ];
    }
}


angular.module("servicesMdl", [])
    .service("PersonSrv", PersonSrv)

    .service("StudentSrv", StudentSrv)

    .value("CountryList", [
        'Israel',
        'Usa',
        'Brazil',
        'Russia'
    ])

    .factory("CitiesSrv", function () {
        let
            getCapital = function (country) {
                return 'xxx';
            },
            getCities = function (country) {
                return ['xxx', 'yyy', 'ooo'];
            };


        return {
            getCapital,
            getCities
        }

    });