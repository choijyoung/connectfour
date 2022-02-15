/*-------------------------------- Constants --------------------------------*/
const winningNumbers = [
	[ 0, 1, 2, 3 ],
	[ 41, 40, 39, 38 ],
	[ 7, 8, 9, 10 ],
	[ 34, 33, 32, 31 ],
	[ 14, 15, 16, 17 ],
	[ 27, 26, 25, 24 ],
	[ 21, 22, 23, 24 ],
	[ 20, 19, 18, 17 ],
	[ 28, 29, 30, 31 ],
	[ 13, 12, 11, 10 ],
	[ 35, 36, 37, 38 ],
	[ 6, 5, 4, 3 ],
	[ 0, 7, 14, 21 ],
	[ 41, 34, 27, 20 ],
	[ 1, 8, 15, 22 ],
	[ 40, 33, 26, 19 ],
	[ 2, 9, 16, 23 ],
	[ 39, 32, 25, 18 ],
	[ 3, 10, 17, 24 ],
	[ 38, 31, 24, 17 ],
	[ 4, 11, 18, 25 ],
	[ 37, 30, 23, 16 ],
	[ 5, 12, 19, 26 ],
	[ 36, 29, 22, 15 ],
	[ 6, 13, 20, 27 ],
	[ 35, 28, 21, 14 ],
	[ 0, 8, 16, 24 ],
	[ 41, 33, 25, 17 ],
	[ 7, 15, 23, 31 ],
	[ 34, 26, 18, 10 ],
	[ 14, 22, 30, 38 ],
	[ 27, 19, 11, 3 ],
	[ 35, 29, 23, 17 ],
	[ 6, 12, 18, 24 ],
	[ 28, 22, 16, 10 ],
	[ 13, 19, 25, 31 ],
	[ 21, 15, 9, 3 ],
	[ 20, 26, 32, 38 ],
	[ 36, 30, 24, 18 ],
	[ 5, 11, 17, 23 ],
	[ 37, 31, 25, 19 ],
	[ 4, 10, 16, 22 ],
	[ 2, 10, 18, 26 ],
	[ 39, 31, 23, 15 ],
	[ 1, 9, 17, 25 ],
	[ 40, 32, 24, 16 ],
	[ 9, 17, 25, 33 ],
	[ 8, 16, 24, 32 ],
	[ 11, 17, 23, 29 ],
	[ 12, 18, 24, 30 ],
	[ 1, 2, 3, 4 ],
	[ 5, 4, 3, 2 ],
	[ 8, 9, 10, 11 ],
	[ 12, 11, 10, 9 ],
	[ 15, 16, 17, 18 ],
	[ 19, 18, 17, 16 ],
	[ 22, 23, 24, 25 ],
	[ 26, 25, 24, 23 ],
	[ 29, 30, 31, 32 ],
	[ 33, 32, 31, 30 ],
	[ 36, 37, 38, 39 ],
	[ 40, 39, 38, 37 ],
	[ 7, 14, 21, 28 ],
	[ 8, 15, 22, 29 ],
	[ 9, 16, 23, 30 ],
	[ 10, 17, 24, 31 ],
	[ 11, 18, 25, 32 ],
	[ 12, 19, 26, 33 ],
	[ 13, 20, 27, 34 ],
	[ 42, 43, 44, 45 ],
	[ 43, 44, 45, 46 ],
	[ 44, 45, 46, 47 ],
	[ 45, 46, 47, 48 ],
	[ 42, 36, 30, 24 ],
	[ 43, 37, 31, 25 ],
  [ 44, 38, 32, 26 ],
	[ 45, 39, 33, 27 ],
	[ 48, 40, 32, 24 ],
	[ 47, 39, 31, 23 ],
	[ 46, 38, 30, 22 ],
	[ 45, 37, 29, 21 ],
	[ 21, 28, 35, 42 ], 
	[ 22, 29, 36, 43 ],
	[ 23, 30, 37, 44 ], 
	[ 24, 31, 38, 45 ], 
	[ 25, 32, 39, 46 ], 
	[ 26, 33, 40, 47 ], 
	[ 27, 34, 41, 48 ]
];

/*---------------------------- Variables (state) ----------------------------*/
let winner, circle, circleArray, playerTurn;

/*------------------------ Cached Element References ------------------------*/
const circles = document.querySelectorAll('.circles');
const gameMessages = document.querySelector('#msg');
const resetBtn = document.querySelector('#resetButton');
/*----------------------------- Event Listeners -----------------------------*/
circles.forEach((circle) => {
	circle.addEventListener('click', handleClick);
});
resetBtn.addEventListener('click', init);

/*-------------------------------- Functions --------------------------------*/
init();

function init() {
	winner = null;
	playerTurn = 1;
	circleArray = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null
	];
	render();
}

function render() {
	circleArray.forEach((circle, index) => {
		if (circle === 1) {
			circles[index].style.backgroundColor = "red"
		} else if (circle === -1) {
			circles[index].style.backgroundColor = "yellow"
		} else {
			circles[index].style.backgroundColor = "white";
		}
	});
	if (!winner) {
		gameMessages.innerText = `It is ${playerTurn === 1 ? '🔴Red🔴' : '🟡Yellow🟡'} players turn!`;
	} else {
		gameMessages.innerText = `${winner === 1 ? '🟡Yellow🟡' : '🔴Red🔴'} player has won!`;
		confetti.start(1000)
	}
	getWinner();
}

function handleClick(event) {
	let circleIdx = parseInt(event.target.id.replace('boardCircle', ' '));
  const correctIdx = checkPlacement(circleIdx);
	circleArray[correctIdx] = playerTurn;
  playerTurn = playerTurn * -1;

  if (circleArray[circleIdx] || winner) {
		return;
	}
	getWinner();
	render();
}



function checkPlacement(idx) {
  for (i = idx + 42; i <= 48 && i >= 0; i -= 7){
    if (circleArray[i] === null){
      return i;
    }
  }
}
  // checkPlacement adds 42 to the index of zero to access the bottom of the row. i<=48 and i>=0 ensures that it targets the entire array. i-=7 allows you to place another marker above the one that has been placed.


function getWinner() {
	for (i = 0; i < winningNumbers.length; i++) {
		if (Math.abs(circleArray[winningNumbers[i][0]] + 
                 circleArray[winningNumbers[i][1]] + 
                 circleArray[winningNumbers[i][2]] + 
                 circleArray[winningNumbers[i][3]]) === 4) {
        winner = playerTurn; 
      }
		}
	}

