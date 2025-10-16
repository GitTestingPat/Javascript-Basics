/*
Create a program that returns the smallest and largest numbers in an array.
*/
let array = [2, 5, 7, 15, 15, -5, -100, 55];
/* Defines an array containing several unordered numeric elements. */

function getMinAndMax(array) { /* Declares the function getMinAndMax(),
                                  which takes the array to be processed as input. */
    let min = array[0];
    let max = array[0];
    /* Initializes two variables:
       'min' and 'max' with the first element of the array. */

    for (let number of array) { /* Iterates through the entire array,
                                element by element, using a for...of loop
                                with the variable 'number'. */
        min = min < number ? min : number;
        max = max > number ? max : number;
        /* In each iteration, 'min' and 'max' are compared with the current 'number'.
        Using the ternary operator, the smallest and largest values are updated
        accordingly. By the end of the loop, the minimum and maximum values
        will have been determined. */
    }

    return [min, max]; /* Returns an array containing these two values: [min, max]. */
}

let minMax = getMinAndMax(array);
console.log(minMax);
/* Prints the array [-100, 55], which are the minimum and maximum values, respectively. */