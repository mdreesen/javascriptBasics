// large array of user objects
const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const findIndex = (num) => {
    for (i = 0; i < data.length; i++) {
        if (data[i] === num) {
            console.log(`${num} found at index ${i}`);
        }
    }
};