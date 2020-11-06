// Running this file -> node numbers.js
// This prints 5.5, because that what num  is
let num = 5.5;

console.log(num);
///////////////////////////////////////////////////////////////////////////////
// Adding, prints 7.5
let num1 = 5.5 + 2;

console.log(num1);
///////////////////////////////////////////////////////////////////////////////
// subtracting a negative is the same as adding
// This prints out 6.5
let num2 = 5.5 - -1;

console.log(num2);
///////////////////////////////////////////////////////////////////////////////
// Multiply 2 numbers, this prints out 11
let num3 = 5.5 * 2;

console.log(num3);
///////////////////////////////////////////////////////////////////////////////
// Dividing 2 numbers, this prints out 2.75
let num4 = 5.5 / 2;

console.log(num4);
///////////////////////////////////////////////////////////////////////////////
// Making a variable equal to the number
// num5 is using the x variable and adding, then multiplying
// This prints out 13;
let x = 11;
let num5 = x + 1 * 2;

console.log(num5);
///////////////////////////////////////////////////////////////////////////////
// Using parentheses
// (y + 1) which is 12 starts first, then uses * 2
// This prints out 24
let y = 11;
num6 = (y + 1) * 2;

console.log(num6);
///////////////////////////////////////////////////////////////////////////////
// Add one to the age, then convert to dog years
// This should print out 4
let age = 27;
// let dogYears = age + 1 / 7;
// order of operations would do this first 1 / 7
// we need parentheses to do the order of operations
// adding one to our age, then dividing by 7

let dogYears = (age + 1) / 7;

console.log(dogYears);
///////////////////////////////////////////////////////////////////////////////
//  -=- Challenge -=-
// start with 2 variables that are numbers
// student score - 18
// max score - 20
// percent variable - 90
// This should print out a percentage out of 100

let studentScore = 18;
let max = 20;

let percent = (studentScore / max) * 100;

// print percent
console.log(percent);