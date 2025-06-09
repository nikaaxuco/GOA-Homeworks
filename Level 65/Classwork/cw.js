  let person = {
      name: "Nika",
      age: 14,
      city: "Rustavi",
      hobby: "coding",
      surname: "Xucishvili",
      nationality: "Georgian",
    
      introduceMyself: function() {
          return `Hello, I am ${this.name}, ${this.age} years old ${this.nationality} ${this.surname}. I live in ${this.city} and I love ${this.hobby}.`;
      }
  };



