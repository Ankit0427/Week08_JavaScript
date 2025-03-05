let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 900) + 100);
}

arr.sort((a, b) => a - b);

let secondLargest = arr[arr.length - 2];
let secondSmallest = arr[1];

console.log("Array: " + arr);
console.log("Second Largest: " + secondLargest);
console.log("Second Smallest: " + secondSmallest);
