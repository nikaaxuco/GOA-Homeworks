
const mixedData = [10, "apple", 5, "banana", 20, "cherry"];

const firstString = mixedData.find(element => typeof element === "string");
console.log("First string found:", firstString);

const fruits = ["mango", "orange"];
const isFruitsArray = Array.isArray(fruits);
console.log("Is fruits an array?", isFruitsArray);

const stringsOnly = mixedData.filter(element => typeof element === "string");
const stringLengths = Array.from(stringsOnly, str => str.length);
console.log("String lengths:", stringLengths);

const reversedData = [mixedData].reverse();
console.log("Reversed data:", reversedData);

const numbersOnly = mixedData.filter(element => typeof element === "number");
const sortedNumbers = numbersOnly.sort((a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers);

console.log("Summary");
console.log("Original mixed data:", mixedData);
console.log("First string:", firstString);
console.log("Is fruits array?", isFruitsArray);
console.log("String lengths:", stringLengths);
console.log("Reversed data:", reversedData);
console.log("Sorted numbers:", sortedNumbers);

