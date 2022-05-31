// CONVERSÃO DE TEMPO

var input = require('fs').readFileSync('stdin', 'utf8');

const value = Number(input.split())

const convertToHours = value / 3600
const converToMinutes = value % 3600 / 3600 * 60
const convertToSeconds = value % 3600 / 3600 * 60 % 1 * 60

const hours =  Math.floor(convertToHours)
const minutes = Math.floor(converToMinutes)
const seconds = Math.round(convertToSeconds)

console.log(`${hours}:${minutes}:${seconds}`)