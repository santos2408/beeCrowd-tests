// MÉDIA 1

var input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n')

const notaA = Number(values.shift()).toFixed(1) * 3.5
const notaB = Number(values.shift()).toFixed(1) * 7.5
const media = ((notaA + notaB) / 11).toFixed(5)

console.log(media)