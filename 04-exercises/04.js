/**
 * Create a program that prints odd numbers.
 */
let i = 0; /* Initializes a counter variable i to 0. */
while (i <= 10) { /* Opens a while loop that runs as long as i is less than or equal to 10. */
    if (i % 2 !== 0) { /* Inside the loop, checks whether i is odd.
                        This is done using the modulo operator (%),
                        verifying if the remainder is not zero. */
        console.log('odd', i); /* If i is odd, it prints the word 'odd' followed by the current value of i. */
    }
    i++; /* Increments i by 1 to proceed to the next number in the sequence. */
} /* The while loop ends when i reaches 11. */

/* In summary, this algorithm iterates from 0 to 10 using a while loop,
identifies odd numbers using the modulo operator (%), and prints them to the console.
It's an effective way to display only the odd numbers within that range. 
*/