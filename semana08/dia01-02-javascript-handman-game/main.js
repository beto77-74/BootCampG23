const elMaskedWord = document.querySelector('.hangman__maskedword')
const elButtons = document.querySelector('.hangman__buttons')
const elResult = document.querySelector('.hangman__results')

const ANSWER_WORD = 'Javascript'

const word = ANSWER_WORD.toUpperCase()

const ALPHABET = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index))

let correctGuess = ''
let tries = 0



/*for (let i = 65; i <= 90; i++) {
    const button = document.createElement('button');
    button.textContent = String.fromCharCode(i);
    container.appendChild(button);
}*/
