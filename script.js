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
const array = [1, -2, 3, 4, -5, 6];
const filtered = array.filter(function (value) {
  return value >= 0;
});
console.log(filtered);

// Mathematical Functions:
// Factorial
var number = 5;
var factorial = 1;
var i = 1;

while (i <= number) {
  factorial = factorial * i;
  i++;
}
console.log(factorial);

// Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
isPrime(3);

// Fibonacci Sequence
// function fibonacci(Number) {
//   let n1 = 0;
//   let n2 = 1;
//   let next;
//   next = n1 + n2;
//   const sequence = [];
//   while (next <= Number) {
//     sequence.push(next);
//     n1 = n2;
//     n2 = next;
//     next = n1 + n2;
//   }
//   return sequence;
// }
// fibonacci(30);

function fibonacci(num) {
  let n1 = 0;
  let n2 = 1;
  let next;
  const sequence = [];
  for (let i = 1; i <= num; i++) {
    sequence.push(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
  }
  return sequence;
}
fibonacci(10);
