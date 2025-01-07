// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]
const merge = (arr1, arr2) => {
  const mergedArr = arr1.concat(arr2);
  return mergedArr.sort((a, b) => a - b);
};
const arr1 = [3, 5, 1];
const arr2 = [4, 2];
console.log(merge(arr1, arr2));
