
class Book {
  constructor(title, author) {
    this.title = String(title);
    this.author = String(author);
    this.isAvailable = true;
  }


  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return `you borrowed ${this.title}`;
    }
    return `sorry, ${this.title} is not available.`;
  }
}


