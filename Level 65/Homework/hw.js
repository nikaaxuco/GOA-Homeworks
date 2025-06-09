
let book = {
    title: "ვეფხისტყაოსანი",
    author: "შოთა რუსთაველი",
    year: 1189,
    genre: "პოემა",
    price: 25
};


console.log(book);


console.log(book.title);
console.log(book["author"]);
console.log(book.year);
console.log(book["genre"]);
console.log(book.price);


console.log(`წიგნი "${book.title}" დაწერილია ${book.author}-ის მიერ ${book.year} წელს, ჟანრი ${book.genre}, ღირებულება ${book.price} ლარი.`);


let student = {
    name: "გიორგი",
    age: 20,
    faculty: "კომპიუტერული მეცნიერება",
    course: 2,
    averageGrade: 91.5
};


console.log(student);


console.log(student.name);
console.log(student["age"]);
console.log(student.faculty);
console.log(student["course"]);
console.log(student.averageGrade);


console.log(`სტუდენტი ${student.name} არის ${student.age} წლის, სწავლობს ${student.faculty}-ის ფაკულტეტზე ${student.course} კურსზე და მისი საშუალო ქულაა ${student.averageGrade}.`);
