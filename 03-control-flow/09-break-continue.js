let i = 0; // Declares and initializes the variable i to 0.
while (i < 6) { // Starts a while loop that runs as long as i is less than 6.
    i++; // Increments i by 1 at the beginning of each loop iteration.

    if (i === 2) {
        continue;
    } // The if statement checks whether i is equal to 2. If so, the 'continue' statement
      // skips the rest of the current iteration and jumps to the next loop cycle.

    if (i === 4) {
        break;
    } // Then it checks if i is equal to 4. If true, the 'break' statement
      // immediately exits the entire while loop.

    console.log(i);
}
/* If neither 'continue' nor 'break' was executed, the current value of i is printed to the console.

In summary, this loop prints the following values to the console:
1
3

When i reaches 2, that iteration is skipped due to 'continue'.
When i reaches 4, the loop terminates completely due to 'break'.
*/