const answerEl = document.querySelector('.answer')
const previousQuestionEl = document.querySelector('.previous')
const nextQuestionEl = document.querySelector('.next')





function checkAnswer() {
    console.log(questions[currentIndex].correctAnswer)
    if (answerEl.value === questions[currentIndex].correctAnswer) {
        button.style.color = "green";
        nextQuestionEl.addEventListener('click')
    }
}