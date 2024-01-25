/* Forma larga */
// function cualEsMayor(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// let mayor = cualEsMayor(10, 5);

// console.log(mayor);

// Forma corta
function cualEsMayor(a, b) { // Se define una función llamada cualEsMayor
    // que recibe dos parámetros a y b.
    return (a > b) ? a : b;
} // Dentro del cuerpo de la función tenemos una declaración return que
  // es un operador ternario.
  // Este evalúa la condición si a > b. Si es verdadera, retorna el valor de a.
  // Si no se cumple, retorna el valor de b.
  // Básicamente nos retornará el parámetro que contenga el valor mayor entre los dos.

let mayor = cualEsMayor(10, 5);
// Luego llamamos a la función cualEsMayor() pasándole los argumentos 10 y 5.
// Guardamos el resultado en la variable mayor.
console.log(mayor);
// Finalmente con console.log imprimimos en pantalla el valor que tenga la variable mayor.
// En este caso, como 10 es mayor que 5, se imprimirá el número 10.
// Es una función sencilla para obtener el mayor entre 2 valores cualesquiera.