//  Funtion in JavaScript

//  what is funtion 

// function square(num){
//     return num * num;
// }


// Funtion Expression 
// const square = function (num){ //--> anonymous function(without name)
//     return num * num;
// }

// console.log(square(5));


// what are first class funtions

// function square(num){
//     return num * num;
// }

// function display_Square(fn){
//     console.log("Sqaure is : " + fn(5));
// }

// display_Square(square);


// --> what is IIFE

// (function square(num){
//     console.log(num * num);
// })(5);

// --> Output based question

// (function (x) {
//     return (function (y) {
//         console.log(x); // 1
//     })(2);
// })(1);

// --> funtion scope

// for(let i=0; i<5; i++){
//     setTimeout(function () {
//         console.log(i);
//     },i*1000)
// }

// for(var i=0; i<5; i++){
//     setTimeout(function () {
//         console.log(i);
//     },i*1000)
// }


// --> function hoisting

// functionName();

// function functionName(){
//     console.log(x);
//     var x = 5;
//     console.log("Hello Arun")
// }

// console.log(x);
// var x = 5;
// console.log(x);

// --> output based question here 

// var x = 21;
// var fun = function(){
//     console.log(x);
//     var x = 20;
// }

// fun();


// params vs arguments
// spread vs rest operator

// function multiply(...nums){
//     console.log(nums[0] * nums[1])
// }

// var arr = [5,6]

// multiply(...arr)

// question
// const fn =(a, x, y, ...numbers) => {
//     console.log(x, y, numbers);
// };

// fn(5,6,3,7,8,9,0,8);


// call-back funtions
// fun into another fun is call back funtion

// document.addEventListener("click",funtion (params) {
// }) // example => map, filter, reduce


//  Arrow functions

// -> normal function
// const add = function  (firstname, lastname){
//     return firstname + lastname;
// }
// const add_1 = (firstname, lastname)=>{firstname, lastname} // arrow funtion , implicit return funtion in case of one line




 