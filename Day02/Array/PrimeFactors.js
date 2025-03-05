function primeFactors(n) {
  let factors = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  if (n > 1) factors.push(n);
  return factors;
}

let n = 56;
let factors = primeFactors(n);
console.log("Prime Factors: " + factors);
