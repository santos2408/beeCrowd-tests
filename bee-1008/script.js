// SALÁRIO

var input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n')

const workerNumber = parseInt(values.shift())
const workedHours = parseInt(values.shift())
const valuePerWorkedHours = parseFloat(values.shift())
const salary = (workedHours * valuePerWorkedHours).toFixed(2)

console.log(`NUMBER = ${workerNumber}`)
console.log(`SALARY = U$ ${salary}`)