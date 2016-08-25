function doAjax() {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            resolve({text: "new status", status: 999});

            // reject();

        }, 1000);

    });


}

function bindBtn() {
    //bind btn

    return doAjax()
        .then(bindBtnResolved);
}

function bindBtnResolved(data) {
    console.log("now", new Date());

    console.log(data);

    data.now = new Date();

    return data;
}

bindBtn()
    .then(function (status) {

        console.log("Hello last then");

        console.log(status);

    });
































