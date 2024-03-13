const body = document.querySelector("body");
const startButton = document.querySelector("#start-game");

const splashScreen = document.querySelector("#splash-screen");
const gameScreen = document.querySelector("#game-screen");
const gameoverScreen = document.querySelector("#gameover-screen");
const playerInput = document.querySelector("#player-input");
let playerName = "";


const h1Element = document.getElementById("heading");

console.log("our h1 element", h1Element);

h1Element.innerText = "Our splash Screen";


const h2Element = document.querySelector(".h2");
console.log("here is my h2 element", h2Element);

h2Element.style.color = "rgb(188, 43, 123)";

h2Element.style.backgroundColor = "blue";


const pTagElement = document.querySelector("p");
pTagElement.style.color = "red";


gameScreen.style.display = "none";
gameoverScreen.style.display = "none";


const ourNewH2 = document.createElement("h2");
ourNewH2.innerText = "Wow look we just created this!";

ourNewH2.setAttribute("class", "some-cool-class");
ourNewH2.setAttribute("card-name", "Shazas example");

ourNewH2.classList.add("another-cool-class");

ourNewH2.classList.remove("some-cool-class");

splashScreen.appendChild(ourNewH2);

startButton.addEventListener("click", () => {
  startGame();
  getPlayerName();
});

function startGame() {
  console.log("clicked");

  splashScreen.style.display = "none";

  gameScreen.style.display = "block";
}
function getPlayerName() {
  console.log(playerInput.value);
  playerName = playerInput.value;

  const playerElement = document.createElement("h2");
  playerElement.innerText = `Let's go ${playerName}!!!`;
  gameScreen.insertBefore(playerElement, h2Element);
}
