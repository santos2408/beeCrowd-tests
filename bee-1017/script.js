// GASTO DE COMBUSTÍVEL

var input = require('fs').readFileSync('stdin', 'utf8');

const values = input.split('\n')

const hoursTraveled = values.shift()
const averageSpeed = values.shift()
const KmPerLiters = 12
const distanceInKm = hoursTraveled * averageSpeed
const spentLiters = (distanceInKm / KmPerLiters).toFixed(3)

console.log(spentLiters)

