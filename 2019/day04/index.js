const fs = require('fs');
const _  = require('lodash');

let text = fs.readFileSync('./input.txt', 'utf8');

let [ lowerBound, upperBound ] = text.split('-');

let count = 0;

const isValidPassword = (number) => {
  let numberAsArr = String(number).split('');
  let hasDouble = false;
  let neverDecreases = numberAsArr.reduce((check, currNumber, index) => {
    if(check && index + 1 < numberAsArr.length){
      hasDouble = hasDouble ? true : currNumber == numberAsArr[index + 1]
      return currNumber <= numberAsArr[index + 1]
    } else {
      return check;
    }
  }, true)

  let onlyDouble = _.includes(countsDict, 2)
  return hasDouble && neverDecreases;
}

for(let num = lowerBound; num <= upperBound; num++){
  if(isValidPassword(num)){
    count++;
  }
}

console.log(count);