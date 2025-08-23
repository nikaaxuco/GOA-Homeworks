
function stray(arr) {
  const [a, b, c] = arr;
  const common = (a === b || a === c) ? a : b; 
  for (const n of arr) {
    if (n !== common) return n;
  }
}
