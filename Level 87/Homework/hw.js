

function XO(str) {
  
  const lower = String(str).toLowerCase();


  const xCount = (lower.match(/x/g) || []).length;
  const oCount = (lower.match(/o/g) || []).length;

  return xCount === oCount;
}


if (typeof module !== 'undefined') {
  module.exports = XO;
}


