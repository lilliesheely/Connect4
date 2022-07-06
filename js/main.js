    // /*----- constants -----*/
    const COLOR_LOOKUP = { 
        "1": 'white', 
        "-1": 'black',
        "0": 'yellow'
    }

    // /*----- app's state (variables) -----*/
    let board; 
    let turn; 
    let gameStatus; 
    let winner = null;
 
    // /*----- cached element references -----*/
    const slotEls = [...document.querySelectorAll("#slots > div")];
    const replayBtn = document.querySelector("button");
    const messageEl = document.querySelector("h2");

    // /*----- event listeners -----*/
    document.getElementById('slots').addEventListener('click', handleChoice);
    replayBtn.addEventListener('click', init);

    /*----- functions -----*/
    init();

    function init() {
        board = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]    
        turn = 1; 
        gameStatus = null;
        render();  
        winner = null; 
    }; 

    function render() {
        board.forEach(function(columnArr, columnIdx) {
            columnArr.forEach(function(spaceValue, rowIdx) {
                const spaceEl = document.getElementById(`c${columnIdx}r${rowIdx}`);   
                spaceEl.style.backgroundColor = COLOR_LOOKUP[spaceValue];           
            });
        });
        renderMessage();
        replayBtn.style.visibility = gameStatus ? 'visible' : 'hidden'; 
    };

    function handleChoice(evt) {
        const colIdx = slotEls.indexOf(evt.target);
        if (colIdx === -1 || winner === true) return;
        const columnArr = board[colIdx]; 
        const rowIdx = columnArr.indexOf(0);
        columnArr[rowIdx] = turn; 
        winner = checkWin(colIdx,rowIdx);
        console.log(winner)
        turn *= -1;
        gameStatus = getGameStatus();
        renderSlots();
        render();
    };

function renderMessage(player){
        if (gameStatus === null) {
                messageEl.innerHTML = `<span style = "color: ${COLOR_LOOKUP[turn]}"> ${COLOR_LOOKUP[turn].toUpperCase()}</span>'s Turn`;
        } else if (gameStatus === 't') {
                messageEl.innerHTML = `Tie Game! Play again!`;
        } else {
             messageEl.innerHTML = `<span style = "color: ${COLOR_LOOKUP[turn*-1]}"> ${COLOR_LOOKUP[turn*-1].toUpperCase()}</span> WINS! Rematch?` // 
        };
};

function checkWin(colIdx, rowIdx) {
        const player = board[colIdx][rowIdx];
        return checkVertWin(colIdx, rowIdx, player) || 
        checkHorzWin(colIdx, rowIdx, player) ||
        checkDiagWinLeft(colIdx, rowIdx) ||
        checkDiagWinRight(colIdx, rowIdx);
};


function checkVertWin(colIdx, rowIdx, player) {
    const colArr = board[colIdx];
    let count = 1;

    rowIdx--;
    while (colArr[rowIdx] === player && rowIdx >= 0) {
        count++;
        rowIdx--;
    }    
  return count === 4 ? winner = true : null // here
}
    
function checkHorzWin(colIdx, rowIdx, player) {
        for(i = 0; i < 5; ++i){
          if (board[0][i] === player 
              && board[1][i] === player
              && board[2][i] === player
              && board[3][i] === player
          ) return true;
          if (board[1][i] === player 
              && board[2][i] === player
              && board[3][i] === player
              && board[4][i] === player
          ) return true;
          if (board[2][i] === player 
              && board[3][i] === player
              && board[4][i] === player
              && board[5][i] === player
          ) return true;
          if (board[3][i] === player 
              && board[4][i] === player
              && board[5][i] === player
              && board[6][i] === player
          ) return true;
        } 
    
};


function checkDiagWinLeft(colIdx, rowIdx) {
        const player = board[colIdx][rowIdx];
        let count = 1;
        let idx1 = colIdx - 1; 
        let idx2 = rowIdx + 1;  
     
        while (idx1 >= 0 && idx2 < board[0].length && board[idx1][idx2] === player) {
            count++; 
            idx1--;
            idx2++;
        }
        idx1 = colIdx + 1;
        idx2 = rowIdx - 1;
        while (idx1 < board.length && idx2 >= 0 && board[idx1][idx2] === player) {
            count++;
            idx1++;
            idx2--; 
        }
        return count >= 4 ? winner = true : null  
    }
    function checkDiagWinRight(colIdx, rowIdx) {
        const player = board[colIdx][rowIdx];
        let count = 1;
        let idx1 = colIdx + 1; 
        let idx2 = rowIdx + 1;  
     
        while (idx1 < board.length && idx2 < board[0].length && board[idx1][idx2] === player) {
            count++; 
            idx1++;
            idx2++;
        }
        idx1 = colIdx - 1;
        idx2 = rowIdx - 1;
        while (idx1 >= 0 && idx2 >= 0 && board[idx1][idx2] === player) {
            count++;
            idx1--;
            idx2--; 
        }
        return count >= 4 ? winner = true : null 
    }
       
function getGameStatus() {
    let flatBoard = board.flat(2); 
    if (!flatBoard.includes(0)) return 't'; 
    if (winner === true) return 'w'; 
   return null;
}

function renderSlots () {
    slotEls.forEach(function(slotEl, colIdx) {
        slotEl.style.visibility = board[colIdx].includes(0) ? 'visible' : 'hidden'; 
    });
}