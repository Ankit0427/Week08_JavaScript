//Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPalindrome(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}

const num = 131; 

if (isPrime(num)) {
  console.log(`${num} is a prime number.`);
  const palindrome = getPalindrome(num);
  console.log(`Palindrome of ${num} is ${palindrome}`);

  if (isPrime(palindrome)) {
    console.log(`The palindrome number ${palindrome} is also prime.`);
  } else {
    console.log(`The palindrome number ${palindrome} is not prime.`);
  }
} else {
  console.log(`${num} is not a prime number.`);
}
