// SOMA SIMPLES

var input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split('\n').map(item => parseInt(item))

const a = valores.shift()
const b = valores.shift()
const soma = a + b

console.log(`SOMA = ${soma}`)