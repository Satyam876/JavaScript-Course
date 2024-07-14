let randomNumber = parseInt(Math.random()*100 + 1)
// console.log(randomNumber)

const submit = document.querySelector('#submitBtn')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.prevGuess')
const remainingGuess = document.querySelector('.remainingGuess')
const finalResult = document.querySelector('.finalResult')
const startOver = document.querySelector('.resultWrapper')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess))
        alert('Please Enter a Valid Guess')
    else if(guess < 1)
        alert('Please Enter a Valid Guess')
    else if(guess > 100)
        alert('Please Enter a Valid Guess')
    else{
        prevGuess.push(guess)
        if(numGuess > 10)
        {
            displayGuess(guess)
            displayMessage(`No attempts left ! Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}



function checkGuess(guess){
    if(guess == randomNumber)
        displayMessage('You guesses it right !')
    else if(guess < randomNumber)
        displayMessage('Your guess was TOOoo low')
    else if(guess > randomNumber)
        displayMessage('Your guess was TOOoo high')
}



function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess} `;
    numGuess++;
    remainingGuess.innerHTML = `${11 - numGuess}`
}


function displayMessage(message){
    finalResult.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<button id="newGameBtn">Start New Game</button>`
    startOver.append(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameBtn = document.querySelector('#newGameBtn')

    newGameBtn.addEventListener('click',()=>{
        randomNumber = parseInt(Math.random()*100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remainingGuess.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}