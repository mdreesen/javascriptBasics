/*
const pal = str => {
    str = str.toLowerCase();

    console.log(str === str.split('').reverse().join(''))
}

pal('kayak')


const pal2 = str => {
    str = str.toLowerCase();

    console.log(str === str.split('').reverse().join(''))
}

pal2('nope')
*/

const pal = str => {
    str = str.toUpperCase();

    console.log(str === str.split('').reverse().join());
}

pal('teeeeet');