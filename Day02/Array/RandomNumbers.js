let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 900) + 100);
}

let secondLargest = -Infinity;
let largest = -Infinity;
let secondSmallest = Infinity;
let smallest = Infinity;

arr.forEach(num => {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num < largest) {
    secondLargest = num;
  }

  if (num < smallest) {
    secondSmallest = smallest;
    smallest = num;
  } else if (num < secondSmallest && num > smallest) {
    secondSmallest = num;
  }
});

console.log("Array: " + arr);
console.log("Second Largest: " + secondLargest);
console.log("Second Smallest: " + secondSmallest);
