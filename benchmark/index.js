const benchmark = require('benchmark');
const { linearSearch, binarySearch } = require('./search');

const numbers = [];
for (let i = 1; i <= 1000000; i++) {
    // populate the array with the numbers 1 to 1,000,000
    numbers.push(i);
}
// grab the last number in the array as the number we want to find
//const target = numbers[numbers.length - 1];
const target = numbers[0];

const suite = new benchmark.Suite;

suite
    .add('linear search', function() {
        linearSearch(numbers, target);
    })
    .add('binary search', function() {
        binarySearch(numbers, target, 0, numbers.length - 1);
    })
    .on('complete', function() {
        // Prints the tests name and average time in milliseconds
        //console.log(`${this[0].name} averaged ${this[0].stats.mean*1000} milliseconds`);

        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
    })
    .run();

/*
const suite = new benchmark.Suite;

suite
    .add('random test', function() {
        // Benchmark generating a random number
        Math.floor(Math.random() * 10) + 1;
    })
    .on('complete', function() {
        console.log(this);
    })
    .run();
    */