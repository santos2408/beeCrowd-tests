// DIFERENÇA

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const values = input.split('\n')

const a = Number(values.shift())
const b = Number(values.shift())
const c = Number(values.shift())
const d = Number(values.shift())

const difference = (a * b) - (c * d)

console.log(`DIFERENCA = ${difference}`)