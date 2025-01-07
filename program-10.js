// There are two arrays with individual values. Write a JavaScript program to
// compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]
const sumOfArr = (arr1, arr2) => {
  const n = Math.max(arr1.length, arr2.length);
  let sum = 0;
  const result = [];
  for (let i = 0; i < n; i++) {
    const val1 = arr1[i] || 0;
    const val2 = arr2[i] || 0;
    result.push(val1 + val2);
  }
  return result;
};
const arr1 = [1, 0, 2, 3, 4];
const arr2 = [3, 5, 6, 7, 8, 13];
console.log(sumOfArr(arr1, arr2));
