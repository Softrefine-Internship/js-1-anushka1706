// Write a JavaScript program that accepts a number
// as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.
const addDash = (num) => {
  let newStr = "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0 && num[i + 1] % 2 == 0) {
      newStr += `${num[i]}-`;
    } else {
      newStr += num[i];
    }
  }
  return newStr;
};

const num = "025468";
console.log(addDash(num));
