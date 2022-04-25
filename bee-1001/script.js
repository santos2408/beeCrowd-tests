// EXTREMAMENTE BÁSICO

var input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split('\n').map(item => parseInt(item))

const A = valores[0]
const B = valores[1]
const X = A + B

console.log(`X = ${X}`)

