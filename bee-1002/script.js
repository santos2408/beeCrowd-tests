// ÁREA DO CÍRCULO

var input = require('fs').readFileSync('stdin', 'utf8')

const radius = parseFloat(input)
const PI = 3.14159

const areaOfCircle = (PI * radius ** 2).toFixed(4)

console.log(`A=${areaOfCircle}`)