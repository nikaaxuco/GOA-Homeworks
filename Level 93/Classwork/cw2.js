

// Map ობიექტის შექმნა წინასწარ განსაზღვრული წყვილებით (გასაღები -> მნიშვნელობა)
const myMap = new Map([
  ['name', 'nika'],     // 'name' გასაღები, მნიშვნელობა 'nika'
  ['age', 14],          // 'age' გასაღები, მნიშვნელობა 14
  ['city', 'rustavi'],  // 'city' გასაღები, მნიშვნელობა 'rustavi'
]);

// Map-ის ზომის (ელემენტების რაოდენობის) გამოჩენა
console.log('Size:', myMap.size);

// ყველა ელემენტზე იტერაცია entries() საშუალებით (აბრუნებს [key, value] წყვილებს)
for (const [key, value] of myMap.entries()) {
  
  console.log(`${key}:`, value);
}


console.log('Has "age"?', myMap.has('age'));



