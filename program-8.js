// Write a JavaScript program that accepts a number
// as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.
const addDash = (num) => {
  let str = num.split("");
  for (let i = 0; i < str.length - 1; i++) {
    if (parseInt(str[i]) % 2 == 0 && parseInt(str[i + 1]) % 2 == 0) {
      str.splice(i + 1, 0, "-");
      i++;
    }
  }
  return str.join("");
};

const num = "025468";
console.log(addDash(num));
