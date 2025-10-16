/**
    Create a program that takes an array
    of objects and returns an array of key-value pairs.
 */
let array = [{
    id: 1,
    name: 'Diego',
}, {
    id : 2,
    name: 'Rafael',
}, {
    id : 3,
    name: 'José',
}]

let pares = [
    [1, { id: 1, name:'Diego'}],
    [2, { id: 2, name:'Rafael'}],
    [3, { id: 3, name:'José'}],
];

function toPairs(array) {
    let pairs = [];
    for (idx in array) {
        let element = array[idx];
        pairs[idx] = [element.id, element];
    }

    return pairs;
}

let result = toPairs(array);
console.log(result);