
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }


  introduce() {
    return `მე ვარ ${this.name}, ${this.age} წლის და ვცხოვრობ ${this.city}-ში.`;
  }
}


const p1 = new Person("ნიკა", 14, "რუსთავი");


console.log(p1.introduce());

