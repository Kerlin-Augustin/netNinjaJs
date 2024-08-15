const correctAnswers = ['A','B','A','B']
const quizForm = document.querySelector('.quiz-form')
const quizLength = correctAnswers.length

quizForm.addEventListener('submit', e => {
  console.log(e)
  e.preventDefault()
  let score = 0;
  const userAnswers = [quizForm.q1.value, quizForm.q2.value, quizForm.q3.value, quizForm.q4.value]

  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score++
    }
  })
  score = (score / quizLength) * 100
  console.log(`${score}%`)


})