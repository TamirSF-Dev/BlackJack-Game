let cards =[]
let card = 0
let playername =""
let money = 0
let n = 0

let hasBlackJack = false
let isAlive = false
let message =""

let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let messageEl = document.getElementById("message-el")
let playerel = document.getElementById("player-el")

let sumText = sumEl.textContent
let sum = 0
let cardText = cardEl.textContent
let cardNo = ""

function getrandomNumber(){
    let randomnumber = Math.floor(Math.random()*13) + 1
    if(randomnumber === 1){return 11}
    else if(randomnumber > 10){return 10}
    else{
        return randomnumber
    }
}

function startgame(){
    if(n === 0){
        n++
        playername = prompt("Enter the Player Name")
        money = prompt("Enter the amount of cash (above 100)")
    }
    playerel.textContent = playername + ": $" + money
    isAlive = true
    let firstCard = getrandomNumber()
    let secondCard = getrandomNumber()
    sum = firstCard + secondCard
    cards.push(firstCard)
    cards.push(secondCard)
    rendergame()
}

function displaycards(){
    cardNo = ""
    for(i in cards){
        cardNo += cards[i] + "  "
    }
    cardEl.textContent = cardText + cardNo
}

function rendergame(){
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card? "
        displaycards()
    }
    else if (sum === 21){
        message = "You have got Blackjack "
        hasBlackJack = true
        displaycards()
    }
    else {
        message = "You are out of the game "
        isAlive = false
        displaycards()
    }
    messageEl.textContent = message
}

function newcard(){
    if(sum <= 20){
        console.log("Drawing a new card from the deck!")
        card = getrandomNumber()
        sum += card
        cards.push(card)
        rendergame()
        //cardEl.textContent += " , " + card
    }
}

