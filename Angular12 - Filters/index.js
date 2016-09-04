var app = angular.module("app", []);

app
    .controller("mainCtrl", function (StudentSrv) {

        this.price = 999;

        this.now = new Date();

        StudentSrv.getStudents()
            .then((resp) => {
                this.students = resp.data;
            })
    })

    .factory('StudentSrv', function ($http, $filter) {
        let getStudents = function () {
            return $http.get('../_data/data.json')
                .then((resp)=> {
                    let d = resp.data;

                    resp.data = d.map((r)=> {
                        r.translatedState = $filter('translateState')(r.state);
                    })
                });
        };


        return {
            getStudents
        }

    })

    .filter("translateState", function () {
        let states = {
            "AL": "Alabama",
            "AK": "Alaska",
            "AS": "American Samoa",
            "AZ": "Arizona",
            "AR": "Arkansas",
            "CA": "California",
            "CO": "Colorado",
            "CT": "Connecticut",
            "DE": "Delaware",
            "DC": "District Of Columbia",
            "FM": "Federated States Of Micronesia",
            "FL": "Florida",
            "GA": "Georgia",
            "GU": "Guam",
            "HI": "Hawaii",
            "ID": "Idaho",
            "IL": "Illinois",
            "IN": "Indiana",
            "IA": "Iowa",
            "KS": "Kansas",
            "KY": "Kentucky",
            "LA": "Louisiana",
            "ME": "Maine",
            "MH": "Marshall Islands",
            "MD": "Maryland",
            "MA": "Massachusetts",
            "MI": "Michigan",
            "MN": "Minnesota",
            "MS": "Mississippi",
            "MO": "Missouri",
            "MT": "Montana",
            "NE": "Nebraska",
            "NV": "Nevada",
            "NH": "New Hampshire",
            "NJ": "New Jersey",
            "NM": "New Mexico",
            "NY": "New York",
            "NC": "North Carolina",
            "ND": "North Dakota",
            "MP": "Northern Mariana Islands",
            "OH": "Ohio",
            "OK": "Oklahoma",
            "OR": "Oregon",
            "PW": "Palau",
            "PA": "Pennsylvania",
            "PR": "Puerto Rico",
            "RI": "Rhode Island",
            "SC": "South Carolina",
            "SD": "South Dakota",
            "TN": "Tennessee",
            "TX": "Texas",
            "UT": "Utah",
            "VT": "Vermont",
            "VI": "Virgin Islands",
            "VA": "Virginia",
            "WA": "Washington",
            "WV": "West Virginia",
            "WI": "Wisconsin",
            "WY": "Wyoming"
        };


        return function (text) {
            console.log(text);

            return states[text];
        }

    });