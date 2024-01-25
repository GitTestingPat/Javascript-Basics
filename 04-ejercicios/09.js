/**
 * Crear un programa que retorne un
 * array de objetos basado en pares
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
    id : 2,
    name: 'Rafael',
}, {
    id : 3,
    name: 'José',
}];

function toCollection(array) {
    let collection = [];
    for (idx in array) {
        let elemento = array[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }

    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);