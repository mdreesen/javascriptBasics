// loop through each number 1 - 100
//for (i = 1; i <= 100; i++) {
    // create an output for Fizz, Buzz, FizzBuzz
    //output = '';
    // console.log(i) to print to the console
    //console.log(i);

    // if a number is the remainder of 3, Fizz
    //if (i % 3 === 0) { output += 'Fizz' };
    // If i is the remainder of 5, Buzz
    //if (i % 5 === 0) { output += 'Buzz' };
    // if i is the remainder of 15, FizzBuzz
    //if (i % 15 === 0) { output += 'FizzBuzz' };

    // if output is empty, return a number
    //if (output == '') {
     //   output = i;
    //}

    //console.log(output);
//}

// fizzbuzz

const fizzBuzz = (num) => {
    // create a forloop to iterate thought numbers 1 - 100
    if (num > 101) {
        console.log('nope');
    } else {
        for (let i = 1; i <= num; i++) {
            if (num > 101) {
                console.log('nope');
            } else {
                if (i % 15 === 0) {
                    console.log('FizzBuzz');
                } else if (i % 5 === 0) {
                    console.log('Buzz');
                } else if (i % 3 === 0) {
                    console.log('Fizz');
                } else {
                    console.log(i);
                }
            }
        }
    }
}

fizzBuzz(102);