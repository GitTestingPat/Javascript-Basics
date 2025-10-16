let animals = ['Happy feet', 'Dragon', 'Puppy'];
// Declares the array "animales" with 3 elements.

for (let animal of animals) {
    console.log(animal);
}
// Uses a for..of loop to iterate over the "animales" array.
// For each element in the array (named "animal"), it prints its value using console.log.

let i = 0; // Declares and initializes the variable i to 0.

while (i < animals.length) {
    console.log(animals[i]);
    i++;
}
// Starts a while loop that iterates as long as i is less than the array's length.
// Inside the loop, it prints each element by accessing it with bracket notation (animales[i]).
// Then, it increments i by 1.

/* The while loop iterates over the array indices (0, 1, and 2) and prints each element
by its index using square brackets [].

When the entire code runs, the same elements are printed twice:

Happy feet
Dragon
Puppy
Happy feet
Dragon
Puppy

First, the for..of loop (line 4) executes and prints the three elements directly.
Then, the while loop runs, accessing each element by its index.
The line console.log(animales[i]); prints each animal again.

Therefore, after both loops complete, the console shows two identical groups of the three animals:
one from the for..of loop (iterating directly over values),
and another from the while loop (iterating by index).
*/