/*  Los objetos son tipo de referencia:
    Son direcciones o lugares dentro de la memoria
    RAM que indican su posicion dentro de ella. Son
    una agrupación de datos que lógicamente deben
    estar juntos. Ej. un lápiz tiene:
    - color
    - longitud
    - fabricante
    - peso
*/
// Personaje de tv
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro", /* par llave-valor. propiedad */
    anime: "Demon slayer",
    edad: 16,
}; /* los paréntesis de llave indican que
estamos creando un objeto literal
*/
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

let llave = 'edad';
personaje[llave] = 16;
personaje['edad'] = 16;

delete personaje.anime;

console.log(personaje);

/* Al abrir la consola del navegador puede verse que
JavaScript NO ASEGURA el orden de las propiedades,
ya que estas no se encuentran ordenadas del modo
que fueron creadas */
console.log(personaje);
