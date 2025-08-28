
function collectArgs(...args) {
  return args;
}


function sumAll(...nums) {
  return nums.reduce((sum, n) => sum + Number(n), 0);
}


function excludeFirst(first, ...rest) {
  return rest;
}


function logExceptLast(...items) {
  if (items.length <= 1) return; 
  for (let i = 0; i < items.length - 1; i++) {
    console.log(items[i]);
  }
}


const arr = [1, 2, 3, 4, 5];
const [firstElement, secondElement, ...restArray] = arr;



const user = { name: 'Davit', age: 25, role: 'admin', active: true };
const { name, age, ...otherUserProps } = user;



function filterOut(target, ...values) {
  return values.filter((v) => v !== target);
}


class Logger {
  constructor(prefix, ...messages) {
    this.prefix = prefix;
    this.messages = messages; 
  }

  add(...msgs) {
    this.messages.push(...msgs);
  }

  clear() {
    this.messages = [];
  }

  logAll() {
    this.messages.forEach((m) => console.log(`${this.prefix} ${m}`));
  }
}


const data = [1, [2, 3, 4], 5];
const [one, [, ...lastTwoFromNested], five] = data;



function flatten(...args) {
  const result = [];
  for (const item of args) {
    if (Array.isArray(item)) {
      result.push(...flatten(...item));
    } else {
      result.push(item);
    }
  }
  return result;
}
