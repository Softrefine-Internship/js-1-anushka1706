// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")
const countFreq = (arr) => {
  const freq = new Map();
  arr.forEach((item) => {
    freq.has(item) ? freq.set(item, freq.get(item) + 1) : freq.set(item, 1);
  });
  let max = -Infinity;
  let item;
  console.log(freq)
  for (const [key, value] of freq) {
    if (value > max) {
      max = value;
      item = key;
    }
  }
  console.log(item, `${max} times`);
};
countFreq([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
