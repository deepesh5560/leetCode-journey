let Input = "ac";

function longestPalindrome(s) {
  if (s.length < 2) {
    return s;
  }
  let left = 0;
  let right = 1;
  let result = '';

  while (left < s.length-1) {
    let str = s.slice(left, right );
    check( str);
  }

  function check(str) {
    let str2 =  str.split("").reverse().join('')
    if (str2 == str && str2.length > result.length ) {
        result = str
    }
    if (right === s.length) {
        left++;
        right = left+1
    }else{
        right++
    }
  }

  return result 
}

let x = longestPalindrome(Input);
console.log(x);
