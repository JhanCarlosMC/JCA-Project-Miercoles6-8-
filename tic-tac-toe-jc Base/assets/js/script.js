//Clase -> Molde para la creacion de objetos. Abstracto
//Objeto -> Instancia de una clase. Concreto
class TicTacToe{
    constructor(){
        this.board = Array(9).fill("");
        this.currentPlayer = "X";
        this.gameActive = true;
        this.score = {
            X: 0,
            O: 0
        };

        this.winningConditions = [
            [0, 1, 2],[3, 4, 5],[6, 7, 8], //Filas
            [0, 3, 6],[1, 4, 7],[2, 5, 8], //Columnas
            [0, 4, 8],[2, 4, 6] //Diagonales
        ];

        this.initGame();
    }

    initGame(){
        this.cells = document.querySelectorAll(".cell");
        this.currentPlayerDisplay = document.getElementById("current-player");
        this.resetBtn = document.getElementById("reset-btn");
        this.newGameBtn = document.getElementById("new-game-btn");
        this.gameStatus = document.getElementById("game-status");
        this.scoreX = document.getElementById("score-x");
        this.scoreO = document.getElementById("score-o");

        this.createAddEventListeners();
        this.updateDisplayGame();
    }

    createAddEventListeners(){
        this.cells.forEach(cell => {
            cell.addEventListener("click", this.handleCellClick.bind(this));
        });

        this.resetBtn.addEventListener("click", this.resetGame.bind(this));
        this.newGameBtn.addEventListener("click", this.newGame.bind(this));
    }

    handleCellClick(event){
        const cell = event.target;
        const cellIndex = cell.dataset.index;

        if(this.board[cellIndex] !== "" || !this.gameActive){
            return;
        }

        this.makeMove(cellIndex,cell);
    }

    updateDisplayGame(){
        this.currentPlayerDisplay.textContent = this.currentPlayer;
        this.currentPlayerDisplay.style.color = this.currentPlayer === "X" ? 'red' : 'blue';
    }
}

document.addEventListener("DOMContentLoaded", function(){
    new TicTacToe();
})