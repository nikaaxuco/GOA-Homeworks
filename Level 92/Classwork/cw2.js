
class Operative {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
  }

  getInfo() {
    return `Name: ${this.name}, Rank: ${this.rank}`;
  }


  static compareRanks(op1, op2) {
    if (op1.rank === op2.rank) return 0;
    return op1.rank > op2.rank ? 1 : -1;
  }
}


class EliteOperative extends Operative {
  constructor(name, rank, specialty) {
    super(name, rank); 
    this.specialty = specialty;
  }


  getInfo() {
    return `${super.getInfo()}, Specialty: ${this.specialty}`;
  }
}


const op1 = new Operative("Gio", 5);
const op2 = new EliteOperative("John", 7, "Recon");

console.log(op1.getInfo());
console.log(op2.getInfo());

console.log(Operative.compareRanks(op1, op2));


