// Build a function that retrieves an element by its index,
// validating that the index is not negative and that the element exists in the array.
function getByIdx(array, idx) {
    /* Defines a function named getByIdx that takes two arguments:
    - array: the array from which we want to retrieve an element
    - idx: the index of the desired element */
    if (idx < 0 || idx >= array.length) {
        return 'Element does not exist';
    }
    /* Validates that the index is not negative and that it falls within
    the valid range of indices for the array (i.e., less than the array's length).
    If the index is invalid, returns an error message. */
    return array[idx];
    /* If the index is valid, returns the element at that position
    using array bracket notation. */
}

let result = getByIdx([1, 2], 1);
console.log(result);
    /* Calls the function with an array and index 1.
    Stores the returned value in a variable and logs it to the console.
    In this case, it outputs the number 2. 
    */