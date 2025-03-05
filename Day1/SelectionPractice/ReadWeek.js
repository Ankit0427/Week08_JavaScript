const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number between 1 and 7: ", (dayNumber) => {
  dayNumber = parseInt(dayNumber);

  if (dayNumber >= 1 && dayNumber <= 7) {
    switch(dayNumber) {
      case 1: console.log("Sunday"); break;
      case 2: console.log("Monday"); break;
      case 3: console.log("Tuesday"); break;
      case 4: console.log("Wednesday"); break;
      case 5: console.log("Thursday"); break;
      case 6: console.log("Friday"); break;
      case 7: console.log("Saturday"); break;
    }
  } else {
    console.log("Invalid input. Please enter a number between 1 and 7.");
  }

  rl.close(); // Close the readline interface
});
