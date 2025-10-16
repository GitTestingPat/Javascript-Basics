/*
Create a program that returns the count
of positive numbers in an array.
*/
let numbers = [2, 5, 7, 15, -5, -100, 55];

function countPositives(numbers) {
    let count = 0;
    for (let number of numbers) {
        if (number > 0) {
            count++;
        }
    }
    return count;
}

let result = countPositives(numbers);
console.log(result);