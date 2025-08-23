

const person = { name: "John", age: 30, city: "New York" };
const { name, age } = person;
console.log("name:", name, "age:", age);


const { name: userName, city: userCity } = person;
console.log("userName:", userName, "userCity:", userCity);


const student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    english: 92,
  },
};
const {
  grades: { math, english },
} = student;
console.log("math:", math, "english:", english);


const numbers = [1, 2, 3, 4, 5];
const [first, , third] = numbers; 
console.log("first:", first, "third:", third);


