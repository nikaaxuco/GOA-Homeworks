

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("რიცხვების ჯამი:", sum);


for (let i = 1; i <= 10; i++) {
    console.log(`${i}-ის კვადრატი არის ${i * i}`);
}


let text = "გამარჯობა";
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


