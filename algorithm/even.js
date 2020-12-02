/*
const isEven = (num) => {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
};
*/

// check if this is divisible by 2
// return true if the number is even
const even = (num) => {
    if (num % 2 === 0) {
        return console.log(`this is the number ${num}`)
        // or we can say true here as well
    } else {
        return console.log(`Too bad this is an odd number ${num}`)
    }
};

even(3);