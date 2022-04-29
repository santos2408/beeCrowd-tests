// DISTÂNCIA

var input = require('fs').readFileSync('stdin', 'utf8');

const distanceInKM = input.split('\n')

const totalDistance = distanceInKM.shift()
const totalDistanceInMinutes = (60 * totalDistance) / 30

console.log(`${totalDistanceInMinutes} minutos`)