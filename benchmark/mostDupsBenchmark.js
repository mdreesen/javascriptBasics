const Benchmark = require('benchmark');
const { mostDuplicates, optimizedDuplicates } = require('../algorithm/tallyDuplicate');

const numbers = [];
for (let i = 0; i < 30000; i++) {
    numbers.push(Math.floor(Math.random() * 10000) + 1);
}

const suite = new Benchmark.Suite;

suite
    .add('duplicates test', function() {
        mostDuplicates(numbers);
    })
    .add('optimized test', function() {
        optimizedDuplicates(numbers);
    })
    .on('complete', function() {
        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
    })
    .run();