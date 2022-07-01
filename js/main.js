/*----- constants -----*/
const COLOR_LOOKUP = { 
    "1": 'white',
    "-1": 'black',
    null: 'grey'
}


/*----- app's state (variables) -----*/
let board; 
let turn; 
let gameStatus; 


/*----- cached element references -----*/



/*----- event listeners -----*/
// event listener for click to register what column the user clicks in. 


/*----- functions -----*/
init();

function init() {
    board = [
        [null, null, null, null, null, null]
        [null, null, null, null, null, null]
        [null, null, null, null, null, null]
        [null, null, null, null, null, null]
        [null, null, null, null, null, null]
        [null, null, null, null, null, null]
        [null, null, null, null, null, null]
    ];
    turn = 1; 
    gameStatus = null;
    render(); 
}; 

function render() {
    renderMessage();
    renderBoard();

}

function renderMessage() { 
    if (gameStatus === null) {
// create message with whose turn
    } else if (gameStatus === 1) {
// create winner message with the winner's name 
    } else {
// create message of tie game. 
}

function renderBoard() { 
    // create a loop that goes through board array. 
}