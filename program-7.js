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
      if (
        arr[i].title === unique[j].title &&
        arr[i].author === unique[j].author
      ) {
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
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

console.log(removeDuplicates(arr));
