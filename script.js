// 2. Create the player object. Give it two keys, name and chips, and set their values
const player = {
  name: 'Per',
  chips: 200,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
const playerEl = document.getElementById('player-el');

// 4. Render the player's name and chips in playerEl
playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard() {
  const randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  }
  if (randomNumber === 1) {
    return 11;
  }
  return randomNumber;
}

function renderGame() {
  cardsEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i += 1) {
    cardsEl.textContent += `${cards[i]} `;
  }

  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function startGame() {
  isAlive = true;
  const firstCard = getRandomCard();
  const secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    const card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

const startNewGame = document.getElementById('startgame');
startNewGame.onclick = startGame;

const eachNewCard = document.getElementById('newcard');
eachNewCard.onclick = newCard;
