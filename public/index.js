const answerEl = document.querySelector('.answer')
const previousQuestionEl = document.querySelector('.previous')
const nextQuestionEl = document.querySelector('.next')

if(answerEl === correctAnswer){
    nextQuestionEl.addEventListener('click')
}