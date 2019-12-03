const fs = require('fs');

let text = fs.readFileSync('./input.txt', 'utf8');
const inputArray = text.split('\n');

const fuelPerModule = (mass) => Math.floor( mass / 3 ) - 2;
// Part I
let fuelNecessary = inputArray.reduce((totalFuelRequirement, mass) => {
  return totalFuelRequirement + fuelPerModule(mass);
}, 0)

// Part II
const fuelPerModuleRecurssive = (mass) => {
  let moduleFuel = fuelPerModule(mass)
  if ( moduleFuel <= 0 ) {
    return 0;
  } else {
    return moduleFuel + fuelPerModuleRecurssive(moduleFuel)
  }
}

let fuelNecessaryRecurrsive = inputArray.reduce((totalFuelRequirement, mass) => {
  return totalFuelRequirement + fuelPerModuleRecurssive(mass);
}, 0)