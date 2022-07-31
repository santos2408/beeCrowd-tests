// Média 3

/*

Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela mensagem "Media: ". Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.". Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.". Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".

No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " seguido da média final para esse aluno.

Entrada
A entrada contém quatro números de ponto flutuante correspendentes as notas dos alunos.

Saída
Todas as respostas devem ser apresentadas com uma casa decimal. As mensagens devem ser impressas conforme a descrição do problema. Não esqueça de imprimir o enter após o final de cada linha, caso contrário obterá "Presentation Error".

*/

var input = require('fs').readFileSync('stdin', 'utf8');
const [ line1, line2 ] = input.split('\n')

const studentGrades = line1.split(' ').map(grade => Number(grade))
const examGrade = Number(line2)

const checkAverage = average => {
  const isApproved = average > 7.0
  const isFailed = average < 5.0

  if (isApproved) {
    showGrades(average, `Aluno aprovado.`)
    return
  }

  if (isFailed) {
    showGrades(average, `Aluno reprovado.`)
    return
  }

  const newAverage = recalcAverageGrades(average)
  let newMessage = ''

  if (newAverage >= 5) {
    newMessage = 'Aluno aprovado.'
  } else {
    newMessage = 'Aluno reprovado.'
  }

  showGrades(average, `Aluno em exame.`, newAverage, newMessage)
}

const calculateAverageGrades = grades => {
  const [ N1, N2, N3, N4 ] = grades
  const gradeSum = (N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)
  const weightSum = 2 + 3 + 4 + 1
  const average = Number((gradeSum / weightSum).toFixed(1))

  checkAverage(average)
}

const recalcAverageGrades = average => {
  return (average + examGrade) / 2
}

const showGrades = (average, message, newAverage = null, newMessage) => {
  const newAverageIsNull = newAverage === null

  if (newAverageIsNull) {
    console.log(`Media: ${average}`)
    console.log(message)
    return
  }

  console.log(`Media: ${average.toFixed(1)}`)
  console.log(message)
  console.log(`Nota do exame: ${examGrade.toFixed(1)}`)
  console.log(newMessage)
  console.log(`Media final: ${newAverage.toFixed(1)}`)
}

calculateAverageGrades(studentGrades)
