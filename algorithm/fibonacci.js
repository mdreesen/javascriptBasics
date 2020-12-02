let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

// Linear Approach
const linear = num => {
    // Implement the Fibonacci algorithm using the linear approach

    for (let i = 2; i <= num; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[num - 1];
}

console.log(linear(`10`)); // => 55

const recursive = num => {
    if (num <= 2) return 1;

    return recursive(num - 1) + recursive(num - 2);
}

console.log(recursive(3))