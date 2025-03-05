let money = 100;
let betCount = 0;
let winCount = 0;

while (money > 0 && money < 200) {
  betCount++;
  let betResult = Math.random() < 0.5 ? "win" : "lose";
  if (betResult === "win") {
    winCount++;
    money++;
  } else {
    money--;
  }
}

console.log(`Gambler's final money: Rs ${money}`);
console.log(`Total bets made: ${betCount}`);
console.log(`Total wins: ${winCount}`);
