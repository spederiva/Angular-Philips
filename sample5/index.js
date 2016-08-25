document.addEventListener("DOMContentLoaded", function () {
    let list = new List([11, 2, 23, 14, 54, 6, 8]);

    let button = document.createElement("button");
    button.innerHTML = "Click";
    button.addEventListener('click', function () {
        list.createList(document.getElementById("container"));
    });
    document.getElementById('buttons').appendChild(button);

    let button2 = document.createElement("button");
    button2.innerHTML = "Sort";
    button2.addEventListener('click', function () {
        list.sortData();
        list.createList(document.getElementById("container"));
    });

    document.getElementById('buttons').appendChild(button2);


});