let i = 2; // Declares and initializes the variable i to 2.
while (i < 2) {
    if (i % 2 == 0) {
        console.log('Even number', i);
    }
    i++;
} // The while loop does not execute because i is already 2. All of its contents are skipped.

for (let i = 2; i < 10; i++) {
    if (i % 2 == 0) {
        console.log('Even number', i);
    }
}
/* Starts a for loop. It declares a new variable i (scoped to this loop) and initializes it to 2.
This variable only exists inside this for block.

The loop continues as long as i is less than 10.

Inside the loop, it checks whether i is even using the modulo operator (%).
If i is even, it prints a message with the current value of i.

Then, i is incremented by 1.

The loop repeats while i remains less than 10. Therefore, it prints the even numbers from 2 to 8.

In summary, this code outputs:

Even number 2
Even number 4
Even number 6
Even number 8
*/