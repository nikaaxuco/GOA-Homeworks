
const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 300 },
    { name: "Headphones", price: 80 },
    { name: "Webcam", price: 60 },
    { name: "Smartphone", price: 800 },
    { name: "Tablet", price: 450 },
    { name: "Charger", price: 30 },
    { name: "Speaker", price: 120 }
];

console.log(products);

const names = products.map(product => product.name);
console.log(names);

const cheap = products.filter(product => product.price < 100);
console.log(cheap);

const total = products.reduce((sum, product) => sum + product.price, 0);
console.log(total);

const reversed = products.reduceRight((result, product) => {
    return result === "" ? product.name : result + " - " + product.name;
}, "");
console.log(reversed);

