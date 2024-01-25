let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
};
/* Se declara el objeto user con 3 propiedades: id, name y age. */

for (let prop in user) {
    console.log(prop, user[prop]);
}
/* Se utiliza un bucle for...in para iterar sobre las propiedades
del objeto user.

La variable prop tomará en cada iteración el nombre de cada propiedad.

Luego se imprime en consola el nombre de la propiedad y su valor
correspondiente accediendo mediante corchetes a user.
Esto imprimirá:
id 1
name Chanchito feliz
age 25
*/
let animales = ['Chanchito feliz', 'Dragón', 'Canguro',]; /* Se declara un array animales con 3 elementos. */
for (let índice in animales) {
    console.log(índice, animales[índice]);
}
/* También se utiliza un for...in para iterar los elementos del array según su índice.

La variable índice tendrá los valores '0', '1', '2' para cada posición.

Luego se accede a cada elemento según su índice con animales[índice] y se imprime en consola.

Esto imprimirá:
0 Chanchito feliz
1 Dragón
2 Canguro
*/