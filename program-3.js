// Write a JavaScript function which taken an array as an argument and returns sorted array in ascending order.

// Sample Input: [ -3, 8, 7, 6, 5, -4, 3, 2, 1];
// Expected Output: [ -4, -3, 1, 2, 3, 5, 6, 7, 8]
const sortAsc = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
const input = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sortAsc(input));
