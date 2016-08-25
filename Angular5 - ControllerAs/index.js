let app = angular.module("app", []);

class MainCtrl {
    constructor() {
        this.now = new Date();

        this.isShow = false;
    }

    setName() {
        this.fistName = "Little Haim";
    }

    showPersonTail() {
        this.isShow = true;
    }

    hidePersonTail() {
        this.isShow = false;
    }
}

class PersonTail {
    constructor() {
        this.person = {
            name: "Paul"
        };
    }
}

app
    .controller("mainCtrl", MainCtrl)

    .controller("personTail", PersonTail);