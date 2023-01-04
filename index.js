// link game from html div
const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
let score = 0
// list array of genres with API id links
const genres = [
    {
        name: 'Books',
        id: 10
    },
    {
        name: 'Film',
        id: 11
    },
    {
        name: 'Music',
        id: 12
    },
    {
        name: 'Video Games',
        id: 15
    }
]

const levels = ['easy', 'medium', 'hard']
// link trivia API to add genre questions
function addGenre(genre) {
    const column = document.createElement('div')
    column.classList.add('genre-column')
    column.innerHTML = genre.name
    game.append(column)

    levels.forEach(level => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if (level === 'easy') {
            card.innerHTML = 100
        }
        if (level === 'medium') {
            card.innerHTML = 200
        }
        if (level === 'hard') {
            card.innerHTML = 300
            // sets point values for answering different level questions  
        }
        
        fetch(`https://opentdb.com/api.php?amount=1&category=${genre.id}&difficulty=${level}&type=boolean`)
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        // This code fetches the API so that the game can access the trivia questions/answers 
            .then(response => response.json())
            .then(data => {
            
                console.log(data)
                card.setAttribute('data-question', data.results[0].question)
                card.setAttribute('data-answer', data.results[0].correct_answer)
                card.setAttribute('data-value', card.getInnerHTML())
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
                // This code allows me to receive the data value of each card from their innerHTML 
            })
            .then(done => card.addEventListener('click', flipCard))

    })
}
genres.forEach(genre => addGenre(genre))


function flipCard() {
    this.innerHTML = ''
    this.style.fontSize = '15px'
    const textDisplay = document.createElement('div')
    const trueButton = document.createElement('button')
    const falseButton = document.createElement('button')
    trueButton.innerHTML = 'True'
    falseButton.innerHTML = 'False'
    trueButton.classList.add('true-button')
    falseButton.classList.add('false-button')
    trueButton.addEventListener('click', getResult)
    falseButton.addEventListener('click', getResult)
    textDisplay.innerHTML = this.getAttribute('data-question')
    // gets question to appear when card is clicked
    this.append(textDisplay, trueButton, falseButton)

    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click', flipCard))
    // this code prevents other cards from being clicked once one card has been flipped
}

function getResult() {
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', flipCard))

    const buttonCard = this.parentElement
    if (buttonCard.getAttribute('data-answer') === this.innerHTML) {
        score = score + parseInt(buttonCard.getAttribute('data-value'))
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
        // this code ensures that the score added will be a number rather than a string
        scoreDisplay.innerHTML = score
        buttonCard.classList.add('correct-answer')
        setTimeout(() => {
            while (buttonCard.firstChild) {
                buttonCard.removeChild(buttonCard.lastChild)
            }
            buttonCard.innerHTML = buttonCard.getAttribute('data-value')
        }, 100)
        // removes all text and buttons from card, preventing score from being added further with same card
    } else {
        buttonCard.classList.add('wrong-answer')
        setTimeout(() => {
            while (buttonCard.firstChild) {
                buttonCard.removeChild(buttonCard.lastChild)
            }
            buttonCard.innerHTML = 0
        }, 100)
        
    }
    buttonCard.removeEventListener('click',flipCard)
}


