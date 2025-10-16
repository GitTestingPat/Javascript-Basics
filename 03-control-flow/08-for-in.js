let user = {
    id: 1,
    name: 'Happy feet',
    age: 25,
};
// Declares the "user" object with three properties: id, name, and age.

for (let prop in user) {
    console.log(prop, user[prop]);
}
/* Uses a for...in loop to iterate over the properties of the "user" object.

In each iteration, the variable "prop" holds the name (key) of a property.

It then logs to the console both the property name and its corresponding value,
accessed using bracket notation: user[prop].

This will print:
id 1
name Happy feet
age 25
*/

let animales = ['Happy feet', 'Dragon', 'Kangaroo',]; // Declares an array "animales" with 3 elements.
for (let índice in animales) {
    console.log(índice, animales[índice]);
}
/* Also uses a for...in loop to iterate over the array by its indices.

The variable "índice" will take the values '0', '1', and '2' (as strings) for each position.

Each element is accessed using animales[índice] and printed to the console.

This will print:
0 Happy feet
1 Dragon
2 Kangaroo
*/