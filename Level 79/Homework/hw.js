
// გლობალური ცვლადის მაგალითი: 'score' გამოცხადებულია ზედა დონეზე და ხელმისაწვდომია ფუნქციაშიც
let score = 0;
function increaseScore() { score += 10; }
increaseScore();
increaseScore();
console.log('1) Final score:', score);


function secretCode() {
  // ლოკალური ცვლადის მაგალითი: 'code' არსებობს მხოლოდ ამ ფუნქციის შიგნით
  const code = '1234';

}
secretCode();
try {
  // აქ 'code'-ზე წვდომა შეცდომას აგდებს, რადგან ის ლოკალურია და გლობალურად არ არსებობს
  console.log('2) code outside function:', code);
} catch (err) {
  console.log('2) Accessing code outside throws:', err.message);
}


// გლობალური 'name'
const name = 'World';
function greet() {
  // ლოკალური 'name' ჩრდილავს გლობალურს ამ ფუნქციის ფარგლებში
  const name = 'Alice';
  console.log('3) inside greet name =', name);
}
greet();
console.log('3) outside name =', name);


function counterGame() {
  // 'counter' არის ლოკალური — ყოველი გამოძახებისას თავიდან იქმნება და გარეთ მიუწვდომელია
  let counter = 0; 
  counter += 1;
  console.log('4) counterGame call ->', counter);
}
counterGame();
counterGame();
counterGame();


function sloppyAssign() {
  // გაფრთხილება: 'oopsVar' აქ იქმნება გლობალურად, რადგან let/const არ არის — ცუდი პრაქტიკაა
  oopsVar = 42; 
}
sloppyAssign();
console.log('5) oopsVar value outside:', oopsVar);


const addArrow = (a, b) => a + b;
console.log('11) addArrow(2, 3) =', addArrow(2, 3));


const double = n => n * 2;
console.log('12) double(5) =', double(5));


const firstChar = str => (typeof str === 'string' && str.length > 0 ? str[0] : undefined);
console.log("13) firstChar('Hello') =", firstChar('Hello'));