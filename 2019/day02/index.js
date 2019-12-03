const fs = require('fs');

let text = fs.readFileSync('./input.txt', 'utf8');
const input = text.split(',').map((num) => Number(num));

const OPERATION_CODES = {
  HALT: 99,
  ADD: 1,
  MULTIPLY: 2
}

const intCalculator = (input, optionOne, optionTwo) => {
  let outputArray = JSON.parse(JSON.stringify(input));
  outputArray[1] = optionOne;
  outputArray[2] = optionTwo;
  let i = 0;
  let halt = false;
  while(!halt) {
    let opCode      = outputArray[i];
    let paramOneLoc = outputArray[i+1];
    let paramTwoLoc = outputArray[i+2];
    let changeLoc   = outputArray[i+3];

    switch(opCode){
      case OPERATION_CODES.HALT:
        halt = true;
        break;
      case OPERATION_CODES.ADD:
        outputArray[changeLoc] = outputArray[paramOneLoc] + outputArray[paramTwoLoc];
        i += 4;
        break;
      case OPERATION_CODES.MULTIPLY:
        outputArray[changeLoc] = outputArray[paramOneLoc] * outputArray[paramTwoLoc];
        i += 4;
        break;
      default:
        console.log('ERROR');
        halt = true;
        break;
    }
  }

  return outputArray;
}

console.log(intCalculator(input, 12, 2)[0])
