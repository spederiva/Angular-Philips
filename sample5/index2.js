//
// function MyObject(){
//     var that = this;
//     var me = this;
//     var self = this;
//
//     this.myname = "Haim";
//
//     this.doSomething = function(){
//         console.log('inside dosomething', this);
//
//         // setTimeout(function(){
//         //     console.log('inside settimeout', this);
//         //
//         //     console.log(that.myname);
//         // }, 0);
//
//         setTimeout(()=>{
//
//             console.log(this.myname);
//
//         })
//     }
// }
//
// var obj = new MyObject();
// obj.doSomething();