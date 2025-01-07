/* 
You have a long flowerbed in which some of the plots are planted, and some are not.
 However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, 
where 0 means empty and 1 means not empty, and an integer n,
 return true if n new flowers can be planted in the flowerbed without violating 
 the no-adjacent-flowers rule and false otherwise.
*/

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
const planted = (arr, n) => {
  if (arr.length === 0) return false;
  if (arr.length === 1) return arr[0] === 0 && n === 1;
  let emptySpace = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && arr[i - 1] === 0 && arr[i + 1] === 0) {
      emptySpace++;
      arr[i] = 1;
    }
  }
  return emptySpace >= n;
};
const flowerbed1 = [1, 0, 0, 0, 1];
const flowerbed2 = [1, 0, 0, 0, 1];
console.log(planted(flowerbed1, 1));
console.log(planted(flowerbed2, 2));
console.log(planted([0], 1));
