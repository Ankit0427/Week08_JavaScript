const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let low = 1;
let high = 100;
let guess;

const askQuestion = () => {
  guess = Math.floor((low + high) / 2);
  rl.question(`Is the magic number ${guess}? (Enter 'higher', 'lower', or 'correct'): `, (answer) => {
    if (answer === 'higher') {
      low = guess + 1;
      askQuestion();
    } else if (answer === 'lower') {
      high = guess - 1;
      askQuestion();
    } else if (answer === 'correct') {
      console.log(`Magic number is ${guess}`);
      rl.close();
    } else {
      console.log("Invalid input. Please enter 'higher', 'lower', or 'correct'.");
      askQuestion();
    }
  });
};

askQuestion();
