// Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
  const strRev = str.split("").reverse().join("");
  console.log(strRev);
}
reverseString("Hello World");

// Count Characters: Create a function that counts the number of characters in a string
function countCharacters(str) {
  return str.length;
}
let count = countCharacters("gomycode");
console.log(count);

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
let capitalizedSentence = capitalizeFirstLetter("i am a student at gomycode");
console.log(capitalizedSentence);

// Array Functions:
// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
let numbers = [5, 10, 15, 20, 25, 30];

function findMaxMin(numbers) {
  let max = numbers[0];
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    } else if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return "Max: ${max}, Min: ${min}";
}
findMaxMin(numbers);

// Sum of Array
function sumAll(arr) {
  let sum = 0;
  for (let a of arr) sum += a;
  return sum;
}
console.log(sumAll([5, 10, 15, 20]));

// Filter Array
