// Coordenadas de um Ponto

/*

Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).

Se o ponto estiver na origem, escreva a mensagem “Origem”.

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.
Entrada

A entrada contem as coordenadas de um ponto.
Saída

A saída deve apresentar o quadrante em que o ponto se encontra.


*/

var input = require('fs').readFileSync('stdin', 'utf8');

const [ x, y ] = input.split(' ').map(point => Number(point))

const getCoordinates = (x, y) => {
  let result = 'Origem'

  if (x > 0 && y > 0) {
    return result = 'Q1'
  }

  if (x < 0 && y > 0) {
    return result = 'Q2'
  }

  if (y < 0 && x < 0) {
    return result = 'Q3'
  }

  if (y < 0 && x > 0) {
    return result = 'Q4'
  }

  if (y > 0 && x === 0 || y < 0 && x === 0) {
    return result = 'Eixo Y'
  }

  if (x > 0 && y === 0 || x < 0 && y === 0) {
    return result = 'Eixo X'
  }

  return result
}

console.log(getCoordinates(x, y))

