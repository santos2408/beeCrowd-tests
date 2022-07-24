// NOTAS E MOEDAS

/*

  Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

  Entrada
  O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

  Saída
  Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

  Obs: Utilize ponto (.) para separar a parte decimal.

*/

var input = require('fs').readFileSync('stdin', 'utf8');
let value = Number(input).toFixed(2)

const bills = [100, 50, 20, 10, 5, 2]
const coins = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

const getNecessaryAmount = (quantidade, nota, currency) => {
  console.log(`${quantidade} ${currency}(s) de R$ ${nota.toFixed(2)}`)
}

console.log('NOTAS:')
bills.forEach(bill => {
  const billsAmount = Math.floor(value / bill)
  getNecessaryAmount(billsAmount, bill, 'nota')  
  value = (value % bill).toFixed(2)
})

console.log('MOEDAS:')
coins.forEach(coin => {
  const coinsAmount = Math.floor(value / coin)
  getNecessaryAmount(coinsAmount, coin, 'moeda')
  value = (value % coin).toFixed(2)
})