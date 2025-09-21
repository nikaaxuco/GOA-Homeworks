


const myMap = new Map([
  ['name', 'nika'],   
  ['age', 14],        
  ['city', 'rustavi'],
]);


console.log('Size:', myMap.size);


for (const [key, value] of myMap.entries()) {
  
  console.log(`${key}:`, value);
}


console.log('Has "age"?', myMap.has('age'));



