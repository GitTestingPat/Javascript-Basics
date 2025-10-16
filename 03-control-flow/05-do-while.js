// Which numbers are even?

let i = 2; // Declares the variable i and initializes it to 2.
while (i < 2) { // Starts a while loop that runs as long as i is less than 2. But since i is already 2,
                // this loop never executes.
    if (i % 2 == 0) {
        console.log('Even number', i);
    } // This if statement checks whether i is even. Since it's inside a while loop that never runs, this code is skipped.
    i++; // Increments i by 1 at the end of each iteration. But since the loop never runs, this line has no effect.
}

do {
    if (i % 2 == 0) {
        console.log('Even number', i);
    } // Closes the if statement
    i++; // Increments i by 1
} while (i < 2);
/* This loop does execute once, because a do-while loop runs the body first and checks the condition afterward.
The if statement checks if i is even (i is currently 2, so it is even).
Then i is incremented to 3 inside the loop.
After that, the condition (i < 2) is checked—but since i is now 3, the condition is false,
so the loop terminates after one iteration.
In summary, this code prints "Even number 2" exactly once and then ends.
*/