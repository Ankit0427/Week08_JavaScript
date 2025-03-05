let repeatedDigits = [];
for (let i = 0; i <= 100; i++) {
  let num = i.toString();
  if (num[0] === num[1]) {
    repeatedDigits.push(i);
  }
}
console.log("Repeated Digits: " + repeatedDigits);
