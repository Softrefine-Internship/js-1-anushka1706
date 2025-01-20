// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]
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
const diffArr = (arr1, arr2) => {
  const len1 = arr1.length;
  const len2 = arr2.length;
  const c = [];
  for (let i = 0; i < len1; i++) {
    let found = false;
    for (let j = 0; j < len2; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      c.push(arr1[i]);
    }
  }
  for (let i = 0; i < len2; i++) {
    let found = false;
    for (let j = 0; j < len1; j++) {
      if (arr2[i] === arr1[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      c.push(arr2[i]);
    }
  }

  return sortAsc(c);
};
const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];
console.log(diffArr(arr1, arr2));
