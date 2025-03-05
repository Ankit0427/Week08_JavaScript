const start = parseInt(process.argv[2]);
const end = parseInt(process.argv[3]);

if (isNaN(start) || isNaN(end) || start <= 1 || end <= 1 || start > end) {
  console.log("Please provide a valid range where start and end are greater than 1 and start is less than or equal to end.");
} else {
  const primes = [];
  
  for (let num = start; num <= end; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && num > 1) {
      primes.push(num);
    }
  }

  console.log(`Prime numbers between ${start} and ${end}:`, primes);
}
