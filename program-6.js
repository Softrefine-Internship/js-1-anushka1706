// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]
const removeDuplicate = (arr1, arr2) => {
  const mergedArr = arr1.concat(arr2);
  const newArr = [];
  mergedArr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];
console.log(removeDuplicate(arr1, arr2));
