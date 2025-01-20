// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]
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
const removeDuplicate = (arr1, arr2) => {
  const mergedArray = merge(arr1, arr2);
  const newArr = [];
  for(let i = 0;i<mergedArray.length;i++){
    if(mergedArray[i] !== mergedArray[i+1]){
      newArr.push(mergedArray[i])
    }
  }
  return newArr
};
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];
console.log(removeDuplicate(arr1, arr2));