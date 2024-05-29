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
