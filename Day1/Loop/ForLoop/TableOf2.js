const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
  console.log("Please provide a valid non-negative integer for n.");
} else {
  for (let i = 0; i <= n; i++) {
      console.log(`2^${i} = ${Math.pow(2, i)}`);
  }
}
