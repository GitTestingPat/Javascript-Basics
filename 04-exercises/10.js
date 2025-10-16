/**
 * Create an array of length N whose elements
 * are numbers from 1 to N.
 */
let length = 7;

function createArray(n) {
    if (n <= 0) {
        return [];
    }
    let array = [];
    for (let i = 0; i < n; i++) {
        array[i] = i + 1;
    }

    return array;
}

let result = createArray(length);
console.log(result);