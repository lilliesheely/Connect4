    // /*----- constants -----*/
    // const COLOR_LOOKUP = { 
    //     "1": 'white', // player1 
    //     "-1": 'black',// player2
    //     "0": 'grey' // available space 
    // }


    // /*----- app's state (variables) -----*/
    let board; 
    let turn; 
    let gameStatus; 

    // /*----- cached element references -----*/
    // const msgEl = document.querySelector('h2');

    const replayBtn = document.querySelector("button");


    // /*----- event listeners -----*/
    // // event listener for click to register what column the user clicks in.
    document.getElementById('board').addEventListener('click', handleChoice); 
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
            });
        });
        renderMessage();
        replayBtn.style.visibility = gameStatus ? 'visible' : 'hidden'; 
    };

    function renderMessage(){
        if (gameStatus === null) {
                // create message for whose turn it is, 
        } else if (gameStatus === 't') {
                // create message for tie game
        } else {
            // create message for winner based on whose turn was last. include, 'rematch' - button will appear.
        };
    };

    function handleChoice(evt) {
        // put a guard up to not all clicks in gaps and columns that are full, and spaces that have already been taken. 
        renderDrop();
        turn *= -1; 
        board[idx] = renderDrop();
        gameStatus = getGameStatus();
    };
    

   function renderDrop() {
    //     const idx = squareEls.indexOf(evt.target);

   };
  function getGameStatus() {
        checkBoard();
    // if there is a winner by: (figure out how to find winner) return 
    // if board does not include 0s => return 't' 
    //if boardincludes '0s' => return null; 
  }  
  
  
function checkBoard(board, value) {
    
    function checkVertical() {
        for (let i = 0; i < 5; i++)
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
    function checkHorizontal() { 
    for (let i = 0; i < 5; i++)   
    if ( board[i][0] === value
        && board[i][1] === value
        && board[i][2] === value
        && board[i][3] === value
        )
        return true;
}

};
 

   



