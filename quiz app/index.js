const quizData = [
    {
        question: 'What is the most used browser in 2022?',
        a: 'Chrome',
        b: 'Safari',
        c: 'Edge',
        d: 'Firefox',
        correct: 'a'
    }, {
        question: 'What was the most used programming language in 2019?',
        a: 'C',
        b: 'JavaScript',
        c: 'Python',
        d: 'Java',
        correct: 'd'
    }, {
        question: 'What is the most valuable company in the world 2022?',
        a: 'Alphabet',
        b: 'Apple',
        c: 'Saudi Aramco', 
        d: 'Microsoft',
        correct: 'c'
    }, {
        question: 'Who is the President of US?',
        a: 'Donald Trump',
        b: 'Joe Biden',
        c: 'Brack Obama',
        d: 'Putin',
        correct: 'b'
    }, {
        question: 'Who was the richest person in 2021?',
        a: 'Jeff Bezos',
        b: 'Elon Musk',
        c: 'Bill Gates',
        d: 'Bernard Arnault & family',
        correct: 'a'
    }
]

const answersEls = document.querySelectorAll('.answer')
const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const btnEl = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

function loadQuiz() {

    deselectAnswer()

    let quizCurrentData = quizData[currentQuiz]

    questionEl.innerHTML = quizCurrentData.question

    a_text.innerText = quizCurrentData.a
    b_text.innerText = quizCurrentData.b
    c_text.innerText = quizCurrentData.c
    d_text.innerText = quizCurrentData.d
}

function getSelected() {

    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer;

}

function deselectAnswer() {

    answersEls.forEach((answerEl) => {
        answerEl.checked = false
    })

}

btnEl.addEventListener('click', function() {

    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. 🎉</h2> <button onclick="location.reload()">Reload</button>`
        }
    }

})

loadQuiz()