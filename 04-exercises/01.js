/* Long form */
// function whichIsGreater(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// let greater = whichIsGreater(10, 5);

// console.log(greater);

// Short form
function whichIsGreater(a, b) { // Defines a function named whichIsGreater
    // that takes two parameters, a and b.
    return (a > b) ? a : b;
} // Inside the function body, we have a return statement using
  // the ternary operator.
  // It evaluates the condition (a > b). If true, it returns the value of a.
  // Otherwise, it returns the value of b.
  // Essentially, it returns whichever parameter holds the greater value.

let greater = whichIsGreater(10, 5);
// We then call the function whichIsGreater(), passing the arguments 10 and 5.
// The result is stored in the variable 'greater'.
console.log(greater);
// Finally, we use console.log to print the value of the 'greater' variable.
// In this case, since 10 is greater than 5, the number 10 will be printed.
// This is a simple function to find the greater of any two given values.