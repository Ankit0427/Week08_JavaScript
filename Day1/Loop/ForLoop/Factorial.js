const number = parseInt(process.argv[2]);

if (isNaN(number) || number < 0) {
  console.log("Please provide a valid non-negative integer.");
} else {
  let factorial = 1;
  if (number === 0) {
    factorial = 1;
  } else {
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
  }
  console.log(`${number}! = ${factorial}`);
}
