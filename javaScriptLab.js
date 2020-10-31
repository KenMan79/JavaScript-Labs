//                          Lab: Advanced Functions

// 1. Add
// Write a program that keeps a number inside its context and returns new function that adds a given number to the
// previous one.
// Input
// Check the examples below to see how your code will be executed.
// Output
// Your function should return the final result.

function main(num) {
    return function(secondNum) {
        return secondNum + num;
    };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

let add10 = solution(10);
console.log(add10(5));
console.log(add10(15));

// Examples
// Input 
// let add5 = solution(5);
// console.log(add5(2));
// console.log(add5(3));

// Output  
//  7
//  8

// Input 
// let add7 = solution(7);
// console.log(add7(2));
// console.log(add7(3));

// Output  
// 9
// 10

// Input 
// let add10 = solution(10);
// console.log(add10(5));
// console.log(add10(15));

// Output 
// 15 
// 25