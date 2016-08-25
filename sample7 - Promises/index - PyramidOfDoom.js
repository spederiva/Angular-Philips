function doAfterSecond(cb){

    setTimeout(function(){

        cb();

    }, 1000);

}

function bindBtn(whattoDoAfter) {
    //bind btn

    doAfterSecond(function () {
        console.log("now", new Date());

        whattoDoAfter();
    });
}

bindBtn(function(){

    alert("Hello");

});
