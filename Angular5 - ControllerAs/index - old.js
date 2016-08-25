let app = angular.module("app", []);

let MainCtrl = function () {
    this.now = new Date();

    this.isShow = false;
};

MainCtrl.prototype = {
    setName: function () {
        this.fistName = "Little Haim";
    },

    showPersonTail: function () {
        this.isShow = true;
    },

    hidePersonTail: function () {
        this.isShow = false;
    }
};


let PersonTail = function () {
    this.person = {
        name: "Paul"
    };
};
PersonTail.prototype = {
    now: new Date()
};

app
    .controller("mainCtrl", MainCtrl)

    .controller("personTail", PersonTail);