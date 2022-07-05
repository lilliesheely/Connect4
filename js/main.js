    // /*----- constants -----*/
    const COLOR_LOOKUP = { 
        "1": 'white', // player1 
        "-1": 'black',// player2
        "0": 'yellow' // available space 
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
            [0, 0, 0, 0, 0, 0], // column 1
            [0, 0, 0, 0, 0, 0], // column 2
            [0, 0, 0, 0, 0, 0], // column 3
            [0, 0, 0, 0, 0, 0], // column 4
            [0, 0, 0, 0, 0, 0], // column 5
            [0, 0, 0, 0, 0, 0], // column 6
            [0, 0, 0, 0, 0, 0], // column 7
        ]    
        turn = 1; 
        gameStatus = null;
        render();  
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
        if (colIdx === -1) return; // guard so that event must happen within the slots array
        const columnArr = board[colIdx]; 
        if (!columnArr.includes(0)) return;
        // ingore a click if the column includes, CAN REMOVE THIS IF WE PUT A HANDLE MARKERS (IF NO ZEROS EXISTS, REMOVE SLOT SO THAT YOU CAN'T ADD A MOVE THERE. )
        const rowIdx = columnArr.indexOf(0);
        columnArr[rowIdx] = turn; 
        winner = checkWin(colIdx,rowIdx);
        console.log(winner)
        turn *= -1;
        gameStatus = getGameStatus();
        render();
    };

    function renderMessage(player){
        if (gameStatus === null) {
                messageEl.innerHTML = `NEXT PLAYERS TURN`;
        } else if (gameStatus === 't') {
                messageEl.innerHTML = `Tie Game! Play again!`;
        } else {
             messageEl.innerHTML = `<span style = "color: ${COLOR_LOOKUP[turn]}"> ${COLOR_LOOKUP[turn].toUpperCase()}</span> Wins! Rematch?` // 
        };
    };

    function checkWin(colIdx, rowIdx) {
        const player = board[colIdx][rowIdx];
        if (checkVertWin(colIdx, rowIdx, player))
                // checkHorzWin(colIdx, rowIdx, player) ||
        // checkDiagWin(colIdx, rowIdx, player));
        return true; 
    }


function checkVertWin(colIdx, rowIdx, player) {
    const colArr = board[colIdx];
    let count = 1;
    // We can use/modify rowIdx because we won't need
    // to access it's original value anymore
    rowIdx--;
    // Count until no longer the same 'player'
    while(colArr[rowIdx] === player && rowIdx >= 0) {
        count++;
        rowIdx--;
    }    
  return count === 4 ? player : null // here
}
    
    function checkHorzWin(colIdx, rowIdx, player) {};


    function checkDiagWin(colIdx, rowIdx, player) {};
    
function getGameStatus(){
    let flatBoard = board.flat(2); 
    if (!flatBoard.includes(0)) return 't'; // game board doesn't include '0'then return 'T"
    if (winner === true) return 'w'; 
   return null;
}

