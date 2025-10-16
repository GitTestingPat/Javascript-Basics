// Name: width x height
// 8K 7680 x 4320
// 4K 3840 x 2160
// WQHD 2560 x 1440
// FHD 1920 x 1080
// HD 1280 x 720

/*
This code defines a function named nameResolution that takes two parameters:
'width' and 'height', representing the resolution dimensions of an image or screen.
*/
function nameResolution(width, height) {
	if (width >= 7680 && height > 4320) {
		return '8K'; /* Checks if width is greater than or equal to 7680px and height
		is greater than 4320px. If so, returns '8K' as it matches that resolution. */
	} else if (width >= 3840 && height > 2160) {
		return '4K'; /* Then checks for 4K resolution using its characteristic width
		and height values. */
	} else if (width >= 2560 && height > 1440) {
		return 'WQHD'; /* Continues evaluating other cases like WQHD, FHD, HD by comparing
		their respective width and height ranges. */
	} else if (width >= 1920 && height > 1080) {
		return 'FHD';
	} else if (width >= 1280 && height > 720) {
		return 'HD';
	} else {
		return false; /* Returns false if none of the cases match. */
	}
}

let resolution = nameResolution(1366, 768);
console.log(resolution);

/*
In summary, this function receives a resolution (width x height), compares it against
standard resolution ranges, and returns the corresponding resolution name—or false
if it doesn't match any known standard.
For the input 1366 x 768 px, it returns "HD".

Lines 30 and 31 are placed outside the curly braces of the nameResolution function due to
JavaScript syntax and scope rules.

In JavaScript, functions create a new scope (local scope). Everything inside the
function's curly braces {} belongs to that local scope. Code written outside those
braces—after the function definition—resides in the global scope.

Calling nameResolution(1366, 768) executes the function from the global scope.
Variables and logic defined inside nameResolution are not accessible outside
the function (i.e., they are not available in the global scope).

We then store the function's return value in a globally scoped variable named 'resolution'.

Finally, we can use console.log in the global scope to print that result.

In short, the function call and handling of its result occur outside the function
because they belong to the global scope, while the function definition itself
has its own isolated local scope.
*/