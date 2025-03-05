const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the value for a: ", (a) => {
  rl.question("Enter the value for b: ", (b) => {
    rl.question("Enter the value for c: ", (c) => {
      
      // Convert inputs to numbers
      a = parseFloat(a);
      b = parseFloat(b);
      c = parseFloat(c);

      // Perform the four operations
      let operation1 = a + b * c;
      let operation2 = a % b + c;
      let operation3 = c + a / b;
      let operation4 = a * b + c;

      // Find the maximum and minimum values
      let maxValue = Math.max(operation1, operation2, operation3, operation4);
      let minValue = Math.min(operation1, operation2, operation3, operation4);

      // Output the results
      console.log("Operation 1 (a + b * c):", operation1);
      console.log("Operation 2 (a % b + c):", operation2);
      console.log("Operation 3 (c + a / b):", operation3);
      console.log("Operation 4 (a * b + c):", operation4);

      console.log("Maximum value:", maxValue);
      console.log("Minimum value:", minValue);

      rl.close(); // Close the readline interface
    });
  });
});
