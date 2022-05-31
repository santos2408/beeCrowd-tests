// GASTO DE COMBUSTÍVEL

var input = require('fs').readFileSync('stdin', 'utf8');

const notas = [100, 50, 20, 10, 5, 2, 1]
let value = parseInt(input.split())

const getNotasNecessarias = (quantidadeNotas, nota) => {
  console.log(`${quantidadeNotas} nota(s) de R$ ${nota.toFixed(2).replace('.', ',')}`)
}

console.log(value)

notas.forEach(nota => {
  const quantidade = Math.floor(value / nota)
  getNotasNecessarias(quantidade, nota)
  value = value % nota
})