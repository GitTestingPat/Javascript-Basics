/*  Objects are reference types:
    They are addresses or places within the RAM memory
    that indicate their position within it. They are
    a grouping of data that logically should be
    together. E.g. a pencil has:
    - color
    - length
    - manufacturer
    - weight
*/
// TV character
let name = "Tanjiro";
let anime = "Demon slayer";
let age = 16;

let character = {
    name: "Tanjiro", /* par llave-valor. propiedad */
    anime: "Demon slayer",
    age: 16,
}; /* los paréntesis de llave indican que
estamos creando un objeto literal
*/
console.log(character);
console.log(character.name);
console.log(character['anime']);

character.age = 13;

let key = 'age';
character[key] = 16;
character['age'] = 16;

delete character.anime;

console.log(character);

/* 
When you open the console of the browser, you can see that
JavaScript does not guarantee the order of properties,
since they are not ordered in the way
they were created
*/
console.log(character);
