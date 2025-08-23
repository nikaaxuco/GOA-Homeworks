const user = {
  name: "Nika",
  age: 20,
  country: "Georgia"
};


const { name, age } = user;

console.log(name); 
console.log(age);


const person = {
  id: 1,
  profile: {
    username: "nika123",
    email: "nika@example.com"
  }
};


const { profile: { username, email } } = person;

console.log(username);
console.log(email);


const product = {
  title: "Laptop",
  price: 1200
};


const { title: productName, price: productPrice } = product;

console.log(productName);
console.log(productPrice);
