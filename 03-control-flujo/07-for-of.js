let animales = ['Chanchito feliz', 'Dragón', 'Perrito'];
/* Se declara el array "animales" con 3 elementos. */
for (let animal of animales) {
    console.log(animal);
}
/* Usa un bucle for..of para recorrer el array animales.
Para cada elemento del array (animal) imprime su valor con console.log. */
let i = 0; /* Declara e inicializa la variable i en 0. */
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}
/* Inicia un bucle while para recorrer el array mientras i sea menor al length.

Dentro va imprimiendo cada elemento indicando su índice con corchetes [].

Luego incrementa i en 1. */

/* El bucle while itera sobre los índices del array (0, 1 y 2) e imprime los
elementos según su índice utilizando los corchetes [].

Al ejecutar todo el código, vemos que se imprimen los mismos elementos dos veces:

Chanchito feliz
Dragón
Perrito
Chanchito feliz
Dragón
Perrito

Al ejecutar todo el código, se ven impresos ambos grupos de console.log:
En la línea 4 se ejecuta primero el código e imprime los 3 elementos
directamente.

Luego se ejecuta el bucle while, accediendo a los elementos por su índice.
console.log(animales[i]); Esta línea también se imprime con cada animal.

Por lo tanto, luego de que se completa la iteración de ambos bucles,
en la consola se ven dos grupos de los mismos 3 animales.
Un grupo para el bucle for..of iterando el array directamente y otro
para el while iterando por índice.
*/
