let app = angular.module("app", [
    'servicesMdl'
]);

class MainCtrl {
    constructor(PersonSrv, CountryList, CitiesSrv) {
        this.list = PersonSrv.getList();

        this.countries = CountryList;

        this.CitiesSrv = CitiesSrv;
    }

    showCapital(country) {
        let capital = this.CitiesSrv.getCapital(country);

        alert(capital);
    }
}

app.controller("mainCtrl", ['PersonSrv', 'CountryList', 'CitiesSrv', MainCtrl]);
