// ÁREA

var input = require('fs').readFileSync('stdin', 'utf8');

const values = input.split(/\s\n?/).map(number => parseFloat(number))

const a = values[0]
const b = values[1]
const c = values[2]
const PI = 3.14159

const calculateArea = () => {
  return a * c / 2
}

const calculateCircleArea = () => {
  return PI * c ** 2
}

const calculateTrapezeArea = () => {
  return 1 / 2 * c * (a + b)
}

const calculateSquareArea = () => {
  return b ** 2
}

const calculateRectangleArea = () => {
  return a * b
}

const areaResult = calculateArea().toFixed(3)
const circleAreaResult = calculateCircleArea().toFixed(3)
const trapezeAreaResult = calculateTrapezeArea().toFixed(3)
const squareAreaResult = calculateSquareArea().toFixed(3)
const rectangleAreaResult = calculateRectangleArea().toFixed(3)

console.log(`TRIANGULO: ${areaResult}\nCIRCULO: ${circleAreaResult}\nTRAPEZIO: ${trapezeAreaResult}\nQUADRADO: ${squareAreaResult}\nRETANGULO: ${rectangleAreaResult}`)