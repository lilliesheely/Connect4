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
const msgEl = document.querySelector('h2');
const squareEls = [...document.querySelector("row")];
const replayBtn = document.querySelector("button");


/*----- event listeners -----*/
// event listener for click to register what column the user clicks in.
document.getElementById('row').document.querySelector("class").addEventListener('click', handleChoice);
replayBtn.addEventListener("button").addEventListener('click', init);

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

function handleChoice(evt){
    // guard 
    if ( 
        gameStatus || !squareEls.includes (evt.target)
    ) return; 
    // idx depends column array 
    const idx = squareEls.indexOf(evt.target);


    for ( i = 0; i < board.length; i++)
    // if all indexes are null, index equals [5];
    // if (evt.tar )


    board[idx] = turn;
// board index knows who is clicking based current turn. 
    gameStatus = getGameStatus();
    turn *= -1; 
    render(); 
};

function render() {
    renderMessage();
    replayBtn.style.visibility = gameStatus ? 'visible' : 'hidden';
    renderBoard();
}

function renderMessage() { 
    if (gameStatus === null) {
        msgEl.innerHTML = `${COLOR_LOOKUP[turn]}, its your turn!`
    } else if (gameStatus === 1) {
        msgEl.innerHTML = `Congrats ${COLOR_LOOKUP[turn]}, you win!`
    } else {
        msgEl.innerHTML = `It's a tie! Re-match?`
}
}
 // create a loop that goes through board array. jtiou

 

 renderBoard() 
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
      
        }}
 
function findInd () {
//     if board.(evt.targe)



//     ///// trying to find index of click: 
//     for (let i = arr.length - 1; i >= 0; i--) 
//   if (arr[i] !== null)
}
// for (let i = arr.length - 1; i >= 0; i--) 
// //   if (arr[i] !== null)


// const idx = arr.find(function(arr){

// })
// .find(dog => findMyDog(dog));