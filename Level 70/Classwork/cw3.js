 
 
 function replace(s){
    let result = '';
    for(let i = 0; i < s.length; i++) {
      let char = s[i];
      if('aeiouAEIOU'.includes(char)) {
        result += '!';
      } else {
        result += char;
      }
    }
    return result;
  }



