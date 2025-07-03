
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  
  let positiveCount = 0;
  let negativeSum = 0;
  
  for (let num of input) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeSum += num;
    }
  }
  
  return [positiveCount, negativeSum];
}
