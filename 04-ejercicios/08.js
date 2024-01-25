/**
 * Crear un programa que tome un array
 * de objetos y retorne un array de pares.
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
        let elemento = array[idx];
        pairs[idx] = [elemento.id, elemento];
    }

    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);