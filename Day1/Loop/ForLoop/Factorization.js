let number = parseInt(process.argv[2]);

if (isNaN(number) || number <= 1) {
  console.log("Please provide a valid number greater than 1.");
} else {
  let factors = [];
  for (let i = 2; i <= Math.sqrt(number); i++) {
    while (number % i === 0) {
      factors.push(i);
      number /= i;
    }
  }
  if (number > 1) {
    factors.push(number);
  }

  console.log(`Prime factors: ${factors.join(", ")}`);
}
