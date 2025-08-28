


function sumNumbers(...numbers) {
  

  if (numbers.length === 0) return 0;


  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumNumbers());           
console.log(sumNumbers(1, 2, 3));    
console.log(sumNumbers(10, -5, 2.5));


