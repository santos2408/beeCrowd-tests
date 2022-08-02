// Intervalo

/*

Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

Entrada
O arquivo de entrada contém um número com ponto flutuante qualquer.

Saída
A saída deve ser uma mensagem conforme exemplo abaixo.

*/

var input = require('fs').readFileSync('stdin', 'utf8');

const [ id, quantity ] = input.split(' ').map(number => Number(number))

const showTotalPrice = (quantity, price) => {
  const totalPrice = (quantity * price).toFixed(2)
  console.log(`Total: R$ ${totalPrice}`)
}

switch (id) {
  case 1:
    showTotalPrice(quantity, 4.00)
    break
  case 2:
    showTotalPrice(quantity, 4.50)
    break
  case 3:
    showTotalPrice(quantity, 5.00)
    break
  case 4:
    showTotalPrice(quantity, 2.00)
    break
  case 5:
    showTotalPrice(quantity, 1.50)
    break
}