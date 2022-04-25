// CÁLCULO SIMPLES

var input = require('fs').readFileSync('stdin', 'utf8');

let values = input.split(/\s\n?/).map(item => parseFloat(item))

const calculateTotal = () => {
  return (firstItem.getTotal() + secondItem.getTotal()).toFixed(2)
}

const firstItem = {
  id: values.shift(),
  amount: values.shift(),
  value: values.shift(),
  getTotal () {
    return this.amount * this.value
  }
}

const secondItem = {
  id: values.shift(),
  amount: values.shift(),
  value: values.shift(),
  getTotal () {
    return this.amount * this.value
  }
}

console.log(`VALOR A PAGAR: R$ ${calculateTotal()}`)