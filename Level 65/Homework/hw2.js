  function double(n) {
      if (n * 2) {
          return n * 2;
      }
  }

  function fullName(first, last) {
      if (first && last) {
          return first + " " + last;
      }
  }

  function isAdult(age) {
      if (age >= 18) {
          return "adult";
      } else {
          return "minor";
      }
  }

  function hasA(word) {
      if (word.toLowerCase().includes('a')) {
          return "yes";
      } else {
          return "no";
      }
  }

  function sameLastDigit(a, b) {
      if (a % 10 === b % 10) {
          return "same";
      } else {
          return "different";
      }
  }

  function evenOrOdd(n) {
      if (n % 2 === 0) {
          return "even";
      } else {
          return "odd";
      }
  }

  function isShort(text) {
      if (text.length >= 5) {
          return "long";
      } else {
          return "short";
      }
  }
