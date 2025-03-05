function isPalindrome(num) {
  let str = num.toString();
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

const num1 = 121;
const num2 = 122;

console.log(`Is ${num1} a palindrome? ${isPalindrome(num1)}`);
console.log(`Is ${num2} a palindrome? ${isPalindrome(num2)}`);
