
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);


const numbers = [1, [2, 3], 4];


const [first, [second, third], fourth] = numbers;

console.log(first); 
console.log(second);
console.log(third); 
console.log(fourth);
