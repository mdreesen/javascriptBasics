const numbers = [54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2];


const bubbleSort = (arr) => {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            // compare arr[i] to arr[i+1]
            if (arr[i] > arr[i + 1]) {
                // swap places if needed

                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                // if swapped, let sorted = false to run while loop again
                // flag as not sorted to run loop again
                sorted = false;
            }
        }
    }

    return arr;
};

module.exports = { bubbleSort };

/*
const benchmark = require('benchmark');
const { bubbleSort } = require('../bubbleSort/bubble');

const numbers = [];
for (let i = 0; i < 1000; i++) {
    numbers.push(Math.floor(Math.random() * 1000) + 1);
}

const suite = new benchmark.Suite

suite
    .add('bubble sort', function() {
        const testArray = [...numbers];
        bubbleSort(testArray);
    })
    .on('complete', function() {
        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds`));
    })
    .run();
    */