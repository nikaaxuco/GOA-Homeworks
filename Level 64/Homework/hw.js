

function mathOperations(a, b) {
  return {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
    power: a ** b,
    modulo: a % b
  };
}


function sumOfSquares(a, b) {
  return (a ** 2) + (b ** 2);
}


function isEven(n) {
  return n % 2 === 0 ? "even" : "odd";
}


function repeatString(str, times) {
  return str.repeat(times);
}


function longerWord(word1, word2) {
  if (word1.length > word2.length) return word1;
  if (word2.length > word1.length) return word2;
  return "equal";
}


function toFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}


function isPositive(number) {
  return number > 0 ? "yes" : "no";
}
