// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]
const union = (arr1, arr2) => {
  const c = [...arr1];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (!c.includes(arr2[i])) {
      c.push(arr2[i]);
    }
  }
  c.sort((a,b)=> a-b)
  return c;
};
const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];
console.log(union(arr1, arr2));
