// Which numbers are even?

let i = 0; // declares a variable i and initializes it to 0
while (i < 10) { // starts a while loop that runs as long as i is less than 10
    if (i % 2 == 0) { // inside the loop, this statement checks if i is even (remainder 0 when divided by 2)
        console.log('Even number', i); // if i is even, prints its value to the console
    } // ends the if statement
    i++; // increments i by 1
} // ends the while loop

console.log('Outside the while loop'); // prints a message after the loop ends, once i reaches 10