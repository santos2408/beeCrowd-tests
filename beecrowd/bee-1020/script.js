// IDADE EM DIAS

/*

  Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

  Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

  Entrada
  O arquivo de entrada contém um valor inteiro.

  Saída
  Imprima a saída conforme exemplo fornecido.

*/

var input = require('fs').readFileSync('stdin', 'utf8');

const valueInDays = Number(input.split())

const getYears = days => {
  return Math.floor(days / 365)
}

const getMonths = days => {
  return Math.floor((days % 365) / 30)
}

const getDays = days => {
  return Math.floor((days % 365) % 30)
}

const years = getYears(valueInDays)
const months = getMonths(valueInDays)
const days = getDays(valueInDays)

console.log(`${years} ano(s)\n${months} mes(es)\n${days} dia(s)`)