// Fórmula de Bhaskara

/*

Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

*/

var input = require('fs').readFileSync('stdin', 'utf8');

const [ A, B, C ] = input.split(' ')
  .map(number => Number(number).toFixed(1))

const getDeltaValue = () => (B ** 2) - (4 * A * C)

const showEquation = (R1, R2) => {
  console.log(`R1 = ${R1}`)
  console.log(`R2 = ${R2}`)
}

const getBhaskaraEquation = () => {
  const delta = getDeltaValue()
  const calcIsNotPossible = delta < 0 || 2 * A === 0

  if (calcIsNotPossible) {
    console.log('Impossivel calcular')
    return
  }

  const R1 = ((-(B) + Math.sqrt(delta)) / (2 * A)).toFixed(5)
  const R2 = ((-(B) - Math.sqrt(delta)) / (2 * A)).toFixed(5)

  showEquation(R1, R2)
}

getBhaskaraEquation()