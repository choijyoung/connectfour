/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let turn, winner


/*------------------------ Cached Element References ------------------------*/
const gameBoard = document.querySelector(".board")
const circles = document.querySelectorAll(".circles")
const gameMessages = document.querySelector("#msg")
const startBtn = document.querySelector('#startButton')
const resetBtn = document.querySelector('#resetButton')
const replayBtn = document.querySelector('#replayButton')
/*----------------------------- Event Listeners -----------------------------*/
circles.forEach((circle) => {
  circle.addEventListener("click", (event) => {
    console.log(event.target)
  })
})
startBtn.addEventListener("click", () => {
  console.log("hello")
})
resetBtn.addEventListener("click", () => {
  console.log("world")
})
replayBtn.addEventListener("click", () => {
  console.log("!")
})
/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  winner = null;
  turn = 1;
  gameBoard = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
}