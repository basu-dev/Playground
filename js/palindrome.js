let a = 353;
let b = 344;

let res = (function isPalindrome(num) {
  let finalNumber = 0;
  while (num > 0) {
    rem = num % 10;
    num = parseInt(num / 10);
    finalNumber = finalNumber * 10 + rem;
  }
  return finalNumber == num;
})(b);
console.log(res);
