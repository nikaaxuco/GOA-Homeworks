
const numbers1 = [2, 4, 6, 8, 10];
const allEven = numbers1.every(num => num % 2 === 0);
console.log("Task 1 - All numbers are even:", allEven);


const strings = ["hello", "world", "JavaScript", "code", "programming"];
const hasLongString = strings.some(str => str.length > 5);
console.log("Task 2 - Has string longer than 5 characters:", hasLongString);


const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers = [];
numbers2.forEach(num => {
    doubledNumbers.push(num * 2);
});
console.log("Task 3 - Original numbers:", numbers2);
console.log("Task 3 - Doubled numbers:", doubledNumbers);


const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 30 },
    { name: "Diana", age: 22 }
];
const allAdults = users.every(user => user.age >= 18);
console.log("Task 4 - All users are adults (18+):", allAdults);


const products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 15 },
    { name: "Keyboard", price: 45 },
    { name: "Monitor", price: 200 }
];
const hasAffordableProduct = products.some(product => product.price < 20);
console.log("Task 5 - Has affordable product (< $20):", hasAffordableProduct);


console.log("Additional Test Cases");


const mixedNumbers = [1, 2, 3, 4, 5];
const allEvenMixed = mixedNumbers.every(num => num % 2 === 0);
console.log("Mixed numbers all even:", allEvenMixed);


const shortStrings = ["hi", "bye", "ok", "yes", "no"];
const hasLongStringShort = shortStrings.some(str => str.length > 5);
console.log("Short strings have long string:", hasLongStringShort);


const mixedAgeUsers = [
    { name: "Teen", age: 16 },
    { name: "Adult", age: 25 }
];
const allAdultsMixed = mixedAgeUsers.every(user => user.age >= 18);
console.log("Mixed age users all adults:", allAdultsMixed);


const expensiveProducts = [
    { name: "Gold Watch", price: 500 },
    { name: "Diamond Ring", price: 1000 }
];
const hasAffordableExpensive = expensiveProducts.some(product => product.price < 20);
console.log("Expensive products have affordable:", hasAffordableExpensive);