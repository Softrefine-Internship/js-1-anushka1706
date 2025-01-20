// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];
const flatenArray = (arr) => {
  const flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      let nestedArray = flatenArray(arr[i]);
      for (let j = 0; j < nestedArray.length; j++) {
        flatArr.push(nestedArray[j]);
      }
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
};
const inputArray = [1, 2, [3, 4], [5, [6, 7]]];
console.log(flatenArray(inputArray));
