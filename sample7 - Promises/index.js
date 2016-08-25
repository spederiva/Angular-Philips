function doNativeAjaxCall() {

    return new Promise(function (resolve, reject) {
        let data = '[{"fname":"Nate","lname":"Hutchings","tel":"(583)104-0013","address":"1088 Pulvinar Ln","city":"Ferndale","state":"MD","zip":59968},{"fname":"Janine","lname":"Aresti","tel":"(528)348-4288","address":"7842 Vestibulum Rd","city":"San Diego","state":"PA","zip":74175},{"fname":"Mirza","lname":"Mettais","tel":"(579)126-5284","address":"9304 Sit Rd","city":"Anchorage","state":"NM","zip":91040}]';


        setTimeout(function () {

            //resolve(data);

            reject({error: 'no internet'});

        }, 2000);

    });


}

function getJson() {
    function parseJson(data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            console.log('No JSON');

            throw new Error('no parse!');
        }

    }

    function doOnError(e) {
        console.log("getJSON Function", e);

        // return{
        //     data: undefined,
        //     isOK: false
        // }

        throw e;
    }

    return doNativeAjaxCall()
        .then(parseJson)
        .catch(doOnError);
}


getJson()
    .then(function (data) {

        console.log("Hello last then");

        console.log(data);

    })
    .catch(function (error) {
        console.log("ERROR!!!", error);
    });
































