const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter 1 for Celsius to Fahrenheit or 2 for Fahrenheit to Celsius conversion: ", (choice) => {
  if (choice !== '1' && choice !== '2') {
    console.log("Invalid selection. Please enter 1 or 2.");
    rl.close();
    return;
  }

  rl.question("Enter the temperature value: ", (value) => {
    let temp = parseFloat(value);

    // Check if input is within freezing and boiling points
    if (temp < 0 || temp > 100) {
      console.log("Temperature should be between 0°C (32°F) and 100°C (212°F).");
      rl.close();
      return;
    }

    switch (choice) {
      case '1': // Celsius to Fahrenheit
        let degF = (temp * 9/5) + 32;
        console.log(`${temp}°C = ${degF.toFixed(2)}°F`);
        break;
      case '2': // Fahrenheit to Celsius
        let degC = (temp - 32) * 5/9;
        console.log(`${temp}°F = ${degC.toFixed(2)}°C`);
        break;
    }
    rl.close();
  });
});
