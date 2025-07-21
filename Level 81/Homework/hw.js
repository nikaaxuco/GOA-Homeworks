  const person = {
      name: "გიორგი",
      age: 25,
      city: "თბილისი"
  };

  for (let key in person) {
      console.log(`${key}: ${person[key]}`);
  }

  const products = {
      apple: 2,
      banana: 3,
      orange: 4
  };

  let sum = 0;
  for (let item in products) {
      sum += products[item];
  }
  console.log("ჯამი:", sum);

  const mixedData = {
      name: "John",
      age: 30,
      isStudent: true,
      grade: 85,
      height: 175
  };

  for (let key in mixedData) {
      if (typeof mixedData[key] === 'number') {
          console.log(`${key}: ${mixedData[key]}`);
      }
  }

  const books = {
      "მეტრო 2033": "დმიტრი გლუხოვსკი",
      "1984": "ჯორჯ ორუელი",
      "მასტერი და მარგარიტა": "მიხეილ ბულგაკოვი"
  };

  const bookTitles = [];
  for (let title in books) {
      bookTitles.push(title);
  }
  console.log(bookTitles);

  const numbers = [1, 2, 3, 4, 5];
  let arraySum = 0;
  for (let num of numbers) {
      arraySum += num;
  }
  console.log("მასივის ჯამი:", arraySum);

  const text = "საქართველო";
  for (let char of text) {
      console.log(char);
  }

  const strings = ["cat", "elephant", "dog", "butterfly", "ant", "hippopotamus"];
  for (let str of strings) {
      if (str.length > 5) {
          console.log(str);
      }
  }

  const nums = [1, 2, 3, 4, 5];
  const squaredNums = [];
  for (let num of nums) {
      squaredNums.push(num * num);
  }
  console.log("კვადრატები:", squaredNums);
