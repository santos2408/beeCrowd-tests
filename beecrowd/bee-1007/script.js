// DIFERENÇA

/*
  Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

  Entrada
  O arquivo de entrada contém 4 valores inteiros.

  Saída
  Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const values = input.split('\n')

const a = Number(values.shift())
const b = Number(values.shift())
const c = Number(values.shift())
const d = Number(values.shift())

const difference = (a * b) - (c * d)

console.log(`DIFERENCA = ${difference}`)