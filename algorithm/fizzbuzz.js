// loop through each number 1 - 100
for (i = 1; i <= 100; i++) {
    // create an output for Fizz, Buzz, FizzBuzz
    output = '';
    // console.log(i) to print to the console
    //console.log(i);

    // if a number is the remainder of 3, Fizz
    if (i % 3 === 0) { output += 'Fizz' };
    // If i is the remainder of 5, Buzz
    if (i % 5 === 0) { output += 'Buzz' };
    // if i is the remainder of 15, FizzBuzz
    //if (i % 15 === 0) { output += 'FizzBuzz' };

    // if output is empty, return a number
    if (output == '') {
        output = i;
    }

    console.log(output);
}