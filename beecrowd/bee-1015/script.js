// DISTÂNCIA ENTRE DOIS PONTOS

var input = require('fs').readFileSync('stdin', 'utf8');

const values = input.split(/\s\n?/).map(item => Number(item))

const firstPoint = values.slice(0,2)
const secondPoint = values.slice(2)

const calculateDistanceBettweenTwoPoints = (firstPoint, secondPoint) => {
  const axis = {
    x1: firstPoint[0],
    x2: secondPoint[0],    
    y1: firstPoint[1],
    y2: secondPoint[1]
  }

  const xAxisCalculation = (axis.x2 - axis.x1) ** 2
  const yAxisCalculation = (axis.y1 - axis.y2) ** 2

  const distanceCalculation = Math.sqrt(xAxisCalculation + yAxisCalculation).toFixed(4)
  return distanceCalculation
}

console.log(calculateDistanceBettweenTwoPoints(firstPoint, secondPoint))
