// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]
// const union = (arr1, arr2) => {
//   const c = [];
//   for (let i = 0; i < arr1.length; i++) {
//     c.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     let found = false;
//     for (let j = i + 1; j < arr2.length; j++) {
//       if (arr2[i] === c[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       c.push(arr2[i]);
//     }
//   }
//   return c;
// };
const removeDuplicate = (arr1) => {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr1[i + 1]) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
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
  return removeDuplicate(arr);
};
const union = (arr1, arr2) => {
  const c = [];
  for (let i = 0; i < arr1.length; i++) {
    c.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    let found = false;

    for (let j = 0; j < c.length; j++) {
      if (arr2[i] === c[j]) {
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
const arr2 = [3, 100, 100, 3, 2, 1, 10];
console.log(union(arr1, arr2));
