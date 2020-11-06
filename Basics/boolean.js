// boolean is either true or false
// "===" makes this a boolean and checks to see if 31 is equal to the temp
let temp = 31;
let isFreezing = temp === 31;

console.log(isFreezing);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "!==" not equal operator
let temp2 = 31;
let isFreezing2 = temp2 !== 32;

console.log(isFreezing2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// this is true because they are matching strings
let name = "Who is this";
let isName = name === "Who is this";

console.log(isName);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is true because the second string does not match name2
let name2 = 'what';
let isName2 = name2 !== 'what in the world';

console.log(isName2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is true because the temp is less than 32
let temp3 = 31;
let isFreezing3 = temp < 32;

console.log(isFreezing3);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is true because the temp is greater than 32
let temp4 = 100;
let isFreezing4 = temp > 32;

console.log(isFreezing3);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is true because temp5 is equal to and less than or greater than 32
let temp5 = 32;
let isFreezing5 = temp5 <= 32;

console.log(isFreezing5);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is true because temp5 is equal to and less than or greater than 32
let temp6 = 32;

let isFreezing6 = temp5 >= 32;


console.log(isFreezing6);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// -=- Challenge -=-
// under 7 child
// over 65 is a senior
// everyone else is a standard rate

// create age variable set to your age
let age = 27;
let childAge = 7;
let seniorAge = 65;
// calculate is child - if they are 7 or under
let child = age <= 7;
// calculate is senior - if they are 65 or older
let senior = age >= 65;
// calculate regular rate
let regular = age > childAge || age < seniorAge;

//print is child value
console.log(child);
// print is senior value
console.log(senior);
// print regular rate
console.log(regular);