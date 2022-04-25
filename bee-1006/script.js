// MÉDIA 2

var input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n')

const notaA = Number(values.shift()).toFixed(1) * 2
const notaB = Number(values.shift()).toFixed(1) * 3
const notaC = Number(values.shift()).toFixed(1) * 5

const media = ((notaA + notaB + notaC) / 10).toFixed(1)

console.log(`MEDIA = ${media}`)