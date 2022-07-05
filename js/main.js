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

    // /*----- cached element references -----*/
    const slotEls = [...document.querySelectorAll("#slots > div")];
    const replayBtn = document.querySelector("button");
    const messageEl = document.querySelector("h2");

    // /*----- event listeners -----*/
    document.getElementById('slots').addEventListener('click', handleChoice);
    //replayBtn.addEventListener('click', init);

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
        const columnSlotIdx = slotEls.indexOf(evt.target);
        if (columnSlotIdx === -1) return; // guard so that event must happen within the slots array
        const columnArr = board[columnSlotIdx]; 
        if (!columnArr.includes(0)) return;
        // ingore a click if the column includes, CAN REMOVE THIS IF WE PUT A HANDLE MARKERS (IF NO ZEROS EXISTS, REMOVE SLOT SO THAT YOU CAN'T ADD A MOVE THERE. )
        const rowIdx = columnArr.indexOf(0);
        columnArr[rowIdx] = turn; 
        turn *= -1;
        gameStatus = getGameStatus();
        render();
    };

    function renderMessage(){
        if (gameStatus === null) {
                messageEl.innerHTML = `NEXT PLAYERS TURN`;
        } else if (gameStatus === 't') {
                messageEl.innerHTML = `Tie Game! Play again!`;
        } else {
        messageEl.innerHTML = `COLOR WINS` // " create message for winner based on whose turn was last. include, 'rematch' - button will appear.
        };
    };

    
// get slot status 
// if colum doesnt include 0 ? invisible : visisble 

    // if there is a winner by: (figure out how to find winner) return 
    // if board does not include 0s => return 't' 
    //if boardincludes '0s' => return null; 
//   }  
  
function getGameStatus(){
    let flatBoard = board.flat(2); 
    if (!flatBoard.includes(0)) return 't'; // game board doesn't include '0'then return 'T"
    checkHorizontal(board);
    if (checkHorizontal === true) return 'w';
//     || checkVertical() 
// //  || checkDiagonal()
//         return 'w';
   return null;
}
    
function checkVertical(board, value) {
    for (let i = 0; i < 5; i++) {
    if ( board[0][i] === value
        && board[1][i] === value
        && board[2][i] === value
        && board[3][i] === value
        )
        return true;
    if ( board[1][i] === value
        && board[2][i] === value
        && board[3][i] === value
        && board[4][i] === value
        )
        return true;
    if (board[2][i] === value
        && board[3][i] === value
        && board[3][i] === value
        &&board[4][i] === value
        )
        return true;
    } 
    return false; 
}

function checkHorizontal(board, value) { 
    for (let i = 0; i < 5; i++) {    
    if (board[i][0] === value
        && board[i][1] === value
        && board[i][2] === value
        && board[i][3] === value
        )
        return true;
    if (board[i][1] === value
        && board[i][2] === value
        && board[i][3] === value
        && board[i][4] === value
        )
        return true;
    if (board[i][2] === value
        && board[i][3] === value
        && board[i][4] === value
        && board[i][5] === value
        )
        return true;
    if (board[i][3] === value
        && board[i][4] === value
        && board[i][5] === value
        && board[i][6] === value
        )
        return true;
    }
    return false; 
}

// function checkVertical(board){
// for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[].le; j++) {
//         let d = j + 1;
//         if (board[i][j+1] === value
//         board[i][j+1] === value

//         )
//         }
//     }            
// };


