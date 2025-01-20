// Write a JavaScript program to clone an array.
function cloneArr(arr) {
  const clonedArray = [];
  for (const i of arr) {
    if (i.length > 1) {
      cloneArr(i);
    }
    clonedArray.push(i);
  }
  return clonedArray;
}
const arr = [2, 5, [5, 77], 5, 7];
const arr1 = [2, 5, [5, [77, 88]], 5, 7];
console.log(cloneArr(arr));
console.log(cloneArr(arr1));
