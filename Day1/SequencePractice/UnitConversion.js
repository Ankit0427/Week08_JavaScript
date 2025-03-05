let inches = 42;
let feet = inches / 12;
console.log(feet);

let feetToMeters = 0.3048;
let lengthInFeet = 60;
let widthInFeet = 40;
let lengthInMeters = lengthInFeet * feetToMeters;
let widthInMeters = widthInFeet * feetToMeters;
console.log(lengthInMeters, widthInMeters);

let areaInFeet = lengthInFeet * widthInFeet;
let areaInAcres = (areaInFeet * 25) / 43560;
console.log(areaInAcres);
