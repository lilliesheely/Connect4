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



/*----- functions -----*/
init();

function init() {
    board = null; 
    turn = 1; 
    gameStatus = null;
}; 