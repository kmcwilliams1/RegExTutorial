// const previousQuestionEl = document.querySelector('#lessonPrevious')
// const nextQuestionEl = document.querySelector('#lessonNext')
const checkmarkEl = document.getElementById("checkmark");
const xmarkEl = document.getElementById("xmark");
const checkAnswerEl = document.querySelector('#checkAnswer')
checkAnswerEl.addEventListener("click" , checkAnswer)
const lessonEl = document.querySelector('.lesson')
function checkAnswer() {
    const answerEl = document.querySelector('#lessonAnswer')
    console.log(this.dataset.value)
    console.log(answerEl.value)
    if (answerEl.value === this.dataset.value) {
        checkmarkEl.classList.remove('hidden');
    } else {
        xmarkEl.classList.remove('hidden');
    }
};
