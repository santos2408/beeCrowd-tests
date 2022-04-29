// ÁREA

var input = require('fs').readFileSync('stdin', 'utf8');

const values = input.split('\n').map(number => Number(number))

const travelledDistanceInKM = values.shift()
const spentTotalFue = values.shift().toFixed(2)

const averageSpendPerKM = (travelledDistanceInKM / spentTotalFue).toFixed(3)
console.log(`${averageSpendPerKM} km/l`)