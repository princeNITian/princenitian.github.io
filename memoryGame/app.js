document.addEventListener('DOMContentLoaded',()=> {

// card options
 //card options
 const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

cardArray.sort(()=> 0.5-Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

// create game board
function createBoard() {
    for(let i=0;i<cardArray.length;i++){
        var card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        grid.appendChild(card);

    }
}

// check for match
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const cardOneId = cardsChosenId[0];
    const cardTwoId = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]){
        alert("You found a match!");
        cards[cardOneId].setAttribute('src','images/white.png');
        cards[cardTwoId].setAttribute('src','images/white.png');
        cardsWon.push(cardsChosen);
    }else{
        cards[cardOneId].setAttribute('src','images/blank.png');
        cards[cardTwoId].setAttribute('src','images/blank.png');
        alert('Sorry, try again!');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = "Congratulations! You found them all.";
    }
}

// flipcard
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

createBoard();



});