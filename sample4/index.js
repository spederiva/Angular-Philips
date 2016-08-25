// let inter;
// function doInterval() {
//     inter = setTimeout(() => {
//         console.log(new Date());
//
//         doInterval();
//     }, 1000);
// }
//
// doInterval();
//
// setTimeout(()=> {
//     clearInterval(inter);
// }, 3000);

// var myObj = new Object();
// myObj.name = "ssss";

// var x = 999;
// var Vehicle = function () {
//     console.log(this);
//
//     this.speed = 0;
//
//     this.go = function (speed) {
//         this.speed = speed;
//
//         console.log(x);
//     }
// };
//
// // var vehicle = new Vehicle();
// // vehicle.go(60);
// //
// // console.log(vehicle.speed);
//
//
// // let vehicle = {
// //     speed: 60,
// //
// //     go:function () {
// //
// //     }
// // } ;
//
//
// // Vehicle();
//
//
// var person = {
//
// }
// Vehicle.call({});
//
// Vehicle.apply();

// $('#obj').click(function(){
//     this
// });

//
// var person = function (name, age) {
//
//     this.name = name;
//
//     if(!this.age) {
//         this.age = age;
//     }
//
//
//     this.go = function () {
//
//     }
//
// };
//
// //person("Moshe");
//
// var student = {
//     age: 30
// };
//
// person.call(student, "qqq", 45);
//
// var student22 = {
// };
//
// person.call(student22, "qqq", 45);

// let sum = function (...nums) {
//     var res = 0;
//
//     for (let i = 0, len = nums.length; i < len; i++) {
//         res += nums[i];
//     }
//
//     return res;
// }
// let rest = function (...nums) {
//     var res = 0;
//
//     for (let i = 0, len = nums.length; i < len; i++) {
//         res -= nums[i];
//     }
//
//     return res;
// }
//
//
// //console.log(sum(3,4,5));
//
//
// //sum.call(this, 3,4,5);
//
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// //sum.apply(this, numbers);
//
//
// function doSomething(whattoDo) {
//     if(typeof window[whattoDo] === 'function') {
//         return window[whattoDo].apply(this, numbers);
//     }
//
//     return 'N/A';
// }
//
// console.log(doSomething('rest'));











































