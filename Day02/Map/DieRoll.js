let dieRolls = {};
let rollCount = 0;

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

while (true) {
  let rollResult = rollDie();
  rollCount++;

  // Store the roll result in the dictionary (dieRolls)
  if (dieRolls[rollResult]) {
    dieRolls[rollResult]++;
  } else {
    dieRolls[rollResult] = 1;
  }

  // Check if any number has been rolled 10 times
  if (Object.values(dieRolls).includes(10)) {
    break;
  }
}

// Find the number that appeared maximum times
let maxRoll = Math.max(...Object.values(dieRolls));
let minRoll = Math.min(...Object.values(dieRolls));

let maxNum = Object.keys(dieRolls).find(key => dieRolls[key] === maxRoll);
let minNum = Object.keys(dieRolls).find(key => dieRolls[key] === minRoll);

console.log("Roll Results: ", dieRolls);
console.log("Number that appeared most times: " + maxNum + " (" + maxRoll + " times)");
console.log("Number that appeared least times: " + minNum + " (" + minRoll + " times)");
