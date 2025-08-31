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

(function square(num){
    console.log(num * num);
})(5);

// --> Output based question

// (function (x) {
//     return (function (y) {
//         console.log(x); // 1
//     })(2);
// })(1);

// --> funtion scope

for(let i=0; i<5; i++){
    setTimeout(function () {
        console.log(i);
    },i*1000)
}

for(var i=0; i<5; i++){
    setTimeout(function () {
        console.log(i);
    },i*1000)
}


 