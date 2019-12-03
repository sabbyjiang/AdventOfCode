const fs = require('fs');

let text = fs.readFileSync('./input.txt', 'utf8');
const inputArray = text.split('\n');

const fuelPerModule = (mass) => Math.floor( mass / 3 ) - 2;
// Part I
let fuelNecessary = inputArray.reduce((totalFuelRequirement, mass) => {
  return totalFuelRequirement + fuelPerModule(mass);
}, 0)
