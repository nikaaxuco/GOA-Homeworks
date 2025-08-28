
function squareDigits(num) {

  const absStr = Math.abs(num).toString();

  
  const squaredStr = absStr
    .split("")
    .map((ch) => {
      const digit = ch.charCodeAt(0) - 48; 
      return digit * digit; 
    })
    .join("");

 
  return Number(squaredStr);
}

// Examples
console.log(squareDigits(9119)); 
console.log(squareDigits(765));  
console.log(squareDigits(0));    
console.log(squareDigits(-12));  

