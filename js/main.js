    // /*----- constants -----*/
    // const COLOR_LOOKUP = { 
    //     "1": 'white',
    //     "-1": 'black',
    //     null: 'grey'
    // }


    // /*----- app's state (variables) -----*/
    // let board; 
    // let turn; 
    // let gameStatus; 

    // /*----- cached element references -----*/
    // const msgEl = document.querySelector('h2');
    // const squareEls = [...document.querySelectorAll("#board > #column")];
    // const replayBtn = document.querySelector("button");


    // /*----- event listeners -----*/
    // // event listener for click to register what column the user clicks in.
    // document.getElementById('board').addEventListener('click', ); 
    // replayBtn.addEventListener('click', init);

    /*----- functions -----*/
    init();

    function init() {
        board = [
            [null, null, null, null, null, null], // column 1
            [null, null, null, null, null, null], // column 2
            [null, null, null, null, null, null], // column 3
            [null, null, null, null, null, null], // column 4
            [null, null, null, null, null, null], // column 5
            [null, null, null, null, null, null], // column 6
            [null, null, null, null, null, null], // column 7
        ];
        turn = 1; 
        gameStatus = null;
        render();  
    }; 

    function render() {
        board.forEach(function(columnArr, columnIdx) {
            columnArr.forEach(function (spaceValue, rowIdx) {
                const spaceEl = document.getElementById(`${columnIdx}${rowIdx}`); 
                ;           
            });
        });
        handleDrop();
        renderMessage();
    };

    function handleDrop() {};

    function renderMessage(){};
    //     
        
    // 
    // function renderMessage() { 
    //     if (gameStatus === null) {
    //         msgEl.innerHTML = `<span style = "color: ${COLOR_LOOKUP[turn]}"> ${COLOR_LOOKUP[turn].toUpperCase()}</span>'s Turn`
    //     } else if (gameStatus === 1) {
    //         msgEl.innerHTML = `<span style = "color: ${COLOR_LOOKUP[turn]}"> ${COLOR_LOOKUP[turn].toUpperCase()}</span> Wins!` ;
    //     } else {
    //         msgEl.innerHTML = `It's a tie! Re-match?`
    // }
    // }

    // function handleChoice(evt){
    //     // guard 
    //     if ( 
    //         gameStatus || 
    //         !squareEls.includes(evt.target)
    //     ) return; 
    //     // idx depends column array 
    //     const idx = squareEls.indexOf(evt.target);
    //     // const idx = squareEls.indexOf();
        
    //     // var index = Array.prototype.slice.call(el.parentElement.children).indexOf(eve.target)
    //     // const index = [...el.#column.#row].indexOf(eve.target)
    //     for {
    //             board[i][j].addEventListener('click', handleChoice);
    //         }
    //     }
        
    //     document.getElementById('board').addEventListener('click', handleChoice); 
        
        
        
        
    //     board[idx] = turn;
    //     board index knows who is clicking based current turn. 
        
        
        
        
        
        
    //     gameStatus = getGameStatus();
    //     turn *= -1; 
    //     render(); 
    // }


    // function getGameStatus() {; 
    // }
 


   



