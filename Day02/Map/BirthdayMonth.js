let individuals = [];
let birthMonths = {};

// Generate 50 individuals' birth months between 1992 and 1993
for (let i = 0; i < 50; i++) {
  let birthMonth = Math.floor(Math.random() * 12) + 1;  // Random month between 1 and 12
  individuals.push({ id: i + 1, month: birthMonth });

  // Store individuals in the corresponding birth month in the dictionary
  if (!birthMonths[birthMonth]) {
    birthMonths[birthMonth] = [];
  }
  birthMonths[birthMonth].push(i + 1);  // Store individual ID
}

// Print individuals with the same birth month
for (let month in birthMonths) {
  console.log(`Month ${month}: Individuals with birthday in this month: ${birthMonths[month].join(", ")}`);
}
