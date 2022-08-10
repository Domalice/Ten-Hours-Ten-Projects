const pwEl = document.getElementById('pw')
const copyEl = document.getElementById('copy')
const lenEl = document.getElementById('len')
const upperEl = document.getElementById('upper')
const lowerEl = document.getElementById('lower')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')


const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_+='

function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getLowerLetters() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePw() {
    const len = lenEl.value
    let password = ''

    if(upperEl.checked) {
        password += getUpperCase()
    }

    if(lowerEl.checked) {
        password += getLowerLetters()
    }

    if(numberEl.checked) {
        password += getNumbers()
    }

    if(symbolEl.checked) {
        password += getSymbols()
    }

    for(let i = password.length; i<len; i++) {
        const x = generateX()
        password += x
    }

    if(len > 20) {
        pwEl.innerText = 'Maximum (20) exceeded'
    } else if(len < 8) {
        pwEl.innerText = 'At least 8 characteres'
    } else {
        pwEl.innerText = password
    }

}

function generateX() {
    const xs = []

    if(upperEl.checked) {
        xs.push(getUpperCase())
    }

    if(lowerEl.checked) {
        xs.push(getLowerLetters())
    }

    if(numberEl.checked) {
        xs.push(getNumbers())
    }

    if(symbolEl.checked) {
        xs.push(getSymbols())
    }

    if (xs.length === 0) return ''

    return xs[Math.floor(Math.random() * xs.length)]
}

generateEl.addEventListener('click', generatePw)

copyEl.addEventListener('click', () => {
    const textArea = document.createElement('textarea')
    const password = pwEl.innerText

    if(!password) {
        return
    }

    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    alert('Password copied to clipboard')
})