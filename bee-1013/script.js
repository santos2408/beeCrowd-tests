// MAIOR NÚMERO

var input = require('fs').readFileSync('stdin', 'utf8');

const values = input.split(/\s\n?/).map(number => Number(number))

const orderedNumbers = values.sort((item1, item2) => item1 - item2)
const higherNumber = orderedNumbers[orderedNumbers.length - 1]

const resultMessage = `${higherNumber} eh o maior`
console.log(resultMessage)