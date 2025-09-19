
const baseElements = ['ვაშლი', 'ბანანი', 'ატამი'];


const repeated = [];
for (let i = 0; i < 100; i++) {
  repeated.push(...baseElements);
}

console.log('სულ ელემენტები:', repeated.length);


const unique = [...new Set(repeated)];
console.log('უნიკალური ელემენტები:', unique);
