// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]
const diffArr = (arr1, arr2) => {
  const diff1 = arr1.filter((val) => !arr2.includes(val)); 
  const diff2 = arr2.filter((val) => !arr1.includes(val)); 

  const c = diff1.concat(diff2); 
  c.sort((a,b)=> a-b)
  return c;
};
const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];
console.log(diffArr(arr1, arr2));
