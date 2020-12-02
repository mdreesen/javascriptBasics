let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// Linear Approach
/*
const linear = num => {
    // Implement the Fibonacci algorithm using the linear approach

    for (let i = 2; i <= num; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[num - 1];
}
*/

// linear approach
const linear = num => {
    // make a for loop to loop through starting at 2
    for (let i = 2; i <= num; i++) {
        arr.push(arr[i - 2] + [i - 1]);
        arr.push(arr[i - 1] + [i - 2]);
        arr.push(arr[i - 1] + [i - 2]);
    }

    return arr[num - 1];
}



console.log(linear(6)); // => 55

const recursive = num => {
    if (num <= 2) return 1;

    return recursive(num - 1) + recursive(num - 2);
}

console.log(recursive(3))