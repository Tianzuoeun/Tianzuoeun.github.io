// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button') ;
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
gameScreen.classList.add(`d-none`);
console.log("Game have not started yet")

// updateScoreTallyUI
function updateScoreTallyUI(){
scoreParagraph.innerText = game.userName + ": " + game.score.user + "v CPU: " + game.score.cpu;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
scoreParagraph.innerText = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = userName
  gameScreen.classList.remove('d-none');
  welcomeScreen.classList.add('d-none');
  console.log("Starting Game")
  game = new RockPaperScissors(username);
  // Complete
});

// go-button EventListener
startGameButton.addEventListener(`click`, function () {
  const userselection = userSelection
  game.play(userselection);
  updateScoreTallyUI();
  updateGameHistoryUI();
  
});