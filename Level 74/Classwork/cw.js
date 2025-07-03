
function past(h, m, s) {
  const hoursToMs = h * 60 * 60 * 1000;
  const minsToMs = m * 60 * 1000;
  const secsToMs = s * 1000;
  
  return hoursToMs + minsToMs + secsToMs;
}
