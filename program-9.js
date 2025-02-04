// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")
const countFreq = (arr) => {
  const freq = {};
  const max = {};
  arr.forEach((element) => {
    if (freq[element] !== undefined) {
      freq[element] += 1;
    } else {
      freq[element] = 1;
    }
  });
  let maxFreq = 0;
  for (const i in freq) {
    if (freq[i] >= maxFreq) {
      maxFreq = freq[i];
    }
  }
  for (const key in freq) {
    if (freq[key] === maxFreq) {
      max[key] = maxFreq;
      console.log(`${key} is ${maxFreq} times`)
    }
  }
};
countFreq([3,3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
