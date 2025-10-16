/**
 * Create a program that returns an
 * array of objects based on pairs
 */
let pairs = [
    [1, { name: 'Diego' }],
    [2, { name: 'Rafael' }],
    [3, { name: 'José' }],
];

let array = [{
    id: 1,
    name: 'Diego',
}, {
    id: 2,
    name: 'Rafael',
}, {
    id: 3,
    name: 'José',
}];

function toCollection(array) {
    let collection = [];
    for (idx in array) {
        let element = array[idx];
        collection[idx] = element[1];
        collection[idx].id = element[0];
    }

    return collection;
}

let result = toCollection(pairs);
console.log(result);