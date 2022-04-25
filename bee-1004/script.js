// PRODUTO SIMPLES

var input = require('fs').readFileSync('stdin', 'utf8');
var values = input.split('\n');

const firstValue = parseInt(values.shift())
const secondValue = parseInt(values.shift())
const prod = `PROD = ${firstValue * secondValue}`

console.log(prod)