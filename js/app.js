/*-------------------------------- Constants --------------------------------*/
const winningNumbers = [
  [0, 1, 2, 3], [3, 4, 5, 6], [7, 8, 9, 10], [10, 11, 12, 13], [14, 15, 16, 17], [17, 18, 19, 20], [21, 22, 23, 24], [24, 25, 26, 27], [28, 29, 30, 31], [31, 32, 33, 34], [35, 36, 37, 38], [38, 39, 40, 41], [0, 7, 14, 21], [1, 8, 15, 22], [2, 9, 16, 23], [3, 10, 17, 24], [4, 11, 18, 25], [5, 12, 19, 26], [6, 13, 20, 27], [14, 21, 28, 35], [15, 22, 29, 36], [16, 23, 30, 37], [17, 24, 31, 38], [18, 25, 32, 39], [19, 26, 33, 40], [20, 27, 34, 41], [14, 22, 30, 38], [15, 23, 31, 39], [16, 24, 32, 40], [17, 25, 33, 41], [17, 23, 29, 35], [18, 24, 30, 36], [19, 25, 31, 37], [20, 26, 32, 38], [10, 16, 22, 28], [11, 17, 23, 29], [12, 18, 24, 30], [13, 19, 25, 31], [7, 15, 23, 31], [8, 16, 24, 32], [9, 17, 25, 33], [10, 18, 26, 34], [0, 8, 16, 24], [1, 9, 17, 25], [2, 10, 18, 26], [3, 11, 19, 27], [3, 9, 15, 21], [4, 10, 16, 22], [5, 11, 17, 23], [6, 12, 18, 24]
]


/*---------------------------- Variables (state) ----------------------------*/
let turn, winner, circle, playerTurn, circleArray, winningNumbers


/*------------------------ Cached Element References ------------------------*/
const gameBoard = document.querySelector(".board")
const circles = document.querySelectorAll(".circles")
const gameMessages = document.querySelector("#msg")
const startBtn = document.querySelector('#startButton')
const resetBtn = document.querySelector('#resetButton')
const replayBtn = document.querySelector('#replayButton')
/*----------------------------- Event Listeners -----------------------------*/
circles.forEach((circle) => {
  circle.addEventListener("click", handleClick)
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
  circleArray = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
}

function render() {

}

function handleClick(event) {
  let i = parseInt(event.target.id.replace('boardCircle', ' '))
  console.log(i)
  return 
} 