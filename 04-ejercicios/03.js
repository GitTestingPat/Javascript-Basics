// Construir una función que permita obtener un elemento
// por su índice y validar que no sea menor a cero y que
// el elemento exista en el array.
function getbyIdx(array, idx) {
/* Se define la función con nombre
getbyIdx que recibe dos argumentos:
array: el array sobre el que buscaremos
idx: el índice del elemento que queremos obtener */
    if (idx < 0 || array.length <= idx) {
        return 'Elemento no existe';
    }
    /* Validamos que el índice no sea negativo y que
    exista dentro del rango de índices válidos del array
    (menor a su longitud). Si no es válido, retornamos un
    mensaje de error. */
    return array[idx];
}   /* Si el índice es válido, retornamos el elemento
    usando la notación de corchetes del array. */

let resultado = getbyIdx([1, 2], 1);
console.log(resultado);
/* Llamamos a la función pasándole un array y el índice 1.
Guardamos el resultado y lo mostramos en consola, en este
caso el número 2. */