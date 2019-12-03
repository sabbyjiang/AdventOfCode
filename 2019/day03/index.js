const fs = require('fs');
const _  = require('lodash');

let text = fs.readFileSync('./input.txt', 'utf8');

const [ wireOneStr, wireTwoStr ] = text.split('\n');

const wireOne = wireOneStr.split(',');
const wireTwo = wireTwoStr.split(',');

const getWireCoordinates = (wire) => {
  let currCoordinates = [0, 0]
  return wire.reduce((coordinates, instruction) => {
    let [currX, currY] = currCoordinates;
    let newCoordinates = [];
    let moveDirection = instruction.match(/[RLUD]/)[0];
    let moveUnits     = instruction.match(/\d+/)[0];
    for(let i = 0; i < moveUnits ; i++){
      switch(moveDirection){
        case 'L':
          currX--;
          break;
        case 'R':
          currX++;
          break;
        case 'U':
          currY++;
          break;
        case 'D':
          currY--;
          break;
        default:
          throw 'ERROR'
      }
      newCoordinates.push([currX, currY]);
    }
    currCoordinates = [currX, currY]
    return coordinates.concat(newCoordinates);
  }, [])
}

const wireOneCoordinates = _.without(_.uniq(getWireCoordinates(wireOne).map((coord) => `${coord[0]},${coord[1]}`)), '0,0')
console.log(wireOneCoordinates)
const wireTwoCoordinates = _.uniq(getWireCoordinates(wireTwo).map((coord) => `${coord[0]},${coord[1]}`))

const overlap = _.intersection(wireOneCoordinates, wireTwoCoordinates).sort()
const overlapDistances = overlap.map((coordString) => Math.abs(Number(coordString.split(',')[0])) + Math.abs(Number(coordString.split(',')[1])))
console.log(overlap);

// console.log(overlapDistances.sort((a, b) => a-b)[0]);