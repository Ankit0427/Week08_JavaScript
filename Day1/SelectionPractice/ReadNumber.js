const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number like 1, 10, 100, 1000, etc.: ", (number) => {
  number = parseInt(number);

  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
  } else if (number === 1) {
    console.log("Unit");
  } else if (number === 10) {
    console.log("Ten");
  } else if (number === 100) {
    console.log("Hundred");
  } else if (number === 1000) {
    console.log("Thousand");
  } else if (number === 10000) {
    console.log("Ten Thousand");
  } else if (number === 100000) {
    console.log("Lakh");
  } else {
    console.log("Invalid input. Please enter a power of 10 (1, 10, 100, 1000, etc.)");
  }

  rl.close();
});
