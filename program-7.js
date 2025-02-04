// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]
const removeDuplicates = (arr) => {
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < unique.length; j++) {
      let isSame = true;

      for (const key in arr[i]) {
        if (arr[i][key] !== unique[j][key]) {
          console.log(arr[i][key]);
          isSame = false;
          break;
        }
      }
      if (isSame) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unique.push(arr[i]);
    }
  }
  return unique;
};
const arr = [
  { title: "C++", author: "Bjarne", name: "anushka"},
  { title: "Java", author: "James", name: "abc" },
  { title: "Python", author: "Guido", name: "anushka" },
  { title: "Java", author: "James", name: "abc" },
];

console.log(removeDuplicates(arr));
