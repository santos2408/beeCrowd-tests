// SALÁRIO COM BÔNUS

var input = require('fs').readFileSync('stdin', 'utf8');

const values = input.split('\n')

const salesman = String(values.shift())
const salary = Number(values.shift())
const totalSales = Number(values.shift())

const bonusSalary = (totalSales * 15) / 100
const total = (salary + bonusSalary).toFixed(2)

console.log(`TOTAL = R$ ${total}`)