// var myName = "Sebastian";
//
// console.log(myName);
//
//
// myName = 555;
//
// console.log(myName);
//
// console.log(typeof myName);
//
// var x = 1;
//
// var y = "1";
//
// if (x === y) {
//     console.log("yes");
// } else {
//     console.log("no");
// }
//
//
// dddd = "qweqeq";
//

// function doSomething(){
//     'use strict';
//
//     window.x = 1;
//
//     console.log(x);
// }
//
//
// doSomething();

// var x = "5.6";
//
// var y = "1";
//
//
// console.log(+x + +y);

// var fname = "Haim";
// var lname = "Cohen";
//
// console.log(fname+lname);
//
//
// var myarray = ["Haim", "Cohen"];
//
// console.log(myarray);
// console.log(myarray.join(" "));


/*var myObject = new Object();
 myObject.name = "Sholomo";
 myObject.age = 5;

 var myNewObject = {};
 myNewObject.date = new Date();
 myNewObject.email = "sss@sss.com";

 var newProperty = "newProp";
 myNewObject[newProperty] = "something";

 myNewObject[0] = "xxxx";*/

// var list = new Array();
// list.push("aaaa");
// // list.push(99999);
// // list.push({name: "sebastian", age: 15});
// list.push("qqqq");
// // list[17] = 8;
// list.push("hello");
// list.push("world");
// list.push("Israel");
// list.push("USA");
//
// var lookFor = "hello";
// var res = list.find(function(val){
//    return val === lookFor;
// });
// //
// // console.log(res);
// //
// var res = list.find(val => val === lookFor);
//
// var myListObj = {};
// list.forEach(function (val) {
//     myListObj[val] = true;
// });
//
// for (var i = 0, len = i.length; i < len; i++) {
//     createList(list[i]);
// }
//
// function createList(val) {
//     myListObj[val] = true;
// }
//
//
// list.forEach((val) => {
//     myListObj[val] = true;
// });
//
// console.log(myListObj);
//
// if (myListObj[lookFor]) {
//     console.log('yeah!');
// }

// var myFunction;
// var myNewFunction;
// myFunction = function () {
//     console.log("do something");
// };
//
//
// myFunction();
// myNewFunction();
//
//
// // function myFunction() {
// //     console.log("do something");
// // }
//
// myNewFunction = function () {
//     console.log("do something new");
// };
//
//
//
//

hoistingSample();

function hoistingSample() {


    for (let i = 0; i < 10; i++) {
        let x = 1;
        console.log(i);
    }

    console.log(i);

    console.log(x);

}















