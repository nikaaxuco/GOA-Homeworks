
function gimme(triplet) {
  const middleValue = [...triplet].sort((a, b) => a - b)[1];
  return triplet.indexOf(middleValue);
}


