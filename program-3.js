// Write a JavaScript function which taken an array as an argument and returns sorted array in ascending order.

// Sample Input: [ -3, 8, 7, 6, 5, -4, 3, 2, 1];
// Expected Output: [ -4, -3, 1, 2, 3, 5, 6, 7, 8]
const sortAsc = (arr) => {
 return arr.sort((a, b) => a - b);
};
const input = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sortAsc(input));

