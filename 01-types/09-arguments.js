function sum(a, b) {
	console.log(arguments); /* This is not the best way to access
	all the values of the parameters in a function  */
	return a + b;
}

let result = sum(5, 6, 1, 2, 3);
console.log(result);
console.log(typeof sum);
/*  
IMPORTANT: The values introduced into the function
in this case and executed it call "Arguments". 
And the references of values inside of the functions, 
in this case 'a' in line 1, it call 'Parameters.'

Functions can receive multiple arguments and
multiple parameters.  
*/
