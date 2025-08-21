//Clase -> Molde para la creacion de objetos. Abstracto
//Objeto -> Instancia de una clase. Concreto
class TicTacToe{
    constructor(){
        this.board = Array(9).fill("");
        this.currentPlayer = "X";
        this.gameActive = true;
        this.scores = {
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

        // let titulo = document.getElementById("title");
        // titulo.textContent = "Triki";
        // titulo.classList.add("title");

        // titulo.addEventListener("click", () => {
        //     titulo.style.color = "red";
        // });


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
 
    makeMove(index, cell){
        this.board[index] = this.currentPlayer;
        cell.textContent = this.currentPlayer;
        cell.classList.add(this.currentPlayer.toLowerCase());

        if(this.checkWinner()){ // Hay ganador
            this.handleGameEnd("win");
        }else if(this.checkDraw()){ // Empate
            this.handleGameEnd("draw");
        }else{ // Siguiente turno
            this.switchPlayer();
        }
    }

    checkWinner(){
        for(let condition of this.winningConditions){
            const [a, b, c] = condition;
            if(this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]){
                this.highlightWinningCells(condition);
                return true; // Hay ganador
            }
        }
        return false; // No hay ganador
    }

    checkDraw(){
        return this.board.every(cell => cell !== "");
    }

    handleGameEnd(result){
        this.gameActive = false;

        if(result === "win"){ //Ganador
            this.scores[this.currentPlayer]++;
            this.gameStatus.textContent = `¡${this.currentPlayer} ha ganado!`;
            this.gameStatus.className = "game-status winner";
        }else{ //Empate
            this.gameStatus.textContent = `¡Empate!`;
            this.gameStatus.className = "game-status draw";
        }

        this.updateScoreDisplay();
    }

    highlightWinningCells(conditionWinning){
        conditionWinning.forEach(index => {
            this.cells[index].classList.add("winning");
        })
    }

    switchPlayer(){
        this.currentPlayer = (this.currentPlayer === "X") ? "O" : "X"; //Ternario
        this.updateDisplayGame();
    }

    updateScoreDisplay(){
        this.scoreX.textContent = this.scores.X;
        this.scoreO.textContent = this.scores.O;
    }

    resetGame(){
        this.board.fill("");
        this.gameActive = true;
        this.currentPlayer = "X";

        this.cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("x", "o", "winning");
        })

            this.gameStatus.textContent = ``;
            this.gameStatus.className = "game-status";

            this.updateDisplayGame();
    }

    newGame(){
        this.resetGame();
        this.scores = {
            X: 0,
            O: 0
        };

        this.updateScoreDisplay();
    }

}

document.addEventListener("DOMContentLoaded", function(){
    new TicTacToe();
})