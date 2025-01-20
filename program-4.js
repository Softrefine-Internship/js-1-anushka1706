// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]
const sortAsc = (arr) => {
  for (let i = 0; i < arr.length; i++) {
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
const merge = (arr1, arr2) => {
  const len1 = arr1.length;
  const len2 = arr2.length;
  const max = len1 > len2 ? len1 : len2;
  const mergedArr = [];
  for (let i = 0; i < max; i++) {
    if (arr1[i] !== undefined) mergedArr.push(arr1[i]);
    if (arr2[i] !== undefined) mergedArr.push(arr2[i]);
  }
  return sortAsc(mergedArr);
};
const arr1 = [3, 5, 1];
const arr2 = [4, 2];
console.log(merge(arr1, arr2));
