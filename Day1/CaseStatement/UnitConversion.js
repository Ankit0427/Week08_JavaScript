const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the length you want to convert (e.g., '5 feet to inch'): ", (input) => {
  const regex = /^(\d+(\.\d+)?)\s*(feet|inch|meter)\s*to\s*(feet|inch|meter)$/i;
  const match = input.trim().toLowerCase().match(regex);

  if (match) {
    const value = parseFloat(match[1]);
    const fromUnit = match[3];
    const toUnit = match[4];
    
    let result;

    if (fromUnit === 'feet' && toUnit === 'inch') {
      result = value * 12;
      console.log(`${value} feet is equal to ${result} inches.`);
    } else if (fromUnit === 'inch' && toUnit === 'feet') {
      result = value / 12;
      console.log(`${value} inches is equal to ${result} feet.`);
    } else if (fromUnit === 'feet' && toUnit === 'meter') {
      result = value * 0.3048;
      console.log(`${value} feet is equal to ${result} meters.`);
    } else if (fromUnit === 'meter' && toUnit === 'feet') {
      result = value / 0.3048;
      console.log(`${value} meters is equal to ${result} feet.`);
    } else {
      console.log("Invalid unit conversion. Please check the units.");
    }
  } else {
    console.log("Invalid input. Please follow the format 'value unit to unit'.");
  }

  rl.close();
});
