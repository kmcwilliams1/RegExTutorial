const { json } = require("stream/consumers")

const answerEl = document.querySelector('#lessonAnswer')
const previousQuestionEl = document.querySelector('#lessonPrevious')
const nextQuestionEl = document.querySelector('#lessonNext')


function checkAnswer() {
    let answer = answerEl.value
    console.log(answer)
    if (answerEl.value === Lesson.answer) {
        nextQuestionEl.style.color = "green";
        nextQuestionEl.addEventListener('click')
    }
}