// closures in JavaScript
// Lexical Scope

// var name = "Arun verma"
// global scope
// function local(){
//     // local scope\
//     var name = "Arun verma"
//     // console.log(name);
// }
// console.log(name); // not goona work

// local();

// --> example

//global scope
// function fn() {
//     var username = "Arun Verma";
//     // inner scope 2
//     function display_name(num){
//         console.log(username,num);
//     }
//     return display_name;
// }

// fn()(5);

//<------------interview queestion------------->

// let count = 0;
// (function printcount(){
//     if( count === 0){
//         let count = 1; // shadowing
//         console.log(count); // 1
//     }
//     console.log(count); 
// })();

// --> write a funtion that would allow you to do this

// function create_base(nums){
//     return function (inner_num){
//         console.log(nums+inner_num);
//     }
// }
// var add_six = create_base(6);
// add_six(10); // return 16
// add_six(21); // return 27

// Time optimization

// function find(idx){
//     let a = [];
//     for (let i=0;i<1000000;i++){
//         a[i] = i*i;
//     }
//     return function(){
//         console.log(a[idx]);
//     }
// }

// const closure = find();
// console.log("6");
// closure(6);
// console.timeEnd("6");
// console.time("12");
// closure(12);
// console.timeEnd("12");

// block scope and settiemout -->question

function a(){
for(var i=0;i<3;i++){
    setTimeout(function log(){
        console.log(i);
    },i * 1000)
}
}

a();