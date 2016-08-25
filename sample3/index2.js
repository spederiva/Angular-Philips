// function print() {
//
//     let foreach = function (args) {
//
//         for (let i = 0, len = args.length; i < len; i++) {
//             console.log(args[i]);
//         }
//     };
//
//     foreach(arguments);
//
// }
//
// print();

// function clourseSample() {
//     let i = 10;
//
//     let myFunc = function () {
//         console.log(i);
//     };
//
//     myFunc();
// }
//
// clourseSample();

var weekDays = (function () {
    var days;
    $.get('./weekdays.json', null, function (data) {
        days = data;
    });

    return function (dayNumber) {
        if (dayNumber < 1 || dayNumber > 7) {
            return 'N/A';
        }

        return days[dayNumber - 1];
    };


}());

// // console.log(weekDays(3));
//
// setTimeout(function () {
//     console.log(weekDays(3));
// }, 500);


// function asyncFor() {
//
//     for (var i = 0; i < 10; i++) {
//
//         // (function (q) {
//         //     setTimeout(function () {
//         //         console.log(q);
//         //     }, 0);
//         //
//         // }(i));
//
//
//         // setTimeout(function (x) {
//         //     console.log(x);
//         // }, 0, x);
//
//         // setTimeout(
//         //
//         //     (function (x) {
//         //
//         //         return function () {
//         //             console.log(x);
//         //         }
//         //
//         //     }(i))
//         //
//         //     , 0);
//
//
//     }
//
//     console.log("i:", i);
// }
//
// asyncFor();
//
//
// setTimeout(function () {
//
// }, 5, 1, 2);

// let i;
// for (i = 0; i < 10; i++) {
//     // let i = 0;
//     i++;
//
//     setTimeout(function () {
//         console.log(i);
//     }, 0);
//
//
// }


























