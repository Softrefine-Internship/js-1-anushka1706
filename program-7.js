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
const removeDuplicates = (obj) => {
  const unique = [];
  obj.forEach((element) => {
    const key = JSON.stringify(element);
    if (!unique.includes(key)) {
      unique.push(key);
    }
  });
  const result = unique.map((ele) => {
    return JSON.parse(ele);
  });

  return result;
};
const array = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];
console.log(removeDuplicates(array));
