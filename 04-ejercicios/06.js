/*
Crear un programa que devuelva la cantidad
de números positivos de un array
*/
let números = [2, 5, 7, 15, -5, -100, 55]

function cantidadPositivos(números) {
    let cantidad = 0;
    for (number of números) {
        if (number > 0){
            cantidad++;
        }
    }
    return cantidad;
}

let resultado = cantidadPositivos(números);
console.log(resultado);